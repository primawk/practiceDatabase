// No.1
// question : parentheses required in javascript arithmatic calculation
// x = 4
// y = 3
// z = 2
// w = (((x + y * z ) / (x * y)) ** z)

// console.log(w)

// No.2
// var input = prompt("Input any number")
// alert(`The squared4 of ${input} is ${input ** 2}`)

// No.3
// w = Math.pow(8,1/3)
// console.log(w)

// 485 Days

//days = 485//prompt("Input days"))

//Years
// 485 days = 1 year (485 - 360= 125) , 125 days
// years = Math.floor(days/360)
// daysLeft = days % 360

// console.log(years)
// console.log(daysLeft)

// Months

// months = Math.floor(daysLeft/30)
// daysLeftMonths = daysLeft % 30
// console.log(months)
// console.log(daysLeftMonths)
// Weeks
// weeks = Math.floor(daysLeftMonths/7)
// Days
// daysAnswer = 5
// console.log(`485 days equal to ${years} year, ${months} months, ${weeks} weeks, and ${daysAnswer} days`)

//Umur Andi dan Budi
// totalAge = 49
// ratioAndi = 2
// ratioBudi = 5
// ratioTotal = 7
// andi = totalAge * (ratioAndi / ratioTotal)
// budi = totalAge * (ratioBudi / ratioTotal)

// 2 years later
// andiTua =  andi + 2
// budiTua = budi + 2
// console.log(andiTua)
// console.log(budiTua)

//Angka random 1 - 100
//var oneHundred = Math.floor(Math.random() * 100) + 1;
//document.write(oneHundred)

// Jarak
// 60 + 40 = 100 km/h
// to get to 120 km ( 120/100 = 1.2 hour needed)

// distance = 120
// velocityA = 60
// velocityB = 40
// startTimeHour = 9
// startTimeMin = 0

// totalVelo = velocityA + velocityB
// timeTotal = distance / totalVelo
// minTotal = timeTotal * 60

// meetTimeHour = startTimeHour + Math.floor(minTotal / 60)
// meetTimeMin = startTimeMin + minTotal - 60
// console.log(`Will crash at ${meetTimeHour}.${meetTimeMin}`)

// Market v.1.1

var apple = prompt("Apple quantity");
var grape = prompt("Grape quantity");
var orange = prompt("Orange quantity");

  
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

var pay = alert(
  `Your total is Rp ${total}`
);


// order

// var appleStock = 2;
// var grapeStock = 2;
// var orangeStock = 2;

// var apple = prompt("Apple quantity");

// for (i = 1; i <= appleStock; i++) {
//   if (apple > appleStock) {
//     alert(
//       `Permintaan melebihi stock : ${appleStock}, silahkan input kembali sesuai stock yang ada`
//     );
//     var apple = prompt("Apple quantity");
//   }

//   var grape = prompt("Grape quantity");

//   if (grape > grapeStock) {
//     alert(
//       `Permintaan melebihi stock : ${grapeStock}, silahkan input kembali sesuai stock yang ada`
//     );
//     var grape = prompt("Grape quantity");
//   } else {
//   }
//   var orange = prompt("Orange quantity");

//   if (orange > orangeStock) {
//     alert(
//       `Permintaan melebihi stock : ${orangeStock}, silahkan input kembali sesuai stock yang ada`
//     );
//     var orange = prompt("Orange quantity");
//   } else {

//     break
//   }
// }
// // Shopping Cart

// appleTot = apple * 10000;
// grapeTot = grape * 15000;
// orangeTot = orange * 20000;

// var total = apple * 10000 + grape * 15000 + orange * 20000;

// alert(` Your cart
//         ${apple} Apple x Rp 10000 = ${appleTot}
//         ${grape} Grape x Rp 15000 = ${grapeTot}
//         ${orange} Orange x Rp 20000 = ${orangeTot}
//         Tour total is Rp ${total}`);

// // // Payment

// var pay = prompt(
//   `Dengan total Rp ${total} input jumlah uang yang akan dibayarkan`
// );

// changes = pay - total

// for (i = pay; i < total; i++) {

// if (pay < total) {
//   alert(`Transaksi dibatalkan yang anda masukkan kurang. Harap input ulang`)

// } else if (pay > total) {
//  alert(`Terima kasih transaksi selasai. Kembalian anda sebesar ${changes}`)
  
// } else {
//   alert("Terima Kasih")
// }
// }
