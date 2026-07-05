
let arr1 = [1, 3, 5, 8];
let arr2 = [2, 4, 6 ,7];

function MergeTwoSortedArray(arr1, arr2){

    let marge = [];

    let m = arr1.length;
    let n = arr2.length;
    let i = 0;
    let j = 0;

    while(i < m && j  < n){

        if(arr1[i] <= arr2[j]){
            marge.push(arr1[i]);
            i++;
        }
        else{
            marge.push(arr2[j]);
            j++;
        }
    }

    while(i < m){
        marge.push(arr1[i]);
        i++;
    }

    while(j < n){
        marge.push(arr2[j]);
        j++;
    }

    return marge;
}

console.log(MergeTwoSortedArray(arr1, arr2))