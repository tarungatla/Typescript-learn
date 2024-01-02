function identity<Type>(arg: Type): Type {
    return arg;
}

let a = identity<string>("Tarun");
let b = identity("Tarun"); //Compiler will identify the type of b as string

//Generic types

interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}
function identity1<Type>(arg: Type): Type {
    return arg;
}
let myIdentity: GenericIdentityFn<number> = identity1;

console.log(myIdentity(100));

//Generic constraints

interface Lengthwise { //Type will now contain length property
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
console.log(loggingIdentity('Tarun')); 


function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
   
  let x = { a: 1, b: 2, c: 3, d: 4 };
   
  getProperty(x, "a");
//   getProperty(x, "m"); ----> Will give error as property 'm' is not present in object x

// The keyof operator takes an object type and produces a string or numeric literal union of its keys.

type Point = { x: number; y: number };
type P = keyof Point;  // Same as type P = "x" | "y":


// Indexed Access Types

type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; //type Age = number

// Template Literal Types

type first = "Tarun" | "TARUN";
type last = "Tarunkumar" | "TARUNKUMAR";
 
type full = `${first | last} Gatla`;
//Same as -> type full = "Tarun Gatla" | "TARUN Gatla" | "Tarunkumar Gatla" | "TARUNKUMAR Gatla"