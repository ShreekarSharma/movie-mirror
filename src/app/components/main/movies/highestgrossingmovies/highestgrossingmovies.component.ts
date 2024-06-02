import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';

@Component({
  selector: 'app-highestgrossingmovies',
  templateUrl: './highestgrossingmovies.component.html',
  styleUrl: './highestgrossingmovies.component.css'
})
export class HighestgrossingmoviesComponent implements OnInit{
  highestGrossingMovies:any;
  page: number;
  constructor(private moviesService:MoviesService, private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
      this.getHighestGrossingMovies(this.page)
    })
  }
  getHighestGrossingMovies(page:number){
    this.moviesService.getHighestGrossing(page).subscribe((data)=>{
      this.highestGrossingMovies = data.results
    })
  }
}
