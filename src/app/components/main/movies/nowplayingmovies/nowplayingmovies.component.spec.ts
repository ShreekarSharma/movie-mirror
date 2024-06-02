import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowplayingmoviesComponent } from './nowplayingmovies.component';

describe('NowplayingmoviesComponent', () => {
  let component: NowplayingmoviesComponent;
  let fixture: ComponentFixture<NowplayingmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NowplayingmoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NowplayingmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
