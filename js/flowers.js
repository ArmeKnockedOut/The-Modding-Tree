addLayer("f", {
    name: "flowers", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    branches: true,
  //  passiveGeneration() {
  //      if (hasUpgrade('c', 15)) return 100
  //      else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        redflowers: new Decimal(1),
        orangeflowers: new Decimal(1),
        yellowflowers: new Decimal(1),
        blueflowers: new Decimal(1),
        purpleflowers: new Decimal(1)
    }},
    onPrestige() {return player.m.mossspread = new Decimal(1)},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        ["display-text",
            function() { return 'You can equally distribute all your flowers into any of the five colored flowers below. This functions similarly to grass. The first two colored flowers give a boost based on log2. The next colored flower gives a boost based off the flowers amount raised to the power of 1.6, then log10`d. The final two colored flowers give a boost based on log10.'},
            { "color": "gray", "font-size": "12px" }],
        "blank",
        ["display-text",
        function() { return 'You have ' + format(player.f.total) + ' total Flowers.' },
        { "color": "white", "font-size": "16px" }],
        "milestones",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.f.redflowers) + ' Red Flowers, which multiply your power gain by ' + format(player.f.redflowers.log2().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { return 'You have ' + format(player.f.orangeflowers) + ' Orange Flowers, which multiply your Dirt gain by ' + format(player.f.orangeflowers.log2().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { return 'You have ' + format(player.f.yellowflowers) + ' Yellow Flowers, which multiply your Grass Blade gain by ' + format(player.f.yellowflowers.pow(1.6).log10().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { return 'You have ' + format(player.f.blueflowers) + ' Blue Flowers, which multiply your Moss gain by ' + format(player.f.blueflowers.log10().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { return 'You have ' + format(player.f.purpleflowers) + ' Purple Flowers, which multiply your Seed gain by ' + format(player.f.purpleflowers.log10().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        "blank",
        "clickables",
        "blank",
        "blank",
        "upgrades"
    ],
    color: "#00F2FF",
    requires: new Decimal(5e13), // Can be a function that takes requirement increases into account
    resource: "Flowers", // Name of prestige currency
    baseResource: "Dirt", // Name of resource prestige is based on
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasAchievement('ach', 22)) mult = mult.times(1.5)
        mult = mult.times(player.s.farmedsugarcanemultiplier)
        if (hasAchievement('ach', 24)) player.f.redflowers = player.f.redflowers.plus(player.f.points.div(2000))
        if (hasAchievement('ach', 24)) player.f.orangeflowers = player.f.orangeflowers.plus(player.f.points.div(2000))
        if (hasAchievement('ach', 24)) player.f.yellowflowers = player.f.yellowflowers.plus(player.f.points.div(2000))
        if (hasAchievement('ach', 24)) player.f.blueflowers = player.f.blueflowers.plus(player.f.points.div(2000))
        if (hasAchievement('ach', 24)) player.f.purpleflowers = player.f.purpleflowers.plus(player.f.points.div(2000))
        if (hasUpgrade('d', 143)) player.f.purpleflowers = player.f.purpleflowers.plus(player.f.points.div(80))
        if (hasUpgrade('d', 144)) player.f.blueflowers = player.f.blueflowers.plus(player.f.points.div(80))
        mult = mult.times(player.t.oranges.plus(1).log2().plus(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Reset for Flowers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['g'],
    layerShown(){return hasUpgrade('m', 13) || player.f.total.gte(1)},
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
        11: {
            display() {return "Distribute Flowers"},
            canClick() {return true},
            onClick() {return player.f.redflowers = player.f.redflowers.plus(player.f.points.div(5)),
                player.f.orangeflowers = player.f.orangeflowers.plus(player.f.points.div(5)),
                player.f.yellowflowers = player.f.yellowflowers.plus(player.f.points.div(5)),
                player.f.blueflowers = player.f.blueflowers.plus(player.f.points.div(5)),
                player.f.purpleflowers = player.f.purpleflowers.plus(player.f.points.div(5)),
                player.f.points = player.f.points.minus(player.f.points)}
         }
    },
    milestones: {
        1: {
            requirementDescription: "25 Total Flowers",
            effectDescription: "You gain 10% of Planted Grass every second",
            done() { return player.f.total.gte(25) }
        },
        2: {
            requirementDescription: "50 Total Flowers",
            effectDescription: "Rock upgrades are bought automatically",
            done() { return player.f.total.gte(50) }
        },
    }
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.