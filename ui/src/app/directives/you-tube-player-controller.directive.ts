import { AfterViewInit, Directive, EventEmitter, OnDestroy, Output } from '@angular/core';
import { YtPlayerService } from '../services/yt-player.service';
import { YouTubePlayer } from '@angular/youtube-player';
import { BehaviorSubject, filter, interval, map } from 'rxjs';
import { takeUntilDestroyed } from '../utilities/rxjs/take_until_destroyed';
import { state } from '@angular/animations';


enum PlayerState {
  UNSTARTED = -1,
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  CUED = 5,
}

export enum ControllerState {
  UNINITIALIZED = -1, // state before checking whether host is initialized
  AWAITING_PLAY = 0, // state for when host is uninitialized
  READY = 1, // state for when video has loaded (normal operation)
  ERROR = 2 // error state
}


@Directive({
  selector: '[appYouTubePlayerController]',
  standalone: true
})
export class YouTubePlayerControllerDirective implements AfterViewInit {

  @Output() videoId?: string = this.host.videoId
  @Output() videoURL?: string;
  @Output() currentTime?: number;
  @Output() currentTimeChange?: EventEmitter<number> = new EventEmitter()
  /**
   * Signals if the player is fully initialized and whether the controller is ready
   * to accept controls and have data read off it's properties.
   */
  @Output() controllerState: EventEmitter<ControllerState> = new EventEmitter<ControllerState>()

  private _controllerState$: BehaviorSubject<ControllerState> = new BehaviorSubject<ControllerState>(ControllerState.UNINITIALIZED)



  private _currentPolledTime$: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined)



  constructor(private host: YouTubePlayer, private player?: YtPlayerService) {

    this._setupControllerState()

  }

  /**
   * Sets up any state observers and handlers associated with the host component.
   */
  private _setupControllerState() {
    this.host.error.pipe(takeUntilDestroyed()).subscribe(() => this._controllerState$.next(ControllerState.ERROR))
    this._controllerState$.subscribe(this.controllerState)

    if (this.host.getPlayerState() === undefined) {
      this._handleUnitializedHostPlayer();
    }

    this.host.stateChange.pipe(
      takeUntilDestroyed(),
      map((e: YT.OnStateChangeEvent) => e.data)
    ).subscribe((state: PlayerState) => this._handleHostPlayerStateChange(state))
  }

  /**
  * Handles an unitilized host player. A YouTubePlayerComponent is uninitialized, when
  * it's state is `undefined` instead of one of the state enums (i.e. `host.getPlayerState()` returns `undefined`)
  */
  private _handleUnitializedHostPlayer() {
    this._controllerState$.next(ControllerState.AWAITING_PLAY)
  }

  /**
   * Initializes important properties by copying them over from the host player once they're available.
   */
  private _initializeDirectivePropsFromHostPlayer() {
    this.videoId = this.host.videoId
    this.videoURL = this.host.getVideoUrl()
    this._startCurrentTimePolling()

  }

  private _startCurrentTimePolling() {
    interval(250).pipe(
      map(
        () => this.host.getCurrentTime()
      )).subscribe(this._currentPolledTime$)

    this._currentPolledTime$.pipe(
      filter(
        t => {
          if (this.currentTime != t) {
            return true
          } else {
            return false
          }
        }
      )
    ).subscribe(v => { this.currentTime = v; this.currentTimeChange?.emit(v) })

  }

  /**
  * Handles state transitions on player state changes
  */
  private _handleHostPlayerStateChange(state: PlayerState) {
    // if host player was previously uninitialized, initialize directive props now that it is initialized
    if (this._controllerState$.getValue() === ControllerState.AWAITING_PLAY && state !== undefined) {
      this._initializeDirectivePropsFromHostPlayer()
    }
  }

  ngAfterViewInit(): void {

    this.player?.ctrPlay.subscribe(() => {
      this.host.playVideo()
    })

    this.player?.ctrPause.subscribe(() => {
      this.host.pauseVideo()
    })

    this.player?.ctrSeek.subscribe(v => {
      this.host.seekTo(v, true)
    })

    this.currentTimeChange?.subscribe(t => this.player?.setCurrentTime(t))


  }

}
