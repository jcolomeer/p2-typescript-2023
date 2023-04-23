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

  get year() {
    return this.release_date.substring(0, 4);
  }
}

export const loadFilms = async (n: number) => {
  const pages = Math.ceil(n / 20); //cada peticion retorna 20 resultados
  const films: Array<Film> = [];
  for (let i = 0; i < pages; i++) {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=cd8e138e9fa603fa5424ad61b62d2d66&page=${i+1}`
    );
    const { page, results } = (await response.json()) as { page:number, results: any[] };
    for (const {
      title,
      original_language,
      overview,
      poster_path,
      release_date,
      vote_average,
      vote_count,
    } of results) {
      films.push(new Film(title, release_date, original_language, overview, `https://image.tmdb.org/t/p/original/${poster_path}`, {average: vote_average, vote_count}));
    }
  }
  return films;
};
