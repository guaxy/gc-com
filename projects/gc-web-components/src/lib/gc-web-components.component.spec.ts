import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcWebComponentsComponent } from './gc-web-components.component';

describe('GcWebComponentsComponent', () => {
  let component: GcWebComponentsComponent;
  let fixture: ComponentFixture<GcWebComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcWebComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcWebComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
