// List of consonants
const con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
// List of vowels
const vow = ["a", "e", "i", "o", "u"];

/**
 * Generate a name based on format and desired length
 * @param {string} format 
 * @param {number} length 
 */
function generateName(format, length){
	ret = "";

	for (let i = 0; i < length; i++){
		let src;
		// set the source array based on the desired format pattern logic
		switch (format) { // using a switch statement so you can easily add other cases if desired
			case "alternating":
				// if this letter is even, use consonants, else use vowels
				src = i % 2 == 0 ? con : vow;
				break;
			default:
				// if this letter is the second in a group of three, use vowels, else use consonants
				src = i % 3 == 1 ? vow : con;
				break;
		}

		let ind = Math.floor(Math.random() * src.length);
		ret += src[ind];
	}
	return ret;
}

/**
 * Create child node with id containg string value
 * @param {number} id 
 * @param {string} value 
 */
function setDivValue(id, value){
	var element = document.createElement("div");
	element.setAttribute("id", "name");
	element.appendChild(document.createTextNode(value));
	document.getElementById(id).appendChild(element);
}

/**
 * Remove child div with idea
 * @param {string} id 
 */
function clearDivValue(id){
	if (document.getElementById("name")) {
		document.getElementById(id).removeChild(document.getElementById("name"));
	}
}

/**
 * Main generator function
 */
function generator(){
	//Generate random length for name between 4 and 7
	let getLen = function() {
		return 4 + Math.floor(Math.random() * Math.floor(4));
	}

	// Clears any previous generated name
	clearDivValue("placeholder1");
	clearDivValue("placeholder2");

	// Shows name in format CVCCVC
	setDivValue("placeholder1", generateName('default', getLen()));
	// Shows name in format CVCVCV
	setDivValue("placeholder2", generateName('alternating', getLen()));
}