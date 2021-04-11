var iFileName = "hb_20210411_Bodyguard_background.js";
RequiredSheetVersion(13);

// Define the source
SourceList.HBBB={
	name : "Bodyguard Background",
	abbreviation : "HB:BB",
	group : "Homebrew",
	url : "",
	date : "2021/04/11"
};

BackgroundList["bodyguard"] = {
	regExpSearch : /^(?=.*bodyguard).*$/i,
	name : "Bodyguard",
	source : ["HBBB", 0],
	skills : "",
	skillstxt : "Choose two from Insight, Intimidation, and Perception",
	gold : 10,
	equipleft : [
		["Gaming set", "", ""],
		["Keepsake from previous charge", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Manacles", "", 6],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [1],
	toolProfs : [["Gaming set", 1]],
	feature : "Guardian's Eye",
	trait : [
		"I am always quiet and stoic, rarely speaking or acting when I work.",
		"I am aggressive and often get in people's faces while I work, trying to make sure others know to keep a distance.",
		"I often hide in crowds while keeping an eye on my charge; stepping in out of the shadows when needed.",
		"I always check the shadows wherever I go; you can never be too safe.",
		"I fuss over my charge, swiftly and deftly tending to their every need; acting more like a servant than a bodyguard.",
		"I don't like when strangers get too close to me or my friends; keep your distance, and we'll be fine.",
		"I'm used to sleeping on the road and in uncomfortable situations; but I wake up at the slightest noise.",
		"I always make sure that when we have to sleep, at least one person is on lookout."
	],
	ideal : [
		["Protection", "Protection: It is my job to protect others; I would die for the ones I guard. (Lawful)"],
		["Guardian", "Guardian: I want to protect everyone, as best I can. (Good)"],
		["Fluid", "Fluid: When attacked, you can't be rigid and unmoving; you need to adapt to the situation. (Chaotic)"],
		["Money", "Money: I honestly just want to get paid; I couldn't care less about my charges. (Neutral)"],
		["Betrayal", "Betrayal: As a bandit, you have to wait for people to wander out into the wilderness to kill them. As a bodyguard, they'll wander out into the wilderness with you! (Evil)"],
		["Friendship", "Friendship: I just don't want my friends to die. (Any)"]
	],
	bond : [
		"I am still loyal to my original master; and would die for them.",
		"I will get revenge on the one who slaughtered those I was meant to defend.",
		"I owe my life to my old master; and they owe their life to me.",
		"One of my old charges was a cheat and a scoundrel; and swindled me out of my pay. Some payback would be nice.",
		"I failed in my duties; it ruined my reputation, and is a stain on my honor.",
		"I served (or serve) with a team of bodyguards, that offer protection to various people traveling in dangerous areas."
	],
	flaw : [
		"I am paranoid and overly protective, never letting those I guard out of my sight.",
		"I'm lax in my duties; and this has gotten me into some trouble before.",
		"Yes, actually; I do know best, and you will do as I say.",
		"Sometimes my aggression towards strangers gets those I protect in more trouble, rather than help to avoid it.",
		"I view myself and those I protect as higher than other people; looking down on the peasantry.",
		"I am rigid in my hatred of criminals. I don't care why you did it or how long ago it was; you're still filth in my eyes."
	],
	lifestyle : "modest"
};

BackgroundFeatureList["guardian's eye"] = {
	description : "I have a keen eye when it comes to safety. My companions and I can travel at a normal speed through crowds; and I can always pick out the safest route to take through a town or city. This doesn't account for unseen or hidden dangers, such as a lair of vampires hiding in the noble quarter; but I can easily avoid slums and areas where thugs might hang around.",
	source : ["HBBB", 0]
};