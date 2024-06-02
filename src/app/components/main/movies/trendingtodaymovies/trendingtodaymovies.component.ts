import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';

@Component({
  selector: 'app-trendingtodaymovies',
  templateUrl: './trendingtodaymovies.component.html',
  styleUrl: './trendingtodaymovies.component.css'
})
export class TrendingtodaymoviesComponent implements OnInit {
  trendingTodayMovies:any
  page: number;
  constructor(private moviesService:MoviesService, private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
    this.getTrendingTodayMovies(this.page)
  })
  }
  getTrendingTodayMovies(page:number){
    this.moviesService.getTrendingToday(page).subscribe((data:any)=>{
      this.trendingTodayMovies = data.results
    })
  }
}
