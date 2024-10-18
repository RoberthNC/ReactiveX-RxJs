import { from, of } from "rxjs";

// * of = toma argumentos y genera una secuencia
// * from = array, promise, iterable, observable

const obs = {
  next: (val: any) => console.log("next: ", val),
  complete: () => console.log("complete"),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const iterable = miGenerador();

// for (let id of iterable) {
//   console.log(id);
// }

from(iterable).subscribe(obs);

// const src$ = from([1, 2, 3, 4, 5]);
// const src$ = of(...[1, 2, 3, 4, 5]);
// const src$ = from("Roberto");
// const src$ = of("Roberto");

const src$ = from<Promise<Response>>(
  fetch("https://api.github.com/users/klerith")
);

// src$.subscribe(async (res) => {
//   const data = await res.json();
//   console.log(data);
// });
// src$.subscribe(obs);
