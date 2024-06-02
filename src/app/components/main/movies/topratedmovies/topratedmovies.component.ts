import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';

@Component({
  selector: 'app-topratedmovies',
  templateUrl: './topratedmovies.component.html',
  styleUrl: './topratedmovies.component.css'
})
export class TopratedmoviesComponent implements OnInit {
  topRatedMovies:any;
  page: number;
  constructor(private moviesService:MoviesService, private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
      this.getTopRatedMovies(this.page)
    })
  }
  getTopRatedMovies(page:number){
    this.moviesService.getTopRated(page).subscribe((data)=>{
      this.topRatedMovies = data.results
    })
  }
} 
