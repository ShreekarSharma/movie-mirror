import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';

@Component({
  selector: 'app-trendingthisweekmovies',
  templateUrl: './trendingthisweekmovies.component.html',
  styleUrl: './trendingthisweekmovies.component.css'
})
export class TrendingthisweekmoviesComponent implements OnInit {
  trendingThisWeekMovies:any
  page:number
  constructor(private moviesService:MoviesService,private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
    this.getTrendingThisWeekMovies(this.page)
  })
  }
  getTrendingThisWeekMovies(page:number){
    this.moviesService.getTrendingThisWeek(page).subscribe((data:any)=>{
      this.trendingThisWeekMovies = data.results
    })
  }
}
