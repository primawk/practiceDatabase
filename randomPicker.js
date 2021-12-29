carts = [];

// RENDER LIST
const fnRenderList = () => {
  const name = document.getElementById("input").value;
  const time = new Date();
  const id = time.getTime();
  carts.push({ id, name });
  const listCart = carts.map((cart) => {
    const { id, name } = cart;
    return `
      <tr>
       <td>${id}</td>
       <td>${name}</td>
      </tr>
      `;
  });
  console.log(carts);
  document.getElementById("output").innerHTML = listCart.join("");

  document.getElementById("input").value = "";

};

const fnStart = () => {
    const element = document.getElementById("generator");
    setInterval(function() {element.innerHTML += "Hello"}, 1000);
}

const fnStop = () => {
    break
}
