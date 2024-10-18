import {
  debounceTime,
  fromEvent,
  map,
  mergeAll,
  mergeMap,
  pluck,
  switchMap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

// Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body?.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: any) => {
  console.log(usuarios);
  orderList.innerHTML = "";
  for (const usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = usuario.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "Ver Página";
    anchor.target = "_blank";
    li.append(img);
    li.append(usuario.login + " ");
    li.append(anchor);
    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
  debounceTime(500),
  pluck("target", "value"),
  map((texto) => ajax.getJSON(`https://api.github.com/users?q=${texto}`)),
  mergeAll()
);
// .subscribe(mostrarUsuarios);

const url = "http://httpbin.org/delay/1?=''";
input$
  .pipe(
    pluck("target", "value"),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
