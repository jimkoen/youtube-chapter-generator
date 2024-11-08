import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {YtTranscriptService} from "../services/yt-transcript.service";
import {inject} from "@angular/core";
import {Observable} from "rxjs";
import {YouTubeTranscriptItem} from "../utilities/transcript/youtube-transcript";

export const transcriptResolver: ResolveFn<YouTubeTranscriptItem[]> =
  (route : ActivatedRouteSnapshot,
   state : RouterStateSnapshot,
   transcriptService = inject(YtTranscriptService))
    : Observable<YouTubeTranscriptItem[]> => {
  return transcriptService.getTranscript(route.paramMap.get('id') as string)
};
