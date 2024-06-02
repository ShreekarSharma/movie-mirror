import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingtodaymoviesComponent } from './trendingtodaymovies.component';

describe('TrendingtodaymoviesComponent', () => {
  let component: TrendingtodaymoviesComponent;
  let fixture: ComponentFixture<TrendingtodaymoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingtodaymoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingtodaymoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
