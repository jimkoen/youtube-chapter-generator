import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input() transcript? : YouTubeTranscript
  @Output() onTranscriptReduce? : EventEmitter<YouTubeTranscript>

  public transcriptSections? : number
  public transcriptTokens? : number

  constructor(private route : ActivatedRoute) {
  }
  ngOnInit() {

    this.transcriptSections = this.transcript!.length
    this.transcriptTokens = this.calculateTokens(this.transcript!)
  }

  calculateTokens(t : YouTubeTranscript){
    const enc = getEncoding("cl100k_base")
    const encodedTranscript = enc.encode(JSON.stringify(t))
    return encodedTranscript.length
  }

  onTokenSliderChange(v : number){
    const reducedTranscript = reduceTranscript(this.transcript!, v)
    console.log(reducedTranscript)
    this.transcriptTokens = this.calculateTokens(reducedTranscript!)
    this.transcriptSections = reducedTranscript.length
    this.onTranscriptReduce?.emit(reducedTranscript)
  }

}
