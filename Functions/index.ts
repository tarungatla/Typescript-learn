// The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”.

function greeter(fn: (a: string) => void) {
    fn("Hello, World");
  }
   
  function printToConsole(s: string) {
    console.log(s);
  }
   
greeter(printToConsole);
  
// Call Signatures : Function with properties(myFunc here)

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
   
  function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = "default description";
   
  doSomething(myFunc);
  

// Generic function
  
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}
  // s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);


// Inference

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
  }
   
  // Parameter 'n' is of type 'string'
  // 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed)

function longest<Type extends { length: number }>(a: Type, b: Type) { //Type has property length of type number
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
   
  // longerArray is of type 'number[]'
  const longerArray = longest([1, 2], [1, 2, 3]);
  // longerString is of type 'alice' | 'bob'
  const longerString = longest("alice", "bob");
  // Error! Numbers don't have a 'length' property
//   const notOK = longest(10, 100);


function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
  ) {
    if (obj.length >= minimum) {
      return obj;
    } else {
      return { length: minimum };
    }
}
  
const ans = minimumLength("Tarun", 6)
console.log(ans.length)

// Specifying Type Arguments

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

//Manually specifying Type Arguments
  const arr = combine<string | number>([1, 2, 3], ["hello"]);


//   parameter destructuring
  function sum({ a, b, c }: { a: number; b: number; c: number }) {
    console.log(a + b + c);
}
sum({a:1,b:1,c:1});

// Output:
// Hello, World
// default description returned true
// [ 1, 2, 3 ]
// 6
// 3