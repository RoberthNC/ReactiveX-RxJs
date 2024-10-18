import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5);
const obs$ = of(...[1, 2, 3, 4, 5], 6, 7, 8);
// const obs$ = of<any>(
//   [1, 2],
//   { a: 1, b: 2 },
//   function () {},
//   true,
//   Promise.resolve(true)
// );

console.log("Inicio del obs");
obs$.subscribe((next) => {
  console.log("next: ", next),
    null,
    () => console.log("terminamos la secuencia");
});
console.log("Fin del obs");
