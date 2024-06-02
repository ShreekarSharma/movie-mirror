import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { TvshowsService } from '../../../../services/tvshows.service';

@Component({
  selector: 'app-maximumvotedtvshows',
  templateUrl: './maximumvotedtvshows.component.html',
  styleUrl: './maximumvotedtvshows.component.css'
})
export class MaximumvotedtvshowsComponent implements OnInit{
  maxVotedTvShows:any
  page:number
  constructor(private tvShowsService:TvshowsService,private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
    this.getMaximumVotedTvShows(this.page)
    })
  }
  getMaximumVotedTvShows(page:number){
    this.tvShowsService.getMaximumVoted(page).subscribe((data:any)=>{
      this.maxVotedTvShows = data.results
    })
  }
}
