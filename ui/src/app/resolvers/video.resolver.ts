import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {YtTranscriptService} from "../services/yt-transcript.service";
import {inject} from "@angular/core";
import {map, Observable} from "rxjs";

export const videoResolver: ResolveFn<string> = (
  route : ActivatedRouteSnapshot,
  state : RouterStateSnapshot,
  transcriptService = inject(YtTranscriptService)
) : Observable<string> => {
  const videoId = route.paramMap.get('id') as string
  return transcriptService.getTranscript(videoId).pipe(
    map(v => videoId)
  )
};
