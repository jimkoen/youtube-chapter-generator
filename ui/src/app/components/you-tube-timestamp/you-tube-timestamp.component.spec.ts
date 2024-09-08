import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubeTimestampComponent } from './you-tube-timestamp.component';

describe('YouTubeTimestampComponent', () => {
  let component: YouTubeTimestampComponent;
  let fixture: ComponentFixture<YouTubeTimestampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouTubeTimestampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouTubeTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
