import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css'
})
export class GenresComponent implements OnInit{
  baseUrl:string = ''
  apiKey:string = ''
  movieGenres:any
  tvGenres:any
  constructor(private httpClient:HttpClient){
    this.baseUrl = 'https://api.themoviedb.org/3'
    this.apiKey = 'f184c0aac6c49d65bb5d14901645089c';
  }
  ngOnInit(): void {
    this.movieGenresList()
    this.tvGenresList()
  }
  getMovieGenres():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en`)
  }
  getTvGenres():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}&language=en`)
  }
  movieGenresList(){
    this.getMovieGenres().subscribe((data)=>{
      this.movieGenres = data.genres
    })
  }
  tvGenresList(){
    this.getTvGenres().subscribe((data)=>{
      this.tvGenres = data.genres
    })
  }
}
