import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';

@Component({
  selector: 'app-genremovies',
  templateUrl: './genremovies.component.html',
  styleUrl: './genremovies.component.css'
})
export class GenremoviesComponent implements OnInit {
  movies:any
  genreName:string
  genreId:number
  page:number
  constructor(private moviesService: MoviesService,
    private router: ActivatedRoute){}
    ngOnInit(): void {
      this.router.params.subscribe((params:Params)=>{
        this.genreName = params['genreName']
        this.genreId = params['genreId']
        this.page = params['page']
        this.getMovies(this.genreId,this.page)
      })
    }
    getMovies(genreId:number,page:number){
      this.moviesService.getMoviesByGenres(genreId,page).subscribe((data)=>{
        this.movies = data.results
     
        
      })
    }
}
