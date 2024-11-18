import {AfterViewInit, Component, inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
import { YtPlayerService } from '../../services/yt-player.service';
import { TestPlayerControlsComponent } from '../test-player-controls/test-player-controls.component';
import { YouTubePlayerControllerDirective } from '../../directives/you-tube-player-controller.directive';
import { TranscriptNavComponent } from '../transcript-nav/transcript-nav.component';
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {YouTubeTranscript, YouTubeTranscriptItem} from "../../utilities/transcript/youtube-transcript";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {TranscriptComplexityComponent} from "../transcript-complexity/transcript-complexity.component";
import {MatDivider} from "@angular/material/divider";
import {LlmSettingsComponent} from "../llm-settings/llm-settings.component";
@Component({
        selector: 'app-video-editor',
        standalone: true,
  imports: [YouTubePlayer, TestPlayerControlsComponent, YouTubePlayerControllerDirective, TranscriptNavComponent, AsyncPipe, MatGridList, MatGridTile, TranscriptComplexityComponent, MatDivider, LlmSettingsComponent],
        providers: [YtPlayerService],
        templateUrl: './video-editor.component.html',
        styleUrl: './video-editor.component.scss'
})
export class VideoEditorComponent implements OnInit {
        transcript$ : Observable<YouTubeTranscript | null> = of(null)
        editedTranscript$ : BehaviorSubject<YouTubeTranscript | null> = new BehaviorSubject(null) as BehaviorSubject<YouTubeTranscript | null>
        videoId$ : Observable<string | null> = of(null)
        @ViewChild(YouTubePlayer) player?: YouTubePlayer
        constructor(private router: Router,
                private route: ActivatedRoute,) {
        }

        ngOnInit(): void {
          this.transcript$ = this.route.data.pipe(
            map(({transcript}) => transcript)
          )

          this.videoId$ = this.route.data.pipe(
            map(({video}) => video)
          )
        }

        editTranscript(t : YouTubeTranscript){
          this.editedTranscript$.next(t)
        }
}
