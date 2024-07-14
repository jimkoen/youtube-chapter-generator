import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { VideoService } from '../../app/services/video.service';
import { getYtVideoIdFromUrl, validateYouTubeUrl } from '../../common';
import { createYouTubeUrlValidator } from '../../validators/YouTubeUrlValidator';

@Component({
  selector: 'app-video-retrieval',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './video-retrieval.component.html',
  styleUrl: './video-retrieval.component.scss'
})
export class VideoRetrievalComponent {

  form = this.fb.group({
    videoUrl: ['', [
      Validators.required,
      createYouTubeUrlValidator()
    ]
    ]
  })

  constructor(private yt: VideoService, private fb: FormBuilder) {
  }

  get videoUrl() {
    return this.form.controls['videoUrl'];
  }

  onSubmitURL() {
    this.yt.getTranscript(getYtVideoIdFromUrl(this.form.controls.videoUrl.value as string)).subscribe(
      (result) => { console.log(result) }
    )
  }



}
