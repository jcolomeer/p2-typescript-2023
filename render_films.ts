import { Film } from "./films.js";
const head = (title: string) => `
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<style>
.film img{
    width: 6rem;
    height: 10rem;
    object-fit: contain;
}
.film{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.info{
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
}
.wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>
</head>
`;
const renderFilms = (films: Array<Film>) => {
  let html = "";

  for (const film of films) {
    html +=`
    <div class="film">
        <img src=${film.poster} alt="poster">
        <div class="info">
            <span class="title">${film.title}</span>
            <span class="year">${film.year}</span>
        </div>
    </div>         
    `;
  }
  return html;
};

export const render = (films: Array<Film>) => {
  return `<!DOCTYPE html>
<html lang="en">
     ${head("film list")}
     <body>
        <div class="wrapper">
     ${renderFilms(films)}
        </div>
     </body>
    </html>
    `;
};
