// let user = {
//     name:prompt ("what is your name?"),
//     age: 20,
//     isStudent: false,
// };
// user.country ="USA";
// console.log(user);

// let stringValue = "!@#$%^&*()"
// console.log("String:", stringValue);

// let numberValue = 1274649249
// console.log("Nuber:", numberValue);

// let booleanValue = "false"
// console.log("Boolean:", booleanValue);

// let nullValue = null
// console.log('Null', nullValue);

// let undefinedValue = undefined
// console.log("Undefined", undefinedValue);

// let bigintValue = 33339758392224959559999n
// console.log("Bigint", bigintValue);

// let symbolValue = Symbol("hcybubu")
// console.log("Symbol", symbolValue);

// const fructis = ["apple", "banana", "pineapple", "orange"];
// fructis.unshift("kiwi")
// fructis.pop()
// console.log(fructis);
// let l = (999,9)
// console.log(l)

// const nums = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
// const nums2 = [10, 11, 12, 13, 14, 15, 16, 17];
// const allnums = nums.concat(nums2);
// console.log(allnums)
// const nums3 = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
// console.log(nums3.join("!"))
// const nums4 = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
// nums4.splice(4, 0, "hii")
// console.log(nums4)
''
let fruits = ['apple', 'banana', 'kiwi', 'apple'];
let index = fruits.indexOf("kiwi", 1);
console.log(index);

let notFound = fruits.indexOf("grape");
console.log(notFound);

function salomBer (ism) {
    console.log("salom, " + ism + "!");
}
salomBer("Ali")