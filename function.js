// let data = [
//     ["John", 43, "Jakarta"],
//     ["Baby", 21, "Jakarta"],
//     ["Tony", 34, "Surabaya"],
//     ["Justin", 29, "Banjarmasin"],
// ]

// console.log(data[0])

// data.forEach((val,idx) => {
//     console.log(`val : ${val}`)
//     console.log(`idx : ${idx}`)

// })

// let dataFilter = (arr) => {

// return data.filter((val) => {
//      return val[1] > 30 || val[2] == "Jakarta"

// })
// }

// let result = dataFilter(data)

// console.table(result)

// let asc = (a, b) => {
//     return a[1] - b[1]
// }

let persons = [
  ["John", 44],
  ["John", 43],
  ["Baby", 21],
  ["Justin", 29],
];

let personsSort = (arr) => {
  arr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      return a[1] - b[1];
    }
  });

  return arr;
};

let result = personsSort(persons);

console.table(result);
