// 3)Write a function searchBooks that, given a query and an array of books, searches the array of books for "matching" books. You'll need to make a few decisions when implementing a search algorithm....
function searchBooks(library, key, keyword) {
	//create matches array
	var matches = [];
	// need go over every book in library
	for(var i = 0; i < library.length; i++) {
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