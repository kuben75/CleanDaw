

interface IGoogleReview {
    author_name: string;
    rating: number;
    text: string;
    time: number;
    profile_photo_url: string;
}

export interface IGooglePlacesResponse {
    result: {
        name: string;
        rating: number;
        user_ratings_total: number;
        reviews: IGoogleReview[];
    };
    status: string;
}