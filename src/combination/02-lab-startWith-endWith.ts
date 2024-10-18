import { endWith, startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

const loadingDiv = document.createElement("div");
loadingDiv.setAttribute("class", "loading");
loadingDiv.innerHTML = "Cargando...";

// Referencias
const body = document.querySelector("body");

// Stream
ajax
  .getJSON("https://reqres.in/api/users/2?delay=3")
  .pipe(startWith(true), endWith(false))
  .subscribe((resp) => {
    if (resp) {
      body?.append(loadingDiv);
    } else {
      loadingDiv.remove();
    }
    console.log(resp);
  });
