import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPlayerControlsComponent } from './test-player-controls.component';

describe('TestPlayerControlsComponent', () => {
  let component: TestPlayerControlsComponent;
  let fixture: ComponentFixture<TestPlayerControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPlayerControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPlayerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
