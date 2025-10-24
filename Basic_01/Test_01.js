const studentId = 101;
var studentName = "Shaquib";
 let studentAge = 24;
 let studentCity = "New York";

 let studentCountry;

studentName = "Alex";
studentAge = 25;
// studentId=201;   // Not allowed
// console.log(studentId);
// console.log(studentName);
// console.log(studentAge);


/*Output:
101
Alex
25
*/

/*   
var = Prefer Not to use var
because of issue in block scope and function scope.

*/

console.table({studentId, studentName, studentAge, studentCity, studentCountry});

