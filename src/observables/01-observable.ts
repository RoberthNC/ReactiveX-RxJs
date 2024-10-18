import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("complete"),
};

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");
  // const a = undefined;
  // a.nombre = "Roberto";
  subs.complete();
  subs.next("Nueva emisión después del complete");
});

obs$.subscribe(observer);

// obs$.subscribe(
//   (valor) => console.log("next: ", valor),
//   (error) => console.warn("error xd: ", error),
//   () => console.info("completado")
// );
