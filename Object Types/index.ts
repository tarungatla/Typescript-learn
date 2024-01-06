// Intersection Types

type Person = {
  name: string
} & (Male | Female)
type Male = {
  gender: 'male',
  salary: number,
}

type Female = {
  gender: 'female',
  weight: number,
}


function greet(person: Person) {
  console.log("Hello " + person.name);
  if (person.gender === 'male') {
    console.log(`Your salary is ${person.salary}`);
  }
  else {
    console.log(`Your weight is ${person.weight}`);
  }
}

greet({name:"Tarun",gender:"male",salary:100});

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: "blue", radius: 42 });

// Generic Object Types

interface Box<Type> {
  contents: Type;
}

let boxA: Box<string> = { contents: "hello" };
console.log(boxA.contents);


let boxB: Box<number> = { contents: 10 };
console.log(boxB.contents);


// Tuple Types

type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
  const a = pair[0];
  const b = pair[1];
  console.log(a, b)
  /*       OR       */
  const [c, d] = pair;     //Destructuring
  console.log(c, d);
}

doSomething(["Hii", 69]);

// Output:
// Hello Tarun
// Your salary is 100
// Color was blue
// Radius was 42
// hello
// 10
// Hii 69
// Hii 69