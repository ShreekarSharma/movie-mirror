import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingthisweekmoviesComponent } from './trendingthisweekmovies.component';

describe('TrendingthisweekmoviesComponent', () => {
  let component: TrendingthisweekmoviesComponent;
  let fixture: ComponentFixture<TrendingthisweekmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingthisweekmoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingthisweekmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
