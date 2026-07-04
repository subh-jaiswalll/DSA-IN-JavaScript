let arr = [1, 2, 3, 4, 5, 6];

// function rotateLeftByK(arr, k) {
//   let n = arr.length;
//   k = k % n;

//   reverse(arr, 0, n - 1);
//   reverse(arr, 0, k - 1);
//   reverse(arr, k, n - 1);

//   return arr;
// }

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

function rotateRightByK(arr, k){

    let n = arr.length;
    k = k % n;

    reverse(arr, 0, k - 1);
    reverse(arr, k, n -1);
    reverse(arr, 0, n- 1);

    return arr;
     
}

// console.log(rotateLeftByK(arr, 2))
console.log(rotateRightByK(arr, 2))
