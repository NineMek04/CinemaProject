import { Component, OnInit, inject, signal } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';
import { Movie } from '../../../../core/interfaces/movie.interfaces';

@Component({
  selector: 'app-content-component',
  standalone: true,
  imports: [],
  templateUrl: './content-component.html',
  styleUrl: './content-component.scss',
})
export class ContentComponent implements OnInit {
  private movieService = inject(MovieService);
  
  featuredMovie = signal<Movie | undefined>(undefined);
  movies = signal<Movie[]>([]);

  ngOnInit(): void {
    this.movieService.getFeaturedMovie().subscribe(movie => {
      this.featuredMovie.set(movie);
    });

    this.movieService.getMovies().subscribe(list => {
      this.movies.set(list);
    });
  }
}
