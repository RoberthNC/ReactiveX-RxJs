import { map, range, tap } from "rxjs";

const numbers$ = range(1, 5);

numbers$
  .pipe(
    tap((x) => console.log("antes: ", x)),
    map((val) => val * 10),
    tap({
      next: (value) => console.log("despues: ", value),
      complete: () => console.log("se terminó todo"),
    })
  )
  .subscribe((val) => console.log("subs: ", val));
