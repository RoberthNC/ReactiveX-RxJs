import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log("Hola mundo");
const saludar2 = (nombre: any) => console.log(`Hola: ${nombre}`);

asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, "Roberto");

const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state: ", state);
    this.schedule(state! + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
