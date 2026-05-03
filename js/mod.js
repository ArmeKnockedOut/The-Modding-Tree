let modInfo = {
	name: "The Element Tree",
	id: "armeselementmodtree",
	author: "Arme",
	pointsName: "power",
	modFiles: ["tree.js", "quarks.js", "achievements.js", "electrons.js", "atoms.js"],

	discordName: "ArmeKnockedOut",
	discordLink: "",
	initialStartPoints: new Decimal (0.0025), // Used for hard resets and new players
	offlineLimit: 0.5,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "ersion: alpha 0.2",
	name: "Atoms",
}

let changelog = `<h1>Changelog:</h1><br><br><br>
	<h1 style="color: #ff0000">SPOILERS. OBVIOUSLY. NOT LIKE STORY SPOILERS BECAUSE THERE'S NO STORY BUT YEAH, THERE'S SPOILERS HERE.</h1><br><br><br><br>
	<h1 style="color: #ffaf1a">Alpha v0.2 - Atoms</h1><br><br><h3>[The Atom Layer, and Code Changes :D]<br>
	<br>
	(Finished 5/2/2026 3:56PM CEST)<br>
	(Playtested, Released 5/3/2026 3:56PM CEST)<br></h3>
	<br><h4>
		  - Added the Atom Layer.<br>
		  - Added Achievements 28-48.<br>
		  - Added the Atom Upgrade Tree, with 35 new Upgrades.<br>
		  - Added 13 Atom Milestones<br>
		  - Added 10 Atom Challenges.<br>
		  - Added Tertiary Protons and Tertiary Neutrons.<br>
		  - Made the first four Quark Upgrades a bit cheaper.<br>
		  - Progress up to 50 Total Atom Challenge Completions.<br><br>
		  - New Content Estimated Playtime: ~13hrs<br></h4>
		  - Total Estimated Playtime: ~16hrs<br></h4>
		  <br>
		  <br>
		  <h2>Devlog:</h2><br><br><h4>
		  - (4/29/2026 ?:??PM CEST) Lowkey messed up the Charge multiplier on the power gain side specifically, but fixing it at this point would ruin balancing completely, so I edited the descriptions and visual multipliers to be correct instead.<br><br>
		  - (5/1/2026 3:20PM CEST) ^ i messed up more stuff. dunno how much but fixed.<br><br>
		  - (5/1/2026 4:27PM CEST) FINALLY made alot of the multipliers variables. I no longer need to change each place it takes effect manually, which used to take like 10 minutes every time i just wanted to make like a multiply Proton multiplier upgrade or something. it's embarassing how long it took to decide to do this, but coding stuff should be alot less tedious now. it also stops the previous two dev notes from happening. multipliers i made variables: Proton, Neutron, Secondary Proton, Secondary Neutron, Charges, Quarks, Secondary Quarks<br><br>
		  - (5/3/2026 1:06PM CEST) ^ same with the new stuff made after this<br>
	</h4><br>
	<br>
	<br>
	<br>
    <h1 style="color: #ff5b1a">Alpha v0.11 - Balancing</h1><br><br><h3>[Light Balancing that should make the Cyan Quarks - Charge 10 grind less tedious.]<br>
	<br>
	(4/29/2026 4:23PM CEST)<br></h3>
	<br><h4>
		  - Gave Achievement 23 a Reward (Achievement Multiplier 1.067x -> 1.15x)<br>
		  - Gave Achievement 24 a Reward (+50% Power Gain)<br>
		  - Gave Achievement 26 a Reward (+25% Quark and Electron Gain)<br>
		  - Improved the changelog a lot ^w^<br>
	</h4><br>
	<br>
	<br>
	<br>
	<h1 style="color: #ff3c1a">Alpha v0.1 - The First Alpha</h1><br><br><h3>[Not much to say here... Future versions will get changelogs -w-]<br>
	<br>
	(4/29/2026 12:21PM CEST)<br></h3>
	<br><h4>
		- Quarks, Electrons, Progress up to Charge 10.<br>
		- Estimated Playtime: ~2-3hrs<br>
	</h4><br>`
	

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal('0')
	if (hasAchievement('ach', 11)) gain = gain.plus(0.0001)
	if (player.q.redquarks.gte(1)) gain = gain.plus(player.q.redquarkspoweraddition)
	if (player.q.greenquarks.gte(1) && hasUpgrade('q', 21)) gain = gain.plus(player.q.greenquarkspoweraddition)
	if (player.q.bluequarks.gte(1) && hasUpgrade('q', 22)) gain = gain.plus(player.q.bluequarkspoweraddition)
	gain = gain.times(tmp.ach.effect)
	gain = gain.times(player.q.greenquarkspowermultiplier)
	if (hasUpgrade('q', 23) && player.q.redquarks.gte(1)) gain = gain.times(player.q.redquarkspowermultiplier)
	if (hasUpgrade('q', 24) && player.q.bluequarks.gte(1)) gain = gain.times(player.q.bluequarkspowermultiplier)
	if (hasUpgrade('q', 11)) gain = gain.times(upgradeEffect('q', 11))
	if (hasUpgrade('q', 12)) gain = gain.times(upgradeEffect('q', 12))
	if (hasAchievement('ach', 16) && player.points.gte(1)) gain = gain.times(1.5)
	if (hasMilestone('e', 3)) gain = gain.times(player.e.charge5multiplier2)
	if (hasAchievement('ach', 24)) gain = gain.times(1.5)
	if (hasUpgrade('a', 11)) gain = gain.times(softcap((upgradeEffect('a', 11)), new Decimal(10), 0.4))
	if (hasUpgrade('a', 14)) gain = gain.times(upgradeEffect('a', 14))
	if (hasUpgrade('a', 16)) gain = gain.times(upgradeEffect('a', 16))
	if (hasUpgrade('a', 19)) gain = gain.times(upgradeEffect('a', 19))
	if (hasUpgrade('a', 26)) gain = gain.times(upgradeEffect('a', 26))
	if (hasUpgrade('a', 27)) gain = gain.times(upgradeEffect('a', 27))
	if (hasUpgrade('a', 31)) gain = gain.times(upgradeEffect('a', 31))
	if (hasChallenge('a', 14)) gain = gain.times(new Decimal.pow(player.a.atomchallenge14multiplier, player.a.actualtotalatomchallengecompletions))
	if (inChallenge('a', 17)) gain = gain.div(player.a.atomchallenge17divisor)
   // this is a softcap: if (gain.gte(8e15)) gain = gain.plus(1).pow(0.95).plus(8e15).minus(new Decimal(8e15).pow(0.95))
	if (inChallenge('a', 13)) gain = gain.pow(0.5)
	if (hasChallenge('a', 13) && gain.gte(1)) gain = gain.pow(player.a.ac13powerexp)
	//gain = gain.times(100)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e26340049700"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}