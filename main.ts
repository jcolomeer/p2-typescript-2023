/* import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadUsers } from "./users.js";

const users = await loadUsers(100);
const html = render(users);
await writeFile('users.html', html); */

import { loadFilms } from "./films.js";

const films = await loadFilms(35);
console.log(films[20]);