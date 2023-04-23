// import { writeFile } from "fs/promises";
// import { render } from "./render.js";
// import { loadUsers } from "./users.js";

// const users = await loadUsers(100);
// const html = render(users);
// await writeFile('users.html', html);

import { writeFile, writeFileSync } from "fs";
import { loadFilms } from "./films.js";
import { render } from "./render_films.js";


const films = await loadFilms(35);
const html = render(20);
writeFileSync("film_list.html", html);