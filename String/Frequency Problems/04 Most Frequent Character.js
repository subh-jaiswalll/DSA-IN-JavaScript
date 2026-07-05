
let str = "Hello";

function countMostFrequentElementBruteForce(str){
    let n = str.length;
    let maxCount = 0;
    let result = ""

    for(let i = 0; i < n; i++){

        let count = 0;

        for(let j = 0; j < n; j++){
            
            if(str.charAt(i) === str.charAt(j)){
                count++;
            }
        }

        
        if(count > maxCount){
            maxCount = count;
            result = str.charAt(i);
        }

    }

    return result;
}

console.log(countMostFrequentElementBruteForce(str))


function countMostFrequentElementFrequencyFrequency(str){

    let freq = [];
    let result = ""
    let maxCount = 0;

    for(let ch of str){
        if(freq[ch]){
            freq[ch]++;
        }
        else{
            freq[ch] = 1;
        }
    }

    for(let ch of str){
        if(freq[ch] > maxCount){
            maxCount = freq[ch];
            result = ch;
        }
    }

    return result;
}
console.log(countMostFrequentElementFrequencyFrequency(str))


function countMostFrequentElementMap(str){

    let maxFre = 0;
    let result = "";
    let map = new Map();

    for(let ch of str){
        if(map.has(ch)){
            map.set(ch, map.get(ch) + 1);
        }
        else{
            map.set(ch, 1);
        }
    }

    for (let [ch, count] of map) {

        if (count > maxFre) {
            maxFre = count;
            result = ch;
        }
    }
    return result;
}

console.log(countMostFrequentElementMap(str))