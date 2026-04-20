import { Component, OnInit, inject } from '@angular/core';
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

  movies = this.movieService.movies;
  
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
    this.movieService.getMovies().subscribe();
  }

  onRowUpdating(e: any) {
    const id = e.key.id;
    const updates = e.newData;
    this.movieService.updateMovie(id, updates).subscribe();
  }

  onRowInserting(e: any) {
    const newMovie = e.data as Movie;
    this.movieService.addMovie(newMovie).subscribe();
  }

  onRowRemoving(e: any) {
    const id = e.key.id;
    this.movieService.deleteMovie(id).subscribe();
  }

  onActionClick(movie: Movie) {
    console.log('Action for movie:', movie.title);
    // Could open a custom popup here if needed
  }
}
