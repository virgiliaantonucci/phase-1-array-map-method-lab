const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let eh = tutorials.map(x => iterate(x).trim())
   return eh
}

function iterate(string) {
  var words = string.split(" "); //divides each sentence from tutorials into an array with each word as the elements
  var answer = "";
  for (var i = 0; i < words.length; i++) {
      answer= answer + words[i][0].toUpperCase() + words[i].slice(1) + " "
  }
  return answer
}


