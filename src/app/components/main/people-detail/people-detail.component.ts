import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.css'
})
export class PeopleDetailComponent implements OnInit {
  isMobile: boolean = false;
  apiKey:string = ''
  personDetail:any
  personMovieCreditsCast:any
  personMovieCreditsCrew:any
  personTvCreditsCrew:any
  personTvCreditsCast:any
  peopleId:number
  constructor(
    private router: ActivatedRoute,
    private httpClient: HttpClient,
    private breakpointObserver: BreakpointObserver,
  ) {this.apiKey = 'f184c0aac6c49d65bb5d14901645089c';}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.peopleId = params['id'];
      this.getPeopleDetails(this.peopleId);
      this.getMovieCredits(this.peopleId);
      this.getTvCredits(this.peopleId);
    })
  }
  getPeopleDetail(peopleId:number):Observable<any>{
    return this.httpClient.get(`https://api.themoviedb.org/3/person/${peopleId}?api_key=${this.apiKey}&language=en-US`)
  }
  getPeopleMovieCreditsDetail(peopleId:number):Observable<any>{
    return this.httpClient.get(`https://api.themoviedb.org/3/person/${peopleId}/movie_credits?api_key=${this.apiKey}&language=en-US`)
  }
  getPeopleTvCreditsDetail(peopleId:number):Observable<any>{
    return this.httpClient.get(`https://api.themoviedb.org/3/person/${peopleId}/tv_credits?api_key=${this.apiKey}&language=en-US`)
  }
  getPeopleDetails(peopleId:number){
    this.getPeopleDetail(peopleId).subscribe((data)=>{
      this.personDetail = data    
    })
  }
  getMovieCredits(peopleId:number){
    this.getPeopleMovieCreditsDetail(peopleId).subscribe((data)=>{
      this.personMovieCreditsCast = data.cast
      this.personMovieCreditsCrew = data.crew   
    })
  }
  getTvCredits(peopleId:number){
    this.getPeopleTvCreditsDetail(peopleId).subscribe((data)=>{
      this.personTvCreditsCast = data.cast
      this.personTvCreditsCrew = data.crew
    })
  }
}
