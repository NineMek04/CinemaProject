export interface Movie {
    id: string;
    title: string;
    description: string;
    genre: string;
    year: number;
    duration: string;
    rating: number;
    ageRating: string;
    posterPath: string;
    backdropPath: string;
    
    // Admin specific metadata
    uploadedDate: string;
    status: 'PUBLISHED' | 'DRAFT' | 'PENDING';
    views: string;
    isFeatured?: boolean;
}

export interface CastMember {
    name: string;
    role: string;
    imagePath: string;
}

export interface Trailer {
    title: string;
    thumbnail: string;
    duration: string;
    relativeTime: string;
}
