import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingthisweektvshowsComponent } from './trendingthisweektvshows.component';

describe('TrendingthisweektvshowsComponent', () => {
  let component: TrendingthisweektvshowsComponent;
  let fixture: ComponentFixture<TrendingthisweektvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingthisweektvshowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingthisweektvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
