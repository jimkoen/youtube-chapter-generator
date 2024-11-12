import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptComplexityComponent } from './transcript-complexity.component';

describe('TranscriptComplexityComponent', () => {
  let component: TranscriptComplexityComponent;
  let fixture: ComponentFixture<TranscriptComplexityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranscriptComplexityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranscriptComplexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
