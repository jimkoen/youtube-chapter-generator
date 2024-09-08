import { Component } from '@angular/core';
import { TranscriptItemComponent } from './transcript-item/transcript-item.component';
import { YouTubeTranscriptTimestamp } from '../../services/video.service';

@Component({
        selector: 'app-transcript-nav',
        standalone: true,
        imports: [TranscriptItemComponent],
        templateUrl: './transcript-nav.component.html',
        styleUrl: './transcript-nav.component.scss'
})
export class TranscriptNavComponent {
        public readonly ts: YouTubeTranscriptTimestamp = {
                text: "Lol 123, die Tastatur klebt",
                start: 60,
                duration: 2
        }
}
