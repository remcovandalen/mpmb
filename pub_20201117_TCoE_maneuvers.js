var iFileName = "pub_20201117_TCoE_maneuvers.js";
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

// New Maneuver options for the Battle Master
if (ClassSubList["fighter-battle master"]) {
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Ambush", {
		name : "Ambush",
		source : ["TCoE", 42],
		description : "\n   When I make an initiative roll or a Dex (Stealth) check, I can add a superiority die to it"
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Bait and Switch", {
		name : "Bait and Switch",
		source : ["TCoE", 42],
		description : desc([
			"On my turn, I can expend a superiority die to swap places with an ally within 5 ft",
			"Doing this costs me 5 ft of movement, but this doesn't provoke opportunity attacks",
			"The ally or me then adds the superiority die to AC until the start of my next turn"
		])
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Brace", {
		name : "Brace",
		source : ["TCoE", 42],
		description : desc([
			"As a reaction when a creature I can see moves within 5 of me, I can attack it",
			"I expend a superiority die and make one weapon attack, adding the die to the damage"
		]),
		action : [["reaction", ""]]
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Commanding Presence", {
		name : "Commanding Presence",
		source : ["TCoE", 42],
		description : desc([
			"When I make a Cha (Intimidation), Cha (Performance) or Cha (Persuasion) check,",
			"I can add a superiority die to it"
		])
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Grappling Strike", {
		name : "Grappling Strike",
		source : ["TCoE", 42],
		description : desc([
			"Immediately after hitting with a melee attack, I can use a bonus action to grapple",
			"I add the superiority die to the Str (Athletics) check; I can only do this on my own turn"
		]),
		action : [["bonus action", " (after melee hit)"]]
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Quick Toss", {
		name : "Quick Toss",
		source : ["TCoE", 42],
		description : desc([
			"As a bonus action, I can expend a superiority die and make a ranged weapon attack",
			"with a thrown weapon, adding the die to the damage",
			"I can draw a thrown weapon as part of making this attack"
		]),
		action : [["bonus action", ""]]
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Tactical Assessment", {
		name : "Tactical Assessment",
		source : ["TCoE", 42],
		description : desc([
			"When I make an Int (History), Wis (Insight) or Int (Investigation) check,",
			"I can add a superiority die to it"
		])
	});
}