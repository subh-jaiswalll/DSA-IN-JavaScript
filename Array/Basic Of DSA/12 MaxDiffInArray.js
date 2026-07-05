function maxDifference(arr) {
    let maxDiff = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            maxDiff = Math.max(maxDiff, arr[j] - arr[i]);
        }
    }

    return maxDiff;
}

console.log(maxDifference([2,3,10,6,4,8,1]));


function maxDifference(arr) {

    let min = arr[0];
    let maxDiff = arr[1] - arr[0];

    for (let i = 1; i < arr.length; i++) {

        maxDiff = Math.max(maxDiff, arr[i] - min);

        min = Math.min(min, arr[i]);

    }

    return maxDiff;
}

let arr = [2,3,10,6,4,8,1];

console.log(maxDifference(arr));