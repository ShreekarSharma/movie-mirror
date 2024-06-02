import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl:string = ''
  apiKey:string = ''
  constructor(private httpClient:HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3'
    this.apiKey = 'f184c0aac6c49d65bb5d14901645089c';
  }
  getMovieDetails(movieId: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US`)
  }
  getNowPlaying(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${page}&language=en-US`)
  }
  getPopular(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}&language=en-US`)
  }
  getTopRated(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&page=${page}&language=en-US`)
  }
  getUpcoming(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&page=${page}&language=en-US`)
  }
  getTrendingToday(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}&page=${page}&language=en-US`)
  }
  getTrendingThisWeek(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}&page=${page}&language=en-US`)
  }
  getHighestGrossing(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&page=${page}&sort_by=revenue.desc&language=en-US`)
  }
  getMaximumVoted(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&page=${page}&sort_by=vote_count.desc&language=en-US`)
  }
  getMovieCredits(movieId:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}&language=en-US`)
  }
  getMovieImages(movieId: number):Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/movie/${movieId}/images?api_key=${this.apiKey}`);
  }
  getMovieVideos(movieId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`);
  }
  getRecommendations(movieId: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/movie/${movieId}/recommendations?api_key=${this.apiKey}&language=en-US&page=1`)
  }
  getMoviesByGenres(genreId: number, page:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genreId}`)
  }
}
