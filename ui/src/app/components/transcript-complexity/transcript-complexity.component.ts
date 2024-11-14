import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {reduceTranscript, YouTubeTranscript} from "../../utilities/transcript/youtube-transcript";
import {ActivatedRoute} from "@angular/router";
import {YtPlayerService} from "../../services/yt-player.service";
import {YtTranscriptService} from "../../services/yt-transcript.service";
import { getEncoding, encodingForModel } from "js-tiktoken";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-transcript-complexity',
  standalone: true,
  imports: [
    MatCard,
    MatSlider,
    MatSliderThumb,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule
  ],
  templateUrl: './transcript-complexity.component.html',
  styleUrl: './transcript-complexity.component.scss'
})
export class TranscriptComplexityComponent implements OnInit{
  protected transcript$: BehaviorSubject<YouTubeTranscript | null> = new BehaviorSubject(null) as BehaviorSubject<YouTubeTranscript | null>
  public transcript? : YouTubeTranscript
  public transcriptSections? : number
  public transcriptTokens? : number

  constructor(private route : ActivatedRoute, ytTranscript : YtTranscriptService) {
    of(null).subscribe(this.transcript$)
  }
  ngOnInit() {
    this.route.data.pipe(
      map(({transcript}) => transcript)
    ).subscribe(this.transcript$)

    this.transcript$.subscribe(t => this.transcriptSections = t?.length)
    this.transcript$.subscribe(t => this.calculateTokens(t!))
  }

  calculateTokens(t : YouTubeTranscript){
    const enc = getEncoding("cl100k_base")
    const encodedTranscript = enc.encode(JSON.stringify(t))
    this.transcriptTokens = encodedTranscript.length
  }

  onTokenSliderChange(v : number){
    console.log(reduceTranscript(this.transcript$.value!, v))
  }

}
