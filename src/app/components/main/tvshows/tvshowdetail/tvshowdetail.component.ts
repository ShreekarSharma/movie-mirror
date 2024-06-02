import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { TvshowsService } from '../../../../services/tvshows.service';
@Component({
  selector: 'app-tvshowdetail',
  templateUrl: './tvshowdetail.component.html',
  styleUrl: './tvshowdetail.component.css'
})
export class TvshowdetailComponent implements OnInit {
  isMobile: boolean = false;
  tvDetails: any;
  tvCast: any;
  tvCrew: any;
  tvId: number;
  imdbId: string;
  imdbDetails: any;
  backdropPath: string;
  tvPosters: any;
  tvBackdrops: any;
  tvVideos: any;
  recommendations: any;
  private omdbApiKey = '1c1fcf08';
  // Constructor
  constructor(
    private tvshowsService:TvshowsService,
    private router: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private httpClient: HttpClient,
    private breakpointObserver: BreakpointObserver,
  ) {}
  // Ng OnInit
  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.tvId = params['id'];
      this.getTvShowDetails(this.tvId);
      this.getTvShowCredits(this.tvId);
      this.getTvShowImages(this.tvId);
      this.getTvShowsVideos(this.tvId);
      this.getRecommendations(this.tvId);
      this.getImdbId(this.tvId);  
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
  getImdbData(tvId: string): Observable<any> {
    return this.httpClient.get(
      `https://www.omdbapi.com/?i=${tvId}&apikey=${this.omdbApiKey}`
    );
  }
  // TMDB
  getTvShowDetails(tvId: number) {
    this.tvshowsService.getTvShowDetails(tvId).subscribe((data) => {
      this.tvDetails = data;
      
      
      this.backdropPath = data.backdrop_path;
    });
  }
  getImdbId(tvId: number){
    this.tvshowsService.getImdbId(tvId).subscribe((data)=>{
      this.imdbId = data.imdb_id   
      this.getImdbDetails(this.imdbId);   
    })
  }
  getBackdropImageUrl(): string {
    if (this.backdropPath) {
      return `https://image.tmdb.org/t/p/original${this.backdropPath}`;
    } else {
      // Fallback image URL if backdrop path is not available
      return 'https://www.solidbackgrounds.com/images/950x350/950x350-black-solid-color-background.jpg';
    }
  }
  getTvShowCredits(tvId: number) {
    this.tvshowsService.getTvShowCredits(tvId).subscribe((data) => {
      this.tvCast = data.cast;
    
      
      this.tvCrew = data.crew.sort((a: any, b: any) => {
        const hasProfileA = a.profile_path ? 1 : 0;
        const hasProfileB = b.profile_path ? 1 : 0;
        return hasProfileB - hasProfileA; // Sorts in descending order, so those with profile photos come first
      });
    });
  }
  getTvShowImages(tvId: number) {
    this.tvshowsService.getTvShowImages(tvId).subscribe((data) => {
      this.tvPosters = data.posters;
      this.tvBackdrops = data.backdrops;
    });
  }
  getTvShowsVideos(tvId:number) {
    this.tvshowsService.getTvShowVideos(tvId).subscribe((data) => {
      this.tvVideos = data.results;
    });
  }
  getRecommendations(tvId:number){
    this.tvshowsService.getRecommendations(tvId).subscribe((data)=>{
      this.recommendations = data.results
    })
  }
}
