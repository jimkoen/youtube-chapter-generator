import {Component, OnInit} from '@angular/core';
import { YouTubeTranscriptTimestamp } from '../../services/yt-transcript.service';
import {TranscriptItemComponent} from "../transcript-item/transcript-item.component";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, of} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
        selector: 'app-transcript-nav',
        standalone: true,
  imports: [TranscriptItemComponent, AsyncPipe, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf],
        templateUrl: './transcript-nav.component.html',
        styleUrl: './transcript-nav.component.scss'
})
export class TranscriptNavComponent implements OnInit{
  protected transcript$: Observable<YouTubeTranscriptTimestamp[] | null> = of(null);

        constructor(private route : ActivatedRoute) {
        }

        ngOnInit() {
            this.transcript$ = this.route.data.pipe(
              map(({transcript}) => transcript)
            )
        }
}
