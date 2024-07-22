let modInfo = {
	name: "The Universe Tree",
	id: "armeuniversemodtreelolimsuchacatboy",
	author: "Arme",
	pointsName: "power",
	modFiles: ["dirt.js", "tree.js", "achievements.js", "grass.js", "rocks.js", "moss.js", "flowers.js", "seeds.js", "trees.js", "sand.js", "wood.js"],

	discordName: "ArmeKnockedOut",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Release",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1.0</h3><br>
		- Created.<br>`

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
	gain = gain.times(player.g.plantedgrass.log10().plus(1))
	gain = gain.times(tmp.r.effect)
	gain = gain.times(tmp.ach.effect)
	gain = gain.times(player.f.redflowers.log2().plus(1))
	gain = gain.times(player.t.treebranches.log2().plus(1))
	if (hasAchievement('ach', 17)) gain = gain.times(1.1)
	if (hasAchievement('ach', 27)) gain = gain.times(2)
	if (hasUpgrade('d', 11)) gain = gain.times(softcap((upgradeEffect('d', 11)), player.d.upgradeonesoftcap , player.d.upgradeonesoftcappower))
	if (hasUpgrade('d', 13)) gain = gain.times(softcap((upgradeEffect('d', 13)), new Decimal(650) , 0.215))
	if (hasUpgrade('d', 14)) gain = gain.times(upgradeEffect('d', 14))
	if (hasUpgrade('d', 23)) gain = gain.times(upgradeEffect('d', 23))
	if (hasUpgrade('d', 103)) gain = gain.times(player.f.purpleflowers.log10().plus(1))
	if (hasUpgrade('d', 104)) gain = gain.times(player.f.blueflowers.log10().plus(1))
	if (hasUpgrade('g', 11)) gain = gain.times(softcap((upgradeEffect('g', 11)), new Decimal(1500) , 0.1))
	if (hasUpgrade('r', 11)) gain = gain.times(1.5)
	if (hasUpgrade('r', 14)) gain = gain.times(1.3)
	if (hasUpgrade('r', 15)) gain = gain.times(0.9)
	if (hasUpgrade('m', 21)) gain = gain.times(softcap((upgradeEffect('m', 21)), new Decimal(1000) , 0.109))
	if (hasUpgrade('m', 22)) gain = gain.times(softcap((upgradeEffect('m', 22)), new Decimal(750) , 0.104))
	if (hasUpgrade('m', 23)) gain = gain.times(softcap((upgradeEffect('m', 23)), new Decimal(100) , 0.107))
	gain = gain.times(player.s.farmedricemultiplier)
	gain = gain.pow(player.s.farmedwheatexponent)
	if (player.s.farmedwheattemp.gte(1)) gain = new Decimal(0)
	if (player.s.farmedcarrotstemp.gte(1)) gain = new Decimal(0)
	if (player.s.farmedpotatoestemp.gte(1)) gain = new Decimal(0)
	if (player.s.farmedbeetroottemp.gte(1)) gain = new Decimal(0)
	if (player.s.farmedsugarcanetemp.gte(1)) gain = new Decimal(0)
	if (player.s.farmedcorntemp.gte(1)) gain = new Decimal(0)
	if (player.s.farmedricetemp.gte(1)) gain = new Decimal(0)
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