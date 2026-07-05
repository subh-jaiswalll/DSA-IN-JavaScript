
let str = 'atul';

function countLengthOfString(str){

    let count = 0;

    for(let ch of str){
        count++;
    }
    return count;
}

console.log(countLengthOfString(str))