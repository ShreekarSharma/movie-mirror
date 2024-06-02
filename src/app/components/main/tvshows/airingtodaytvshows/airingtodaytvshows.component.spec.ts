import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiringtodaytvshowsComponent } from './airingtodaytvshows.component';

describe('AiringtodaytvshowsComponent', () => {
  let component: AiringtodaytvshowsComponent;
  let fixture: ComponentFixture<AiringtodaytvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiringtodaytvshowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiringtodaytvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
