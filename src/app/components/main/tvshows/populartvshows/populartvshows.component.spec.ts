import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulartvshowsComponent } from './populartvshows.component';

describe('PopulartvshowsComponent', () => {
  let component: PopulartvshowsComponent;
  let fixture: ComponentFixture<PopulartvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopulartvshowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopulartvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
