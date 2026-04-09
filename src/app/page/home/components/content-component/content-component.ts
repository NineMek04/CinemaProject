import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../../core/services/movie.service';
import { Movie } from '../../../../core/interfaces/movie.interfaces';

@Component({
  selector: 'app-content-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-component.html',
  styleUrl: './content-component.scss',
})
export class ContentComponent implements OnInit {
  private movieService = inject(MovieService);
  
  featuredMovie?: Movie;
  movies: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getFeaturedMovie().subscribe(movie => {
      this.featuredMovie = movie;
    });

    this.movieService.getMovies().subscribe(list => {
      this.movies = list;
    });
  }
}
