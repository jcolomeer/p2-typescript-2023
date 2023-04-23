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
const renderFilms = (n: number) => {
  let html = "";

  for (let i = 0; i < n; i++) {
    html += `
    <div class="film">
        <img src="https://image.tmdb.org/t/p/original/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg" alt="poster">
        <div class="info">
            <span class="title">Lorem ipsum dolor sit</span>
            <span class="year">2019</span>
        </div>
    </div>         
    `;
  }
  return html;
};

export const render = (n: number) => {
  return `<!DOCTYPE html>
<hmtl lang="en">
     ${head("film list")}
     <body>
        <div class="wrapper">
     ${renderFilms(n)}
        </div>
     </body>
    </html>
    `;
};
