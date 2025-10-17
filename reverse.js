let originalWord = "Janarthanan";
let splitword = originalWord.split("");
let reversedWord = "";
for (let i = splitword.length - 1; i >= 0; i--) {
  reversedWord = reversedWord+splitword[i];
}


console.log("Reversed Word:", reversedWord);

if (originalWord === reversedWord) {
 
  console.log("It’s a palindrome!");
} else {
 
  console.log("Not a palindrome!");
}
