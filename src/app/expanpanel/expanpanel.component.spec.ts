import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanpanelComponent } from './expanpanel.component';

describe('ExpanpanelComponent', () => {
  let component: ExpanpanelComponent;
  let fixture: ComponentFixture<ExpanpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpanpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
