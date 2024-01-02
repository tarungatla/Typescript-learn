let a: string = "tarun";
let b: number = 7;
let c: boolean = false;
console.log(a);
console.log(b);
console.log(c);

// Any
let obj: any = { x: 0 };

// No compile time errors for below code
// obj.foo(); //
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;


// Return Type Annotations
function getFavoriteNumber(): number {
    return 7;
}
console.log(getFavoriteNumber())

async function getFavoriteNumberPromise(): Promise<number> {
    return 26;
}
console.log(getFavoriteNumberPromise());

// Contextual typing

const names = ["Tarun", "Bob",];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

// Object Types

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
printCoord({ x: 5, y: 10 });

// Option properties
function printName(obj: { first: string; last?: string }) {
    console.log(obj.first + " " + obj.last);
  }
  // Both OK
  printName({ first: "Tarun" });
  printName({ first: "Tarun", last: "Gatla" });
  
  
//   Union Types
  function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
//   printId({ myID: 22342 });


function print(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
}
print("tarun");
print(123);

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(['Tarun', 'Tarunkumar', 'Tarunkumar Gatla']);

// Type alias

type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCo(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
printCo({ x: 100, y: 100 });
  
// Literal Types

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
printText("Hello, world", "left");
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
//   printText("G'day, mate", "centre");

// Non-null Assertion Operator

function liveDangerously(x?: number | null) {
    // No error
    // x is not null
    console.log(x!.toFixed());
}
  
// Output:
// tarun
// 7
// false
// 7
// Promise { 26 }
// TARUN
// BOB
// TARUN
// BOB
// The coordinate's x value is 5
// The coordinate's y value is 10
// Tarun undefined
// Tarun Gatla
// Your ID is: 101
// Your ID is: 202
// TARUN
// 123
// Hello, Tarun and Tarunkumar and Tarunkumar Gatla
// The coordinate's x value is 100
// The coordinate's y value is 100