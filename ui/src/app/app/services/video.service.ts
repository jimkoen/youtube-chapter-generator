import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type YouTubeTranscriptTimestamp = {
        text: string,
        start: number,
        duration: number
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
