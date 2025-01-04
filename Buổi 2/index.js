// const myFunction = (x, y) => {
//     console.log(x + y);
// }

// myFunction(3, 4);

// Arrow function
const add = (x, y) => x + y;

let test = add(3, 4);
console.log(test);

// Template literals
let firstName = "Kiên";
let middleName = "Trung";
let lastName = "Đào";

let myFullName = `Tên đầy đủ của tôi là ${lastName} ${middleName} ${firstName}.`
console.log(myFullName);

let product = "Laptop";
let cost = 1500;
let VAT = 0.1;
let totalPrice = cost + cost * VAT;

let result = `Sản phẩm: ${product}
Gía tiền: $${cost}
VAT: ${VAT * 100}%
Tổng giá trị sản phẩm: $${totalPrice}`;

console.log(result);

// Array method
let numbers = [1, 2, 3, 4, 5];
// Method map
// let uppdatedNumbers = numbers.map((num) => num + 2);
// console.log(uppdatedNumbers);
// console.log(numbers);

// Method filters
// let filteredNumbers = numbers.filter((num) => num > 2);
// console.log(numbers);
// console.log(filteredNumbers);

// Method find
let foundNumber = numbers.find((num) => num % 2 == 0);
console.log(foundNumber);