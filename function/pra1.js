/*1. Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

jsx
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

Your output should be:
[1, 3, 3, 59, 5, 7, 25, 9, 15, 5] */


const arrNum = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const result = arrNum.map((item)=> ( item% 2 == 0 ) ? item+1: item )
console.log(result)


/*
1. Get the names in an array for only those who have a cycle. true

jsx
const family = [
  {
    name    : 'Tanay',
    haveCycle : true
  },
  {
    name     : 'Akanksha',
    haveCycle : false
  },
  {
    name     : 'Tanvi',
    haveCycle : true
  },
	{
    name     : 'Kanak',
    haveCycle : false
  }
];

Your output should be: ['Tanay', 'Tanvi']*/


const family = [
    {
      name    : 'Tanay',
      haveCycle : true
    },
    {
      name     : 'Akanksha',
      haveCycle : false
    },
    {
      name     : 'Tanvi',
      haveCycle : true
    },
      {
      name     : 'Kanak',
      haveCycle : false
    }
  ];

console.log(family.filter( f => f.haveCycle ).map(m => m.name ));

const f = family.reduce( ( acc, val ) => {  
  console.log(val.name);
    val.haveCycle ? [...acc,val.name]:[...acc] ;
    return acc;
 } ,[] );

console.log( f  );
 

/*
*The objective of this exercise is to practice more and more ES6+ code and know more in-built JavaScript methods.* 

*Remember to trim the fat and use best practices.*



1. Get the names in an array for only those who have a cycle.

1. Given an array. **Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.

jsx
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

Your output should be: [2, 6, 4]
*/

const arrnn = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
console.log( arrnn.reduce(  (acc, cur) => ( (cur% 2 == 0) && (cur < 8) )?[...acc,cur]:[...acc]  , [] ) )

/*
1. Given an array. **Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

jsx
 const arr = [‘eat’, ‘sleep’, ‘repeat’, ‘code’];

Your output should be: ['repeat']
*/
const arrChar = ['eat', 'sleep', 'repeat', 'code'];

console.log(arrChar.filter(item => item.length > 5 ))


/*
1. Given an array. Write a function to get the sum of all elements which are greater than 50.

jsx
const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

Your output should be: 190
*/

console.log(58+62+70)
const arrQ = [1, 2, 3, 58, 5, 6, 62, 8, 70];
console.log( arrQ.reduce( (acc , item) => { if( item > 50 ) { console.log(item,acc);  acc += item}  return acc; },0  )  );

console.log( arrQ.filter(item => item  > 50 ).reduce( (a,b) => a + b ) );
/*
1. Given an array. Write a function to find the product of all elements which are even.

jsx
const arr = [1, 2, 3, 7, 5, 6, 8, 9];

Your output should be: 96
*/


/*
1. Given an array of objects. Write a function to find the sum of ages of each person.

jsx
const arr = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]

Your output should be: 121 /*** 60+36+16+9 ***/
const arrP = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
];

console.log(arrP.reduce(  ( acc , item) => { acc += item.age; return acc; },0 )  )


/*
1. Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

jsx
const arr = ["You", "all", "are", "rockstars"];

Your output should be:
{'0': "You", '1': "all", '2': "are", '3': "rockstars"}
*/
const roc = ["You", "all", "are", "rockstars"];

console.log ( roc.reduce( (acc,val,i) => ({...acc,[i]:val}) ,{} ) );

/*
1. Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’. 

jsx
const arr = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
]

Your Output should be:
[
	{
		name: "Apple",
		type: "fruit"
	},
	{
		name: "Mango",
		type: "fruit"
	},
	{
		name: "Potato"
		type: "vegetable"
	},
	{
		name: "Guava",
		type: "fruit"
	},
	{
		name: "Capsicum",
		type: "vegetable"
	}
]
*/

const arrA = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
];

console.log( arrA.map( v => { v.name.length > 5 ? v.type = 'vegitable':v.type = 'frute' ; 
return v;}  ) );



/*
1. Given an array of objects.

jsx
const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
  ];

**Question:**
a. Get all the items in an array whose quantity is less than 2.
b. Get the total quantity of items present in the inventory.
c. Find the object which contains the item whose quantity is zero.
*/

const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
  ];

  console.log( inventory.filter( item => item.quantity < 2 )  )
  console.log( inventory.reduce( (acc, item) => acc += item.quantity , 0 )  );
  console.log( inventory.find( (item) => item.quantity == 0  )  );

/*

1. Given an array. Write a function to join all elements of the array with a hyphen in between them.

jsx
const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

Your output should be: 
Violet-Indigo-Blue-Green-Yellow-Orange-Red
*/

const arrS = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]
console.log(arrS.join('-'));
/*
1. Write a function that accepts a number as input and inserts hyphens between every two even numbers.

jsx
If your input is: 24345687

Your output should be: 2-43456-87
*/

const num = '24345687';
console.log( num.split('').reduce(  (a,b) => {
     if( b %2 == 0 && a[a.length-1]%2 == 0 ) { 
         console.log(a[a.length-1]);
          a = a+'-'+b;  
        }else{ 
            a = a + b  ;  
        } 
        console.log(b);
        return a;
     }  , '') );

/*
1. Write a function that takes in a string and converts all the characters to uppercase. (Hint: toUpperCase())

jsx
If your input is: "neogrammer"
Your output should be: "NEOGRAMMER"

If your input is: "neoG"
Your output should be: "NEOG"
*/



/*
1. Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.

jsx
If your input is: "neoG"
Your output should be: "nEOg"
*/
const lname = "neoG";
console.log( lname.split('').reduce( (a,b) => {
    if( ['a','e','o','i','u'].includes(b) ){
        a = a + b.toUpperCase();
    }else{
        a = a + b.toLowerCase();
    }
    console.log(b)
    return  a;
} ,'' )  );

/*
1. Flatten an array without using flat().

jsx
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];

Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']
*/
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];

  console.log( input.reduce( (a,b) =>  [...a,...b] ,[] ) );
  console.log( input.flat() );

/*
1. Count the occurrences of distinct elements in the given array.

jsx
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];

Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}
 */
console.log( input.reduce( (a,b) =>  [...a,...b] ,[] ).reduce( (a,b,i,arr) => {
    if( a[b] ){
        a[b] =  a[b] + 1 ;
    }else{
        a[b] = 1 ;
    }    
    return  a;
} , {}) );


const  lp = {};
lp['rahul'] = 25;
lp.raj= 30;

delete lp.rahul;
Object.freeze(lp);
lp.rahul = 85;
lp

/* Check give value is alphanumeric or not */

function isAlphaNumeric ( str ) {

  for ( let i = 0, len = str.length, code = 0; i < len; ++i ) {

    code = str.charCodeAt( i ); 

    if (
        ( code > 47 && code < 58) // numeric (0-9)
        || ( code > 64 && code < 91) // upper alpha (A-Z)
        || ( code > 96 && code < 123 ) // lower alpha (a-z)
    ) {
      continue;
    } 

    return false
  }

  return true;
};

console.log(isAlphaNumeric("oye"));
console.log(isAlphaNumeric("oye123"));
console.log(isAlphaNumeric("oye%123"));


/* using regular expression */
var regExp = /^[A-Za-z0-9]+$/;
console.log("1321arm".match(regExp));