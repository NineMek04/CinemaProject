import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../../core/interfaces/movie.interfaces';
import { ActivatedRoute } from '@angular/router';
import { MOCK_MOVIES } from '../../../../data/mock/MovieData/movie.data';

@Component({
  selector: 'app-movie-details-component',
  imports: [],
  templateUrl: './movie-details-component.html',
  styleUrl: './movie-details-component.scss',
})
export class MovieDetailsComponent 
  implements OnInit {
  
  movieDetail: Movie | undefined; // ตัวแปรเก็บข้อมูลหนังที่จะแสดง

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // 1. อ่านค่า 'slug' จาก URL
    this.route.paramMap.subscribe(params => {
      const slugFromUrl = params.get('slug');

      if (slugFromUrl) {
        // 2. ค้นหาหนังใน MOCK_MOVIES ที่แปลงชื่อแล้วตรงกับ Slug ใน URL
        this.movieDetail = MOCK_MOVIES.find(m => this.createSlug(m.title) === slugFromUrl);
      }
    });
  }

  // ต้องเอาฟังก์ชันแปลง Slug มาไว้หน้านี้ด้วย เพื่อใช้เทียบค่าตอนค้นหา
  createSlug(title: string): string {
    return title.toLowerCase().replace(/[^a-zA-Z0-9ก-๙]+/g, '-').replace(/^-+|-+$/g, '');
  }
}