import { Extra } from "./extra.model";
import { Movie } from "./movie.model";
import { Original } from "./original.model";

export interface UserPayload {
  job_id: number;
  movie: Movie;
  original: Original;
  url_full_movie: string;
  url_password: string;
  rating: number;
  extra: Extra;
}
