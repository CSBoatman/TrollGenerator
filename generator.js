// This is the main code to generate the character name //

function generator(){

	// List of consonants
	var con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

	// List of vowels
	var vow = ["a", "e", "i", "o", "u"]

	// Generates a name in CVCCVC format
	var name1 = con[Math.floor(Math.random() * con.length)] + vow[Math.floor(Math.random() * vow.length)] + con[Math.floor(Math.random() * con.length)] + con[Math.floor(Math.random() * con.length)] + vow[Math.floor(Math.random() * vow.length)] + con[Math.floor(Math.random() * con.length)];

	// Generates a name in CVCVCV format
	var name2 = con[Math.floor(Math.random() * con.length)] + vow[Math.floor(Math.random() * vow.length)] + con[Math.floor(Math.random() * con.length)] + vow[Math.floor(Math.random() * vow.length)] + con[Math.floor(Math.random() * con.length)] + vow[Math.floor(Math.random() * vow.length)];

	// Clears any previous generated name
	if (document.getElementById("name")) {
	document.getElementById("placeholder1").removeChild(document.getElementById("name"));
	}

	if (document.getElementById("name")) {
	document.getElementById("placeholder2").removeChild(document.getElementById("name"));
	}

	// Shows name in format CVCCVC
	var element = document.createElement("div");
	element.setAttribute("id", "name");
	element.appendChild(document.createTextNode(name1));
	document.getElementById("placeholder1").appendChild(element);

	// Shows name in format CVCVCV
	var element = document.createElement("div");
	element.setAttribute("id", "name");
	element.appendChild(document.createTextNode(name2));
	document.getElementById("placeholder2").appendChild(element);

}