import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropsComponent } from './backdrops.component';

describe('BackdropsComponent', () => {
  let component: BackdropsComponent;
  let fixture: ComponentFixture<BackdropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BackdropsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
