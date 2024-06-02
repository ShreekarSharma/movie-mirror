import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntheairtvshowsComponent } from './ontheairtvshows.component';

describe('OntheairtvshowsComponent', () => {
  let component: OntheairtvshowsComponent;
  let fixture: ComponentFixture<OntheairtvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OntheairtvshowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OntheairtvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
