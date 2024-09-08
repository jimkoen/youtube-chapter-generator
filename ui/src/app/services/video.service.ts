import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type YouTubeTranscriptTimestamp = {
        text: string,
        start: number,
        duration: number
}


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
export class VideoService {



        private apiUrl = "api"


        constructor(private httpClient: HttpClient) { }

        getTranscript(videoId: string): Observable<YouTubeTranscriptTimestamp[]> {

                const url = `${this.apiUrl}/transcripts/${videoId}`
                return this.httpClient.get<YouTubeTranscriptTimestamp[]>(url)

        }


}
