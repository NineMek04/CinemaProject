import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError, tap } from 'rxjs';
import { Movie } from '../interfaces/movie.interfaces';
import { MOCK_MOVIES } from '../../data/mock/MovieData/movie.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/movies`;

  // Internal state for mock data persistence during session
  private _movies = signal<Movie[]>([...MOCK_MOVIES]);
  movies = this._movies.asReadonly();

  /**
   * Fetches all movies.
   * Hybrid Logic: Checks environment flag first. If false, attempts API call with mock fallback.
   */
  getMovies(): Observable<Movie[]> {
    if (environment.useMockData) {
      return of(this._movies());
    }

    return this.http.get<Movie[]>(this.apiUrl).pipe(
      tap(data => this._movies.set(data)),
      catchError(error => {
        console.warn('MovieService: API failed, falling back to mock data.', error);
        return of(this._movies());
      })
    );
  }

  addMovie(movie: Movie): Observable<Movie> {
    if (environment.useMockData) {
      const newId = (Math.max(...this._movies().map(m => parseInt(m.id) || 0)) + 1).toString();
      const movieWithId = { ...movie, id: newId };
      this._movies.update(list => [movieWithId, ...list]);
      return of(movieWithId);
    }

    return this.http.post<Movie>(this.apiUrl, movie).pipe(
      tap(newMovie => this._movies.update(list => [newMovie, ...list])),
      catchError(error => {
        console.error('MovieService: Create failed', error);
        throw error;
      })
    );
  }

  updateMovie(id: string, updates: Partial<Movie>): Observable<Movie> {
    if (environment.useMockData) {
      this._movies.update(list => list.map(m => m.id === id ? { ...m, ...updates } : m));
      const updated = this._movies().find(m => m.id === id)!;
      return of(updated);
    }

    return this.http.patch<Movie>(`${this.apiUrl}/${id}`, updates).pipe(
      tap(updatedMovie => this._movies.update(list => list.map(m => m.id === id ? updatedMovie : m))),
      catchError(error => {
        console.error('MovieService: Update failed', error);
        throw error;
      })
    );
  }

  deleteMovie(id: string): Observable<void> {
    if (environment.useMockData) {
      this._movies.update(list => list.filter(m => m.id !== id));
      return of(undefined);
    }

    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this._movies.update(list => list.filter(m => m.id !== id))),
      catchError(error => {
        console.error('MovieService: Delete failed', error);
        throw error;
      })
    );
  }

  getFeaturedMovie(): Observable<Movie | undefined> {
    if (environment.useMockData) {
      return of(this._movies().find(m => m.isFeatured));
    }

    return this.http.get<Movie>(`${this.apiUrl}/featured`).pipe(
      catchError(() => of(this._movies().find(m => m.isFeatured)))
    );
  }

  getRecentUploads(): Observable<Movie[]> {
    if (environment.useMockData) {
      return of(this._movies().slice(0, 5));
    }

    return this.http.get<Movie[]>(`${this.apiUrl}/recent`).pipe(
      catchError(() => of(this._movies().slice(0, 5)))
    );
  }
}
