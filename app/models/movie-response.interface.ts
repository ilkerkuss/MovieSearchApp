import { MovieInterface } from ".";

export interface MovieResponseInterface {
  data: {
    pageNumber: number;
    pageCount: number;
    totalRecord: number;
    movies: MovieInterface[];
  };
}
