import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximumvotedmoviesComponent } from './maximumvotedmovies.component';

describe('MaximumvotedmoviesComponent', () => {
  let component: MaximumvotedmoviesComponent;
  let fixture: ComponentFixture<MaximumvotedmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaximumvotedmoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaximumvotedmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
