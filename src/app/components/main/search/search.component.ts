import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  baseUrl:string = ''
  apiKey:string = ''
  searchQuery:string
  searchResults:any
  page: number = 1;
  movies: any[] = [];
  tvShows: any[] = [];
  people: any[] = [];
  noResults: boolean = false;
  constructor(private router:ActivatedRoute, private httpClient:HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3'
    this.apiKey = 'f184c0aac6c49d65bb5d14901645089c';
  }
  ngOnInit(): void {
    this.router.params.subscribe((params:Params)=>{
      this.searchQuery = params['searchQuery'] || ''
      this.page = +params['page'] || 1
      this.getSearchData(this.searchQuery,this.page)
    })
  }
  getSearchData(searchQuery:string,page:number){
    this.getSearchResults(searchQuery,page).subscribe((data)=>{
      this.movies = data.results.filter((result: any) => result.media_type === 'movie');
      this.tvShows = data.results.filter((result: any) => result.media_type === 'tv');
      this.people = data.results.filter((result: any) => result.media_type === 'person');
      this.noResults = this.movies.length === 0 && this.tvShows.length === 0 && this.people.length === 0;
      
    })
  }
  getSearchResults(searchQuery:string, page:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/search/multi?query=${searchQuery}&api_key=${this.apiKey}&include_adult=false&language=en-US&page=${page}`)
    //https://api.themoviedb.org/3/search/multi?query=john%20wick&include_adult=false&language=en-US&page=1
  }
}
