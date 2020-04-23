import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgLibSimpleComponent } from './org-lib-simple.component';

describe('OrgLibSimpleComponent', () => {
  let component: OrgLibSimpleComponent;
  let fixture: ComponentFixture<OrgLibSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgLibSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgLibSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
