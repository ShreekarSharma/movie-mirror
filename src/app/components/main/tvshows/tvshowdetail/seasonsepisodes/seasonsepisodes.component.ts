import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TvshowsService } from '../../../../../services/tvshows.service';
@Component({
  selector: 'app-seasonsepisodes',
  templateUrl: './seasonsepisodes.component.html',
  styleUrl: './seasonsepisodes.component.css'
})
export class SeasonsepisodesComponent implements OnInit{
  baseUrl:string = ''
  apiKey:string = ''
  tvShowId:number
  seasonNumber:number
  totalSeasons:number
  seasonDetails:any
  episodesDetails:any
constructor(private tvshowsService:TvshowsService,private router: ActivatedRoute,private httpClient:HttpClient){
  this.baseUrl = 'https://api.themoviedb.org/3'
    this.apiKey = 'f184c0aac6c49d65bb5d14901645089c';
}
ngOnInit(): void {
  this.router.params.subscribe((params: Params)=>{
    this.tvShowId = params['id']
    this.seasonNumber = params['seasonNumber']
    this.getTvShowDetails(this.tvShowId)
    this.getSeasonsEpisodes(this.tvShowId,this.seasonNumber)
  })
}
getTvShowDetails(tvId: number) {
  this.tvshowsService.getTvShowDetails(tvId).subscribe((data) => {
    this.totalSeasons = data.number_of_seasons
  });
}
getSeasonsEpisodes(tvId:number,seasonNumber:number){
  this.tvshowsService.getSeasonsEpisodes(tvId,seasonNumber).subscribe((data)=>{
    this.seasonDetails = data
  
    this.episodesDetails = data.episodes
  
  })
}
}
