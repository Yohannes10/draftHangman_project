let words = [
"freestate"   ,
"gauteng"   ,
"kwazulu-natal"  , 
"limpopo",
"mpumalanga"   ,
"northern-cape" , 
"northwest" ,
"eastern-cape",
"western-cape",
];

function reactWords() {
 return words[Math.floor(Math.random() * words.length)];
}

export { reactWords };
