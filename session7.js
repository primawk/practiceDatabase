// market 1.6

class Products {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class FastFood extends Products {
  constructor(name, price, stock, expired) {
    super(name, price, stock);
    this.category = 1;
    this.expired = expired;
  }
}

class Cloth extends Products {
  constructor(name, price, stock, size) {
    super(name, price, stock);
    this.category = 2;
    this.size = size;
  }
}

class Electronic extends Products {
  constructor(name, price, stock, warranty) {
    super(name, price, stock);
    this.category = 3;
    this.warranty = warranty;
  }
}
class Fruits extends Products {
  constructor(name, price, stock, sugar) {
    super(name, price, stock);
    this.category = 4;
    this.sugar = sugar;
  }
}

const products = [
  { category: 1, name: "Noodle", price: 20000, stock: 8, expired: 2020 },
  { category: 2, name: "Hoodie", price: 15000, stock: 7, size: "L" },
  { category: 3, name: "Headphone", price: 20000, stock: 8, warranty: "Yes" },
  { category: 4, name: "Apple", price: 10000, stock: 5, sugar: "High" },
];

// let fruits = [
//   { name: "Apple", price: 10000, stock: 5 },
//   { name: "Grape", price: 15000, stock: 7 },
//   { name: "Orange", price: 20000, stock: 8 },
// ];

// Function to show list
let createList = (arr, header, kind = 1) => {
  // variable to store the list
  let list = `${header}\n\n`;
  if (kind) {
    arr.forEach((val, i) => {
      let { name, price, stock, category, expired, size, sugar, warranty } =
        val;
      let newList = `${i}. NAME : ${name} || STOCK : ${stock} || PRICE : Rp.${price}`;

      switch (category) {
        case 1:
          newList += ` || EXP : ${expired}\n`;
          break;

        case 2:
          newList += ` || SIZE : ${size}\n`;
          break;

        case 3:
          newList += ` || WARRANTY : ${warranty}\n`;
          break;

        default:
          newList += ` || SUGAR : ${sugar}\n`;
          break;
      }

      list += newList;
    });
  } else {
    arr.forEach((val, i) => {
      let { name, price, qty } = val;
      list += `${i}.${name} || Rp.${price} || stock : ${qty}\n`;
    });
  }

  return list;
};

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
  );

  // Menu 1 : Show list
  if (menu == 1) {
    // Show list
    alert(createList(products, "Product List"));

    // Menu 2 : Menambah buah
  } else if (menu == 2) {
    const catOpt = parseInt(
      prompt(
        `Product category you wish to add\n\n` +
          `1. Instant \n` +
          `2. Clothes \n` +
          `3. Electronic \n` +
          `4. Fruit \n\n`
      )
    );
    // edit data
    let name = prompt("Input name of the product :");
    let price = parseInt(prompt("input price :"));
    let stock = parseInt(prompt("Input stock :"));

    let newProduct;
    switch (catOpt) {
      case 1:
        const expired = prompt("input expiry date:");
        newProduct = new FastFood(name, price, stock, expired);
        break;

      case 2:
        const size = prompt("input size product:");
        newProduct = new Cloth(name, price, stock, size);
        break;

      case 3:
        const warranty = prompt("input warranty status:");
        newProduct = new Electronic(name, price, stock, warranty);
        break;

      default:
        const sugar = prompt("input sugar quantity:");
        newProduct = new Fruits(name, price, stock, sugar);
        break;
    }

    // join into the fruit var
    products.push(newProduct);

    // Show the fruit list
    alert(createList(products, "Product List"));

    // IF no 3 , delete item
  } else if (menu == 3) {
    //show and delete an item
    let selIndex = parseInt(prompt(createList(products, "Delete item")));
    products.splice(selIndex, 1);
    alert(createList(products, "Product List"));

    // Menu 4 : MEmbeli buah
  } else if (menu == 4) {
    let carts = [];

    while (true) {
      let selIndex = parseInt(prompt(createList(products, "Buy item")));

      let { name, price, stock } = products[selIndex];

      // Qty want to buy
      while (true) {
        let qty = parseInt(
          prompt(`Input quantity for ${name}, Stock : ${stock}`)
        );

        if (qty > stock) {
          alert(
            `Quantity requested ${qty}, exceed the stock available ${stock}`
          );
        } else {
          // put into carts
          carts.push({ name, price, qty });
          // deduct stocks that are ordered
          products[selIndex].stock -= qty;
          // exit the loop
          break;
        }
      }

      let cartList = createList(carts, "Cart", 0);

      let again = prompt(
        `${cartList}\n\nDo you want to buy anything else? ( yes / no )`
      );

      //exit loop "choosing fruit"
      // No , NO , nO ==> no
      if (again.toLowerCase() == "no") {
        break;
      }
    }
    let finalPrice = 0;

    carts.forEach((cart) => {
      cart.total = cart.qty * cart.price;

      finalPrice += cart.total;
    });

    let finalReport = "";

    carts.forEach((cart) => {
      const { name, price, qty, total } = cart;
      finalReport += `${name} : ${price} x ${qty} =${total}\n`;
    });

    while (true) {
      const money = parseInt(
        prompt(`Detail Carts\n\n${finalReport}\n\nTotal: ${finalPrice}`)
      );
      const margin = Math.abs(money - finalPrice);

      if (money < finalPrice) {
        alert(
          `Transaction has been cancelled you have insufficent fund of Rp ${margin} wit total of ${finalPrice}`
        );
      } else {
        if (money > finalPrice) {
          alert(`Thx your change is Rp ${margin}`);
        } else {
          alert("Thank You!");
        }

        break;
      }
    }
  } else {
    // exit from while "menu utama"
    break;
  }
}

// let books = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     title: "Steve Jobs", // prop : "item"
//     author: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     name: "Dani",
//     job: "gamer",
//     education: "Bachelors Degree",
//   },
// ];

// let createList = (arr) => {
//   let list = "";
//   arr.forEach((val) => {
//     let { title, author, readingStatus } = val;
//     list += `title: ${title}, author: ${author}, readingStatus: ${readingStatus}\n`;
//   });
//   return list;
// };

// console.log(createList(books));

// let show = (arrData) => {
//   let result = ""

//   arrData.forEach((item) => {
//     let tempResult = ""
//     for (let prop in item) {
//       tempResult += `${prop}: ${item[prop]}, `;
//     }

//     tempResult = tempResult.slice(0, tempResult.length - 2)
//     tempResult += "\n"
//     result += tempResult
//   })

//   return result
// }

//  let createList = (arr) => {
//  let result = []

//    arr.forEach((item) => {
//     let tempResult = []

//    for (let prop in item) {

//    tempResult.push (`${prop}: ${item[prop]}`)
//    }
//    result += "\n"
//    result += tempResult
//    })

//    return result

//    }

// console.log(createList(books))
// let cart =
// [
//   {
//     name: "apple",
//     sugar: "medium",
//     price: false,
//   },
//   {
//     name: "banana",
//     sugar: "low",
//     price: "cheap",
//   }
// ]

// let show = (arrData) => {
//   let result = arrData.map((item) => {

//     let tempResult = {}
//     for (let prop in item) {
//       tempResult[item[prop]] = prop
//     }
//     return tempResult
//   })
//   return result
// }

// console.log(show(cart))

// const timeFunction = () => {

// const time = new Date()

// const year = time.getFullYear()

// // 0 - 11
// const month = time.getMonth()

// // 1 - 31
// const date = time.getDate()

// // 0 - 6 Sun - Sat
// const day = time.getDay()

// const hours = time.getHours()

// const minutes = time.getMinutes()

// const seconds = time.getSeconds()

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// ]

// // console.log(`Right now is month ${month + 1} : ${months[month]} Year ${year}`)

// // Exercise - Data Object 2

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday", "Saturday"]

// return {
//   day : days[day],
//   date : date,
//   month : months[month],
//   year : year,
//   hour : hours,
//   minute : minutes,
//   second : seconds

// }

// }

// let {day, date , month, year, hour, minute, second} = timeFunction()

// if(minute < 10){minute = `0${minute}`}
// if(second < 10){second = `0${second}`}

// console.log(`Hari ini ${day}, ${date} ${month} ${second}`)
// console.log(`Time now is ${hour}:${minute}:${second}`)
