// // // No. 1
// var stars = ""
// var rows = 5

// // //rows
// for(var i = 5 ; i >= 1  ; i--) {

//  for(var j = 1 ; j <= i ; j++) {

//           stars += " * "
//  }

//    stars += "\n"
// }

// for(var i = 2 ; i <= 5  ; i++) {

//   for(var j = 1 ; j <= i ; j++) {

//            stars += " * "
//   }

//     stars += "\n"
//  }

// console.log(stars)

// for(var i = 5 ; i >= 1  ; i--) {

//   for(var j = 1 ; j <= i ; j++) {

//            stars += " * "
//   }

//     stars += "\n"
//  }

// Fizz Buzz
//while(true) {
let fizzBuzz = 20;

for (i = 1; i <= fizzBuzz; i++) {
  //if the number is divisible by 3

  if (i % 15 == 0) {
    console.log("FizzBuzz");
    
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
    
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
    
  } else {

  console.log(i);
}
}
//}
