// Dostępne wbudowane typy pomocniczne "https://www.typescriptlang.org/docs/handbook/utility-types.html"

interface Cars {
  id: number;
  model: string;
  brand: string;
}

type PartialCars = Partial<Cars>;

interface User {
  email?: string;
}

/* Proszę zwrócić uwagę na typ RequiredUser który zawiera 3 pola a nie 1
 * ponieważ łączy się z interface z pliku "generic-types.ts"
*/
type RequiredUser = Required<User>;

type PickCars = Pick<Cars, 'model'>
type OmitCars = Omit<Cars, 'id'>


interface ExampleStudent {
  name?: string,
  number?: number,
}


// Typy pomocniczne można konstrułować własne oraz można je łączyć
type Reveal<T> = { [P in keyof T]: T[P] }
type RequiredFields<T, K extends keyof T> = Reveal<
  Required<Pick<T, K>> & Omit<T, K>
>
type StudentNameRequired = RequiredFields<ExampleStudent, 'name'>
