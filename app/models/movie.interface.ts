export interface MovieInterface {
  movieId: string;
  name: string;
  posterUrl: string;
  releaseYear: number;
  rating: number;
  genres: string[];
  director?: {
    directorId: string;
    directorName: string;
  };
  actors?: {
    actorId: string;
    actorName: string;
  }[];
  platforms?: {
    platformId: string;
    platformName: string;
    platformLogoUrl: string;
  }[];
  descriptionContent?: string;
}
