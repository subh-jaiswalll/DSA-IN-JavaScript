
let arr = [1, 2, 3,  4, 5];

function CheckArrayIsSorted(arr){

    let n = arr.length;

    for(let i = 1; i < n; i++){

        if(arr[i] < arr[i - 1]){
            return false;
        }
    }
    return true;
}

console.log(CheckArrayIsSorted(arr))