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