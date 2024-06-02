import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestgrossingmoviesComponent } from './highestgrossingmovies.component';

describe('HighestgrossingmoviesComponent', () => {
  let component: HighestgrossingmoviesComponent;
  let fixture: ComponentFixture<HighestgrossingmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighestgrossingmoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighestgrossingmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
