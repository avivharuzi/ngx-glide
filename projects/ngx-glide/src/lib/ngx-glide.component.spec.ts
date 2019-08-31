import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGlideComponent } from './ngx-glide.component';

describe('NgxGlideComponent', () => {
  let component: NgxGlideComponent;
  let fixture: ComponentFixture<NgxGlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGlideComponent ]
    })
    .compileComponents();
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
