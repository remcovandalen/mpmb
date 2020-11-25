var iFileName = "pub_20200317_EGtW.js";
RequiredSheetVersion(13);

// Define the source
SourceList.EGtW={
	name : "Explorer's Guide to Wildemount",
	abbreviation : "EGtW",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/wildemount",
	date : "2020/03/17"
};

// Backgrounds
BackgroundList["grinner"] = {
	regExpSearch : /^(?=.*grinner).*$/i,
	name : "Grinner",
	source : ["EGtW", 200],
	skills : ["Deception", "Performance"],
	gold : 15,
	equipleft : [
		["Disguise kit", "", 3],
		["Musical instrument of your choice", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Gold-plated ring with smiling face", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Ballad of the Grinning Fool",
	trait : [
		"I love the spotlight. Everyone, look at me!",
		"Give me a drink am I'm your friend.",
		"Talk to me about yourself. I'm a hell of a listener.",
		"I hate to start fights, but I love to finish them.",
		"I can't sit still.",
		"I'm always humming an old tune from my past.",
		"When I don't have a reason to smile, I'm miserable.",
		"I'm lucky like you wouldn't believe."
	],
	ideal : [
		["Revolution",
			"Revolution: Tyrants must fall, no matter the cost. (Chaotic)"
		],
		["Compassion",
			"Compassion: The only way to make a better world is to perform small kindnesses. (Good)"
		],
		["Justice",
			"Justice: A nation built upon just foundations will uphold freedom for all. (Law)"
		],
		["Expression",
			"Expression: Music, joy, and laughter are the keys to freedom. (Good)"
		],
		["Self-Determination",
			"Self-Determination: People should be free to do as they please. (Chaotic)"
		],
		["Vigilance",
			"Vigilance: A free people must be carefully taught, lest they be misled. (Neutral)"
		]
	],
	bond : [
		"I lost someone important to an agent of the empire. That regime will fall.",
		"The first people to be hurt by this war will be the common folk. I need to protect them.",
		"Music helped me through a dark time in my life. Now, I'll use music to change the world.",
		"I will be known as the greatest spy who ever lived.",
		"All life is precious to me. I know I can change the world without taking a humanoid life.",
		"The elite in their ivory towers don't understand how we suffer. I intend to show them."
	],
	flaw : [
		"I've never lied once in my life. What? No, I'm not crossing my fingers!",
		"I do everything big! Subtlety? I don't know the meaning of subtlety! Oh, that's a problem?",
		"Being a spy in wartime is painful. I've seen so much suffering, I think I'm losing my mind.",
		"I can't focus on my mission. I just want to carouse and sing and play!",
		"Yeah, that's my name. Yeah, I'm a Grinner spy. Who cares about staying undercover?",
		"I can't afford to trust anyone. Not. Anyone."
	],
	extra : [
		"Select Your Favorite Code-Song",
		"Zan's Coming Back",
		"Blow Fire Down the Coast",
		"Hush! Onward Come the Dragons",
		"Let the Sword Grow Rust",
		"Drink Deep, Li'l Hummingbird",
		"Dirge for the Emerald Fire"
	],
	toolProfs : ["Thieves' tools", ["Musical instrument", 1]],
	lifestyle : "modest"
};
BackgroundList["volstrucker agent"] = {
	regExpSearch : /^(?=.*volstrucker)(?=.*agent).*$/i,
	name : "Volstrucker Agent",
	source : ["EGtW", 202],
	skills : ["Deception", "Stealth"],
	gold : 10,
	equipleft : [
		["Poisoner's kit", "", 2]
	],
	equipright : [
		["Common clothes", "", 3],
		["Black cloak with a hood", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Shadow Network",
	trait : [
		"I prefer to keep my thoughts to myself.",
		"I indulge vice in excess to quiet my conscience.",
		"I've left emotion behind me, I'm now perfectly placid.",
		"Some event from the past keeps worming its way into my mind, making me restless.",
		"I always keep my word - except when I'm commanded to break it.",
		"I laugh off insults and never take them personally."
	],
	ideal : [
		["Order",
			"Order: The will of the crown is absolute. (Law)"
		],
		["True Loyalty",
			"True Loyalty: The Cerberus Assembly is greater than any power, even the crown. (Any)"
		],
		["Death",
			"Death: The penalty for disloyalty is death. (Evil)"
		],
		["Determination",
			"Determination: I cannot fail. Not ever. (Neutral)"
		],
		["Fear",
			"Fear: People should not respect power. They should fear it. (Evil)"
		],
		["Escape",
			"Escape: The Volstrucker are pure evil! I can't atone for what I've done for them, but I can escape with my life. (Any)"
		]
	],
	bond : [
		"The job is all that matters. I will see it through.",
		"My orders are important, but my comrades are worth more than anything. I would die for them.",
		"Everything I've done, I've done to protect someone close to me.",
		"If the empire falls, all of civilization falls with it. I will hold back the chaos and barbarism at any cost."
	],
	flaw : [
		"I drink to dull the pain in the back of my head.",
		"I go a bit mad when I see blood.",
		"I can hear the voices of everyone I've killed. I see their faces. I can't be free of these ghosts.",
		"Fear is a powerful motivator. I will do whatever it takes to prevent those who know what I am from seeing me fail, and those I care about from knowing what I am."
	],
	extra : [
		"Select Your Tragedy",
		"Familicide",
		"Amnesia",
		"Capture",
		"Starvation",
		"Disfigurement",
		"Vicissitude"
	],
	toolProfs : ["Poisoner's kit"],
	languageProfs : [1],
	lifestyle : "modest"
};

BackgroundFeatureList["ballad of the grinning fool"] = {
	description : "Like every Grinner, you know how to find a hideout. In any city of 10,000 people or more on the Menagerie Coast or in the lands of the Dwendalian Empire, you can play the \"Ballad of the Grinning Fool\" in a major tavern or inn. A member of the Golden Grin will find you and give shelter to you and any companions you vouch for. This shelter might be discontinued if it becomes too dangerous to hide you, at the DM's discretion. This feature must be used with caution, for not all who know the ballad are your friends. Some are traitors, counterspies, or agents of tyranny.",
	source : ["EGtW", 200]
};
BackgroundFeatureList["shadow network"] = {
	description : "You have access to the Volstrucker shadow network, which allows you to communicate with other members of the order over long distances. If you write a letter in special arcane ink, address it to a member of the Volstrucker, and cast it into a fire, the letter will burn to cinders and materialize whole again on the person of the agent you addressed it to. The ink used to send a letter across the shadow network is the same as that used by a wizard to scribe spells in a spellbook. Writing a letter in this ink costs 10gp per page.",
	source : ["EGtW", 202]
};
