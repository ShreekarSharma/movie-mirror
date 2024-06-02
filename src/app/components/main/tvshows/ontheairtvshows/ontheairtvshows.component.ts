import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { TvshowsService } from '../../../../services/tvshows.service';


@Component({
  selector: 'app-ontheairtvshows',
  templateUrl: './ontheairtvshows.component.html',
  styleUrl: './ontheairtvshows.component.css'
})
export class OntheairtvshowsComponent implements OnInit{
  onTheAirTvShows:any
  page:number
  constructor(private tvShowsService:TvshowsService,private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
    this.getOnTheAirTvShows(this.page)
    })
  }
  getOnTheAirTvShows(page:number){
    this.tvShowsService.getOnTheAir(page).subscribe((data:any)=>{
      this.onTheAirTvShows = data.results
    })
  }
}
