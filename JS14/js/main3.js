// Arrays

const equipShelfA = ["basketball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);

//or

console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept);
console.log(clothesDept);

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportStore = [equipDept, clothesDept];
console.log(sportStore);
console.log(sportStore[0][0][1]);
console.log(sportStore);
console.log(sportStore[1][1][0]);
