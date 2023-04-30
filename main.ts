import { writeFile } from "fs/promises";
import { loadFilms } from "./films.js";
import { render, renderIndividual } from "./render_films.js";
import { mkdirSync } from "fs";

const films = await loadFilms(50);
let i = 1;
mkdirSync("./individual-files", { recursive: true });
for (const film of films) {
  writeFile(`./individual-files/film${i}.html`, renderIndividual(film));
  i++;
}
const html = render(films);
writeFile("index.html", html);
