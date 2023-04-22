// https://api.themoviedb.org/3/trending/movie/week?api_key=cd8e138e9fa603fa5424ad61b62d2d66&page=1
//poster https://image.tmdb.org/t/p/original/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg

export class Film {
  constructor(
    public title: string,
    public release_date: string,
    public language: string,
    public overview: string,
    public poster: string,
    public rating: {
      average: number;
      vote_count: number;
    }

  ) {}

  get year(){
    return this.release_date.substring(0, 4);
  }
}
