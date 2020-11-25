var iFileName = "pub_20201117_TCoE.js";
RequiredSheetVersion(13);

// Define the source
SourceList.TCoE={
	name : "Tasha's Cauldron of Everything",
	abbreviation : "TCoE",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tashas-cauldron-everything",
	date : "2020/11/17"
};

// HACK: Overwrites a fighting style if one already exists with the same name.
function AddOrOverwriteFightingStyle(classArr, fsName, fsObj) {
	if (classArr.indexOf("ranger") !== -1 && classArr.indexOf("rangerua") == -1 && ClassList["rangerua"]) classArr.push("rangerua");
	for (var i = 0; i < classArr.length; i++) {
		var aClass = ClassList[classArr[i]];
		var sClass = ClassSubList[classArr[i]];
		if (aClass) {
			aClass.features["fighting style"]["choices"] = aClass.features["fighting style"]["choices"].filter(function(value, index, arr) {
				return value != fsName;
			});
			AddFeatureChoice(aClass.features["fighting style"], false, fsName, fsObj);
			if (classArr[i] === "fighter" && ClassSubList["fighter-champion"]) {
				ClassSubList["fighter-champion"].features["subclassfeature10"]["choices"] = ClassSubList["fighter-champion"].features["subclassfeature10"]["choices"].filter(function(value, index, arr) {
					return value != fsName;
				});
				AddFeatureChoice(ClassSubList["fighter-champion"].features["subclassfeature10"], false, fsName, fsObj);
			}
		} else if (sClass) {
			for (var clFea in sClass.features) {
				var sFea = sClass.features[clFea];
				if (sFea.choices && (/^(?=.*fighting)(?=.*style).*$/i).test(sFea.name)) {
					sClass.features[clFea]["choices"] = sClass.features[clFea]["choices"].filter(function(value, index, arr) {
						return value != fsName;
					});
					AddFeatureChoice(sClass.features[clFea], false, fsName, fsObj);
				}
			}
		}
	};
};

// Fighting Styles
AddOrOverwriteFightingStyle(["fighter", "ranger", "paladin"], "Blind Fighting", {
	name : "Blind Fighting Style",
	source : ["TCoE", 41],
	description : desc([
		"I have 10 ft blindsight."
	]),
	vision : [["Blindsight", 10]]
});
AddOrOverwriteFightingStyle(["fighter", "paladin"], "Interception", {
	name : "Interception Fighting Style",
	source : ["TCoE", 41],
	description : desc([
		"As a reaction when a creature I can see hits a target within 5 ft of me, I can intercept",
		"I reduce the damage the target takes by 1d10 + my Proficiency Bonus (min 0 damage)",
		"I can only do this while wielding a shield, or a simple or martial weapon"
	]),
	action : [["reaction", "Intercept"]]
});
if (ClassSubList["fighter-battle master"]) {
	// Only if Battle Master subclass exists
	AddOrOverwriteFightingStyle(["fighter"], "Superior Technique", {
		name : "Superior Technique Fighting Style",
		source : ["TCoE", 41],
		description : " [1 maneuver; d6, 1\xD7 per short rest]" + desc([
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice",
			'Use the "Choose Feature" button above to add a Maneuver to the third page'
		]),
		eval : function () {
			AddFeature('Combat Superiority ', 1, '(d6)', 'short rest', 'Superior Technique Fighting Style', 'bonus');
			DontPrint("Class Features Menu");
		},
		removeeval : function () {
			RemoveFeature('Combat Superiority ', 1);
			if (!MakeClassMenu()) Hide("Class Features Menu");
		}
	});
}
AddOrOverwriteFightingStyle(["fighter", "ranger"], "Thrown Weapon Fighting", {
	name : "Thrown Weapon Fighting Style",
	source : ["TCoE", 42],
	description : desc([
		"I can draw a weapon with the thrown property as part of the attack I make with it",
		"In addition, my ranged attacks made with thrown weapons deal +2 damage"
	]),
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if ((v.isRangedWeapon || v.isMeleeWeapon) && (/thrown/i).test(fields.Description)) {
					if (v.isMeleeWeapon) fields.Description += (fields.Description ? '; ' : '') + '+2 damage when thrown';
				};
			},
			"I deal +2 damage when I hit a ranged attack made with a thrown weapon."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon && (/thrown/i).test(fields.Description)) {
					if (!v.isMeleeWeapon) output.extraDmg += 2;
				};
			},
			""
		]
	}
});
AddOrOverwriteFightingStyle(["fighter"], "Unarmed Fighting", {
	name : "Unarmed Fighting Style",
	source : ["TCoE", 42],
	description : desc([
		"My unarmed strikes deal 1d6 damage, or 1d8 damage when I have both hands free",
		"At the start of each of my turns, I can deal 1d4 bludgeoning damage to one creature",
		"grappled by me"
	]),
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike") {
					if (fields.Damage_Die == 1 || fields.Damage_Die == "1d4") fields.Damage_Die = '1d6';
					fields.Description += (fields.Description ? '; ' : '') + 'Versatile (1d8)';
				};
			},
			"My unarmed strikes deal 1d6 damage instead of 1, which increases to 1d8 if I have both hands free to make an unarmed strike with."
		]
	}
});
AddOrOverwriteFightingStyle(["paladin"], "Blessed Warrior", {
	name : "Blessed Warrior Fighting Style",
	source : ["TCoE", 52],
	description : desc([
		"I learn two cantrips from the cleric spell list",
		"When I gain a level in this class, I can replace one cantrip"
	]),
	spellcastingBonus : [{
		name : "Cleric cantrip",
		spellcastingAbility : 6,
		'class' : 'cleric',
		level : [0, 0],
		firstCol : "atwill",
		times : 2
	}]
});
AddOrOverwriteFightingStyle(["ranger"], "Druidic Warrior", {
	name : "Druidic Warrior Fighting Style",
	source : ["TCoE", 57],
	description : desc([
		"I learn two cantrips from the druid spell list",
		"When I gain a level in this class, I can replace one cantrip"
	]),
	spellcastingBonus : [{
		name : "Druid cantrip",
		spellcastingAbility : 5,
		'class' : 'druid',
		level : [0, 0],
		firstCol : "atwill",
		times : 2
	}]
});
