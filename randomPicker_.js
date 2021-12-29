let carts = [];

// RENDER LIST
const fnRenderList = () => {
  const name = document.getElementById("input").value;
  carts.push(name);
  const listCart = carts.map((cart, index) => {
    return `
      <tr>
       <td>${index + 1}.</td>
       <td>${cart}</td>
      </tr>
      `;
  });
  document.getElementById("output").innerHTML = listCart.join("");

  document.getElementById("input").value = "";
};

let fnStart = () => {
  let h2Result = document.getElementById("result");
  let resultRandom = carts[Math.floor(Math.random() * carts.length)];
  h2Result.textContent = resultRandom;
};


let start = () => {
  running = setInterval(fnStart, 50);
};

let fnStop = () => {
  clearInterval(running);
};

// let fnBreak = () => {
//     break
// }
