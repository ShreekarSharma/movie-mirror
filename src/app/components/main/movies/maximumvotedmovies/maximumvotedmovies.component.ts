import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';

@Component({
  selector: 'app-maximumvotedmovies',
  templateUrl: './maximumvotedmovies.component.html',
  styleUrl: './maximumvotedmovies.component.css'
})
export class MaximumvotedmoviesComponent implements OnInit{
  maxVotedMovies:any;
  page: number;
  constructor(private moviesService:MoviesService, private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.page = params['page']
      this.getMaxVotedMovies(this.page)
    })
  }
  getMaxVotedMovies(page:number){
    this.moviesService.getMaximumVoted(page).subscribe((data)=>{
      this.maxVotedMovies = data.results
    })
  }
}
