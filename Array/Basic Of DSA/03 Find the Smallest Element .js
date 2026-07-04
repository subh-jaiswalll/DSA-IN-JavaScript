

let arr = [1, 2, 3, 4, 5];

function findSmallest(arr){

    let smallest = Infinity;

    for(let num of arr){
        if(num < smallest){
            smallest = num;
        }
    }
    return smallest;
}

console.log(findSmallest(arr))