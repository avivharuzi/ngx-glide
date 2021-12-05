import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BackdropsComponent } from './backdrops.component';

describe('BackdropsComponent', () => {
  let component: BackdropsComponent;
  let fixture: ComponentFixture<BackdropsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BackdropsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
