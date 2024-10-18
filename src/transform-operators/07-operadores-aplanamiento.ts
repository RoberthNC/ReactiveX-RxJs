import { fromEvent, map, mergeMap, tap, pluck, catchError, of } from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper
const peticionHttpLogin = (userPass: any) =>
  ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    pluck("response", "token"),
    catchError((err) => of("Error"))
  );

// Formulario
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPassword = document.createElement("input");
const submitBtn = document.createElement("button");

// Configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPassword.type = "password";
inputPassword.placeholder = "Contraseña";
inputPassword.value = "cityslicka";

submitBtn.innerHTML = "Ingresar";

form.append(inputEmail, inputPassword, submitBtn);
document.querySelector("body")?.append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, "submit").pipe(
  tap((e) => e.preventDefault()),
  map((event) => ({
    email: event.target[0].value,
    password: event.target[1].value,
  })),
  mergeMap(peticionHttpLogin)
);
submitForm$.subscribe(console.log);
