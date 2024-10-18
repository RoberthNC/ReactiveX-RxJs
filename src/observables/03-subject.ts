import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("complete"),
};

const intervalo$ = new Observable<number>((subs) => {
  const interval = setInterval(() => {
    subs.next(Math.random());
  }, 5000);
  return () => {
    clearInterval(interval);
    console.log("intervalo destruído");
  };
});

const subject$ = new Subject();

intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
}, 3500);
