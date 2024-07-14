import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRetrievalComponent } from './video-retrieval.component';

describe('VideoRetrievalComponent', () => {
  let component: VideoRetrievalComponent;
  let fixture: ComponentFixture<VideoRetrievalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoRetrievalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoRetrievalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
