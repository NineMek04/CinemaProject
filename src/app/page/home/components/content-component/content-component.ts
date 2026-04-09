import { Component, OnInit, inject, signal } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';
import { Movie } from '../../../../core/interfaces/movie.interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-component',
  standalone: true,
  imports: [RouterLink],
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



  // ฟังก์ชันแปลง "NEON HORIZON" -> "neon-horizon"
  createSlug(title: string): string {
    return title
      .toLowerCase() // ทำเป็นตัวเล็ก
      .replace(/[^a-zA-Z0-9ก-๙]+/g, '-') // แทนที่อักขระพิเศษและช่องว่างด้วยขีดกลาง (รองรับภาษาไทยด้วย)
      .replace(/^-+|-+$/g, ''); // ลบขีดกลางที่อาจติดอยู่หัวท้ายทิ้ง
  }
}
