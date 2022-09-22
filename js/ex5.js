
let userWordsCollection = []
let userWord = prompt("Enter words or enter 'stop' to stop")

if (userWord.toUpperCase() != "STOP") {

    while (userWord.toUpperCase() != "STOP") {
        userWordsCollection.push(userWord);
        userWord = prompt("Enter words or enter 'stop' to stop");
    }

    console.log("You entered the following words:")
    for (i=0;i<userWordsCollection.length;i++){
        console.log(userWordsCollection[i]);
    }
}

else {
    alert("No words to display, Stop was the first word entered.")
}


