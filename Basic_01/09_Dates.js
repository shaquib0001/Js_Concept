

const myDate= new Date();
// console.log(myDate);


const newDate = new Date();
// console.log(newDate.toDateString());
// console.log(newDate.toTimeString());
// console.log(newDate.toISOString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toJSON())


 let specificDate= new Date(2025,0,15,10,33,30,0);
//  console.log(specificDate.toLocaleString())
//  console.log(specificDate.toDateString())


 let myCreatedDate= new Date("8-01-2025");
//  console.log(myCreatedDate.toLocaleString())

 let myTimestamp=Date.now();
    // console.log(myTimestamp)
    // console.log(myCreatedDate.getTime())
    // console.log(Date.now()/1000)
    // console.log(Math.floor(Date.now()/1000))


    let todayDate= new Date();
    console.log(todayDate)
    console.log(todayDate.getFullYear())
    console.log(todayDate.getMonth()+1)
    console.log(todayDate.getDate())
    console.log(todayDate.getDay())
    console.log(todayDate.getHours())
    console.log(todayDate.getMinutes())
    console.log(todayDate.getSeconds())
    console.log(todayDate.getMilliseconds())
    