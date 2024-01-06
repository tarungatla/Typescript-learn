// Intersection Types
function greet(person) {
    console.log("Hello " + person.name);
    if (person.gender === 'male') {
        console.log("Your salary is ".concat(person.salary));
    }
    else {
        console.log("Your weight is ".concat(person.weight));
    }
}
greet({ name: "Tarun", gender: "male", salary: 100 });
function draw(circle) {
    console.log("Color was ".concat(circle.color));
    console.log("Radius was ".concat(circle.radius));
}
draw({ color: "blue", radius: 42 });
var boxA = { contents: "hello" };
console.log(boxA.contents);
var boxB = { contents: 10 };
console.log(boxB.contents);
function doSomething(pair) {
    var a = pair[0];
    var b = pair[1];
    console.log(a, b);
    /*       OR       */
    var c = pair[0], d = pair[1]; //Destructuring
    console.log(c, d);
}
doSomething(["Hii", 69]);
// Output:
// Hello Tarun
// Color was blue
// Radius was 42
// hello
// 10
// Hii 69
// Hii 69
