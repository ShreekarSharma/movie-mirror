import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { TvshowsService } from '../../../../services/tvshows.service';

@Component({
  selector: 'app-trendingtodaytvshows',
  templateUrl: './trendingtodaytvshows.component.html',
  styleUrl: './trendingtodaytvshows.component.css'
})
export class TrendingtodaytvshowsComponent implements OnInit{
  trendingTodayTvShows:any
  page:number
  constructor(private tvShowsService:TvshowsService,private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
    this.getTrendingTodayTvShows(this.page)
    })
  }
  getTrendingTodayTvShows(page:number){
    this.tvShowsService.getTrendingToday(page).subscribe((data:any)=>{
      this.trendingTodayTvShows = data.results
    })
  }
}
