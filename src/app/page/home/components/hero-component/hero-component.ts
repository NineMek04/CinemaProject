import { Component, OnInit, inject, signal } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';
import { Movie } from '../../../../core/interfaces/movie.interfaces';

@Component({
  selector: 'app-hero-component',
  standalone: true,
  imports: [],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss',
})
export class HeroComponent implements OnInit {
  private movieService = inject(MovieService);
  featuredMovie = signal<Movie | undefined>(undefined);

  ngOnInit(): void {
    this.movieService.getFeaturedMovie().subscribe(movie => {
      this.featuredMovie.set(movie);
    });
  }
}
