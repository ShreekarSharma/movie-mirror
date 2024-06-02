import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';

@Component({
  selector: 'app-nowplayingmovies',
  templateUrl: './nowplayingmovies.component.html',
  styleUrl: './nowplayingmovies.component.css'
})
export class NowplayingmoviesComponent {
  nowPlayingMovies:any
  page:number
  constructor(private moviesService:MoviesService,private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
    this.getNowPlayingMovies(this.page)
  })
  }
  getNowPlayingMovies(page:number){
    this.moviesService.getNowPlaying(page).subscribe((data:any)=>{
      this.nowPlayingMovies = data.results
    })
  }
}
