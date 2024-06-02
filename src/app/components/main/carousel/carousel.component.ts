import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  trending:any
  constructor(private moviesService:MoviesService){}
  ngOnInit(): void {
    this.getTrending()
  }
  getTrending(){
    this.moviesService.getTrendingToday(1).subscribe((data:any)=>{
      this.trending = data.results
    })
  }
}
