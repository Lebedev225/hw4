let rawUserWord = prompt("Enter a word: ")
let userWord = rawUserWord.toLowerCase();
let vowelCount = 0;
let vowels = "aeiou";

const vowelCounting = (userWord) => {
    for (i=0; i < userWord.length; i++){
        if (vowels.includes(userWord[i])) {
            vowelCount ++;
        }
    }
    return vowelCount
}

const palindromeCheck = (userWord) => {
    for (i=0; i < userWord.length/2; i++) {
        if (userWord[i] != userWord[userWord.length-1-i])
            return false
        }   
        return true
}

if (palindromeCheck(userWord) == true) {
    alert(`${rawUserWord} contains ${vowelCounting(userWord)} vowel(s) and is a palindrome`)
}
else {
    alert(`${rawUserWord} contains ${vowelCounting(userWord)} vowel(s) and is not a palindrome`)
}
