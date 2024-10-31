import {AfterViewInit, Component, inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
import { YtPlayerService } from '../../services/yt-player.service';
import { TestPlayerControlsComponent } from '../test-player-controls/test-player-controls.component';
import { YouTubePlayerControllerDirective } from '../../directives/you-tube-player-controller.directive';
import { TranscriptNavComponent } from '../transcript-nav/transcript-nav.component';
import {map, Observable, of} from "rxjs";
import {YouTubeTranscriptTimestamp} from "../../services/yt-transcript.service";
import {AsyncPipe} from "@angular/common";
@Component({
        selector: 'app-video-editor',
        standalone: true,
  imports: [YouTubePlayer, TestPlayerControlsComponent, YouTubePlayerControllerDirective, TranscriptNavComponent, AsyncPipe],
        providers: [YtPlayerService],
        templateUrl: './video-editor.component.html',
        styleUrl: './video-editor.component.scss'
})
export class VideoEditorComponent implements OnInit, AfterViewInit {
        transcript$ : Observable<YouTubeTranscriptTimestamp[] | null> = of(null)
        videoId$ : Observable<string | null> = of(null)
        @ViewChild(YouTubePlayer) player?: YouTubePlayer
        constructor(private router: Router,
                private route: ActivatedRoute,
                private playerService: YtPlayerService) {
        }

        ngOnInit(): void {
          this.transcript$ = this.route.data.pipe(
            map(({transcript}) => transcript)
          )

          this.videoId$ = this.route.data.pipe(
            map(({video}) => video)
          )
        }





        ngAfterViewInit(): void {
        }


}
