#Homestuck Troll Generator Python

#---NAME SECTION---

##List of Consonants
con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

##List of Vowels
vow = ["a", "e", "i", "o", "u"]

##Generates number 0-9 for If/Else
import random
NameVer = random.randint(0,9)

##If/Else for determining which name format is used
if NameVer >= 5:
	#CVCCVC format
	name1 = con[random.randint(0,20)] + vow[random.randint(0,4)] + con[random.randint(0,20)] + con[random.randint(0,20)] + vow[random.randint(0,4)] + con[random.randint(0,20)]
	print("Your troll's name is " + str(name1))

elif NameVer < 5:
	#CVCVCV format
	name2 = con[random.randint(0,20)] + vow[random.randint(0,4)] + con[random.randint(0,20)] + vow[random.randint(0,4)] + con[random.randint(0,20)] + vow[random.randint(0,4)]
	print("Your troll's name is " + str(name2))

#---PRONOUN SECTION---

##Subject Pronouns
subPro = ["He", "She", "They"]

##Object Pronouns
objPro = ["Him", "Her", "Them"]

##Possessive Pronouns
possPro = ["His", "Her", "Their"]

##Generates a number 0-2 to pick position in pornoun lists
proPicker = random.randint(0,2)

##Variables for inserting pronouns where needed
sub = subPro[proPicker]
obj = objPro[proPicker]
poss = possPro[proPicker]

#---BLOOD COLOR SECTION---

##List of blood colors
bloodColors = ["Rust", "Bronze", "Gold", "Lime", "Olive", "Jade", "Teal", "Cobalt", "Indigo", "Purple", "Violet", "Fuchsia", "Mutant Red", "Mutant Orange", "Mutant Yellow", "Mutant Green", "Mutant Blue", "Mutant Violet"]

##Blood Color Generator
blood = bloodColors[random.randint(0,17)]
print(poss + " blood color is " + blood)

#---LUSUS SECTION---

##List of Animals
animalChoices = ["Aardvark", "Akita", "Albatross", "Alligator", "Angelfish", "Ant", "Anteater", "Antelope", "Armadillo", "Axolotl", "Aye Aye", "Baboon", "Badger", "Bandicoot", "Barb", "Bat", "Bear", "Bearded Dragon", "Beaver", "Bee", "Beetle", "Bird", "Bison", "Bobcat", "Buffalo", "Bullfrog", "Butterfly", "Camel", "Capybara", "Cat", "Caterpillar", "Centipede", "Chameleon", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla", "Chipmunk", "Cockroach", "Collie", "Cougar", "Cow", "Coyote", "Crab", "Crane", "Crocodile", "Cuttlefish", "Deer", "Dingo", "Dodo", "Dog", "Dolphin", "Donkey", "Dragonfly", "Duck", "Eagle", "Echidna", "Elephant", "Emu", "Falcon", "Fennec Fox", "Ferret", "Fish", "Flamingo", "Fly", "Fox", "Frog", "Gecko", "Gerbil", "Gila Monster", "Giraffe", "Glow Worm", "Goat", "Goose", "Gopher", "Gorilla", "Grasshopper", "Great White Shark", "Greyhound", "Guinea Pig", "Hamster", "Hare", "Hedgehog", "Heron", "Hippopotamus", "Horse", "Hummingbird", "Hyena", "Iguana", "Jackal", "Jaguar", "Jellyfish", "Kangaroo", "Killer Whale", "Kiwi", "Koala", "Komodo Dragon", "Lemming", "Lemur", "Leopard", "Lion", "Lizard", "Llama", "Lobster", "Lynx", "Macaw", "Maine Coon", "Manatee", "Manta Ray", "Meerkat", "Mole", "Mongoose", "Monkey", "Moose", "Moth", "Mouse", "Mule", "Newt", "Ocelot", "Octopus", "Okapi", "Opossum", "Orangutan", "Ostrich", "Otter", "Panther", "Parrot", "Peacock", "Peligan", "Penguin", "Pheasant", "Pig", "Piranha", "Platypus", "Polar Bear", "Porcupine", "Possum", "Puffer Fish", "Puffin", "Puma", "Quokka", "Rabbit", "Raccoon", "Rat", "Rattlesnake", "Red Panda", "Reindeer", "Rhinoceros", "Robin", "Sabre-Toothed Tiger", "Salamander", "Scorpion", "Sea Dragon", "Sea Lion", "Sea Turtle", "Seahorse", "Seal", "Serval", "Sheep", "Shrimp", "Skunk", "Sloth", "Snail", "Snake", "Squid", "Squirrel", "Starfish", "Stingray", "Swan", "Tapir", "Termite", "Tiger", "Tortoise", "Toucan", "Turkey", "Vampire Bat", "Vulture", "Wallaby", "Walrus", "Warthog", "Wasp", "Water Buffalo", "Weasel", "Wild Boar", "Wildebeest", "Wolf", "Wolverine", "Wombat", "Woodpecker", "Woolly Mammoth", "Yak", "Zebra"]

##Lusus Generator
lusus = animalChoices[random.randint(0,191)]
print(poss + " lusus is a(n) " + lusus)

#---HORNS SECTION---

##List of directions
Dir = ["forwards", "backwards", "left", "right", "upwards", "downwards"]

##Direction of horns Generator
direction = Dir[random.randint(0,5)]

##Type of horns Generator
Type = ["spiraled", "straight", "curved", "broken", "wavy", "split", "uneven", "nubby", "sharp", "blunt", "skinny", "thick", "tapered", "pointed"]

##Style of horns Generator
style = Type[random.randint(0,13)]

##Number of horns Generator
amount = random.randrange(0,10,2)

##Shows in console the combination of direction, style, and number of horns
print(sub + " has/have " + str(amount) + " horns, they are " + style + " and lean " + direction + ".")

#---SYMBOL SECTION---

##Symbol List
symbols = ["★", "☆", "✦", "✧", "✪", "✫", "⁂", "⁑", "✢", "✤", "✥", "✱", "✲", "✸", "✹", "✻", "✽", "✾", "✿", "❀", "❂", "❃", "❈", "❉", "❊", "❄", "❆", "❅", "≛", "№", "☊", "✇", "§", "¶", "৳", "₢", "₣", "₦", "₪", "₰", "¤", "《", "》", "︽", "︾", "♤", "♧", "♡", "♢", "♮", "ø", "≠", "ϟ", "☉", "☇", "☈", "☄", "↕", "↚", "↜", "↝", "↞", "↟", "↠", "↡", "↫", "↬", "↭", "↹", "⇋", "⇌", "⇎", "⇚", "⇛", "⌅", "☋", "☍", "➾", "⇴", "⟴", "⥉", "⥰", "⥀", "⟳", "☨", "✚", "‡", "❖", "〷", "ツ", "〲", "ϡ", "∭", "∯", "∂", "∉", "∑", "∓", "∾", "≉", "≎", "≬", "≼", "≽", "⋊", "⋉", "⋚", "⋛", "ↁ", "⌇", "⌘", "⌬", "⌭", "⑀", "o", "ʊ", "ξ", "ヰ", "ㅪ", "⚘"];

##Symbol Generator
symbolGen1 = symbols[random.randint(0,119)]
symbolGen2 = symbols[random.randint(0,119)]

##Shows in the console the symbols selected
print(poss + " symbol resembles a " + symbolGen1 + " mixed with a " + symbolGen2)

#---AGE SECTION---

##Sweeps Generator
ageGen = random.randint(1,15)
print(sub + " is/are " + str(ageGen) + " sweeps old.")

#---GOD TIER SECTION---

##Class List
classes = ["Heir", "Seer", "Knight", "Thief", "Maid", "Prince", "Page", "Sylph", "Rogue", "Witch", "Mage", "Bard"]

##Aspect List
aspects = ["Breath", "Light", "Time", "Space", "Life", "Void", "Heart", "Mind", "Hope", "Doom", "Blood", "Rage"]

##God Tier Generator
classgen = classes[random.randint(0,11)];
aspectgen = aspects[random.randint(0,11)];
print(sub + " is/are a(n) " + classgen + " of " + aspectgen + ".")