addLayer("m", {
    name: "moss", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    branches: true,
  //  passiveGeneration() {
  //      if (hasUpgrade('c', 15)) return 100
  //      else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        mossspread: new Decimal(1)
    }},
    onPrestige() {return player.m.mossspread = new Decimal(1)},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        ["display-text",
            function() { return 'Moss Spread generates based off the amount of your unspent Moss at a slow rate of 0.1/s per one Moss, and you lose 1/20 of your Moss Spread every second IF you have at least one Moss. Moss Spread multiplies Dirt gain based on log2.'},
            { "color": "gray", "font-size": "12px" }],
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.m.mossspread) + ' Moss Spread, which multiplies your Dirt gain by ' + format(player.m.mossspread.log2().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.m.total) + ' total Moss.'},
            { "color": "white", "font-size": "15px" }],
        "milestones",
        "blank",
        "upgrades"
    ],
    color: "#688553",
    requires: new Decimal(50000), // Can be a function that takes requirement increases into account
    resource: "Moss", // Name of prestige currency
    baseResource: "Grass Blades", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.315, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('d', 133)) mult = mult.times(player.f.purpleflowers.log10().plus(1))
        player.m.mossspread = player.m.mossspread.plus(player.m.points.div(200))
        if (player.m.points.gte(1)) player.m.mossspread = player.m.mossspread.minus(player.m.mossspread.div(400))
        mult = mult.times(player.f.blueflowers.log10().plus(1))
        mult = mult.times(player.s.farmedbeetrootmultiplier)
        mult = mult.times(player.t.bananas.plus(1).log2().plus(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for Moss", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['g'],
    layerShown(){return hasUpgrade('g', 22) || player.m.total.gte(1)},
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
        11: {
            title: "Oh, hey.",
            description: "Unspent Moss slightly boosts Grass Blade gain. (Remember, 0 Moss = 0 generating Moss Spread!)",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(3).pow(0.18)
            },
            effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(600) , 0.115))+"x" },
        },
        12: {
            title: "You're new around here, aren't you?",
            description: "Dirt Upgrade Two formula power 0.095 -> 0.13",
            cost: new Decimal(2),
            unlocked() {return (hasUpgrade('m', 11))},
        },
        13: {
            title: "I hope you enjoy your stay.",
            description: "Dirt Upgrade Three formula power 0.1111 -> 0.1511",
            cost: new Decimal(3),
            unlocked() {return (hasUpgrade('m', 12))},
        },
        21: {
            title: "These are the steps to success.",
            description: "Unspent Seeds now boost power gain.",
            cost: new Decimal(100),
            unlocked() {return (hasUpgrade('m', 13))},
            effect() {
                return player.s.points.add(2).pow(0.37)
            },
            effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(1000) , 0.109))+"x" },
        },
        22: {
            title: "Follow along.",
            description: "Unspent Flowers now boost power gain.",
            cost: new Decimal(250),
            unlocked() {return (hasUpgrade('m', 21))},
            effect() {
                return player.f.points.add(2).pow(0.416)
            },
            effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(750) , 0.104))+"x" },
        },
        23: {
            title: "You can have immeasurable power.",
            description: "Unspent Moss now boosts power gain.",
            cost: new Decimal(500000),
            unlocked() {return (hasUpgrade('m', 22))},
            effect() {
                return player.m.points.add(2).pow(0.35)
            },
            effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(100) , 0.107))+"x" },
        },
    },
    milestones: {
        1: {
            requirementDescription: "3 Total Moss",
            effectDescription: "You keep Grass upgrades",
            done() { return player.m.total.gte(3) }
        },
        2: {
            requirementDescription: "15 Total Moss",
            effectDescription: "You keep Grass milestones",
            done() { return player.m.total.gte(15) }
        },
    }
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.