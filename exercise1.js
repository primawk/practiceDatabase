// A stalker javascript --> ja.va.script

let x = "Javascript"
let result = x.replace(/a/g , "a.")

console.log(result)




// console.log(addStr(str, 10, stringToAdd)); 


// let start = -10
// let result = start * ( 5 ** Math.abs(start).toString().length)

// console.log(result) 

// even
// if(number % 2 == 0)

// odd

// if(number % 2 > 0)

// let arr = [11 , 22 , 34 , 41 , 52 , 63 , 71 , 86]
// let newArr = [[],[]] 

// arr.forEach((val, idx) => {
//     if (val % 2 == 1) {
//         newArr[0].push(val)
//     } else {
//         newArr[1].push(val)
//     }


// })

// console.log(newArr)

let arr = [1 , 2 , 3 , 4]
// let newArr = [[],[],[],[]] 

let mapResult = arr.map((val) => {
    if (val % 2 == 1) {
        return [val , "Odd"]
    } else {
        return [val , "even"]
    }


})

console.log(mapResult)
