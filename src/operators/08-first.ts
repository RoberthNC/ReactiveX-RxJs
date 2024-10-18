import { first, fromEvent } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(first<PointerEvent>((event) => event.clientY >= 150)).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
});
