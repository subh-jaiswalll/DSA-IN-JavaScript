
let str = "Hello JavaScript World";

function countWords(str){

    let word = 1;

    if(str.trim() === ' '){
        return 0;
    }

    for(let ch of str){

        if(ch === ' '){
            word++;
        }
    }

    return word;
}

console.log(countWords(str));
