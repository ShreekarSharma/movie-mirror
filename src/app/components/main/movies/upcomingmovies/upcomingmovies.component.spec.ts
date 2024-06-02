import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingmoviesComponent } from './upcomingmovies.component';

describe('UpcomingmoviesComponent', () => {
  let component: UpcomingmoviesComponent;
  let fixture: ComponentFixture<UpcomingmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingmoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
