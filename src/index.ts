interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "bewan",
  age: 41,
  gender: "male"
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
