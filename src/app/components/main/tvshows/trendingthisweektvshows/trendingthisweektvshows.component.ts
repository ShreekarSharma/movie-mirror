import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { TvshowsService } from '../../../../services/tvshows.service';

@Component({
  selector: 'app-trendingthisweektvshows',
  templateUrl: './trendingthisweektvshows.component.html',
  styleUrl: './trendingthisweektvshows.component.css'
})
export class TrendingthisweektvshowsComponent implements OnInit{
  trendingThisWeekTvShows:any
  page:number
  constructor(private tvShowsService:TvshowsService,private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
    this.getTrendingThisWeekTvShows(this.page)
    })
  }
  getTrendingThisWeekTvShows(page:number){
    this.tvShowsService.getTrendingThisWeek(page).subscribe((data:any)=>{
      this.trendingThisWeekTvShows = data.results
    })
  }
}
