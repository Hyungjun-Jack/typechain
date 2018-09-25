class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age:number, gender: string){
    console.log("An Human is created.");
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const hjkim = new Human("Hyungjun Kim", 44, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}.`;
};

console.log(sayHi(hjkim));

export {};
