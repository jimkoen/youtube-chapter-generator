import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { YtPlayerService } from '../../services/yt-player.service';
import {TimecodePipe} from "./timecode.pipe";

@Component({
        selector: 'app-you-tube-timestamp',
        standalone: true,
  imports: [MatButtonModule, TimecodePipe],
        templateUrl: './you-tube-timestamp.component.html',
        styleUrl: './you-tube-timestamp.component.scss'
})
export class YouTubeTimestampComponent {
        @Input() public time?: number

        constructor(private player: YtPlayerService) {

        }

        public seekTo() {
                this.player.seekTo(this.time!)
        }

}
