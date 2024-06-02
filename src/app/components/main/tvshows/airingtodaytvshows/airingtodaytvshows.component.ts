import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { TvshowsService } from '../../../../services/tvshows.service';

@Component({
  selector: 'app-airingtodaytvshows',
  templateUrl: './airingtodaytvshows.component.html',
  styleUrl: './airingtodaytvshows.component.css'
})
export class AiringtodaytvshowsComponent implements OnInit{
  airingTodayTvShows:any
  page:number
  constructor(private tvShowsService:TvshowsService,private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
    this.getAiringTodayTvShows(this.page)
    })
  }
  getAiringTodayTvShows(page:number){
    this.tvShowsService.getAiringToday(page).subscribe((data:any)=>{
      this.airingTodayTvShows = data.results
    })
  }
}
