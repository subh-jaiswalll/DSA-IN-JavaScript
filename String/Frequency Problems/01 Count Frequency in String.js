
let str = "Hello";

function countFrequency(str){

    let freq = [];

    for(let ch of str){

        if(freq[ch]){
            freq[ch]++;
        }
        else{
            freq[ch] = 1;

        }
    }
    return freq;
}

console.log(countFrequency(str))


let countFrequencyMap = function(str){

    let map = new Map();

    for(let ch of str){

        if(map.has(ch)){
            map.set(ch, map.get(ch) + 1);
        }
        else{
            map.set(ch, 1);
        }
    }
    return map;
}

console.log(countFrequency(str))