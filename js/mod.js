let modInfo = {
	name: "The Element Tree",
	id: "armeselementmodtree",
	author: "Arme",
	pointsName: "power",
	modFiles: ["tree.js", "quarks.js", "achievements.js", "electrons.js", "atoms.js", "molecules.js", "infinity.js", "infinity_achievements.js", "toggles.js", "amino_acids.js", "dna.js", "water.js"],

	discordName: "ArmeKnockedOut",
	discordLink: "",
	initialStartPoints: new Decimal (0.0025), // Used for hard resets and new players
	offlineLimit: 0.5,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "ersion: alpha 0.4",
	name: "Row 3",
}

let changelog = `<h1>Changelog:</h1><br><br><br>
	<h1 style="color: #ff0000">SPOILERS. OBVIOUSLY. NOT LIKE STORY SPOILERS BECAUSE THERE'S NO STORY BUT YEAH, THERE'S SPOILERS HERE.</h1><br><br><br><br>
	<h1 style="color: #2bf319">Alpha v0.4 - Row 3</h1><br><br><h3>[Amino Acids, DNA, Water]<br>
	<br>
	(Finished 6/22/2026 7:47PM CEST)<br>
	(Playtested, Released 6/23/2026 5:55PM CEST)<br></h3>
	<br><h4>
		  - Added the Amino Acid layer, with 1 Milestone and 4 Elements.<br>
		  - Added the DNA layer, with 2 new Subcurrencies, 9 Boosts and 3 Upgrades.<br>
		  - Added the Water layer, with a new Subcurrency and 31 Upgrades.<br>
		  - Added 3 new Molecule Buyables, and 4 Upgrades.<br>
		  - Added 7 new Achievements.<br>
		  - Added 4 new Infinity Milestones, 8 Upgrades and another Challenge.<br>
		  - Added horizontal lines and resource displays to Quarks and Electrons.<br>
		  - Quark Upgrades now have numbers as their names instead, just like all other Upgrades.<br>
		  - Infinity Milestone 18 now only applies to the first row of Molecule buyables, also makes them not subtract your energy, and unlocks two more Infinity Challenges.<br>
		  - Made the Molecule Proton boost a Decimal.<br>
		  - Molecule Buyable Autobuyers now buy max.<br>
		  - Progress up to being able to afford Molecule Upgrade 6.<br>
		  <br>
		  - New Content Estimated Playtime: ~6hrs<br></h4>
		  - Total Estimated Playtime: ~1d 8hrs<br></h4>
		  <br>
		  <br>
		  <h2>Devlog:</h2><br><br><h4>
		  - (6/22/2026 7:48PM CEST) I didn't work on this for a while, hence the large time gap between Alpha v0.3 and Alpha v0.4. After this, updates will likely not be anywhere near as frequent, as I'll focus more on other things. Also, yeah I used ChatGPT some more for the buy max Molecule Buyable Autobuyers, the scaling of Double Helixes after 1,000, and coloring the text when activating the boosts.
	</h4><br>
	<br>
	<br>
	<br>
	<h1 style="color: #c4f319">Alpha v0.3 - Infinity</h1><br><br><h3>[Molecules, Infinity c:]<br>
	<br>
	(Finished 5/9/2026 7:57PM CEST)<br>
	(Playtested, Released 5/12/2026 11:08PM CEST)<br></h3>
	<br><h4>
		  - Added the Molecule Layer, with 5 new Buyables, 2 Upgrades and 3 Subcurrencies.<br>
		  - Added the Infinity Layer, with 36 new Upgrades, 2 Challenges, 18 Milestones and 2 Subcurrencies.<br>
		  - Added 3 new Main Achievements, and 14 Infinity Achievements.<br>
		  - Added some new Themes: crimson, mystic, infinity<br>
		  - All Subcurrencies should now be gained even when tabbed out.<br>
		  - Progress up to full completion of IC1, one completion of IC2, and Infinity Milestone 18 (or Infinity Achievement 25 if you are crazy [or 1,000 Infinities if you are really crazy]).<br><br>
		  - New Content Estimated Playtime: ~10hrs<br></h4>
		  - Total Estimated Playtime: ~1d 2hrs<br></h4>
		  <br>
		  <br>
		  <h2>Devlog:</h2><br><br><h4>
		  - (5/9/2026 7:58PM CEST) don't shoot me... don't get out your guns... i used chatgpt to optimize my atom challenge code, subcurrency gain code, and to figure out bulk complete on challenges. i still suck at coding and it helps me learn. i will never use chatgpt for ideas, or extensively during coding. just as a tool.
	</h4><br>
	<br>
	<br>
	<br>
	<h1 style="color: #ffca1a">Alpha v0.21 - Small Stuff</h1><br><br><h3>[Changelog Fixes]<br>
	<br>
	(5/3/2026 6:50PM CEST)<br></h3>
	<br><h4>
		  - Changed the Alpha v0.2 Release Time to the correct time.<br>
		  - Changed the Alpha v0.2 Estimated Playtimes to the correct times.<br>
	</h4><br>
	<br>
	<br>
	<br>
	<h1 style="color: #ffaf1a">Alpha v0.2 - Atoms</h1><br><br><h3>[The Atom Layer, and Code Changes :D]<br>
	<br>
	(Finished 5/2/2026 3:56PM CEST)<br>
	(Playtested, Released 5/3/2026 5:14PM CEST)<br></h3>
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
		- Estimated Playtime: ~1-3hrs<br>
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
	gain = gain.times(tmp.infach.effect)
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
	gain = gain.times(player.m.diatomicmultiplier)
	if (hasUpgrade('i', 12)) gain = gain.times(upgradeEffect('i', 12))
	if (hasUpgrade('i', 20)) gain = gain.times(upgradeEffect('i', 20))
	if (hasUpgrade('i', 41)) gain = gain.times(upgradeEffect('i', 41))
	if (player.am.total.gte(1) && player.am.carbon.gte(1)) gain = gain.times(player.am.carbonboost)
	if (hasUpgrade('w', 11)) gain = gain.times(upgradeEffect('w', 11))
	if (hasUpgrade('w', 27)) gain = gain.times(upgradeEffect('w', 27))
	if (player.d.total.gte(1) && hasUpgrade('w', 16)) gain = gain.times(player.d.doublehelixesmult)
	if (hasUpgrade('d', 13)) gain = gain.times(softcap((upgradeEffect('d', 13)), new Decimal(1e18), 0.175))

	if (inChallenge('a', 13)) gain = gain.pow(0.5)
	if (hasChallenge('a', 13) && gain.gte(1)) gain = gain.pow(player.a.ac13powerexp)
	if (player.d.boost2active == 1) gain = gain.pow(player.d.boost2pow)
	if (hasUpgrade('w', 13)) gain = gain.pow(1.01)
	//gain = player.points.pow(1.01)
	//gain = gain.times(100)

	if (player.infinity_broken == false && player.points.gte(1.794e308)) player.points = new Decimal(1.794e308), gain = gain.times(0)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	infinity_broken: false
}}

// Display extra things at the top of the page
var displayThings = [
	() => (player.infinity_broken == false && player.q.points.gte(1.79e308)) ? 'You can<span style=\"color: #195ef3; text-shadow: 0px 0px 10px #195ef3; font-family: Lucida Console\"> Infinity</span>' : "",
	() => (player.infinity_broken == false && player.q.redquarks.gte(1.79e308) || player.infinity_broken == false && player.q.protons.gte(1.79e308) || player.infinity_broken == false && player.q.points.gte(1.79e308)) ? 'Your resources are capped at Infinity (1.79e308).' : "",
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