import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
import { YtPlayerService } from '../../services/yt-player.service';
import { TestPlayerControlsComponent } from '../test-player-controls/test-player-controls.component';
import { YouTubePlayerControllerDirective } from '../../directives/you-tube-player-controller.directive';
import { TranscriptNavComponent } from '../transcript-nav/transcript-nav.component';
@Component({
        selector: 'app-video-editor',
        standalone: true,
        imports: [YouTubePlayer, TestPlayerControlsComponent, YouTubePlayerControllerDirective, TranscriptNavComponent],
        providers: [YtPlayerService],
        templateUrl: './video-editor.component.html',
        styleUrl: './video-editor.component.scss'
})
export class VideoEditorComponent implements OnInit, AfterViewInit {
        @ViewChild(YouTubePlayer) player?: YouTubePlayer
        public videoId?: string;
        constructor(private router: Router,
                private route: ActivatedRoute,
                private playerService: YtPlayerService) {
                this.videoId = this.route.snapshot.paramMap.get('id') as string;
        }

        ngOnInit(): void {
        }

        ngAfterViewInit(): void {

        }


}
