
let arr = [1, 2, 3, 4, 5];


// by Using Two Pointer
function reverseArray(arr){

    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    console.log(arr);
}
reverseArray(arr);

// By Using Extra Array

function reverseArrayExtraArray(arr){

    let result = [];
    let n = arr.length;

    for(let i = n - 1; i >= 0; i--){
        result.push(arr[i]);
    }

    return result;
}

console.log(reverseArrayExtraArray(arr));

// by Using Reduce


    const result = arr.reduce((acc, curr) =>{
        acc.unshift(curr);
        return acc;
    },[])

console.log(result)

// Build in 
arr.reverse();
console.log(arr)


//  By Recursion

function reverseArrayByRecursion(arr, left, right){

    if(left >= right){
        return arr;
    }
    
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    return reverseArrayByRecursion(arr, left + 1, right - 1);
}
console.log(reverseArrayByRecursion(arr, 0, arr.length - 1))