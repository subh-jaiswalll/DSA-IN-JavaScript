
let str = "Hello"

function reverseString(str){

    let reversed = "";

    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed;
}

console.log(reverseString(str))

function reverseStringTwoPointer(str){

    let arr = str.split("");

    let start = 0;
    let end = str.length - 1;

    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr.join("")
}

console.log(reverseStringTwoPointer(str))


let revere = str.split("").reverse().join("");
console.log(revere)