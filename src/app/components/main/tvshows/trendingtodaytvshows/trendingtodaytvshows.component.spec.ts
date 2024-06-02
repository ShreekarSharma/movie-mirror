import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingtodaytvshowsComponent } from './trendingtodaytvshows.component';

describe('TrendingtodaytvshowsComponent', () => {
  let component: TrendingtodaytvshowsComponent;
  let fixture: ComponentFixture<TrendingtodaytvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingtodaytvshowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingtodaytvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
