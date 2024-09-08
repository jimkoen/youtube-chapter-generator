import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptNavComponent } from './transcript-nav.component';

describe('TranscriptNavComponent', () => {
  let component: TranscriptNavComponent;
  let fixture: ComponentFixture<TranscriptNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranscriptNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranscriptNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
