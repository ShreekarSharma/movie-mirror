import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsepisodesComponent } from './seasonsepisodes.component';

describe('SeasonsepisodesComponent', () => {
  let component: SeasonsepisodesComponent;
  let fixture: ComponentFixture<SeasonsepisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonsepisodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeasonsepisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
