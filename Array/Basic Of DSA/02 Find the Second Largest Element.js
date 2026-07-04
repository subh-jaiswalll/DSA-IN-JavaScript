
let arr = [1, 2, 3, 4, 5, 6];

function findSecondMax(arr) {

    let max = -Infinity;
    let secondMax = -Infinity;
    let n = arr.length;

    // for (let i = 0; i < n; i++) {

    //     if (arr[i] > max) {
    //         secondMax = max;
    //         max = arr[i];
    //     } else if (arr[i] > secondMax && arr[i] < max) {
    //         secondMax = arr[i];
    //     }
    // }

    // return secondMax;

    for(let num of arr){

        if(num > max){
            secondMax = max;
            max = num;
        }
        else if(num > secondMax && num < max){
            secondMax = num;
        }
    }
    return secondMax;
}

const secondMaximum = findSecondMax(arr);
console.log(secondMaximum);