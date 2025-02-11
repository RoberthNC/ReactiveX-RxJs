import { combineLatest, fromEvent, pluck } from "rxjs";

// const keyup$ = fromEvent(document, "keyup");
// const click$ = fromEvent(document, "click");

// combineLatest(keyup$.pipe(pluck("type")), click$.pipe(pluck("type"))).subscribe(
//   console.log
// );

const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "emailtest@gmail.com";
input1.placeholder = "******";

input2.type = "password";

document.querySelector("body")?.append(input1, input2);

// Helper
const getInputStream = (element: HTMLElement) =>
  fromEvent<KeyboardEvent>(element, "keyup").pipe(pluck("target", "value"));

combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(
  console.log
);
