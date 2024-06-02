import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { TvshowsService } from '../../../../services/tvshows.service';

@Component({
  selector: 'app-populartvshows',
  templateUrl: './populartvshows.component.html',
  styleUrl: './populartvshows.component.css'
})
export class PopulartvshowsComponent implements OnInit{
  popularTvShows:any
  page:number
  constructor(private tvShowsService:TvshowsService,private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
    this.getPopularTvShows(this.page)
    })
  }
  getPopularTvShows(page:number){
    this.tvShowsService.getPopular(page).subscribe((data:any)=>{
      this.popularTvShows = data.results
    })
  }
}
