import { Routes } from '@angular/router';
import { VideoRetrievalComponent } from './components/video-retrieval/video-retrieval.component';
import { VideoEditorComponent } from './components/video-editor/video-editor.component';

export const routes: Routes = [
        { path: '', component: VideoRetrievalComponent, data: { animation: 'VideoRetrieval' } },
        { path: 'video', redirectTo: '', pathMatch: 'full' },
        { path: 'video/:id', component: VideoEditorComponent, data: { animation: 'VideoEditor' } }
];
