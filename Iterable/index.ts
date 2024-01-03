let list = [4, 5, 6];
for (let i in list) { //Returns keys 
  console.log(i); // "0", "1", "2", 
}
for (let i of list) { //Returns values
  console.log(i); // 4, 5, 6
}

let pets = new Set(["Cat", "Dog", "Hamster"]);

pets.forEach(pet => console.log(pet));

    