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