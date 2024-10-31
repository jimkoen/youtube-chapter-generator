import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptItemComponent } from './transcript-item.component';

describe('TranscriptItemComponent', () => {
  let component: TranscriptItemComponent;
  let fixture: ComponentFixture<TranscriptItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranscriptItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranscriptItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
