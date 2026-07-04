
let arr = [1, 2, 3, 4, 5];

// function rotateRightByOne(arr){

//     let n = arr.length;
//     let last = arr[arr.length - 1];



//     for(let i = n - 1; i > 0; i--){
//         arr[i] = arr[i - 1];
//     }

//     arr[0] = last;
//     return arr;
// }

// console.log(rotateRightByOne(arr))

function rotateLeftByOne(arr){

    let first = arr[0];

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;

    return arr;
}
console.log(rotateLeftByOne(arr));
