// let a = "12"
// let b = "3"
// let x = a + b
// console.log(typeof(x))

// if (a.length > b.length) {
//   x = b + a + b
//   console.log(b + a + b)
// } else {
//   x = a + b + a
//   console.log(a + b + a)
// }

// console.log(x)

// while (true) {

// let month = prompt("input month")

// if (month <= 3) {
//     alert("Winter")
// } else if (month > 3 && month < 7) {
//     alert("Spring")
// } else if (month > 6 && month < 10) {
//     alert("Summer")
// } else if (month > 9 && month < 13) {
//     alert("Fall")
// } else {
//     alert("that is not a month.")
// }
// }

// let game = prompt("input number between 1 - 5")

// let bot = Math.floor(Math.random() * (5 - 1 + 1)) + 1
// let game = 1
// console.log(bot)
// console.log(game)



// let test = "xnxx"
// console.log(test.split(""))

//function char_count(str, letter) {
//   let test = "xnxXxxxxxxxx"
//   let letter_Count = 0;
//   for (let position = 0; position < test.length; position++) {
//     if (test.charAt(position) === "x" || test.charAt(position) === "X") {
//       letter_Count += 1;
//     }
//   }

//   if (letter_Count <= 10) {
//     console.log("Safe");
//   } else {
//     console.log("Danger!");
//   }

//char_count("xxxxxxxxxxx", "x");

// Armstrong
function getlength(number) {
    return number.toString().length;
}

let number = 9474;
let j = number.toString(); //"153"

let letter_Count = 0;
for (let i = 0; i < j.length; i++) {
  console.log(+j.charAt(i)); // + data becomes number
  letter_Count += Math.pow(+j.charAt(i), j.length);
}

if (number === letter_Count) {
  console.log(`${number} is an Armstrong number`);
} else {
  console.log(`${number} is not an Armstong number`);
}


