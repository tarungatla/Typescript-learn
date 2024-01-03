var list = [4, 5, 6];
for (var i in list) { //Returns keys 
    console.log(i); // "0", "1", "2", 
}
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) { //Returns values
    var i = list_1[_i];
    console.log(i); // 4, 5, 6
}
var pets = new Set(["Cat", "Dog", "Hamster"]);
pets.forEach(function (pet) { return console.log(pet); });
