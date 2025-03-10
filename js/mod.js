let modInfo = {
	name: "The Dirt Clean Tree",
	id: "armemodtreelol",
	author: "Arme",
	pointsName: "dirt cleaned",
	modFiles: ["layers.js", "tree.js"],

	discordName: "ArmeKnockedOut",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Release",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1</h3><br>
		- This mod was just made lol no changes.<br>`

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

	let gain = new Decimal('1')
	if (hasUpgrade('d', 11)) gain = gain.times(upgradeEffect('d', 11))
	if (hasUpgrade('s', 12)) gain = gain.times(upgradeEffect('s', 12))
	if (hasUpgrade('d', 12)) gain = gain.times(3)
	if (hasUpgrade('d', 13)) gain = gain.times(upgradeEffect('d', 13))
	if (hasUpgrade('m', 11)) gain = gain.times(upgradeEffect('m', 11))
	if (hasUpgrade('d', 15)) gain = gain.times(upgradeEffect('d', 15))
	if (hasUpgrade('s', 11)) gain = gain.times(upgradeEffect('s', 11))
	if (hasUpgrade('c', 11)) gain = gain.times(100)
	if (hasUpgrade('c', 12)) gain = gain.times(upgradeEffect('c', 12))
	if (hasUpgrade('c', 14)) gain = gain.times(10000)
	if (hasUpgrade('o', 12)) gain = gain.times(upgradeEffect('o', 12))
	if (hasUpgrade('s', 14)) gain = gain.times(1e200)
	if (hasUpgrade('f', 12)) gain = gain.times(upgradeEffect('f', 12))
	if (hasUpgrade('v', 11)) gain = gain.times(upgradeEffect('v', 11))
	if (hasMilestone('v', 1)) gain = gain.times(1000)
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
	return player.points.gte(new Decimal("e263449700"))
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