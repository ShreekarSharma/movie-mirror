import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedtvshowsComponent } from './topratedtvshows.component';

describe('TopratedtvshowsComponent', () => {
  let component: TopratedtvshowsComponent;
  let fixture: ComponentFixture<TopratedtvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopratedtvshowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopratedtvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
