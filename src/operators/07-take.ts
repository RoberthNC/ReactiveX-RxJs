import { from, interval, take } from "rxjs";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interval(1000)
  .pipe(take(3))
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
  });

from(numeros)
  .pipe(take(5))
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
  });
