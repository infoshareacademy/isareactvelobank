interface Cat {
  name: 'Kicia',
  type: 'cat',
}

interface Dog {
  name: 'Burek',
  type: 'dog',
}

// interface Fish {
//   name: 'Złota rybka',
//   type: 'fish';
// }

type Animal = Cat | Dog;

declare const animal: Animal;

switch (animal.type) {
  case 'dog':
    console.log('To jest pies');
    break;
  case 'cat':
    console.log('To jest kot');
    break;
  default:
    const isNever: never = animal;
}