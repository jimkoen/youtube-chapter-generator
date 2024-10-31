import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {YouTubeTranscriptTimestamp, YtTranscriptService} from "../services/yt-transcript.service";
import {inject} from "@angular/core";
import {Observable} from "rxjs";

export const transcriptResolver: ResolveFn<YouTubeTranscriptTimestamp[]> =
  (route : ActivatedRouteSnapshot,
   state : RouterStateSnapshot,
   transcriptService = inject(YtTranscriptService))
    : Observable<YouTubeTranscriptTimestamp[]> => {
  return transcriptService.getTranscript(route.paramMap.get('id') as string)
};
