import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  // Movies
  trendingTodayMovies: any;
  trendingThisWeekMovies: any;
  // TV Shows
  airingTodayTvShows: any;
  onTheAirTvShows: any;
  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvshowsService
  ) {}
  ngOnInit(): void {
    // Movies
    this.getTrendingTodayMovies();
    this.getTrendingThisWeekMovies();
    // TV Shows
    this.getAiringTodayTvShows();
    this.getOnTheAirTvShows();
  }
  // Movies
  getTrendingTodayMovies() {
    this.moviesService.getTrendingToday(1).subscribe((data: any) => {
      this.trendingTodayMovies = data.results;
    });
  }
  getTrendingThisWeekMovies() {
    this.moviesService.getTrendingThisWeek(1).subscribe((data: any) => {
      this.trendingThisWeekMovies = data.results;
    });
  }
  // TV Shows
  getAiringTodayTvShows() {
    this.tvShowsService.getAiringToday(1).subscribe((data: any) => {
      this.airingTodayTvShows = data.results;
    });
  }
  getOnTheAirTvShows() {
    this.tvShowsService.getOnTheAir(1).subscribe((data: any) => {
      this.onTheAirTvShows = data.results;
    });
  }
}
