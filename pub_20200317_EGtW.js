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

// Add one subclass for Fighter
AddSubClass("fighter", "echo knight-egtw", {
	regExpSearch : /^(?=.*echo)(?=.*knight).*$/i,
	subname : "Echo Knight",
	source : ["W", 183],
	fullname : "Echo Knight",
	features : {
		"subclassfeature3" : {
			name : "Manifest Echo",
			source : ["EGtW", 183],
			minlevel : 3,
			description : "\n   " + "I can manifest an echo of myself in an unoccupied space I can see within 15ft" + "\n   " + "I can swap places with the echo at a cost of 15ft of movement" + "\n   " + "I can choose to make any attack from the echo's space" + "\n   " + "I can make opportunity attacks from the echo's space",
			eval : "AddAction('bonus action', 'Manifest Echo (summon)'); AddAction('bonus action', 'Manifest Echo (swap)');",
			removeeval : "RemoveAction('bonus action', 'Manifest Echo (summon)'); RemoveAction('bonus action', 'Manifest Echo (swap)');"
		},
		"subclassfeature3.1" : {
			name : "Unleash Incarnation",
			source : ["EGtW", 183],
			minlevel : 3,
			description : "\n   " + "Whenever I take the Attack action, I can make one additional melee attack" + "\n   " + "from my echo's space",
			usages : "Constitution modifier per ",
			usagescalc : usagescalcStr("Con"),
			recovery : "long rest"
		},
		"subclassfeature7" : {
			name : "Echo Avatar",
			source : ["EGtW", 183],
			minlevel : 7,
			description : "\n   " + "I can temporarily transfer my consciousness to my echo for 10 minutes" + "\n   " + "I can see and hear through its eyes and ears" + "\n   " + "The echo's range increases to 1000ft before it's destroyed",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Shadow Martyr",
			source : ["EGtW", 183],
			minlevel : 10,
			description : "\n   " + "I can make my echo intercept an attack directed at another creature I can see" + "\n   " + "Before the attack roll is made I teleport my echo to an unoccupied space within 5ft of" + "\n   " + "the targeted creature; the attack roll is then made against my echo",
			action : ["reaction", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Reclaim Potential",
			source : ["EGtW", 184],
			minlevel : 15,
			description : "\n   " + "When my echo is destroyed from damage I gain 2d6 + Con modifier" + "\n   " + "temporary hitpoints, provided I don't already have any",
			usages : "Constitution modifier per ",
			usagescalc : usagescalcStr("Con"),
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Legion of One",
			source : ["EGtW", 184],
			minlevel : 18,
			description : "\n   " + "I can make two echoes instead of one and these can coexist" + "\n   " + "When I roll initiative and have no uses of Unleash Incarnation left, I regain one use"
		}
	}
});

CreatureList["echo"] = {
	name : "Echo",
	source : [["EGtW", 183]],
	size : 3,
	type : "",
	subtype : "",
	alignment : "Neutral",
	ac : 14,
	hp : 1,
	hd : [],
	speed : "0 ft",
	scores : [10, 10, 10, 10, 10, 10],
	saves : ["", "", "", "", "", ""],
	condition_immunities : "all conditions",
	passivePerception : 0,
	senses : "",
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 0,
	attacksAction : 0,
	attacks : [],
	eval : function(prefix) {

		// HP is only ever 1
		var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
		HPmaxFld.readonly = true;
		Hide(prefix + "Buttons.Comp.Use.HP.Max");

		// Echo type
		var theType = tDoc.getField(prefix + 'Comp.Type');
		theType.readonly = true;
		theType.value = 'Echo';

		// Armour class is 14 + character proficiency
		var armourClass = tDoc.getField(prefix + 'Comp.Use.AC');
		armourClass.readonly = true;
		armourClass.setAction("Calculate", "event.value = 14 + Number(How('Proficiency Bonus'));");

		// Same size as character
		PickDropdown(prefix + "Comp.Desc.Size", CurrentRace.size);

		// Saving throws are the same as the character's
		for (var i = 0; i < AbilityScores.abbreviations.length; i++) {
			var abi = AbilityScores.abbreviations[i];
			var saveModBonus = tDoc.getField(prefix + 'BlueText.Comp.Use.Ability.' + abi + '.ST.Bonus');
			saveModBonus.readonly = true;
			saveModBonus.setAction("Calculate", "event.value = What('" + abi + " ST Mod');");
		}
		// TODO: This doesn't quite work, as this bonus is unfortunately calculated after the actual save.
	}
};

// Add two subclasses for Wizard
AddSubClass("wizard", "chronurgy magic-egtw", {
	regExpSearch : /^((?=.*chronurgy)(?=.*(wizard|magic|mage))|chronomancer|chronurgist).*$/i,
	subname : "Chronurgy Magic",
	source : ["EGtW", 184],
	fullname : "Chronurgist",
	features : {
		"subclassfeature2" : {
			name : "Chronal Shift",
			source : ["EGtW", 184],
			minlevel : 2,
			description : desc([
			]),
			action : ["reaction", ""],
			usages : 2,
			recovery : "long rest"
		},
		"subclassfeature2.1" : {
			name : "Temporal Awareness",
			source : ["EGtW", 184],
			minlevel : 2,
			description : "\n   " + "I gain a bonus to my initiative rolls equal to my Intelligence modifier",
			addMod : { type : "skill", field : "Init", mod : "max(Int|0)", text : "I can add my Intelligence modifier to initiative rolls." }
		},
		"subclassfeature6" : {
			name : "Momentary Stasis",
			source : ["EGtW", 184],
			minlevel : 6,
			description : desc([
			]),
			action : ["action", ""],
			usages : "Intelligence modifier per ",
			usagescalc : usagescalcStr("Int"),
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Arcane Abeyance",
			source : ["EGtW", 184],
			minlevel : 10,
			description : desc([
			]),
			usages: 1,
			recovery: "short rest"
		},
		"subclassfeature14" : {
			name : "Convergent Future",
			source : ["EGtW", 185],
			minlevel : 14,
			description : desc([
			]),
			action : ["reaction", ""]
		}
	}
});

AddSubClass("wizard", "graviturgy magic-egtw", {
	regExpSearch : /^((?=.*graviturgy)(?=.*(wizard|magic|mage))|gravimancer|graviturgist).*$/i,
	subname : "Graviturgy Magic",
	source : ["EGtW", 185],
	fullname : "Graviturgist",
	features : {
		"subclassfeature2" : {
			name : "Adjust Density",
			source : ["EGtW", 185],
			minlevel : 2,
			description : desc([
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Gravity Well",
			source : ["EGtW", 185],
			minlevel : 6,
			description : desc([
			])
		},
		"subclassfeature10" : {
			name : "Violent Attraction",
			source : ["EGtW", 185],
			minlevel : 10,
			description : desc([
			]),
			action : ["reaction", ""],
			usages : "Intelligence modifier per ",
			usagescalc : usagescalcStr("Int"),
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Event Horizon",
			source : ["EGtW", 185],
			minlevel : 14,
			description : desc([
			]),
			action : ["action", ""],
			usages : 1,
			recovery: "long rest",
			altResource : "SS 3+",
		}
	}
});

function usagescalcStr(mod) {
	return "event.value = Math.max(1, What('" + mod + " Mod'));";
}

var companionUtil = {
	add : function (compName) {
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		var prefix = false;
		if (AScompA) {
			for (var a = 1; a < AScompA.length; a++) {
				if (!What(AScompA[a] + 'Comp.Race')) {
					prefix = AScompA[a];
					break;
				}
			}
		}
		if (!prefix) prefix = DoTemplate('AScomp', 'Add');
		Value(prefix + 'Comp.Race', compName);
		var changeMsg = "The " + compName + " has been added to the companion page at page number " + (tDoc.getField(prefix + 'Comp.Race').page + 1);
		CurrentUpdates.types.push("notes");
		if (!CurrentUpdates.notesChanges) {
			CurrentUpdates.notesChanges = [changeMsg];
		} else {
			CurrentUpdates.notesChanges.push(changeMsg);
		}
		return prefix;
	},
	remove : function (compName) {
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		if (!AScompA) return;
		compName = compName.toLowerCase();
		for (var a = 1; a < AScompA.length; a++) {
			if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) {
				DoTemplate("AScomp", "Remove", AScompA[a], true);
			}
		}
	},
	find : function (compName) {
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		var prefixes = [];
		if (!AScompA) return prefixes;
		compName = compName.toLowerCase();
		for (var a = 1; a < AScompA.length; a++) {
			if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) prefixes.push(AScompA[a]);
		}
		return prefixes;
	}
};