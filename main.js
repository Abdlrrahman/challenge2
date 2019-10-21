// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.

I creates an array called computers it is an array of objects, and I used the each function to loop through the array of objects, 
and to enter the objects into the array called computers, and in the displayComputer function to return the one object from the computers array.
THEN 

*/



function makeComputer(type, color, weight) {

	  var computers = [

  {

  	type: type,

  	color: color,

  	weight: weight

  }];

  each(computers, function(element, key) {

  	computers[key] = element;

  });

  return computers;
  
  }

// Write a function displayComputer that can be used to display one computer.

function displayComputer(computer) {

  return computer;
}

makeComputer(cop1 = {type:'HP', color:'black', weight:3});

makeComputer(cop2 = {type:'dell', color:'blue', weight:2});

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

I used the each function to loop through the arrayOfStrings and, 
I used a anothor array to push the elements inside the new array after making them in the upper case form using the toUpperCase method.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/

function uppercaseAll(arrayOfStrings) {

  var upper = [];

  each(arrayOfStrings, function(element, i) {


  	upper.push(element.toUpperCase());

  });

  return upper;

}

var strArr = ['hello', 'world', 'whirled', 'peas'];

uppercaseAll(strArr);

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

I used the filter function to loop through the array, 
and the objects inside the array to check for the condition and return the result. 

Here’s the data you’ll work with:
*/

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

function highestPopulation(arrayOfObjects) {

  return filter(arrayOfObjects, function(element, i) {

  	return element.population > 500000000;

  });

}


highestPopulation(data);

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.

I used the each function to loop through the numbers and, 
I used a anothor array to push the elements inside the new array after dividing them by two.

*/

function halveAll(numbers) {

	var arr = [];

  each(numbers, function(element, i) {

    arr.push(element/2);

  });

  return arr;

}

var numsArray = [2, 6, 20, 8, 14];

halveAll(numsArray);

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.

I used the map function to loop through the object and only return the elements.

*/
function values(obj) {
  
  return map(obj, function(element, key) {

  	return element;

  });

}

values({first : 5, second: 'something' , third : 129});

//Good Luck :))
