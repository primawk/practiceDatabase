// const createInfo = () => {
//   const name = document.getElementById("name").value;
//   const price = document.getElementById("price").value;
//   const condition = document.querySelector("input[name=condition]:checked").value;
//   const warehouse = document.getElementById("warehouse").value;
//   const couriers = document.querySelectorAll("input[name=courier]:checked")

//   let courierList = ""
//   couriers.forEach((courier) => {
//       courierList += `${courier.value} `
//   })

//   document.getElementById("result").innerHTML = `Name: ${name} <br>
//   Price: ${price} <br> Condition: ${condition} <br> Warehouse: ${warehouse} <br> Courier: ${courierList}`
// };

let products = [
  {
    id: 1579581080900,
    category: "Fast Food",
    name: "Noodle",
    price: 3500,
    stock: 9,
  },
  {
    id: 1579581080901,
    category: "Electronic",
    name: "Headphone",
    price: 430000,
    stock: 8,
  },
  {
    id: 1579581080902,
    category: "Cloth",
    name: "Hoodie",
    price: 30000,
    stock: 7,
  },
  {
    id: 1579581080903,
    category: "Fruit",
    name: "Apple",
    price: 10000,
    stock: 8,
  },
];

const categories = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

let carts = [];

// CALCULATE ALL ITEMS
const fnPayment = () => {
  const listPayment = carts.map((cart) => {
    const { id, category, name, price } = cart;

    return `<p> ${id} | ${category} | ${name} | ${price} </p>`;
  });
  let subTotal = 0;
  carts.forEach((cart) => {
    subTotal += cart.price;
  });

  const ppn = subTotal * 0.1;
  const finalTotal = subTotal - ppn;
  const listDetail = listPayment.join("");
  const listTotal = `
    <h3>Sub Total Rp.${subTotal.toLocaleString("id")}</h3>
    <h3>Ppn Rp.${ppn.toLocaleString("id")}</h3>
    <h3>Total Rp.${finalTotal.toLocaleString("id")}</h3>`;

  document.getElementById("payment").innerHTML = listDetail + listTotal;
};

const fnRenderList = (index) => {
  const listProduct = products.map((product) => {
    const { id, category, name, price, stock } = product;
    if (id != index) {
      return `
     <tr>
      <td>${id}</td>
      <td>${category}</td>
      <td>${name}</td>
      <td>${price}</td>
      <td>${stock}</td>
      <td><input type="button" value="Add" onclick="fnAdd(${id})"></td>
      <td><input type="button" value="Delete" onclick="fnDelete(${id})"></td>
      <td><input type="button" value="Edit" onclick="fnEdit(${id})"></td>
     </tr>`;
    }
    return `
     <tr>
      <td>${id}</td>
      <td>${category}</td>
      <td><input value="${name}" type="text" id="nameEdit"></td>
      <td><input value="${price}" type="text" id="priceEdit"></td>
      <td><input value="${stock}" type="text" id="stockEdit"></td>
      <td><input type="button" value="Add" disabled></td>
      <td><input type="button" value="Save" onClick = "fnSave(${id})"></td>
      <td><input type="button" value="Cancel" onclick="fnCancel()"></td>
     </tr>`;
  });

  const listCategory = categories.map((category) => {
    return `<option value="${category}">${category}</option>`;
  });

  document.getElementById("render").innerHTML = listProduct.join("");
  document.getElementById("catFilter").innerHTML = listCategory.join("");
  document.getElementById("catInput").innerHTML = listCategory.join("");
};

// ADD

const fnAdd = (index) => {
  const selectedProduct = products.find((product) => {
    return product.id == index;
  });
  // checking the availability of the stock
  if (selectedProduct.stock == 0) {
    alert("There is no stock");
  } else {
    const foundCart = carts.find((cart) => {
      return cart.id == index;
    });
    if (!foundCart) {
      const { id, category, name, price } = selectedProduct;
      carts.push({ id, category, name, price, stock: 1 });
    } else {
      const idx = carts.findIndex((cart) => {
        return cart.id == index;
      });
      carts[idx].stock++;
    }

    const idx = products.findIndex((product) => {
      return product.id == index;
    });
    products[idx].stock--;

  
  }

  fnRenderList();
  fnRenderCart();
};

// EDIT

const fnEdit = (index) => {
  fnRenderList(index);
};

// CANCEL

const fnCancel = (index) => {
  fnRenderList();
};

// DELETE

const fnDelete = (index) => {
  products = products.filter((product) => {
    return product.id != index;
  });

  fnRenderList();
};

// DELETE CART

const fnDeleteCart = (index) => {
  const idxProduct = products.findIndex((product) => {
    return product.id == index;
  });

  const idxCart = carts.findIndex((cart) => {
    return cart.id == index;
  });

  // sum of stock and qty
  products[idxProduct].stock += carts[idxCart].stock;

  // delete data from cart
  carts = carts.filter((cart) => {
    return cart.id != index;
  });

  fnRenderList();
  fnRenderCart();
};

// SAVE

const fnSave = (index) => {
  const name = document.getElementById("nameEdit").value;
  const price = document.getElementById("priceEdit").value;
  const stock = document.getElementById("stockEdit").value;
  //Find Index
  const found = products.findIndex((product) => {
    return product.id == index;
  });

  products[found] = { ...products[found], name, price, stock };

  fnRenderList();
};

// RENDER CARTS
const fnRenderCart = () => {
  const listCart = carts.map((cart) => {
    const { id, category, name, price, stock } = cart;
    return `
    <tr>
     <td>${id}</td>
     <td>${category}</td>
     <td>${name}</td>
     <td>${price}</td>
     <td>${stock}</td>
     <td><input type="button" value="Delete" onclick="fnDeleteCart(${id})"></td>
    </tr>
    `;
  });

  document.getElementById("carts").innerHTML = listCart.join("");
};

// RENDER FILTER
const fnRenderFilter = (arr) => {
  const listProduct = arr.map((product) => {
    const { id, category, name, price, stock } = product;
    return `
     <tr>
      <td>${id}</td>
      <td>${category}</td>
      <td>${name}</td>
      <td>${price}</td>
      <td>${stock}</td>
     </tr>`;
  });

  const listCategory = categories.map((category) => {
    return `<option value="${category}">${category}</option>`;
  });

  document.getElementById("render").innerHTML = listProduct.join("");
};

// Reset filter

const fnResetFilter = () => {
  const inputTags = document.getElementsByName("txtFilter");

  for (const input of inputTags) {
    input.value = "";
  }

  fnRenderList();
};

// INPUT DATA
const fnInputData = () => {
  // Get data from HTML
  const name = document.getElementById("nameInput").value;
  const price = parseInt(document.getElementById("priceInput").value);
  const category = document.getElementById("catInput").value;
  const stock = document.getElementById("stockInput").value;

  // create date object
  const time = new Date();
  const id = time.getTime();
  // Push new data
  products.push({ id, name, price, category, stock });

  // Clean all text box
  document.getElementById("nameInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("stockInput").value = "";

  // Show the list
  fnRenderList();
};

// Filter Name
const fnFilterName = () => {
  // Get data from user
  const keyword = document.getElementById("nameFilter").value;

  // Filtering
  const filterResult = products.filter((product) => {
    const nameLow = product.name.toLowerCase();
    const keywordLow = keyword.toLowerCase();
    // the output of the filter will be shown
    return nameLow.includes(keywordLow);
  });

  fnRenderFilter(filterResult);
};

// Filter Price
const fnFilterPrice = () => {
  // get min and max value
  const min = document.getElementById("min").value;
  const max = document.getElementById("max").value;

  let filterResult = products;

  if (!(min == "" || max == "")) {
    // filtering
    filterResult = products.filter((product) => {
      const { price } = product;
      return price >= min && price <= max;
    });
  }

  fnRenderFilter(filterResult);
};

// Filter Category

const fnFilterCategory = () => {
  const selectedCategory = document.getElementById("catFilter").value;

  let filterResult = products;

  if (selectedCategory != "All") {
    filterResult = products.filter((product) => {
      return product.category == selectedCategory;
    });
  }

  fnRenderFilter(filterResult);
};

fnRenderList();
