import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenretvshowsComponent } from './genretvshows.component';

describe('GenretvshowsComponent', () => {
  let component: GenretvshowsComponent;
  let fixture: ComponentFixture<GenretvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenretvshowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenretvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
