
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

function MergeTwoArray(arr1, arr2){

    let merge = [];

    for(let i = 0; i < arr1.length; i++){
        merge.push(arr1[i]);
    }

    for(let i = 0; i < arr2.length; i++){
        merge.push(arr2[i]);
    }

    return merge;
}

console.log(MergeTwoArray(arr1, arr2))

let merge = [...arr1, ...arr2]
console.log(merge)