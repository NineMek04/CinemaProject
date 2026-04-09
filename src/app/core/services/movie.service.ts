import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../interfaces/movie.interfaces';
import { MOCK_MOVIES } from '../../data/mock/MovieData/movie.data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovies(): Observable<Movie[]> {
    return of(MOCK_MOVIES);
  }

  getFeaturedMovie(): Observable<Movie | undefined> {
    return of(MOCK_MOVIES.find(m => m.isFeatured));
  }

  getRecentUploads(): Observable<Movie[]> {
    // Return all movies for now, sorted by upload date in a real app
    return of(MOCK_MOVIES);
  }
}
