let str = "fghbnaei76(*";

function countAlphabetDigitsAndSpcialCharacter(str){

    let alphabet = 0;
    let number = 0;
    let special = 0;

    str = str.toLowerCase();

    for(let i = 0; i < str.length; i++){

        let ch = str.charAt(i);

        if(ch >= 'a' && ch <= 'z'){
            alphabet++;
        }
        else if(ch >= '0' && ch <= '9'){
            number++;
        }
        else{
            special++;
        }
    }

    return {alphabet, number, special}
}

console.log(countAlphabetDigitsAndSpcialCharacter(str));
