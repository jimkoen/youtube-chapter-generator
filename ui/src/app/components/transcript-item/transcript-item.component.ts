import { Component, Input } from '@angular/core';
import {YouTubeTimestampComponent} from "../you-tube-timestamp/you-tube-timestamp.component";

import {YouTubeTranscriptItem} from "../../utilities/transcript/youtube-transcript";

@Component({
        selector: 'app-transcript-item',
        standalone: true,
        imports: [YouTubeTimestampComponent],
        templateUrl: './transcript-item.component.html',
        styleUrl: './transcript-item.component.scss'
})
export class TranscriptItemComponent {
        @Input() transcriptTimestamp?: YouTubeTranscriptItem
}
