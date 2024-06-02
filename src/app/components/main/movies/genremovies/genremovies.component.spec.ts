import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenremoviesComponent } from './genremovies.component';

describe('GenremoviesComponent', () => {
  let component: GenremoviesComponent;
  let fixture: ComponentFixture<GenremoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenremoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenremoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
