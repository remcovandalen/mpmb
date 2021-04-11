var iFileName = "pub_20201117_TCoE_class_features.js";
RequiredSheetVersion(13);

if (!SourceList.TCoE) {
	// Define the source
	SourceList.TCoE={
		name : "Tasha's Cauldron of Everything",
		abbreviation : "TCoE",
		group : "Primary Sources",
		url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tashas-cauldron-everything",
		date : "2020/11/17"
	};
}
var debugObject = function(obj, indent, beforeText, afterText) {
	if (!indent) {
		indent = 0;
	}
	if (!beforeText) {
		beforeText = "";
	}
	if (!afterText) {
		afterText = "";
	}
	var type = typeof obj;
	if (type === "object") {
		if (obj === null) {
			printlnIndent(beforeText + "null" + afterText, indent);
		} else if (Array.isArray(obj)) {
			if (obj.length == 0) {
				printlnIndent(beforeText + "[]" + afterText, indent);
			} else {
				printlnIndent(beforeText + "[", indent);
				for (var i = 0; i < obj.length; ++i) {
					debugObject(obj[i], indent + 2, "", (i != (obj.length - 1) ? ", " : ""))
				}
				printlnIndent("]" + afterText, indent);
			}
		} else {
			var prot = Object.prototype.toString.call(obj).slice(8, -1)
			printlnIndent(beforeText + prot + " {", indent);
			for (var propName in obj) {
				debugObjectProperty(obj, propName, indent + 2)
			}
			printlnIndent("}" + afterText, indent);
		}
	} else if (type === "string") {
		if (obj.length == 0) {
			printlnIndent(beforeText + "\"\"" + afterText, indent);
		} else {
			printlnIndent(beforeText + obj + afterText, indent);
		}
	} else {
		printlnIndent(beforeText + obj + afterText, indent);
	}
}

var debugObjectProperty = function(obj, name, indent, beforeText, afterText) {
	if (!indent) {
		indent = 0;
	}
	if (!beforeText) {
		beforeText = "";
	}
	if (!afterText) {
		afterText = "";
	}
	var prop = obj[name];
	var type = typeof prop;
	if (type === "object") {
		if (prop === null) {
			printlnIndent(name + " : null", indent);
		} else if (Array.isArray(prop)) {
			if (prop.length == 0) {
				printlnIndent(beforeText + "[]" + afterText, indent);
			} else {
				printlnIndent(beforeText + name + " : [", indent);
				for (var i = 0; i < prop.length; ++i) {
					debugObject(prop[i], indent + 2, "", (i != (prop.length - 1) ? ", " : ""))
				}
				printlnIndent("]" + afterText, indent);
			}
		} else {
			var prot = Object.prototype.toString.call(prop).slice(8, -1)
			printlnIndent(beforeText + name + " : " + prot + " {", indent);
			debugObject(prop, indent + 2);
			printlnIndent("}" + afterText, indent);
		}
	} else if (type === "string") {
		if (prop.length == 0) {
			printlnIndent(beforeText + name + " : \"\"" + afterText, indent);
		} else {
			printlnIndent(beforeText + name + " : " + prop + afterText, indent);
		}
	} else {
		printlnIndent(beforeText + name + " : " + prop + afterText, indent);
	}
}

var printlnIndent = function(text, indent) {
	if (!indent) {
		indent = 0;
	}
	var s = "";
	while (s.length < indent) {
		s += " ";
	}
	console.println(s + text);
};

// New class features
ClassList.barbarian.features["primal knowledge-tcoe"] = {
	name : "Primal Knowledge",
	source : ["TCoE", 24],
	minlevel : 3,
	description : desc([
		"I gain proficiency in one skill of my choice and an additional at 10th level",
		"The skill I have to choose from: Animal Handling, Athletics, Intimidation,",
		"Nature, Perception, or Survival"
	]),
	skillstxt : "Choose one from Animal Handling, Athletics, Intimidation, Nature, Perception, or Survival, and an additional one at 10th level.",
	additional : levels.map(function(n) {
		if (n < 10) return "1 skill";
		return "2 skills";
	}),
	extraname : "Primal Knowledge",
	extrachoices : ["animal handling", "athletics", "intimidation", "nature", "perception", "survival"],
	extraTimes : levels.map(function(n) { return n < 10 ? 1 : 2; }),
	"animal handling" : {
		name : "Animal Handling Primal Knowledge",
		description : "",
		source : ["TCoE", 24],
		skills : [["Animal Handling", ""]]
	},
	"athletics" : {
		name : "Athletics Primal Knowledge",
		description : "",
		source : ["TCoE", 24],
		skills : [["Athletics", ""]]
	},
	"intimidation" : {
		name : "Intimidation Primal Knowledge",
		description : "",
		source : ["TCoE", 24],
		skills : [["Intimidation", ""]]
	},
	"nature" : {
		name : "Nature Primal Knowledge",
		description : "",
		source : ["TCoE", 24],
		skills : [["Nature", ""]]
	},
	"perception" : {
		name : "Perception Primal Knowledge",
		description : "",
		source : ["TCoE", 24],
		skills : [["Perception", ""]]
	},
	"survival" : {
		name : "Survival Primal Knowledge",
		description : "",
		source : ["TCoE", 24],
		skills : [["Survival", ""]]
	},
};

ClassList.barbarian.features["instinctive pounce-tcoe"] = {
	name : "Instinctive Pounce",
	source : ["TCoE", 24],
	minlevel : 7,
	description : desc([
		"As part of the bonus action I take to enter my rage, I can move up to half my speed"
	])
};

ClassList.bard.features["additional bard spells-tcoe"] = {
	name : "Additional Bard Spells",
	source : ["TCoE", 27],
	minlevel : 1,
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "bard" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["color spray", "command", "aid", "enlarge/reduce", "mirror image", "intellect fortress", "mass healing word", "slow", "phantasmal killer", "rary's telepathic bond", "heroes' feast", "dream of the blue veil", "prismatic spray", "antipathy/sympathy", "prismatic wall"]);
			},
			"This class feature expands the spells list of the bard class."
		]
	}
};

ClassList.bard.features["magical inspiration-tcoe"] = {
	name : "Magical Inspiration",
	source : ["TCoE", 27],
	minlevel : 2,
	description : desc([
		"A bardic inspiration die recipient can also use it when casting a damaging or healing spell",
		"They can expend the die and add its result to one damage or healing roll of the spell", 
		"on a target"
	])
};

ClassList.bard.features["bardic versatility-tcoe"] = {
	name : "Bardic Versatility",
	source : ["TCoE", 28],
	minlevel : 4,
	description : desc([
		"Whenever I reach a level in this class that grants an Ability Score Improvement, I can",
		"replace either one my Expertise skill choices or one cantrip from the bard spell list"
	])
};

ClassList.cleric.features["additional cleric spells-tcoe"] = {
	name : "Additional Cleric Spells",
	source : ["TCoE", 30],
	minlevel : 1,
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "cleric" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["aura of vitality", "spirit shroud", "aura of life", "aura of purity", "summon celestial", "sunbeam", "sunburst", "power word heal"]);
			},
			"This class feature expands the spells list of the cleric class."
		]
	}
};

ClassList.cleric.features["harness divine power-tcoe"] = {
	name : "Channel Divinity: Harness Divine Power",
	source : ["TCoE", 30],
	minlevel : 2,
	description : desc([
		"As a bonus action, I can use my holy symbol and a prayer to regain one expended spell",
		"slot of a level up to half my proficiency bonus (rounded up)"
	]),
	additional : levels.map(function(n) {
		return (n < 5 ? "1st" : (n < 13 ? "2nd" : "3rd")) + " level";
	}),
	action : ["bonus action", ""]
};

ClassList.cleric.features["cantrip versatility-tcoe"] = {
	name : "Cantrip Versatility",
	source : ["TCoE", 31],
	minlevel : 4,
	description : desc([
		"Whenever I reach a level in this class that grants an Ability Score Improvement, I can",
		"replace one cantrip with another from the cleric spell list"
	])
};

RunFunctionAtEnd(function() {
	for (var i = 0; i < ClassList.cleric.subclasses[1].length; i++) {
		var aDomain = ClassSubList[ClassList.cleric.subclasses[1][i]];
		if (!aDomain || !aDomain.features.subclassfeature8 || !(/divine strike|potent spellcasting/i).test(aDomain.features.subclassfeature8.name)) continue;
		aDomain.features.subclassfeature8 = {
			name : "Blessed Strikes",
			source : ["TCoE", 31],
			minlevel : 8,
			description : desc([
				"When a creature is damaged by my cantrip or weapon attack, I can deal an",
				"additional 1d8 radiant damage",
				"Once I deal this extra damage, I can't do so again until the start of my next turn"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isDC) {
							var isCantrip = false;
							if (v.thisWeapon[3]) {
								var spell = SpellsList[v.thisWeapon[3]];
								if (spell && spell.level == 0) {
									isCantrip = true;
								}
							}
							if (!v.isSpell || isCantrip) {
								fields.Description += (fields.Description ? '; ' : '') + 'Once per round +1d8 radiant damage';
							}
						}
					},
					"Once per turn when a creature takes damage from one of my cantrip or weapon attacks, I can also deal 1d8 radiant damage to the target."
				]
			}
		};
	}
});

ClassList.druid.features["additional druid spells-tcoe"] = {
	name : "Additional Druid Spells",
	source : ["TCoE", 35],
	minlevel : 1,
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "druid" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["protection from evil and good", "augury", "continual flame", "enlarge/reduce", "summon beast", "aura of vitality", "elemental weapon", "revivify", "summon fey", "divination", "fire shield", "summon elemental", "cone of cold", "flesh to stone", "symbol", "incendiary cloud"]);
			},
			"This class feature expands the spells list of the druid class."
		]
	}
};

ClassList.druid.features["subclassfeature2.wild companion-tcoe"] = {
	name : "Wild Companion",
	source : ["TCoE", 35],
	minlevel : 2,
	description : desc([
		"I can expend a use of wild shape to cast Find Familiar without material components",
		"The familiar always has the Fey type and disappears after half my druid level in hours"
	]),
	additional : levels.map(function (n) {
		return n < 2 ? "" : Math.floor(n/2) + " hours";
	}),
	spellcastingBonus : {
		name : "Wild Companion",
		spells : ["find familiar"],
		selection : ["find familiar"],
		firstCol : "Sp"
	},
	spellChanges : {
		"find familiar" : {
			components : "V,S",
			compMaterial : "",
			description : "Gain the services of a fey familiar; can see through its eyes; it can deliver touch spells; see B;",
			duration : "\u00BD druid lvl h",
			changes : "By using my Wild Companion class feature, I can expend a use of wild shape to cast Find Familiar without material components. The familiar created this way always has the Fey type and disappears after a number of hours equal to half my druid level."
		}
	},
	action : ["action", ""]
};

ClassList.druid.features["cantrip versatility-tcoe"] = {
	name : "Cantrip Versatility",
	source : ["TCoE", 36],
	minlevel : 4,
	description : desc([
		"Whenever I reach a level in this class that grants an Ability Score Improvement, I can",
		"replace one cantrip with another from the druid spell list"
	])
};

ClassList.fighter.features["martial versatility-tcoe"] = {
	name : "Martial Versatility",
	source : ["TCoE", 42],
	minlevel : 4,
	description : desc([
		"Whenever I reach a level in this class that grants an Ability Score Improvement, I can",
		"replace either a fighting style with another from the fighter fighting styles",
		"or a maneuver from the Battle Master archetype with another maneuver"
	])
};

// TODO: Dedicated Weapon (UA:CFV has code where you pick 5)

ClassList.monk.features["ki-fueled strike-tcoe"] = {
	name : "Ki-Fueled Strike",
	source : ["TCoE", 48],
	minlevel : 3,
	description : desc([
		"If I spend a ki point during my action, I can make one attack with an unarmed strike", 
		"or a monk weapon as a bonus action"
	]),
	action : [["bonus action", ""]]
};

ClassList.monk.features.ki["quickened healing"] = {
	name : "Quickened Healing",
	source : ["TCoE", 49],
	description : " [2 ki points]" + "\n   As an action, I can regain a number of hit points equal to the roll of my martial arts die" + "\n   plus my proficiency bonus",
	action : [["action", ""]]
};
ClassList.monk.features.ki.autoSelectExtrachoices.push({
	extrachoice : "quickened healing",
	minlevel : 4,
	extraname : "Monk 4"
});

ClassList.monk.features.ki["focused aim"] = {
	name : "Focused Aim",
	source : ["TCoE", 49],
	description : " [1-3 ki points]" + "\n   When I miss with an attack roll, I can spend 1 to 3 ki points to increase the attack roll" + "\n   by 2 for each ki point spent"
};
ClassList.monk.features.ki.autoSelectExtrachoices.push({
	extrachoice : "focused aim",
	minlevel : 5,
	extraname : "Monk 5"
});