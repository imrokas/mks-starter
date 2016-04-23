// 3)Write a function searchBooks that, given a query and an array of books, searches the array of books for "matching" books. You'll need to make a few decisions when implementing a search algorithm....
function searchBooks(library, key, keyword) {
	//create matches array
	var matches = [];
	// need go over every book in library
	for(var i = 0; i < library.length; i++) {
		if(key === 'author') {
			for(var j = 0; i < library[i].author.length; j++) {
				if(library[i].author[j].inclues(keyword) !== -1) {
					matches.push(library[i])
				}
			}
		}
		// if I find a match
		if(library[i][key].includes(keyword) !== -1){
			// add to matches array
			matches.push(library[i]);
		}
	}

	// return all the matches
	return matches;
}

//Write a function extends that accepts two objects as arguments, and extends all of the key/value pairs of the second one to the first one.
function extends(obj1, obj2) {
	// go over all the keys in obj2
	for(var key in obj2) {
		// check if key exist in obj
		if(!obj1.hasOwnProperty(key)) { // if (!obj1[key])
			// if it doesn't just add
			obj1[key] = obj2[key];
		}

		/* v2 extend obj1 and overwright it's values
			//[no need for if statement anymore]
			obj1[key] = obj2[key];
		*/
	}

	//return obj1
	return obj1;
}

//#3 Write a function select that accepts two arguments: an object and an array.
// The array should contain names of keys that will be selected from the object:

function select(obj, keys) {
	// create results obj
	var res = {};
	// iterate over keys array
	for(var i = 0; i < keys.length; i++) {
		// check if key exists
		// if(obj[keys[i]])
		if(obj.hasOwnProperty(keys[i])) {
			// if it does add to results object
			res[keys[i]] = obj[keys[i]];
		}

	}
	// return results object
	return res;
}

//I don't understand the "Repetition Revisited: 
//Another Technique" lesson, I'm confused about basically
//the whole lesson.

function repeatStr(count, str) {
	if(count === 0) {
		return '';
	}
	return str + repeatStr(count-1, str);
}

function repeatStr(count, str) {
	function repeat(times, wholeStr) {
		if(times < count) {
			return repeat(times + 1, wholeStr + str);
		}
		return wholeStr;
	}

	return repeat(0, '');
}

function repeatStrFor(count, str) {
	var res = '';
	for(var i = 0; i < count; i++) {
		res = res + str;
	}
	return res;
}

// would like to review objects and data modeling. 
// specifically how data modeling can be built from objects. 
// so perhaps review when an array is preferable to an object.
function makeSnack(name, weight, price) {
	return {
		name: name,
		weight: weight,
		price: price
	};
}

var vendingMachine = [];

function addSnack(vendingMachine, name, weight, price) {
	vendingMachine.push(makeSnack(name, weight, price));
}

function getSnack(vendingMachine, snackName) {
	// create result var
	var res;
	// go over every snack
	for(var i = 0; i < vendingMachine.length; i++) {
		if(vendingMachine[i][name] === snackName) {
			// save snack
			res = vendingMachine[i];
			//remove from machine
			vendingMachine.splice(i, 1);
			return res;
		}
	}
	return 'There is no snack: ' + snackName;
}

//.slice, .split, .splice(starter, deletecount), 
// data modeling (more practice #1), double authors
//  for book example, Write a function evenLengthWords
//  that takes an array of strings as an argument,
//  and returns an array of just the words that have
//  an even length.

function makeBook(title, author, msrp, pageCount) {
	return {
		title: title,
		author: author,
		msrp: msrp,
		pageCount: pageCount
	};
}

function display(book) {
	var display = book.title;
	if(Array.isArray(book.author)) {
		display += ' by ' + book.author.join(', ');
	}
	else {
		display += ' by ' + book.author;
	}
	display += ' - $' + book.msrp + ' , p. ' + book.pageCount;
	return display
}

function evenLengthWords(str) {
	var words = str.split(' ');
	var res = [];
	for(var i = 0; i < words.length; i++) {
		if(words[i].length % 2 === 0) {
			res.push(words[i]);
		}
	}
	return res;
}

//.slice(start, [end])
//.split(delimeter)
//.splice(starter, deletecount)
//['a', 'b', 'c', 'd'].splice(1, 2) // => ['a', 'd']

//Write a function remove that accepts an
//array and an element, and returns an array with
//all ocurrences of element removed.
function remove(array, element) {
  var res = [];
  // iterate over array
  for(var i = 0; i < arra.length; i++) {
  	if(array[i] !== element) {
  		res.push(array[i]);
  	}
  }
  return res;
}

var library = [
 {title: 'Harry Potter 1'},
 {title: 'Harry Potter 2'},
 {title: 'Some other book'}
]

searchBooks(library, title, 'Harry');
i = 0; matches = [{title: 'Harry Potter 1'}]
i = 1; matches = [{title: 'Harry Potter 1'}, {title: 'Harry Potter 2'}]
i = 2; matches = [{title: 'Harry Potter 1'}, {title: 'Harry Potter 2'}]
i = 3; (3 < 3)

//=> [{title: 'Harry Potter 1'}, {title: 'Harry Potter 2'}]

function clean1(obj) {
	// iterate over every key
	for(var prop in obj) {
		// check if value is odd 
		if(typeof obj[prop] === 'number' && obj[prop] % 2 === 1) {
			//remove it
			delete obj[prop];
		}
	}
	//return obj
	return obj;
}

function clean2(obj) {
	// create results object
	var res = {};
	// iterate over object
	for(var key in obj) {
		//check if value is odd number
		if(typeof obj[key] === 'number' && obj[key] % 2 === 1) {
			// then skip it
			continue;
		}
		// add to resutls obj
		res[key] = obj[key];
	}
	// return results obj
	return res;
}

//count characters
function countCharacters(s) {
  // create results object
  var res = {};
  //travers string
  for(var i = 0; i < s.length; i++) {
  	//check if letter exist in results obj
  	if(!!res[s[i]]) {
  		// if it doesn't add it
  		res[s[i]] = 0;
  	}
  	//increase count by 1
  	res[s[i]]++;
  }
  //return result obj
  return res;
}

'hello'
res = {
	h: 1,
	e: 1,
	l: 2,
	o: 1
}


//falsy values
// undefined
// null
// 0
// []
// ''
// false