import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlmResultComponent } from './llm-result.component';

describe('LlmResultComponent', () => {
  let component: LlmResultComponent;
  let fixture: ComponentFixture<LlmResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlmResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
