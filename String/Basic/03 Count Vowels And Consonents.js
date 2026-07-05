let str = "Hello";

function countVowelsAndConsonant(str) {
  let vowel = 0;
  let consonants = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);

    if (ch >= "a" && ch <= "z") {
      if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        vowel++;
      } else {
        consonants++;
      }
    }
  }
  console.log(`Vowels: ${vowel} Consonants: ${consonants}`);
}

countVowelsAndConsonant(str);
