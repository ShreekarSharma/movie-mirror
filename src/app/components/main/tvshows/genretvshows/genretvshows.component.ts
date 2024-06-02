import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TvshowsService } from '../../../../services/tvshows.service';
@Component({
  selector: 'app-genretvshows',
  templateUrl: './genretvshows.component.html',
  styleUrl: './genretvshows.component.css'
})
export class GenretvshowsComponent implements OnInit{
  tvShows:any
  genreName:string
  genreId:number
  page:number;
  constructor(private tvShowsService: TvshowsService,
    private router: ActivatedRoute){}
    ngOnInit(): void {
      this.router.params.subscribe((params:Params)=>{
        this.genreName = params['genreName']
        this.genreId = params['genreId']
        this.page = params['page']
        this.getTvShows(this.genreId,this.page)
      })
    }
    getTvShows(genreId:number,page:number){
      this.tvShowsService.getTvShowsByGenres(genreId,page).subscribe((data)=>{
        this.tvShows = data.results
      })
    }
}
