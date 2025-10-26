
const name="Shaquib";
const age=24;

// we have to use backtick ` ` this is string Interpolation-->Best Practice
const fullDetails=`My Name is ${name} and my age is ${age} years.`;

console.log(fullDetails);


const name1 = new String("Shaquib");
// console.log(typeof name1);
// console.log(name1.toUpperCase());
// console.log(name1.length)
// console.log(name1[5])
// console.log(name1.charAt(3))
// console.log(name1.indexOf('q'))

// console.log(name1.trim())

const newString= name1.substring(2,7);
console.log(newString);

const newString1= name1.slice(-7,2);
console.log(newString1);

const newString2= " Alex  "
console.log(newString2)

const trimmedString= newString2.trim();
console.log(trimmedString.trim());

const url="https://www.example.com/Shaquib20%khan";

const repacedUrl= url.replace('20%','-');
console.log(repacedUrl);

const partOfUrl= url.slice(8,23);
console.log(partOfUrl);

const urlSplit= url.split('/');
console.log(urlSplit);
console.log(typeof urlSplit)

const includeurl=url.includes('www')
console.log(includeurl);