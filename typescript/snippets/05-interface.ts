interface UserInterface {
  name: string,
}

type UserType = {
  name: string,
}

interface Student extends UserInterface {
  surname: string,
  age: number,
}

interface Student2 extends UserType {
  surname: string,
  age: number,
}

// Interface można rozszerzać jest on ze sobą łączony
interface UserInterface {
  country: 'PL' | 'GB',
}

const test: Student = {
  name: 'Jan',
  surname: 'Nowak',
  age: 20,
  country: 'PL',
}

// ❌ W przypadku typów nie ma takiej możliwości
// type UserType {
//   country: 'PL' | 'GB',
// }

type Currency = 'PLN' | 'EUR';

interface Payment {
  amount: number,
  currency: Currency,
}


const payment_1 = {
  amount: 100,
  currency: 'PLN',
}

const payment_2: Payment = {
  amount: 5000,
  currency: 'EUR',
}

const payment_3: Payment = {
  amount: 5000,
  currency: 'USD' as Currency,
}
