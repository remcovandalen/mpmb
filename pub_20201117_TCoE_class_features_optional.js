var iFileName = "pub_20201117_TCoE_class_features_optional.js";
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

// New optional class features
RunFunctionAtEnd(function() {
	for (var i = 0; i < ClassList.barbarian.subclasses[1].length; i++) {
		var aPath = ClassSubList[ClassList.barbarian.subclasses[1][i]];
		if (!aPath) continue;
		AddFeatureChoice(aPath.features["subclassfeature3"], true, "Primal Knowledge", {
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
			})
		}, "Primal Knowledge");
	}
});

AddFeatureChoice(ClassList.barbarian.features["feral instinct"], true, "Instinctive Pounce", {
	name : "Instinctive Pounce",
	source : ["TCoE", 24],
	minlevel : 7,
	description : desc([
		"As part of the bonus action I take to enter my rage, I can move up to half my speed"
	])
}, "Instinctive Pounce");

AddFeatureChoice(ClassList.bard.features.spellcasting, true, "Additional Bard Spells", {
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
			"This optional class feature expands the spells list of the bard class."
		]
	}
}, "Additional Bard Spells");

AddFeatureChoice(ClassList.bard.features["bardic inspiration"], true, "Magical Inspiration", {
	name : "Magical Inspiration",
	source : ["TCoE", 27],
	minlevel : 2,
	description : desc([
		"A bardic inspiration die recipient can also use it when casting a damaging or healing spell",
		"They can expend the die and add its result to one damage or healing roll of the spell", 
		"on a target"
	])
}, "Magical Inspiration");

// TODO: Bardic Versatility because no feature at 4th level to add the feature choice to.
var bardicVersatility = {
	name : "Bardic Versatility",
	source : ["TCoE", 28],
	minlevel : 4,
	description : desc([
		"Whenever I reach a level in this class that grants an Ability Score Improvement, I can",
		"replace either one my Expertise skill choices or one cantrip from the bard spell list"
	])
};

AddFeatureChoice(ClassList.cleric.features.spellcasting, true, "Additional Cleric Spells", {
	name : "Additional Cleric Spells",
	source : ["TCoE", 27],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "cleric" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["aura of vitality", "spirit shroud", "aura of life", "aura of purity", "summon celestial", "sunbeam", "sunburst", "power word heal"]);
			},
			"This optional class feature expands the spells list of the cleric class."
		]
	}
}, "Additional Cleric Spells");

AddFeatureChoice(ClassList.cleric.features["channel divinity"], true, "Harness Divine Power", {
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
}, "Harness Divine Power");

// TODO: Cantrip Versatility because no feature at 4th level to add the feature choice to.
var clericCantripVersatility = {
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
		CreateClassFeatureVariant(ClassList.cleric.subclasses[1][i], "subclassfeature8", "Blessed Strikes", {
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
		});
	}
});

AddFeatureChoice(ClassList.druid.features.spellcasting, true, "Additional Druid Spells", {
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
			"This optional class feature expands the spells list of the druid class."
		]
	}
}, "Additional Druid Spells");

var wildCompanionObject = {
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
	}
};
AddFeatureChoice(ClassList.druid.features["subclassfeature2.wild shape"], true, "Wild Companion", wildCompanionObject, "Wild Companion");
if (ClassSubList["druid-circle of the moon"]) {
	AddFeatureChoice(ClassSubList["druid-circle of the moon"].features["subclassfeature2.wild shape"], true, "Wild Companion", wildCompanionObject, "Wild Companion");
}

// TODO: Cantrip Versatility because no feature at 4th level to add the feature choice to.
var druidCantripVersatility = {
	name : "Cantrip Versatility",
	source : ["TCoE", 36],
	minlevel : 4,
	description : desc([
		"Whenever I reach a level in this class that grants an Ability Score Improvement, I can",
		"replace one cantrip with another from the druid spell list"
	])
};

// TODO: Martial Versatility because no feature at 4th level to add the feature choice to.
var fighterMartialVersatility = {
	name : "Martial Versatility",
	source : ["TCoE", 42],
	minlevel : 4,
	description : desc([
		"Whenever I reach a level in this class that grants an Ability Score Improvement, I can",
		"replace either a fighting style with another from the fighter fighting styles",
		"or a maneuver from the Battle Master archetype with another maneuver"
	])
};

AddFeatureChoice(ClassList.monk.features["deflect missiles"], true, "Ki-Fueled Strike", {
	name : "Ki-Fueled Strike",
	source : ["TCoE", 48],
	minlevel : 3,
	description : desc([
		"If I spend a ki point during my action, I can make one attack with an unarmed strike", 
		"or a monk weapon as a bonus action"
	]),
	action : [["bonus action", ""]]
}, "Ki-Fueled Strike");

AddFeatureChoice(ClassList.monk.features["slow fall"], true, "Quickened Healing", {
	name : "Quickened Healing",
	source : ["TCoE", 49],
	description : " [2 ki points]" + "\n   As an action, I can regain a number of hit points equal to the roll of my martial arts die" + "\n   plus my proficiency bonus",
	action : [["action", ""]]
}, "Quickened Healing");

ClassList.monk.features.ki["quickened healing"] = {
	name : "Quickened Healing",
	source : ["TCoE", 49],
	description : " [2 ki points]" + "\n   As an action, I can regain a number of hit points equal to the roll of my martial arts die" + "\n   plus my proficiency bonus",
	action : [["action", ""]]
};

// TODO: Focused Aim because no feature at 5th level to add the feature choice to.
var focusedAim = {
	name : "Focused Aim",
	source : ["TCoE", 49],
	description : " [1-3 ki points]" + "\n   When I miss with an attack roll, I can spend 1 to 3 ki points to increase the attack roll" + "\n   by 2 for each ki point spent"
};
