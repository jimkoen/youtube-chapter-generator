import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {YouTubeTranscript, YouTubeTranscriptItem} from "../utilities/transcript/youtube-transcript";
import {ActivatedRoute} from "@angular/router";

// taken from https://github.com/angular/components/blob/main/src/youtube-player/youtube-player.ts#L97


enum PlayerState {
        UNSTARTED = -1,
        ENDED = 0,
        PLAYING = 1,
        PAUSED = 2,
        BUFFERING = 3,
        CUED = 5
}



@Injectable({
        providedIn: 'root'
})
export class YtTranscriptService {
        private apiUrl = "api"

        constructor(private httpClient: HttpClient, private route : ActivatedRoute) {
        }

        getTranscript(videoId: string): Observable<YouTubeTranscript> {
                const url = `${this.apiUrl}/transcripts/${videoId}`
                return this.httpClient.get<YouTubeTranscriptItem[]>(url)
        }

        calculateTranscriptTokens(t : YouTubeTranscript){

        }




}
