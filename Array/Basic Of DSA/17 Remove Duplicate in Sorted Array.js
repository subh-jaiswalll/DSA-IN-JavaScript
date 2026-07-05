
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6];

function RemoveDuplicateSortedBruteForce(arr){

    let temp = [];

    temp.push(arr[0]);

    for(let i = 1; i < arr.length; i++){

        if(arr[i] !== arr[i - 1]){
            temp.push(arr[i]);
        }
    }
    return temp;
}

console.log(RemoveDuplicateSortedBruteForce(arr));


function RemoveDuplicateSortedTwoPointer(arr){

    let i = 0;

    for(let j = 0; j < arr.length; j++){

        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;

}
let k = RemoveDuplicateSortedTwoPointer(arr);

console.log(k);               // 4
console.log(arr.slice(0, k)); // [1,2,3,4]