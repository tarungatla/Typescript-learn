function identity(arg) {
    return arg;
}
var a = identity("Tarun");
var b = identity("Tarun"); //Compiler will identify the type of b as string
function identity1(arg) {
    return arg;
}
var myIdentity = identity1;
console.log(myIdentity(100));
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
console.log(loggingIdentity('Tarun'));
