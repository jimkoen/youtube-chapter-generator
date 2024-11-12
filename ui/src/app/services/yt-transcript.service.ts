import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {YouTubeTranscript, YouTubeTranscriptItem} from "../utilities/transcript/youtube-transcript";

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

        constructor(private httpClient: HttpClient) { }

        getTranscript(videoId: string): Observable<YouTubeTranscript> {
                const url = `${this.apiUrl}/transcripts/${videoId}`
                return this.httpClient.get<YouTubeTranscriptItem[]>(url)
        }

        calculateTranscriptTokens(t : YouTubeTranscript){

        }




}
