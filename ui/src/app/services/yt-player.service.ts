import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';





@Injectable({
        providedIn: 'root'
})
export class YtPlayerService {

        /**
        * Observable that only emits once the host player is fully initialized and reliably emits events.
        * We need this observable because the API implementation of YouTubePlayerComponent is unreliable
        * at this time (certain events are only emitted after an unspecified delay to initialize the player).
        **/
        //public serviceReady$: Observable<void>;

        // Observables
        // Observables prefixed with 'ytp' mirror those found in the YouTubePlayerComponent's API
        private _ytpError$ = new Subject()
        private _ytpReady$ = new Subject()
        private _yptPlaybackRateChange$ = new Subject()
        private _yptPlaybackQualityChange$ = new Subject()
        private _yptApiChange$ = new Subject()
        private _yptStateChange$ = new Subject()

        private _currentTime$ = new BehaviorSubject<number>(0)

        private _videoId$ = new BehaviorSubject<string>('')

        constructor() { }

        // Methods taken from YouTubePlayerComponent


        public currentTime$: Observable<number> = this._currentTime$.asObservable()

        // Subjects that emit control signals for the controlling directive
        private _emitPlayToController: Subject<void> = new Subject()
        private _emitPauseToController: Subject<void> = new Subject()
        private _emitMuteToController: Subject<void> = new Subject()
        private _emitUnmuteToController: Subject<void> = new Subject()
        private _emitSeekToController: Subject<number> = new Subject<number>()

        // Observables for the controller to subscribe to
        public ctrPlay = this._emitPlayToController.asObservable()
        public ctrPause = this._emitPauseToController.asObservable()
        public ctrMute = this._emitMuteToController.asObservable()
        public ctrUnmute = this._emitUnmuteToController.asObservable()
        public ctrSeek = this._emitSeekToController.asObservable()



        playVideo(): void {
                console.log("Video Service: playVideo()")
                this._emitPlayToController.next()
        }
        pauseVideo(): void {
                console.log("Video Service: pauseVideo()")
                this._emitPauseToController.next()
        }

        seekTo(time: number): void {
                console.log("Video Service: seekTo()")
                this._emitSeekToController.next(time)
        }

        getCurrentTime(): number { return 0 }



}
