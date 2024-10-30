import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { trigger, transition, animate, style, AnimationEvent } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { YtTranscriptService } from '../../services/yt-transcript.service';
import { getYtVideoIdFromUrl, validateYouTubeUrl } from '../../common';
import { createYouTubeUrlValidator } from '../../validators/YouTubeUrlValidator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import {catchError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
        selector: 'app-video-retrieval',
        standalone: true,
        imports: [NgIf, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule],
        templateUrl: './video-retrieval.component.html',
        styleUrl: './video-retrieval.component.scss',
        animations: [
                trigger('spinner', [
                        transition(':enter', [style({ opacity: 0 }), animate('100ms', style({ opacity: 1 }))]),
                        transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
                ])
        ]
})
export class VideoRetrievalComponent {
        public loading: boolean = false;
        public error!: Error
        public errorMessage!: string
        form = this.fb.group({
                videoUrl: ['', [
                        Validators.required,
                        createYouTubeUrlValidator()
                ]
                ]
        })

        constructor(
                private yt: YtTranscriptService,
                private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute
        ) {
        }

        get videoUrl() {
                return this.form.controls['videoUrl'];
        }

        onSubmitURL() {
                this.loading = true;
                this.yt.getTranscript(getYtVideoIdFromUrl(this.form.controls.videoUrl.value as string)).
                subscribe({
                  next: (result) => {
                    this.loading = false;
                  },
                  error: (e : HttpErrorResponse)  =>
                  {
                    this.loading = false
                    this.error = e
                    this.errorMessage = e.error.detail
                    console.log(e.error.detail)
                  }
                })
        }

        navigateToEditor(e: AnimationEvent) {
                if (e.toState === "void") {
                        console.log(e)
                        this.router.navigateByUrl(`/video/${getYtVideoIdFromUrl(this.form.controls.videoUrl.value as string)}`).then(() => console.log("Navigated"))
                }

        }



}
