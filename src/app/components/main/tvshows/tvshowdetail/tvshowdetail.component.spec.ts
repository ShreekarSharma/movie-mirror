import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowdetailComponent } from './tvshowdetail.component';

describe('TvshowdetailComponent', () => {
  let component: TvshowdetailComponent;
  let fixture: ComponentFixture<TvshowdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvshowdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvshowdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
