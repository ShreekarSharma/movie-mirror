import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MoviedetailComponent } from './components/main/movies/moviedetail/moviedetail.component';
import { TvshowdetailComponent } from './components/main/tvshows/tvshowdetail/tvshowdetail.component';
import { TopratedmoviesComponent } from './components/main/movies/topratedmovies/topratedmovies.component';
import { PopularmoviesComponent } from './components/main/movies/popularmovies/popularmovies.component';
import { UpcomingmoviesComponent } from './components/main/movies/upcomingmovies/upcomingmovies.component';
import { NowplayingmoviesComponent } from './components/main/movies/nowplayingmovies/nowplayingmovies.component';
import { TrendingthisweekmoviesComponent } from './components/main/movies/trendingthisweekmovies/trendingthisweekmovies.component';
import { TrendingtodaymoviesComponent } from './components/main/movies/trendingtodaymovies/trendingtodaymovies.component';
import { HighestgrossingmoviesComponent } from './components/main/movies/highestgrossingmovies/highestgrossingmovies.component';
import { MaximumvotedmoviesComponent } from './components/main/movies/maximumvotedmovies/maximumvotedmovies.component';
import { TopratedtvshowsComponent } from './components/main/tvshows/topratedtvshows/topratedtvshows.component';
import { PopulartvshowsComponent } from './components/main/tvshows/populartvshows/populartvshows.component';
import { AiringtodaytvshowsComponent } from './components/main/tvshows/airingtodaytvshows/airingtodaytvshows.component';
import { OntheairtvshowsComponent } from './components/main/tvshows/ontheairtvshows/ontheairtvshows.component';
import { MaximumvotedtvshowsComponent } from './components/main/tvshows/maximumvotedtvshows/maximumvotedtvshows.component';
import { TrendingtodaytvshowsComponent } from './components/main/tvshows/trendingtodaytvshows/trendingtodaytvshows.component';
import { TrendingthisweektvshowsComponent } from './components/main/tvshows/trendingthisweektvshows/trendingthisweektvshows.component';
import { PeopleDetailComponent } from './components/main/people-detail/people-detail.component';
import { SearchComponent } from './components/main/search/search.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SeasonsepisodesComponent } from './components/main/tvshows/tvshowdetail/seasonsepisodes/seasonsepisodes.component';
import { GenresComponent } from './components/main/genres/genres.component';
import { GenremoviesComponent } from './components/main/movies/genremovies/genremovies.component';
import { GenretvshowsComponent } from './components/main/tvshows/genretvshows/genretvshows.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'home', component: MainComponent},
  // Movies
  {path:'movies/top-rated/:page',component:TopratedmoviesComponent},
  {path:'movies/popular/:page',component:PopularmoviesComponent},
  {path:'movies/highest-grossing/:page',component:HighestgrossingmoviesComponent},
  {path:'movies/maximum-voted/:page',component:MaximumvotedmoviesComponent},
  {path:'movies/trending-today/:page',component:TrendingtodaymoviesComponent},
  {path:'movies/trending-this-week/:page',component:TrendingthisweekmoviesComponent},
  {path:'movies/now-playing/:page',component: NowplayingmoviesComponent},
  {path:'movies/upcoming/:page',component: UpcomingmoviesComponent},
  {path:'movies/genre/:genreName/:genreId/:page',component: GenremoviesComponent},
  {path:'movie/:id', component: MoviedetailComponent},
  // TV Shows
  {path:'tv/top-rated/:page',component:TopratedtvshowsComponent},
  {path:'tv/popular/:page',component:PopulartvshowsComponent},
  {path:'tv/maximum-voted/:page',component:MaximumvotedtvshowsComponent},
  {path:'tv/trending-today/:page',component:TrendingtodaytvshowsComponent},
  {path:'tv/trending-this-week/:page',component:TrendingthisweektvshowsComponent},
  {path:'tv/airing-today/:page',component: AiringtodaytvshowsComponent},
  {path:'tv/on-the-air/:page',component: OntheairtvshowsComponent},
  {path:'tv/genre/:genreName/:genreId/:page',component:GenretvshowsComponent},
  {path:'tv/:id', component: TvshowdetailComponent},
  {path:'tv/:id/season/:seasonNumber', component: SeasonsepisodesComponent},
  // People
  {path:'people/:id', component: PeopleDetailComponent},
  // Genre
  {path:'genres', component: GenresComponent},
  // Search
  {path:'search/:searchQuery/:page', component: SearchComponent},
  {path:'**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
