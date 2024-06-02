import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  baseUrl:string = ''
  apiKey:string = ''
  constructor(private httpClient:HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3'
    this.apiKey = 'f184c0aac6c49d65bb5d14901645089c';
  }
  getTvShowDetails(tvId: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tv/${tvId}?api_key=${this.apiKey}&language=en-US`)
  }
  getImdbId(tvId: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tv/${tvId}/external_ids?api_key=${this.apiKey}`)
  }
  getAiringToday(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tv/airing_today?api_key=${this.apiKey}&page=${page}`)
  }
  getOnTheAir(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tv/on_the_air?api_key=${this.apiKey}&page=${page}`)
  }
  getPopular(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tv/popular?api_key=${this.apiKey}&page=${page}`)
  }
  getTopRated(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}&page=${page}`)
  }
  getTrendingToday(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/trending/tv/day?api_key=${this.apiKey}&page=${page}`)
  }
  getTrendingThisWeek(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/trending/tv/week?api_key=${this.apiKey}&page=${page}`)
  }
  getMaximumVoted(page: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/discover/tv?api_key=${this.apiKey}&page=${page}&sort_by=vote_count.desc`)
  }
  getTvShowCredits(tvId:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tv/${tvId}/credits?api_key=${this.apiKey}&language=en-US`)
  }
  getTvShowImages(tvId: number):Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/tv/${tvId}/images?api_key=${this.apiKey}`);
  }
  getTvShowVideos(tvId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/tv/${tvId}/videos?api_key=${this.apiKey}`);
  }
  getRecommendations(tvId: number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tv/${tvId}/recommendations?api_key=${this.apiKey}&language=en-US&page=1`)
  }
  getSeasonsEpisodes(tvId:number,seasonNumber:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tv/${tvId}/season/${seasonNumber}?api_key=${this.apiKey}&language=en-US`)
  }
  getTvShowsByGenres(genreId: number,page:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genreId}`)
  }
}
