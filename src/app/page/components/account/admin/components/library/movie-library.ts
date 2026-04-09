import { Component, OnInit, inject, signal } from '@angular/core';
import { 
  DxDataGridModule, 
  DxButtonModule, 
  DxSelectBoxModule,
  DxTemplateModule 
} from 'devextreme-angular';
import { MovieService } from '../../../../../../core/services/movie.service';
import { Movie } from '../../../../../../core/interfaces/movie.interfaces';

@Component({
  selector: 'app-movie-library',
  standalone: true,
  imports: [
    DxDataGridModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxTemplateModule
  ],
  templateUrl: './movie-library.html',
  styleUrl: './movie-library.scss'
})
export class MovieLibrary implements OnInit {
  private movieService = inject(MovieService);

  movies = signal<Movie[]>([]);
  
  genres = [
    'All Categories',
    'Sci-Fi Noir',
    'Arthouse',
    'Thriller',
    'Documentary',
    'Action',
    'Drama'
  ];

  releaseDates = [
    'Coming Soon (2024)',
    'Recent (2023)',
    'Classic',
    'All Time'
  ];

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies.set(data);
    });
  }

  onActionClick(movie: Movie) {
    console.log('Action for movie:', movie.title);
  }
}
