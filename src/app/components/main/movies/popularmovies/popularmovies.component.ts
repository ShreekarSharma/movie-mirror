import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';

@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrl: './popularmovies.component.css'
})
export class PopularmoviesComponent implements OnInit {
  popularMovies:any
  page:number
  constructor(private moviesService:MoviesService, private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
      this.getPopularMovies(this.page)
    })
  }
  getPopularMovies(page:number){
    this.moviesService.getPopular(page).subscribe((data:any)=>{
      this.popularMovies = data.results
    })
  }
}
