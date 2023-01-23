import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxGlideComponent } from './ngx-glide.component';

describe('NgxGlideComponent', () => {
  let component: NgxGlideComponent;
  let fixture: ComponentFixture<NgxGlideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxGlideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
