
let str1 = "listen";
let str2 = "silent";

function CheckAnagramBruteForce(s, t){

     // Step 1: Length check
    if (s.length !== t.length) {
        return false;
    }

    // Step 2: Compare frequency of each character
    for (let i = 0; i < s.length; i++) {

        let countS = 0;
        let countT = 0;

        for (let j = 0; j < s.length; j++) {

            if (s[i] === s[j]) {
                countS++;
            }

            if (s[i] === t[j]) {
                countT++;
            }
        }

        if (countS !== countT) {
            return false;
        }
    }

    return true;


}

console.log(CheckAnagramBruteForce(str1, str2))


function isAnagramMap(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let map = new Map();

    // Count frequency
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    // Reduce frequency
    for (let ch of t) {

        if (!map.has(ch)) {
            return false;
        }

        map.set(ch, map.get(ch) - 1);

        if (map.get(ch) < 0) {
            return false;
        }
    }

    return true;
}

console.log(isAnagramMap(str1, str2))