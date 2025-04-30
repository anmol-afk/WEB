// ! Strings
// string i sa collection of characters which are enclosed in single quotes ('') or double quotes ("") or backticks (``)

// var s = 'JavaScript';
// var s1 = "JavaScript";
// var s2 = `JavaScript`;
// console.log(s, s1, s2);
// console.log(typeof s);
// console.log(typeof s1);


// ? String Interpolation:
// It is a process of accessing the variable into the string.
// To use this  -----> '${variableName}'
var sname = "Manav";

var course = "MERN Stack";

var result = "Hii " + sname + " You have opted for " + course;
console.log(result);



var result = `Hii ${sname} you have opted for ${course}`;
console.log(result);

var result = "Hii ${sname} you have opted for ${course}";
console.log(result);

// ? lenght Property
var s = "I Love JavaScript";
console.log(s);
console.log(s.length);

// ! ============ String Methords ============
// ? to Uppercase()
var s = "JavaScript";
console.log(s);
console.log(s.toUpperCase());

// ? to Lowercase()
var s = "JavaScript";
console.log(s);
console.log(s.toLowerCase());

// ? trimStart(), trimEnd(), trim()
var s = "JavaScript";
console.log(s);

var s = "               JavaScript          ";
console.log(s);
console.log(s.lenght);

console.log(s.trimStart());
console.log(s.trimStart().lenght);

console.log(s.trimEnd());
console.log(s.trimEnd().lenght);

console.log(s.trim());
console.log(s.trim().lenght);

// ? substr();
// It will return the sub string of the original string.
// ~ syntax: variableName.substr(SI, length);
var s = "I Love JavaScript";
console.log(s);
console.log(s.substr(2, 4));
console.log(s.substr(7, 4));
console.log(s.substr(11, 6));

// ? subString();
// It will return the sub string of the original string.
// ~ syntax: variableName.subString(SI, EI);
var s = "I Love JavaScript";
console.log(s);
console.log(s.substring(2, 6));
console.log(s.substring(7, 11));
console.log(s.substring(11, 17));

//? slice();
// It will return the sub string of the original string.
// ~ syntax: variableName.slice(SI, EI);
var s = "I Love JavaScript";
console.log(s);
console.log(s.slice(0, 1));
console.log(s.slice(2, 6));
console.log(s.slice(11, 17));

// ? replace(), replaceAll():
// It will replace the existing char with new char.
// ~ syntax: variableName.replace("exisitingChars", "newChars");

var s = "Hii Hii Hoi Hoi";
console.log(s);
console.log(s.replace("Hii", "Bye"));
console.log(s.replaceAll("Hoi", "Bye"));

// ? toString();
// It will convert the datatype into string.
// ~ syntax: variableName.toString();

var n = 100;
console.log(n);
console.log(typeof n);

var s = n.toString();
console.log(s);
console.log(typeof s);

// ? It will check the character are present in a string or not and it will return a boolean value.
// ~ syntax: variableName.includes("chars");

var s = "abcabcabc";
console.log(s);
console.log(s.includes("a"));//true
console.log(s.includes("ca"));//true

var s = "Hello Manav, Welcome to BigBoss Season 20";
console.log(s);
console.log(s.includes("bigboss"));//false
console.log(s.includes("BigBoss"));//true

// ? indxeOf();
// It will return the index of the char.
// ~ syntax: variableName.indexOf("chars");

var s = "I Love JavaScript";
console.log(s);
console.log(s.indexOf("L"));//2
console.log(s.indexOf("J"));//7
console.log(s.indexOf("a"));//8
console.log(s.indexOf("m"));//-1
console.log(s.indexOf("Love"));//2

var s = 
    "I Love JavaScript, Because I Love Web Technology, Later I Loves Job, Later I Love our own wives";
console.log(s);
console.log(s.indexOf("Love"));

// ? lastIndexOf();

var s = 
    "I Love JavaScript, Because I Love Web Technology, Later I Loves Job, Later I Love our own wives";
console.log(s);
console.log(s.lastIndexOf("Love"));

var s = "abc abc abc";
console.log(s);
console.log(s.indexOf("abc"));

var s = "abc abc abc";
console.log(s);
console.log(s.indexOf("abc"));
console.log(s.lastIndexOf("abc"));

// ? split():
// It will split the string and it will convert into an array.
// ~ Syntax: variableName.split("character");

var s = "I Love JavaScript";
console.log(s);
console.log(s.split(" "));
console.log(s.split(""));
console.log(s.split("Love"));
console.log(s.split("Java"));
console.log(s.split("a"));














