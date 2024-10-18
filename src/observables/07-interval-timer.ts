import { interval, timer } from "rxjs";

const observer = {
  next: (val: any) => console.log("next: ", val),
  complete: () => console.log("complete"),
};

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(0);
const timer$ = timer(hoyEn5);

console.log("inicio");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("fin");
