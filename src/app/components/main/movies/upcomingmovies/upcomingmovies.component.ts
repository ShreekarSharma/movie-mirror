import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';

@Component({
  selector: 'app-upcomingmovies',
  templateUrl: './upcomingmovies.component.html',
  styleUrl: './upcomingmovies.component.css'
})
export class UpcomingmoviesComponent implements OnInit{
  upcomingMovies:any
  page:number
  constructor(private moviesService:MoviesService,private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
    this.getUpcomingMovies(this.page)
  })
  }
  getUpcomingMovies(page:number){
    this.moviesService.getUpcoming(page).subscribe((data:any)=>{
      this.upcomingMovies = data.results
    })
  }
}
