import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../../core/services/movie.service';
import { Movie } from '../../../../core/interfaces/movie.interfaces';

@Component({
  selector: 'app-hero-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss',
})
export class HeroComponent implements OnInit {
  private movieService = inject(MovieService);
  featuredMovie?: Movie;

  ngOnInit(): void {
    this.movieService.getFeaturedMovie().subscribe(movie => {
      this.featuredMovie = movie;
    });
  }
}
