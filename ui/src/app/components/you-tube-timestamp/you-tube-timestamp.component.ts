import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { YtPlayerService } from '../../services/yt-player.service';
import {TimecodePipe} from "./timecode.pipe";
import {YouTubeTimestamp} from "../../utilities/transcript/youtube-transcript";

@Component({
        selector: 'app-you-tube-timestamp',
        standalone: true,
  imports: [MatButtonModule, TimecodePipe],
        templateUrl: './you-tube-timestamp.component.html',
        styleUrl: './you-tube-timestamp.component.scss'
})
export class YouTubeTimestampComponent {
        @Input() public timestamp?: YouTubeTimestamp

        constructor(private player: YtPlayerService) {

        }

        public seekTo() {
                this.player.seekTo(this.timestamp!.time)
        }

}
