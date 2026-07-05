
let arr = [1, 2, 3, 4, 5, 6];

//  

function CopyAnArray(arr){
    let copy = [];

    for(let i = 0; i < arr.length; i++){
        copy[i] = arr[i];
    }
    return copy;
}

console.log(CopyAnArray(arr))

// Using Spread Operators
let copy = [...arr];

console.log(copy)


// Using Slice Method
let copy = arr.slice();
console.log(copy)


// Using map Method
let copy = arr.map((num) => num)

console.log(copy)
