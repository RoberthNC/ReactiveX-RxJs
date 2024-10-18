import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpbinxx.org/delay/1";
// const url = "https://api.github.com/users?per_page=5";

const manejaError = (resp: AjaxError) => {
  console.warn("error: ", resp.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

const obs1$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs1$
//   .pipe(catchError(manejaError))
//   .subscribe((data) => console.log("getJSON:", data));
// obs2$
//   .pipe(catchError(manejaError))
//   .subscribe((data) => console.log("ajax:", data));

obs1$.pipe(catchError(manejaError)).subscribe({
  next: (val) => console.log("value: ", val),
  error: (err) => console.warn("error subscribe: ", err),
  complete: () => console.log("complete"),
});
// obs2$.subscribe((data) => console.log("ajax:", data));
