
let arr = [1, 2, 3, 4, 5];

function findMax(arr) {

    let max = -Infinity;

    for (let number of arr) {
        if (number > max) {
            max = number;
        }
    }

    return max;
}

console.log(findMax(arr));