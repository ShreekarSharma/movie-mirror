import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// app.module.ts
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/main/carousel/carousel.component';
// Movies
import { PopularmoviesComponent } from './components/main/movies/popularmovies/popularmovies.component';
import { NowplayingmoviesComponent } from './components/main/movies/nowplayingmovies/nowplayingmovies.component';
import { TopratedmoviesComponent } from './components/main/movies/topratedmovies/topratedmovies.component';
import { UpcomingmoviesComponent } from './components/main/movies/upcomingmovies/upcomingmovies.component';
import { TrendingtodaymoviesComponent } from './components/main/movies/trendingtodaymovies/trendingtodaymovies.component';
import { TrendingthisweekmoviesComponent } from './components/main/movies/trendingthisweekmovies/trendingthisweekmovies.component';
import { HighestgrossingmoviesComponent } from './components/main/movies/highestgrossingmovies/highestgrossingmovies.component';
import { MaximumvotedmoviesComponent } from './components/main/movies/maximumvotedmovies/maximumvotedmovies.component';
import { MoviedetailComponent } from './components/main/movies/moviedetail/moviedetail.component';
// TV Shows
import { PopulartvshowsComponent } from './components/main/tvshows/populartvshows/populartvshows.component';
import { TopratedtvshowsComponent } from './components/main/tvshows/topratedtvshows/topratedtvshows.component';
import { AiringtodaytvshowsComponent } from './components/main/tvshows/airingtodaytvshows/airingtodaytvshows.component';
import { OntheairtvshowsComponent } from './components/main/tvshows/ontheairtvshows/ontheairtvshows.component';
import { MaximumvotedtvshowsComponent } from './components/main/tvshows/maximumvotedtvshows/maximumvotedtvshows.component';
import { TrendingtodaytvshowsComponent } from './components/main/tvshows/trendingtodaytvshows/trendingtodaytvshows.component';
import { TrendingthisweektvshowsComponent } from './components/main/tvshows/trendingthisweektvshows/trendingthisweektvshows.component';
import { TvshowdetailComponent } from './components/main/tvshows/tvshowdetail/tvshowdetail.component';
// People
import { PeopleDetailComponent } from './components/main/people-detail/people-detail.component';
//
import { HorizontalScrollDirective } from './directives/horizontal-scroll.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './components/main/search/search.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SeasonsepisodesComponent } from './components/main/tvshows/tvshowdetail/seasonsepisodes/seasonsepisodes.component';
import { GenresComponent } from './components/main/genres/genres.component';
import { GenremoviesComponent } from './components/main/movies/genremovies/genremovies.component';
import { GenretvshowsComponent } from './components/main/tvshows/genretvshows/genretvshows.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CarouselComponent,
    PopularmoviesComponent,
    NowplayingmoviesComponent,
    PopulartvshowsComponent,
    TopratedmoviesComponent,
    TopratedtvshowsComponent,
    AiringtodaytvshowsComponent,
    OntheairtvshowsComponent,
    UpcomingmoviesComponent,
    TrendingtodaymoviesComponent,
    TrendingthisweekmoviesComponent,
    MoviedetailComponent,
    TvshowdetailComponent,
    HorizontalScrollDirective,
    HighestgrossingmoviesComponent,
    MaximumvotedmoviesComponent,
    MaximumvotedtvshowsComponent,
    TrendingtodaytvshowsComponent,
    TrendingthisweektvshowsComponent,
    PeopleDetailComponent,
    SearchComponent,
    PagenotfoundComponent,
    SeasonsepisodesComponent,
    GenresComponent,
    GenremoviesComponent,
    GenretvshowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch()), BreakpointObserver],
  bootstrap: [AppComponent],
})
export class AppModule {}
