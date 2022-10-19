// Iteration 1: Names and Input
let hacker1 = "Fiodor";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Whiteboardman";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
function whosNameGoesFirst(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    return `The driver has the longest name, it has ${hacker1.length} characters.`;
  } else if (hacker1.length < hacker2.length) {
    return `It seems that the navigator has the longest name, it has ${hacker2.length} characters`;
  } else {
    return `Wow, you both have equally long names, ${hacker2.length} characters!`;
  }
}
console.log(whosNameGoesFirst(hacker1, hacker2));

// Iteration 3: Loops
// 3.1
console.log(hacker1.toUpperCase().split("").join(" "));
// 3.2
console.log(hacker2.split("").reverse().join(""));
// 3.3
function whoIsFirst(name1, name2) {
  if (name1[0].toLowerCase() < name2[0].toLowerCase()) {
    return "The driver's name goes first";
  } else if (name1[0].toLowerCase() > name2[0].toLowerCase()) {
    return "Yo, the navigator goes first definitely.";
  } else {
    return "What?! You both have the same name?";
  }
}
console.log(whoIsFirst(hacker1, hacker2));

// Bonus 1
const lorem = `
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. 
`;

console.log(`"lorem" text contains ${lorem.split(" ").length} words`);
console.log(`"lorem" text contains ${lorem.match(/et/g).length} 'et'`);

// Bonus 2
function isPalindrome(text) {
  return text
    .match(/[a-zA-Z]/g)
    .join("")
    .toLowerCase() ===
    text
      .match(/[a-zA-Z]/g)
      .join("")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
    ? `Palindrome: ${text}`
    : `NOT Palindrome: ${text}`;
}
console.log(isPalindrome("A man, a plan, a canal, Panama!"));
console.log(isPalindrome("Amor, Roma"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("stack cats"));
console.log(isPalindrome("step on no pets"));
console.log(isPalindrome("taco cat"));
console.log(isPalindrome("put it up"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("No 'x' in Nixon"));
console.log(isPalindrome("Test"));

