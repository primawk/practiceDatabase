// odd even
//var number =  prompt("Input number")
//if(number % 2 == 0){
//alert(`${number} is an even number`)
//console.log(`${number} is an even number`)
//}else {
//alert(`${number} is an odd number`)
//console.log(`${number} is an odd number`)
//}

// IMT Calculator
// var weight = prompt("Input weight")
// var height = prompt("Input height")

// imt = weight / ((height / 100) ** 2)

// if(imt < 18.5){
//     console.log(`Weight ${weight} kg & Height ${height} m, IMT = ${imt}, you need more weight!`)
//     alert(`Weight ${weight} kg & Height ${height} m, IMT = ${imt}, you need more weight!`)
// }else if(imt >= 18.5 && imt < 25){
//     console.log(`Weight ${weight} kg & Height ${height} m, IMT = ${imt}, you have an ideal weight!`)
//     alert(`Weight ${weight} kg & Height ${height} m, IMT = ${imt}, you have an ideal weight!`)
// }else if(imt >= 25 && imt < 30){
//     console.log(`Weight ${weight} kg & Height ${height} m, IMT = ${imt}, you have more weight!`)
//     alert(`Weight ${weight} kg & Height ${height} m, IMT = ${imt}, you have more weight!`)
// }else if(imt >= 30 && imt < 40){
//     console.log(`Weight ${weight} kg & Height ${height} m, IMT = ${imt}, you are overweight!`)
//     alert(`Weight ${weight} kg & Height ${height} m, IMT = ${imt}, you are overweight!`)
// }else{
//     console.log(`Weight ${weight} kg & Height ${height} m, IMT = ${imt}, you have obesity!`)
//     alert(`Weight ${weight} kg & Height ${height} m, IMT = ${imt}, you have obesity!`)
// }

//  market 1.3

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
