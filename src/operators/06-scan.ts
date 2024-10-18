import { from, reduce, scan } from "rxjs";

const numeros: number[] = [1, 2, 3, 4, 5];

const totalAcumulador = (accumator: number, currentValue: number): number =>
  accumator + currentValue;

// Reduce
from(numeros)
  .pipe(reduce(totalAcumulador, 0))
  .subscribe((val) => console.log("reduce: ", val));

// Scan
from(numeros)
  .pipe(scan(totalAcumulador, 0))
  .subscribe((val) => console.log("scan: ", val));
