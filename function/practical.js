/*
take an object with your mother's name and your age. 
now , create an obj for you sibling by age diffrence 
 */

const personInfo = { name:'simran', age:25 };
const personInfo1 = { name:'simran', age:25 };
personInfo

const anotherPerson = {...personInfo , age: personInfo.age + 1 }
console.log(anotherPerson);

console.log( personInfo.age = 3 );

const arrper = ["red","green"];
const arrto = [...arrper,'red','blue'];
console.log(arrto);


const birthday = (personInfo) => {
    return {...personInfo, age: personInfo.age+6}
}

console.log(birthday(personInfo));


/* high order function  */
// given  an array of number return an object for each item

function changeStuff(a, b, c)
{
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);


/*
Home one from lms 
composition
*/


const increment = num => num +1 ;
const decrement = num => num - 1 ;
const square   = num => num *num;

const compose  = (...args) => {
   const composer = (argument) => {
   console.log(args.reduce((acc,curr)=> curr(acc) ,argument));
  }
  return  composer;
}


const value  = compose(increment,decrement,square);
value(2);