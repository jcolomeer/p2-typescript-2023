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
  let i = 1;
  for (const film of films) {
    html += `
    <div class="film">
        <img src=${film.poster} alt="poster">
        <div class="info">
            <a href="/individual-files/film${i}.html">${film.title}</a>
            <span class="year">${film.year}</span>
        </div>
    </div>         
    `;
    i++;
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

const headIndividual = (title: string) => `
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<style>
body{
    display: flex;
    flex-direction: row;
}
img{
    width: 12rem;
    height: 20rem;
    object-fit: contain;
    
}
.poster{
    display: flex;
    flex-direction: column;
    padding: 2rem;
}
.info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
}
.title{
    font-weight: bold;
    font-size: 18pt;
}
.film-title{
    font-size: 24pt;
}
.info span{
    padding: 0.5rem 0;
}
</style>
</head>
`;

export const renderIndividual = (film: Film) => {
  return `<!DOCTYPE html>
<html lang="en">
     ${headIndividual(film.title)}
     <body>
     <div class="poster"> 
     <img src=${film.poster} alt="poster">
         
     <span class="film-title">${film.title}</span>
     <span class="year">${film.year}</span>
 </div>
 <div class="info">
        <span class="title">Description</span>
        <span>${film.overview}</span>
        <span class="title">Release Date</span>
        <span>${film.release_date}</span>
        <span class="title">Rating</span>
        <span>${film.rating.average}</span>
        <span>(${film.rating.vote_count})</span>
    </div>

     </body>
    </html>
    `;
};
