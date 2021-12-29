// reverse without method
// let names = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"];

// names.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   }
// });

//  console.log(names)

// let numbers = [22, 17, 19, 20, 14]

// let numResult = numbers.map((number) => {
//     if (number % 2 == 1) {
//         return "odd";
//     } else  {
//         return "even"
//     }
// }
// )

// console.log(numResult)

// SALARY FILTER

// let numbers = [9100000, 9800000, 9500000, 10300000, 9300000];

// let numResult = numbers.filter((number) => {
//   return number - (5 / 100) * number > 9000000;
// });

// console.log(numResult);

// FIBONACCI

// let numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// let fibonacci = (p) => {
//   if (p < 3) {
//     return 1;
//   } else {
//     return fibonacci(p - 1) + fibonacci(p - 2);
//   }
// };

// fibonacci(2);

// let fibResult = fibonacci(4)
// console.log(fibResult)

// no.1
// let names = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"];

// let sortLastChar = (text) => {
//   let result = text
//   .split(" ") // ["laughing" , "out" , "loud"] // .split("") ["l","a","u","g"]
//   .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));

//   return result;
// };

// console.log(sortLastChar("laughing out loud"));

// names.sort((a, b) => {
//   let x = names.ch(a.length - 1)
//   let y = names.(b.length - 1)

//   if (x > y) {
//     return -1;
//   } else if (x < y) {
//     return 1;
//   }
// });

//console.log(names)

// let abb = (text) => {
//   let result = text
// }

// Abbreviate

// let abbreviate = (text) => {
//   result = text
//     .toUpperCase() //" SOFTWARE ENGINEER"
//     .split(" ") // ["SOFTWARE", "ENGINEER"]
//     .map((item) => item.slice(0, 1)) // ["S","E"]
//     .join("."); // S.E
//   return result;
// };

// console.log(abbreviate("Software Engineer"));

// PRIME

// let prime = (n) => {

//   let factor = []
//   for (i = 1 ; i <= n ; i++) {
//     if(n % i === 0) { // Looking for the factors
//       factor.push(i)
//     }
//   }

//   if (factor.length < 3) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(prime(13))

// market 1.5

let fruits = [
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

// Function to show list
let createList = (arr, header) => {
  // variable to store the list
  let list = `${header}\n\n`

  arr.forEach((val , i) => {
  
    list += `${i}.${val[0]} || Rp.${val[1]} || stock : ${val[2]}\n`

  })

  return list
}

while (true) {
  let menu = parseInt(
    prompt(`
    What do you want to do? :
    1. Show List
    2. Add item
    3. Delete item
    4. Buy item
    5. exit
    `)
  )

  if (menu == 1) {
    
  }

}

var appleStock = 2;
var grapeStock = 2; 
var orangeStock = 2;

while (true) {
var apple = prompt(`Apple quantity (stock = ${appleStock})`);

if (apple > appleStock) {
  alert(
    `Your order exceeds the stocks available of ${appleStock} apples`
  );
  } else {
   break
  }
}

while (true) {

var grape = prompt(`Grape quantity (stock = ${grapeStock})`);

if (grape > grapeStock) {
  alert(
    `Your order exceeds the stocks available of ${grapeStock} grapes`
  );
  } else {
    break
  }
}

while(true) {

var orange = prompt(`Orange quantity (stock = ${orangeStock})`);

if (orange > orangeStock) {
  alert(
    `Your order exceeds the stocks available of ${orangeStock} oranges`
  );
  } else {
    break
  }
}


// Shopping Cart

appleTot = apple * 10000;
grapeTot = grape * 15000;
orangeTot = orange * 20000;

var total = apple * 10000 + grape * 15000 + orange * 20000;

alert(` Your cart
        ${apple} Apple x Rp 10000 = ${appleTot}
        ${grape} Grape x Rp 15000 = ${grapeTot}
        ${orange} Orange x Rp 20000 = ${orangeTot}
        Your total is Rp ${total}`);

// // Payment

while (true) {
  let pay = prompt(
    `Dengan total Rp ${total} input jumlah uang yang akan dibayarkan`
  );

  margin = Math.abs(pay - total);

  if (pay < total) {
    alert(`Transaksi dibatalkan yang anda masukkan kurang Rp ${margin}`);
  } else if (pay > total) {
    alert(
      `Terima kasih transaksi selasai. Kembalian anda sebesar Rp ${margin}`
    );
    break;
  } else {
    alert("Terima Kasih");
    break;
  }
}
