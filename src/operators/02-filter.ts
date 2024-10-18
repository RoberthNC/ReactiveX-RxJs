import { range, filter, from, fromEvent, map } from "rxjs";

interface Personaje {
  tipo: string;
  nombre: string;
}

range(1, 10).pipe(
  filter((number, i) => {
    console.log("index: ", i);
    return number % 2 === 1;
  })
);
// .subscribe(console.log);

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

from<Personaje[]>(personajes).pipe(
  filter((character) => character.tipo === "heroe")
);
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code), // KeyboardEvent -> string
  filter((key) => key === "Enter")
);
keyup$.subscribe(console.log);
