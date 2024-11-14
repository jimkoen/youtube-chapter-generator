import {Component, Input, OnInit} from '@angular/core';
import {TranscriptItemComponent} from "../transcript-item/transcript-item.component";
import {ActivatedRoute} from "@angular/router";
import {filter, map, Observable, of} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {YtPlayerService} from "../../services/yt-player.service";
import {YouTubeTranscript, YouTubeTranscriptItem} from "../../utilities/transcript/youtube-transcript";
import IntervalTree, {NumericTuple} from "@flatten-js/interval-tree";

@Component({
        selector: 'app-transcript-nav',
        standalone: true,
  imports: [TranscriptItemComponent, AsyncPipe, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf],
        templateUrl: './transcript-nav.component.html',
        styleUrl: './transcript-nav.component.scss'
})
export class TranscriptNavComponent implements OnInit{
  @Input() transcript? : YouTubeTranscript
  protected transcriptIndex: IntervalTree<YouTubeTranscriptItem> = new IntervalTree()

        constructor(private route : ActivatedRoute, private playerService : YtPlayerService) {
        }

        ngOnInit() {
           this.buildIndex(this.transcript!)

            this.playerService.currentTime$.subscribe(v => console.log(this.seek(v)))
        }

        buildIndex(transcript : YouTubeTranscript){
          for (let transcriptItem of transcript){
            const itemDuration : NumericTuple = [transcriptItem.start, transcriptItem.start+transcriptItem.duration]
            this.transcriptIndex.insert(itemDuration, transcriptItem)
          }
        }

        seek(t : number){
          return this.transcriptIndex.search([t, t])
        }


}
