
// Primitive Data Type 

  //String, Number,Boolean,Null,Undefined,Symbol,BigInt
  
  // Non-Primitive Data Type
    // Object,Array,Function


    //String Data Type

    // let studentName="John Doe";
    // console.log(typeof studentName);  

    // //Number Data Type
    // let studentAge=22;
    // console.log(typeof studentAge);

    // //Boolean Data Type
    // let isStudent=true;
    // console.log(typeof isStudent);

    // //Null Data Type
    // let studentAddress=null;
    // console.log(typeof studentAddress);  // bug in JS it shows object

    // //Undefined Data Type
    // let studentPhone;
    // console.log(typeof studentPhone);
    // //Symbol Data Type
    // let studentId=Symbol("123");

    // let studentId2=Symbol("123");
    // console.log(studentId==studentId2); // false because each symbol is unique
    // console.log(typeof studentId);



    // //BigInt Data Type
    // let bigNumber= BigInt("123456789012345678901234567890");
    // console.log(typeof bigNumber);
    // console.log(bigNumber);



    // Non-Primitive Data Type

    //Object Data Type
    let student={
        name:"Shaquib",
        age:24,
        city:"New Delhi"

    }
    // console.log(typeof student);
    // console.log(student);

    //Array Data Type
    let studentMarks=[85,90,78,92];
    // console.log(typeof studentMarks);
    // console.log(studentMarks);

    //Function Data Type
    function greetStudent(){
        // console.log("Hello Student");   
    }
    // console.log(typeof greetStudent);
    // greetStudent();


    //=====================================================



    //Memory Allocation in Data Types

    //Primitive Data Type = Stack Memory
    //Non-Primitive Data Type = Heap Memory


    let myName="Shaquib";
    let newName=myName;
    newName="Alex";

    // console.log(myName);  
    // console.log(newName);



    // Object Data Type = Reference Type
    // Stack Memory stores the reference address of the object in Heap Memory
    let student1={
        email:"Shaquib@gmail.com",
        age:24
    };
    let student2=student1;
    student2.email="Aquib@gmail.com";
    student2.age=25;

    // console.log(student2.email)
    // console.log(student1.email)
    // console.log(student2.age)
    // console.log(student1.age)

