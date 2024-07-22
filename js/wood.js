addLayer("w", {
    name: "wood", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    branches: true,
  //  passiveGeneration() {
  //      if (hasUpgrade('c', 15)) return 100
  //      else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text",
            function() { return 'UNFINISHED. END OF GAME. PLEASE DO NOT PURCHASE SAND OR WOOD.' },
            { "color": "red", "font-size": "16px" }],
    ],
 //   onPrestige()
    color: "#572E1C",
    requires: new Decimal(2e38), // Can be a function that takes requirement increases into account
    resource: "Wood", // Name of prestige currency
    baseResource: "Dirt", // Name of resource prestige is based on
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.43, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "w", description: "W: Reset for Wood", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['s', 't'],
    layerShown(){return player.t.total.gte(1) || player.w.total.gte(1) || player.sa.total(1)},
 //   doReset(resettingLayer) {
 //       if (layers[resettingLayer].row > layers[this.layer].row) {
 //           savedUpgrades = []
 //           if (hasUpgrade('c', 15) && ['c', 's', 'm', 'f', 'o', 'a', 'v', 'sm', 'sdw', 'ss'].includes(resettingLayer)) {
//              if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
 //               if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
  //              if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
   //             if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
    //            if (hasUpgrade(this.layer, 15)) {savedUpgrades.push(15)}
    //            if (hasUpgrade(this.layer, 16)) {savedUpgrades.push(16)}
 //               if (hasUpgrade(this.layer, 17)) {savedUpgrades.push(17)}
 //               if (hasUpgrade(this.layer, 18)) {savedUpgrades.push(18)}
 //               if (hasUpgrade(this.layer, 19)) {savedUpgrades.push(19)}
 //               if (hasUpgrade(this.layer, 21)) {savedUpgrades.push(21)}
 //           }
//         layerDataReset(this.layer, [])
//            player[this.layer].upgrades = savedUpgrades
//        }
//    },
    upgrades: {
    },
    clickables: {
    },
    bars: {
    },
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.