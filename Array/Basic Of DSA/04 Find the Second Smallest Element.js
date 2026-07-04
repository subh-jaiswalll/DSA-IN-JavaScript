
let arr = [1, 2, 3, 4, 5];

function SecondMin(arr){
    
    let Smallest = Infinity;
    let SecondSmallest = Infinity;

    for(let num of arr){

        if(num < Smallest){
            SecondSmallest = Smallest;
            Smallest = num;
        }

        else if(num < SecondSmallest && num > Smallest){
            SecondSmallest = num;
        }
    }
    return SecondSmallest;
    
}

let secondMinimum = SecondMin(arr)

console.log(secondMinimum)