import { writeFile } from "fs/promises";
import { loadFilms } from "./films.js";
import { render, renderIndividual } from "./render_films.js";


const films = await loadFilms(50);
let i=1;
for (const film of films){
    writeFile(`film${i}.html`, renderIndividual(film));
    i++;
}
const html = render(films);
writeFile("index.html", html);

