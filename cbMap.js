var words = ["ground", "control", "to", "major", "tom"];

var length = words.map(x => x.length)

console.log(length);

var upper = words.map(x => x.toUpperCase())

console.log(upper)


var rev = words.map(function(word) {
   return word.split('').reverse().join('');
 });

console.log(rev)


////////////////////////////////////////////////////////////////////

