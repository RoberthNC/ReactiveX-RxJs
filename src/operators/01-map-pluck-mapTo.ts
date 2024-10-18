import { fromEvent, map, mapTo, pluck, range } from "rxjs";

// range(1, 5)
//   .pipe(map<number, string>((value) => `${value * 10}`))
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyupMap$ = keyup$;
const keyupPluck$ = keyup$;
const keyupMapTo = keyup$;

keyup$.subscribe((event) => console.log("keyupEvent: ", event));
keyupMap$
  .pipe(map((event) => event.key))
  .subscribe((key) => console.log("keyupMap: ", key));
keyupPluck$
  .pipe(pluck("key"))
  .subscribe((key) => console.log("keyupPluck: ", key));
keyupMapTo
  .pipe(mapTo("tecla presionada"))
  .subscribe((something) => console.log("keyupMapTo: ", something));
