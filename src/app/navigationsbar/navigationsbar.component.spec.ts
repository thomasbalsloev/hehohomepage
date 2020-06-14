import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationsbarComponent } from './navigationsbar.component';

describe('NavigationsbarComponent', () => {
  let component: NavigationsbarComponent;
  let fixture: ComponentFixture<NavigationsbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationsbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
