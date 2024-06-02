import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximumvotedtvshowsComponent } from './maximumvotedtvshows.component';

describe('MaximumvotedtvshowsComponent', () => {
  let component: MaximumvotedtvshowsComponent;
  let fixture: ComponentFixture<MaximumvotedtvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaximumvotedtvshowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaximumvotedtvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
