import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, of, pluck } from "rxjs";

const url = "https://api.github.com/users?per_page=5";

const atrapaError = (error: AjaxError) => {
  console.warn("error en: ", error);
  return of([]);
};

ajax(url)
  .pipe(pluck("response"), catchError(atrapaError))
  .subscribe(console.log);
