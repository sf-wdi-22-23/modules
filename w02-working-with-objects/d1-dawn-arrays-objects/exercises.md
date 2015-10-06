# Arrays and Objects Exercises

## Manipulate Data in Objects and Arrays

Copy the following code into your console.

```js
var clubs =  [
	{
    	name: 'Yearbook',
        students: [
	        { first: 'Joe', last: 'Lakin' },
	        { first: 'Evalyn', last: 'Bradtke' },
			{ first: 'Samuel', last: 'Black' }
	    ],
        teacher: 'James Friar'
    },
    {
    	name: 'Jazz Band',
        students: [
			{ first: 'Douglas', last: 'Wisoky' },
        	{ first: 'Cora', last: 'Thompson' },
			{ first: 'Samuel', last: 'Ziemann' },
			{ first: 'Alana', last: 'Cortez'}
	    ],
        teacher: 'Luther Richards'
    },
    {
    	name: 'Swim Team',
        students: [
        	{ first: 'Cora', last: 'Thompson' },
			{ first: 'Samuel', last: 'Black' },
			{ first: 'Alana', last: 'Cortez'},
			{ first: 'Joe', last: 'Lakin' }
	    ],
        teacher: 'Carol Darby'
    }
];
```

For the following exercises, start from the `clubs` variable.

1. Read and console log the following:  
	* the array that contains all the student club data
	* the number of clubs  
	* the object that contains all of the information for the second club   
	* the teacher of the first club  
	* the array of students in the second team  
	* the last name of the second student on the third team  

1. Create an object literal representing a student with your name, and assign it to a variable.

1. Add yourself to one of the clubs as a student member.  Add a comment saying which club you're joining.

1. Create an object literal representing a new club, and assign it to a variable. Make sure it has values for name, students, and teacher.

	* Add your new club to the array of clubs.  
	* Add yourself as a student in the new club.  

1. Update Samuel Black's first name to Sam everywhere it occurs.

1. Oops, the school is losing extracurricular funding.  Remove one of the clubs from the array. Add a comment to say which club has been defunded.


## Stretch: Array Manipulation Practice

1. `getPairs(names)`

	Write a function called `getPairs` that takes in an array of names and outputs random pairs of names. How could you use this to generate pairs of students for pair programming?

	```js
	// Example of getPairs!

	// set up names argument
	var students = ["Johnny", "Emily A", "Ling", "Jason", "Franchesca"];
	// call getPairs function
	getPair(students);
	// returns [["Emily A", "Ling"], ["Franchesca", "Jason"] , ["Johnny"]]
	```


## Iteration Methods

JavaScript's built-in iteration methods look like `arr.forEach(callback)` or `arr.reduce(callback)`. The array being worked on is in front, and the callback function that says what to do is inside the parentheses. We don't know the syntax to create that setup quite yet, so we'll make the array an argument of our homemade iteration methods.  We'll also implement a few that don't come built in to JavaScript: `pluck` and `partition`.

1. Write a function called `each` that takes in an array argument (called `arr`) and a function argument (called `callback`). This will be our version of JavaScript's `forEach`. The function argument (`callback`) should take two arguments: one element from the array, and the index of that element.  The `each` function should loop through the array and call `callback` once for each element. After the loop, `each` should return `arr`, the original array that was passed in.  

	```js
	// starter structure for OUR each
	var each = function(arr, callback){
	// YOUR CODE IN HERE!
	
	
	
	}

	// set up variables for arguments
	var lottoNumbers = [18, 14, 15];             // our arr
	var logMessage = function(element, index){   // our cb
		console.log("The next number is..... " + element + "!");
	}

	each(lottoNumbers, logMessage);
	// logs to the console:
	//   "The next number is..... 18!"
	//   "The next number is..... 14!"
	//   "The next number is..... 15!"
	// returns [18, 14, 15]

	```



1. Write a function called `partition` that takes in an array and another function (a callback).  The callback should take in an element and an index and return `true` or `false`. `partition` should split the array into two groups: one whose elements all resulted in `true` and one whose elements all resulted in `false`. It should return a new array with the two groups nested inside.

	```js
	// starter structure for our partition
	var partition = function(arr, callback){
	// YOUR CODE IN HERE!
	
	
	
	}

	// set up variables for arguments
	var nums = [0, 1, 2, 3, 4, 5];	// our arr
	var isOdd = function(num){ 		// our truth test
		return num % 2 !== 0;
	};

	partition(nums, isOdd);
	// returns [[1, 3, 5], [0, 2, 4]]
	```




1. Write a function called `pluck` that takes in an array of objects and a string that is one of their keys. `pluck` should iterate through the array, pick out the value each object has associated with the given key, and return a new array containing those values.  This iteration method won't use a callback.

	```js
	// starter structure for our pluck
	var pluck = function(arr, key){
	// YOUR CODE IN HERE!
	
	
	
	}

	// set up variable for arguments
	var grandparents = [
		{first: "June", last: "Crane", age: 74},
		{first: "Jim", last: "Crane", age:76},
		{first: "Linda", last: "Fuentes", age: 62},
		{first: "Panfilo", last: "Fuentes", age: 76}
		];

	// call the pluck function, asking for the key 'first'
	pluck(grandparents, 'first');
	// returns ["June", "Jim", "Linda", "Panfilo"]
	```
