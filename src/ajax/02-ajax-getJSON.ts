import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";
// const url = "https://api.github.com/users?per_page=5";

const obs$ = ajax.getJSON(url, {
  "Content-Type": "application/json",
  token: "abc123",
});

obs$.subscribe(console.log);
