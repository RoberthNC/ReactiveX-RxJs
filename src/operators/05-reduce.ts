import { interval, reduce, take, tap } from "rxjs";

interval(500)
  .pipe(
    take(6),
    tap(console.log),
    reduce((acc, current) => acc + current, 0)
  )
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
  });
