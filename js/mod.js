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
	num: "1.0",
	name: "Release",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1</h3><br>
		- Release.<br>`

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