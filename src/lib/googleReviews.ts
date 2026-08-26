import { IGooglePlacesResponse } from "@/types/google.types";

export async function getGoogleReviews(): Promise<IGooglePlacesResponse['result'] | null> {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if(!apiKey || !placeId) {
        return null;
    }

    try {
        const res = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}&language=pl`,
            { next: { revalidate: 86400 } }
        );
        const data: IGooglePlacesResponse = await res.json();

        if(data.status === 'OK') {
            return data.result;
        }
        return null;
    } catch {
        return null;
    }
}