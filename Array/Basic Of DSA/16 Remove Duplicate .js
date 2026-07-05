let arr = [1 , 2, 2, 5, 2, 4, 3, 3, 5];

function RemoveDuplicate(arr){
    
    let  result = [];

    for(let i = 0; i < arr.length; i++){

        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;

}

console.log(RemoveDuplicate(arr))


let unique = [... new Set(arr)]
console.log(unique)


function RemoveDuplicateMap(arr){

    let result = [];
    let map = new Map();

    for(let num of arr){
        
        if(!map.has(num)){
            map.set(num, true);
            result.push(num);
        }
    }

    return result;
}


console.log(RemoveDuplicateMap([1, 2, 3, 3, 2, 1, 4, 5]));
