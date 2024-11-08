import { TestBed } from '@angular/core/testing';

import {YtTranscriptService} from './yt-transcript.service';
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {HttpErrorResponse, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {TRANSCRIPTS} from "../../../../api/tests/fixtures/frontend/TRANSCRIPT";
import {YouTubeTranscriptItem} from "../utilities/transcript/youtube-transcript";

describe('YtTranscriptService', () => {
  let yt : YtTranscriptService,
    httpTestingController : HttpTestingController


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        YtTranscriptService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    });
    yt = TestBed.inject(YtTranscriptService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });



  fit('should be created', () => {
    expect(yt).toBeTruthy();
  });

  fit('should retrieve transcript', () => {
    yt.getTranscript('bZe5J8SVCYQ')
      .subscribe((transcript) =>
        transcript.forEach((ts, i) => {
          expect(ts).toEqual(TRANSCRIPTS.bZe5J8SVCYQ[i])
        })
      )

    const req = httpTestingController.expectOne('api/transcripts/bZe5J8SVCYQ')

    expect(req.request.method).toEqual("GET")
    req.flush(TRANSCRIPTS.bZe5J8SVCYQ)
  })

  fit('should give a 503 when transcript is disabled or video not found', () => {
    yt.getTranscript('')
      .subscribe({
        next: () => fail('transcript retrieval should have failed'),
        error: (e : HttpErrorResponse) => {
          expect(e.status === 503)
          expect(e.message === "Error while retrieving transcripts: either disabled or not found")
        }
  }
      )
    const req = httpTestingController.expectOne('api/transcripts/')
    expect(req.request.method).toEqual("GET")
    req.flush("Transcript retrieval failed", {status: 503, statusText: "Error while retrieving transcripts: either disabled or not found"})
  })
});
