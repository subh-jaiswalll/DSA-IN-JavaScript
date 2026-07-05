
let str = "swiss";

function FirstRepeatingCharacterBruteForce(str){

    let n = str.length;

    for(let i = 0; i < n; i++){

        let count = 0;

        for(let j = 0; j < n; j++){

            if(str.charAt(i) === str.charAt(j)){
                count++;
            }
        }

        if(count > 1){
            return str.charAt(i);
        }
    }
    return -1;
}

console.log(FirstRepeatingCharacterBruteForce(str));

function FirstRepeatingCharacterFrequency(str){

    let freq = [];

    for(let ch of str){
        if(freq[ch]){
            freq[ch]++;
        }
        else{
            freq[ch] = 1;
        }
    }

    for(let ch of str){
        if(freq[ch] > 1){
            return ch;
        }
    }
    return -1;

}

console.log(FirstRepeatingCharacterFrequency(str))

function FirstRepeatingCharacterMap(str){

    let map = new Map();

    for(let ch of str){
        if(map.has(ch)){
            map.set(ch, map.get(ch) + 1);
        }
        else{
            map.set(ch, 1);
        }
    }

    for(let ch of str){
        if(map.get(ch) > 1){
            return ch;
        }
    }

    return -1;
}

console.log(FirstRepeatingCharacterMap(str));
