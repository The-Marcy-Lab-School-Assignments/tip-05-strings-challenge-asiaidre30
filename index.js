/*
Write a function named  capitalizeWords that takes a string (sentence) as input and returns 
a new string where the first letter of each word is capitalized.
*/
// how do we capitalize .toUpperCase()
// first letter of a word in a senstence- using a white space
// - captalize a letter after we come across a space. (current index +1 is the one to capitalize.)
// -edge case = the first letter of the entire sentence.
// - create a new variable for a new string
// we need to capitalize many words. (for loop)
// step 2 hand walks
// sentence = "Hello world from javascript"

// loop through every letter:
//capitalize the first letter
//add it to the newSentence
// if we come across a space, capitalize the next letter and add it to a string
// add the white space to the newSentence
// newSentence = "Hello World F";
// i= 7



constcapitalizeWords = (sentence) => {
    const newSentnece = "";
    for (let i = 0; i < sentence.length; i++) {
        if (i === 0) {
            newSentnece += sentence[i].toUpperCase();

        else if (sentence[i] === " ") {
                if
        }

        }
    }


}

capitalizeWords("hello world from javascript");
// → "Hello World From Javascript"

capitalizeWords("javaScript");
// → "JavaScript"
