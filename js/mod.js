let modInfo = {
	name: "The Element Tree",
	id: "armeselementmodtree",
	author: "Arme",
	pointsName: "power",
	modFiles: ["tree.js", "quarks.js", "achievements.js", "electrons.js"],

	discordName: "ArmeKnockedOut",
	discordLink: "",
	initialStartPoints: new Decimal (0.0025), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "ersion: alpha 0.11",
	name: "Balancing",
}

let changelog = `<h1>Changelog:</h1><br><br><br>
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
	if (player.q.redquarks.gte(1)) gain = gain.plus(player.q.redquarks.plus(1).log2().div(10000).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1)).times(player.e.charge.plus(1).log10().div(10).plus(1)))
	if (player.q.greenquarks.gte(1) && hasUpgrade('q', 21)) gain = gain.plus(player.q.greenquarks.plus(1).log2().div(25000).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1)).times(player.e.charge.plus(1).log10().div(10).plus(1)))
	if (player.q.bluequarks.gte(1) && hasUpgrade('q', 22)) gain = gain.plus(player.q.bluequarks.plus(1).log2().div(25000).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1)).times(player.e.charge.plus(1).log10().div(10).plus(1)))
	gain = gain.times(tmp.ach.effect)
	gain = gain.times(player.q.greenquarks.plus(1).log2().div(10).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1)).plus(1))
	if (hasUpgrade('q', 23) && player.q.redquarks.gte(1)) gain = gain.times(player.q.redquarks.plus(1).log2().div(25).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1)).plus(1))
	if (hasUpgrade('q', 24) && player.q.bluequarks.gte(1)) gain = gain.times(player.q.bluequarks.plus(1).log2().div(25).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1)).plus(1))
	if (hasUpgrade('q', 11)) gain = gain.times(upgradeEffect('q', 11))
	if (hasUpgrade('q', 12)) gain = gain.times(upgradeEffect('q', 12))
	if (hasAchievement('ach', 16) && player.points.gte(1)) gain = gain.times(1.5)
	if (hasMilestone('e', 3)) gain = gain.times(player.e.charge5.plus(1).log10().div(8).plus(1))
	if (hasAchievement('ach', 24)) gain = gain.times(1.5)
   // this is a softcap: if (gain.gte(8e15)) gain = gain.plus(1).pow(0.95).plus(8e15).minus(new Decimal(8e15).pow(0.95))
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