var cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
console.log(cats.boris);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 3] = "North";
    CardinalDirections[CardinalDirections["East"] = 7] = "East";
    CardinalDirections[CardinalDirections["South"] = 11] = "South";
    CardinalDirections[CardinalDirections["West"] = 12] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.West;
// logs 0
console.log(currentDirection);
