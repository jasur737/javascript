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
// let fruits = ['apple', 'banana', 'kiwi', 'apple'];
// let index = fruits.indexOf("kiwi", 1);
// console.log(index);

// let notFound = fruits.indexOf("grape");
// console.log(notFound);

// function salomBer (ism) {
//     console.log("salom, " + ism + "!");
// }
// salomBer("Ali")
// function myfunction (a, b) {
//     console.log(a + b);
// };
// myfunction(12)
// function f (a, b) {
//     return a+b; 
   
// }
// console.log(f(12,8))

// function colculator () {
//     let num1 = prompt("birinchi raqamni kiriting")
//     let nums2 = prompt("ikkinchi raqamni kiriting")
//     let aperator = prompt("arifmetik amalni kiriting")

//     num1 = Number(num1)
//     nums2 = Number(nums2)
//     let answer;

//     if (aperator == "+") {
//    return answer = num1 + nums2;
//     }
//     else if (aperator == "-") {
//         return answer = num1 - nums2;
//     }
//     else if (aperator == "/") {
//         return answer = num1 / nums2;
//     }
//     else if (aperator == "*") {
//         return answer = num1 * nums2;
//     }
//     else {
//         alert ("xatolik");
//     }
// }
// alert(colculator());


const nums = [2, 4, 6, 8]
console.log(nums.every((num) => num % 2 === 0))

const users = ["tom", "john", "george"]
console.log(users.find ((user) => user === "tom"))

const ages = [10, 14, 18, 24];
console.log(ages.some((age) => age == 18))

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.reduce((a, b) => a+b))

const fructis = ["apple", "banana", "cherry"];
fructis.forEach((fructis, index) => {
    console.log(index + 1 + ". " +fructis);
});

const numbers1= [1, 2, 4, 6, 8 ];
console.log(numbers1.map((number) => number * number));

const scores = [20, 30, 60, 80,];
console.log(scores.filter((score) => score >= 50));