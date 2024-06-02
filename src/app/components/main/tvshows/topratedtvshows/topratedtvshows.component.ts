import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { TvshowsService } from '../../../../services/tvshows.service';

@Component({
  selector: 'app-topratedtvshows',
  templateUrl: './topratedtvshows.component.html',
  styleUrl: './topratedtvshows.component.css'
})
export class TopratedtvshowsComponent implements OnInit{
  topRatedTvShows:any
  page:number
  constructor(private tvShowsService:TvshowsService,private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
    this.getTopRatedTvShows(this.page)
    })
  }
  getTopRatedTvShows(page:number){
    this.tvShowsService.getTopRated(page).subscribe((data:any)=>{
      this.topRatedTvShows = data.results
    })
  }
}
