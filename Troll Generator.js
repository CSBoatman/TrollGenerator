//Homestuck Troll Character Generator
{
	// Name Section
	{
		// List of consonants
		var con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

		// List of vowels
		var vow = ["a", "e", "i", "o", "u"]

		// Generates number between 0 and 9 to determine which version of name to show
		NameVer = Math.floor(Math.random() * 10);

		// Shows in console what number was generated
		//console.log("Number generated was: " + NameVer);

		if (NameVer >= 5) {
	  		// Generates a name in CVCCVC format
			var name1 = con[Math.floor(Math.random() * con.length)] + vow[Math.floor(Math.random() * vow.length)] + con[Math.floor(Math.random() * con.length)] + con[Math.floor(Math.random() * con.length)] + vow[Math.floor(Math.random() * vow.length)] + con[Math.floor(Math.random() * con.length)];

			// Shows in console name generated
			console.log("Your troll's name is " + name1);
		} else {
	  		// Generates a name in CVCVCV format
			var name2 = con[Math.floor(Math.random() * con.length)] + vow[Math.floor(Math.random() * vow.length)] + con[Math.floor(Math.random() * con.length)] + vow[Math.floor(Math.random() * vow.length)] + con[Math.floor(Math.random() * con.length)] + vow[Math.floor(Math.random() * vow.length)];

			// Shows in console name generated
			console.log("Your troll's name is " + name2);
		};
	};

	// Pronouns Section
	{
		// List of Subject Pronouns
		var subPro = ["He", "She", "They"];

		// List of Object Pronouns
		var objPro = ["Him", "Her", "Them"];

		// List of Possessive Pronouns
		var possPro = ["His", "Her", "Their"];

		// Generates a number between 0 and 2 to pick position in pronoun lists
		var proPicker = Math.floor(Math.random() * 3);

		// Variables for inserting pronouns where needed
		var subject = subPro[proPicker];

		var object = objPro[proPicker];

		var possessive = possPro[proPicker];
	};

	// Blood Section
	{
		// List of blood colors
		var bloodColors = ["Rust", "Bronze", "Gold", "Lime", "Olive", "Jade", "Teal", "Cobalt", "Indigo", "Purple", "Violet", "Fuchsia", "Mutant Red", "Mutant Orange", "Mutant Yellow", "Mutant Green", "Mutant Blue", "Mutant Violet"];

		// Generates a blood color from list options
		var blood = bloodColors[Math.floor(Math.random() * bloodColors.length)];

		// Shows in console the blood color selected
		console.log(possessive + " blood color is " + blood);
	};

	// Lusus Section
	{
		// List of Animals
		var animalChoices = ["Aardvark", "Akita", "Albatross", "Alligator", "Angelfish", "Ant", "Anteater", "Antelope", "Armadillo", "Axolotl", "Aye Aye", "Baboon", "Badger", "Bandicoot", "Barb", "Bat", "Bear", "Bearded Dragon", "Beaver", "Bee", "Beetle", "Bird", "Bison", "Bobcat", "Buffalo", "Bullfrog", "Butterfly", "Camel", "Capybara", "Cat", "Caterpillar", "Centipede", "Chameleon", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla", "Chipmunk", "Cockroach", "Collie", "Cougar", "Cow", "Coyote", "Crab", "Crane", "Crocodile", "Cuttlefish", "Deer", "Dingo", "Dodo", "Dog", "Dolphin", "Donkey", "Dragonfly", "Duck", "Eagle", "Echidna", "Elephant", "Emu", "Falcon", "Fennec Fox", "Ferret", "Fish", "Flamingo", "Fly", "Fox", "Frog", "Gecko", "Gerbil", "Gila Monster", "Giraffe", "Glow Worm", "Goat", "Goose", "Gopher", "Gorilla", "Grasshopper", "Great White Shark", "Greyhound", "Guinea Pig", "Hamster", "Hare", "Hedgehog", "Heron", "Hippopotamus", "Horse", "Hummingbird", "Hyena", "Iguana", "Jackal", "Jaguar", "Jellyfish", "Kangaroo", "Killer Whale", "Kiwi", "Koala", "Komodo Dragon", "Lemming", "Lemur", "Leopard", "Lion", "Lizard", "Llama", "Lobster", "Lynx", "Macaw", "Maine Coon", "Manatee", "Manta Ray", "Meerkat", "Mole", "Mongoose", "Monkey", "Moose", "Moth", "Mouse", "Mule", "Newt", "Ocelot", "Octopus", "Okapi", "Opossum", "Orangutan", "Ostrich", "Otter", "Panther", "Parrot", "Peacock", "Peligan", "Penguin", "Pheasant", "Pig", "Piranha", "Platypus", "Polar Bear", "Porcupine", "Possum", "Puffer Fish", "Puffin", "Puma", "Quokka", "Rabbit", "Raccoon", "Rat", "Rattlesnake", "Red Panda", "Reindeer", "Rhinoceros", "Robin", "Sabre-Toothed Tiger", "Salamander", "Scorpion", "Sea Dragon", "Sea Lion", "Sea Turtle", "Seahorse", "Seal", "Serval", "Sheep", "Shrimp", "Skunk", "Sloth", "Snail", "Snake", "Squid", "Squirrel", "Starfish", "Stingray", "Swan", "Tapir", "Termite", "Tiger", "Tortoise", "Toucan", "Turkey", "Vampire Bat", "Vulture", "Wallaby", "Walrus", "Warthog", "Wasp", "Water Buffalo", "Weasel", "Wild Boar", "Wildebeest", "Wolf", "Wolverine", "Wombat", "Woodpecker", "Woolly Mammoth", "Yak", "Zebra"];

		// Generates a lusus from the animal list options
		var lusus = animalChoices[Math.floor(Math.random() * animalChoices.length)];

		// Shows in console the lusus selected
		console.log(possessive + " lusus is a(n) " + lusus);
	};

	// Horns Section
	{
		// Generates direction of horns
		var dir = ["forwards", "backwards", "left", "right", "upwards", "downwards"];

		// Selects direction of horns
		var direction = dir[Math.floor(Math.random() * dir.length)];

		// Generates style of horns
		var type = ["spiraled", "straight", "curved", "broken", "wavy", "split", "uneven", "nubby", "sharp", "blunt", "skinny", "thick", "tapered", "pointed"];

		// Selects style of horns
		var style = type[Math.floor(Math.random() * type.length)];

		// Generates number of horns
		amount = Math.floor(Math.random() * 5) + 2;

		//Shows in console the combination of direction, style, and number of horns
		console.log(subject + " has/have " + amount + " horn(s), they are " + style + " and lean " + direction + ".");
	};

	// Symbol Section
	{
		// Symbol List
		var symbols = ["★", "☆", "✦", "✧", "✪", "✫", "⁂", "⁑", "✢", "✤", "✥", "✱", "✲", "✸", "✹", "✻", "✽", "✾", "✿", "❀", "❂", "❃", "❈", "❉", "❊", "❄", "❆", "❅", "≛", "№", "☊", "✇", "§", "¶", "৳", "₢", "₣", "₦", "₪", "₰", "¤", "《", "》", "︽", "︾", "♤", "♧", "♡", "♢", "♮", "ø", "≠", "ϟ", "☉", "☇", "☈", "☄", "↕", "↚", "↜", "↝", "↞", "↟", "↠", "↡", "↫", "↬", "↭", "↹", "⇋", "⇌", "⇎", "⇚", "⇛", "⌅", "☋", "☍", "➾", "⇴", "⟴", "⥉", "⥰", "⥀", "⟳", "☨", "✚", "‡", "❖", "〷", "ツ", "〲", "ϡ", "∭", "∯", "∂", "∉", "∑", "∓", "∾", "≉", "≎", "≬", "≼", "≽", "⋊", "⋉", "⋚", "⋛", "ↁ", "⌇", "⌘", "⌬", "⌭", "⑀", "o", "ʊ", "ξ", "ヰ", "ㅪ", "⚘"];

		// Symbol Generator
		var symbolGen1 = symbols[Math.floor(Math.random() * symbols.length)];

		var symbolGen2 = symbols[Math.floor(Math.random() * symbols.length)];

		// Shows in the console the symbol selected
		console.log(possessive + " symbol resembles a " + symbolGen1 + " mixed with a " + symbolGen2);
	};

	// Age Section
	{
		// Sweeps Generator
		AgeGen = Math.floor(Math.random() * 15) + 1;

		// Shows in console the age in Sweeps
		console.log(subject + " is/are " + AgeGen + " sweeps old.");
	};

	// God Tier Section
	{
		// Class List
		var classes = ["Heir", "Seer", "Knight", "Thief", "Maid", "Prince", "Page", "Sylph", "Rogue", "Witch", "Mage", "Bard"];

		// Aspect List
		var aspects = ["Breath", "Light", "Time", "Space", "Life", "Void", "Heart", "Mind", "Hope", "Doom", "Blood", "Rage"];

		// God Tier Generator
		var classgen = classes[Math.floor(Math.random() * classes.length)];

		var aspectgen = aspects[Math.floor(Math.random() * aspects.length)];

		// Shows in console the god tier generated
		console.log(subject + " is/are a " + classgen + " of " + aspectgen + ".");
	}
};