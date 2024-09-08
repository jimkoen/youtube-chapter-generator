import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { YtPlayerService } from '../../services/yt-player.service';

@Component({
        selector: 'app-test-player-controls',
        standalone: true,
        imports: [MatButtonModule],
        templateUrl: './test-player-controls.component.html',
        styleUrl: './test-player-controls.component.scss'
})
export class TestPlayerControlsComponent {
        constructor(public player: YtPlayerService) {

        }

}
