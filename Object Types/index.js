function greet(person) {
    return "Hello " + person.name;
}
console.log(greet({ name: "Tarun", age: 20 }));
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
    var c = pair[0], d = pair[1];
    console.log(c, d);
}
doSomething(["Hii", 69]);
