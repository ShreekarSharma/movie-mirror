import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrl: './moviedetail.component.css',
  providers: [DecimalPipe],
})
export class MoviedetailComponent implements OnInit {
  isMobile: boolean = false;
  movieDetails: any;
  movieCast: any;
  movieCrew: any;
  movieId: number;
  imdbId: string;
  imdbDetails: any;
  backdropPath: string;
  moviePosters: any;
  movieBackdrops: any;
  movieVideos: any;
  recommendations: any;
  private omdbApiKey = '1c1fcf08';
  // Constructor
  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private httpClient: HttpClient,
    private breakpointObserver: BreakpointObserver,
  ) {}
  // Ng OnInit
  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.movieId = params['id'];
      this.getMovieDetails(this.movieId);
      this.getMovieCredits(this.movieId);
      this.getMovieImages(this.movieId);
      this.getMoviesVideos(this.movieId);
      this.getRecommendations(this.movieId);
    });
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches;
    });
  }
  // IMDB
  getImdbDetails(imdbId: string) {
    this.getImdbData(imdbId).subscribe((data) => {
      this.imdbDetails = data;
    });
  }
  getImdbData(movieId: string): Observable<any> {
    return this.httpClient.get(
      `https://www.omdbapi.com/?i=${movieId}&apikey=${this.omdbApiKey}`
    );
  }
  // TMDB
  getMovieDetails(movieId: number) {
    this.moviesService.getMovieDetails(movieId).subscribe((data) => {
      this.movieDetails = data;
      this.backdropPath = data.backdrop_path;
      this.imdbId = data.imdb_id;
      this.getImdbDetails(this.imdbId);
    });
  }
  getBackdropImageUrl(): string {
    if (this.backdropPath) {
      return `https://image.tmdb.org/t/p/original${this.backdropPath}`;
    } else {
      // Fallback image URL if backdrop path is not available
      return 'https://www.solidbackgrounds.com/images/950x350/950x350-black-solid-color-background.jpg';
    }
  }
  getMovieCredits(movieId: number) {
    this.moviesService.getMovieCredits(movieId).subscribe((data) => {
      this.movieCast = data.cast;
      this.movieCrew = data.crew.sort((a: any, b: any) => {
        const hasProfileA = a.profile_path ? 1 : 0;
        const hasProfileB = b.profile_path ? 1 : 0;
        return hasProfileB - hasProfileA; // Sorts in descending order, so those with profile photos come first
      });
    });
  }
  getMovieImages(movieId: number) {
    this.moviesService.getMovieImages(movieId).subscribe((data) => {
      this.moviePosters = data.posters;
      this.movieBackdrops = data.backdrops;
    });
  }
  getMoviesVideos(movieId:number) {
    this.moviesService.getMovieVideos(movieId).subscribe((data) => {
      this.movieVideos = data.results;
    });
  }
  getRecommendations(movieId:number){
    this.moviesService.getRecommendations(movieId).subscribe((data)=>{
      this.recommendations = data.results      
    })
  }
}
