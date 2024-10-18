import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

ajax({
  url,
  method: "POST",
  headers: {
    "mi-token": "abc123",
  },
  body: {
    id: 1,
    nombre: "Roberto",
  },
}).subscribe(console.log);
