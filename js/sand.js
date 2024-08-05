addLayer("sa", {
    name: "sand", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Sa", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    branches: true,
  //  passiveGeneration() {
  //      if (hasUpgrade('c', 15)) return 100
  //      else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        grainsofsand: new Decimal(0),
        grainsofsandcost: new Decimal(0.1),
        grainsofsandbar: new Decimal(0),
        grainsofsandlevels: new Decimal(0),
        beaches: new Decimal(0),
        beachescost: new Decimal(0.5),
        beachesbar: new Decimal(0),
        beacheslevels: new Decimal(0),
        beachesreqbar: new Decimal(10),
        deserts: new Decimal(0),
        desertscost: new Decimal(10),
        desertsbar: new Decimal(0),
        desertslevels: new Decimal(0),
        desertsreqbar: new Decimal(10),
        sandplanets: new Decimal(0),
        sandplanetscost: new Decimal(1e25),
        sandplanetsbar: new Decimal(0),
        sandplanetslevels: new Decimal(0),
        sandplanetsreqbar: new Decimal(50),
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text",
            function() { return 'You can distribute some of your Sand into distributions in The Distribution Zone below. Upon filling a distributions bar, you gain a Level which multiplies the overall effect of the distribution by 2, the next purchases cost more Sand, and the distributions bar goes back to zero. The Level Boost of said distribution is boosted by log10 of the individual distribution amount.'},
            { "color": "gray", "font-size": "12px" }],
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.sa.total) + ' total Sand.' },
            { "color": "white", "font-size": "16px" }],
        "milestones",
        "blank",
        ["display-text",
            function() { return 'THE DISTRIBUTION ZONE' },
            { "color": "white", "font-size": "32px" }
        ],
        "blank",
        "blank",
        ["display-text",
            function() { return 'Sand Pile' },
            { "color": "white", "font-size": "32px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return ' You have ' + format(player.sa.grainsofsand, 0) + ' Sand Piles, which are boosting the Level Boost by ' + format(player.sa.grainsofsand.plus(1).log10().plus(1)) + 'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Level: ' + format(player.sa.grainsofsandlevels, 0) + ' (Boost: ' + format(Decimal.pow(2, player.sa.grainsofsandlevels).times(player.sa.grainsofsand.plus(1).log10().plus(1))) + 'x power)' },
            { "color": "white", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBar"],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Current cost: ' + format(player.sa.grainsofsandcost) + ' Sand (10x Cost Each Level)' },
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["clickable", 11],
        "blank",
        "blank",
        ["display-text",
            function() { if (hasMilestone('sa', 2)) return 'Beach'
            else return "" },
            { "color": "white", "font-size": "32px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasMilestone('sa', 2)) return ' You have ' + format(player.sa.beaches, 0) + ' Beaches, which are boosting the Level Boost by ' + format(player.sa.beaches.plus(1).log10().plus(1)) + 'x'
            else return ""},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasMilestone('sa', 2)) return 'Level: ' + format(player.sa.beacheslevels, 0) + ' (Boost: ' + format(Decimal.pow(2, player.sa.beacheslevels).times(player.sa.beaches.plus(1).log10().plus(1))) + 'x Dirt & Grass Blades)'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBartwo"],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasMilestone('sa', 2)) return 'Current cost: ' + format(player.sa.beachescost) + ' Sand (5x Cost Each Level)'
            else return ""},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["clickable", 12],
        "blank",
        "blank",
        ["display-text",
            function() { if (hasMilestone('sa', 3)) return 'Desert'
            else return "" },
            { "color": "white", "font-size": "32px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasMilestone('sa', 3)) return ' You have ' + format(player.sa.deserts, 0) + ' Deserts, which are boosting the Level Boost by ' + format(player.sa.deserts.plus(1).log10().plus(1)) + 'x'
            else return ""},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasMilestone('sa', 3)) return 'Level: ' + format(player.sa.desertslevels, 0) + ' (Boost: ' + format(Decimal.pow(2, player.sa.desertslevels).times(player.sa.deserts.plus(1).log10().plus(1))) + 'x Moss, Flowers & Seeds)'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBarthree"],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasMilestone('sa', 3)) return 'Current cost: ' + format(player.sa.desertscost) + ' Sand (5x Cost Each Level)'
            else return ""},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["clickable", 13],
        "blank",
        "blank",
        ["display-text",
            function() { if (hasMilestone('sa', 5)) return 'Sand Planet'
            else return "" },
            { "color": "white", "font-size": "32px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (player.sa.sandplanets.gte(230)) return ""
                else if (player.sa.sandplanets.gte(229)) return 'To purchase Sand Planets past 229, you need: At least 80 purchases of Wood Buyable 2, 20 purchases of Wood Buyables 5 and 6, 25 purchases of Wood Buyable 7, 27 Purchases of Wood Buyable 8, 30 Sand Pile Levels, 40 Beaches & Desert Levels, and 1e47 Total Water.'
            else return ""},
            { "color": "gray", "font-size": "15px" }],
        ["display-text",
            function() { if (hasMilestone('sa', 5)) return ' You have ' + format(player.sa.sandplanets, 0) + ' Sand Planets, which are boosting the Level Boost by ' + format(player.sa.sandplanets.plus(1).log10().plus(1)) + 'x'
            else return ""},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasMilestone('sa', 5)) return 'Level: ' + format(player.sa.sandplanetslevels, 0) + ' (Boost: ' + format(Decimal.pow(2, player.sa.sandplanetslevels).times(player.sa.sandplanets.plus(1).log10().plus(1))) + 'x Wood & Water)'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBarfour"],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasMilestone('sa', 5)) return 'Current cost: ' + format(player.sa.sandplanetscost) + ' Sand (15x Cost Each Level)'
            else return ""},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["clickable", 14]
    ],
    onPrestige() {return player.upgtree.upgrades = []},
    color: "#FFE800",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "Sand", // Name of prestige currency
    baseResource: "Flowers", // Name of resource prestige is based on
    baseAmount() {return player.f.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.43, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (player.sa.grainsofsandbar.gte(10)) player.sa.grainsofsandcost = player.sa.grainsofsandcost.times(10)
        if (player.sa.grainsofsandbar.gte(10)) player.sa.grainsofsandlevels = player.sa.grainsofsandlevels.plus(1)
        if (player.sa.grainsofsandbar.gte(10)) player.sa.grainsofsandbar = player.sa.grainsofsandbar = new Decimal(0)
        if (player.sa.beachesbar.gte(player.sa.beachesreqbar)) player.sa.beachescost = player.sa.beachescost.times(5)
        if (player.sa.beachesbar.gte(player.sa.beachesreqbar)) player.sa.beacheslevels = player.sa.beacheslevels.plus(1)
        if (player.sa.beachesbar.gte(player.sa.beachesreqbar)) player.sa.beachesbar = player.sa.beachesbar = new Decimal(0), player.sa.beachesreqbar = player.sa.beachesreqbar.plus(1)
        if (player.sa.desertsbar.gte(player.sa.desertsreqbar)) player.sa.desertscost = player.sa.desertscost.times(5)
        if (player.sa.desertsbar.gte(player.sa.desertsreqbar)) player.sa.desertslevels = player.sa.desertslevels.plus(1)
        if (player.sa.desertsbar.gte(player.sa.desertsreqbar)) player.sa.desertsbar = player.sa.desertsbar = new Decimal(0), player.sa.desertsreqbar = player.sa.desertsreqbar.plus(1)
        if (player.sa.sandplanetsbar.gte(player.sa.sandplanetsreqbar)) player.sa.sandplanetscost = player.sa.sandplanetscost.times(15)
        if (player.sa.sandplanetsbar.gte(player.sa.sandplanetsreqbar)) player.sa.sandplanetslevels = player.sa.sandplanetslevels.plus(1)
        if (player.sa.sandplanetsbar.gte(player.sa.sandplanetsreqbar)) player.sa.sandplanetsbar = player.sa.sandplanetsbar = new Decimal(0), player.sa.sandplanetsreqbar = player.sa.sandplanetsreqbar.plus(5)
        if (getBuyableAmount('w', 17).gte(1)) mult = mult.times(buyableEffect('w', 17))
        if (player.sa.sandplanetslevels == 4) player.sa.sandplanetscost = new Decimal(1e40)
        if (player.sa.desertslevels == 60) player.sa.desertscost = new Decimal(1e50)
        if (player.sa.beacheslevels == 60) player.sa.beachescost = new Decimal(1e50)
        if (hasUpgrade('wa', 22)) mult = mult.times(player.wa.elodea_canadensis.plus(1).pow(4).log(11).plus(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for Sand", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['m', 'f'],
    layerShown(){return player.t.total.gte(1) || player.sa.total.gte(1) || player.w.total.gte(1)},
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
            display() {return "Distribute"},
            canClick() {return player.sa.points.gte(player.sa.grainsofsandcost)},
            onClick() {return player.sa.points = player.sa.points.minus(player.sa.grainsofsandcost),
            player.sa.grainsofsand = player.sa.grainsofsand.plus(1),
            player.sa.grainsofsandbar = player.sa.grainsofsandbar.plus(1)},
            onHold() {return player.sa.points = player.sa.points.minus(player.sa.grainsofsandcost),
                player.sa.grainsofsand = player.sa.grainsofsand.plus(1),
                player.sa.grainsofsandbar = player.sa.grainsofsandbar.plus(1)}
        },
        12: {
            display() {return "Distribute"},
            canClick() {return player.sa.points.gte(player.sa.beachescost)},
            onClick() {return player.sa.points = player.sa.points.minus(player.sa.beachescost),
            player.sa.beaches = player.sa.beaches.plus(1),
            player.sa.beachesbar = player.sa.beachesbar.plus(1)},
            onHold() {return player.sa.points = player.sa.points.minus(player.sa.beachescost),
                player.sa.beaches = player.sa.beaches.plus(1),
                player.sa.beachesbar = player.sa.beachesbar.plus(1)},
            unlocked() {return (hasMilestone('sa', 2))},
        },
        13: {
            display() {return "Distribute"},
            canClick() {return player.sa.points.gte(player.sa.desertscost)},
            onClick() {return player.sa.points = player.sa.points.minus(player.sa.desertscost),
            player.sa.deserts = player.sa.deserts.plus(1),
            player.sa.desertsbar = player.sa.desertsbar.plus(1)},
            onHold() {return player.sa.points = player.sa.points.minus(player.sa.desertscost),
                player.sa.deserts = player.sa.deserts.plus(1),
                player.sa.desertsbar = player.sa.desertsbar.plus(1)},
            unlocked() {return (hasMilestone('sa', 3))},
        },
        14: {
            display() {return "Distribute"},
            canClick() { if (player.sa.sandplanets == 229 && getBuyableAmount('w', 12).gte(80) && getBuyableAmount('w', 15).gte(20) && getBuyableAmount('w', 16).gte(20) && getBuyableAmount('w', 17).gte(25) && getBuyableAmount('w', 18).gte(27) && player.sa.grainsofsandlevels.gte(30) && player.sa.beacheslevels.gte(40) && player.sa.desertslevels.gte(40) && player.wa.total.gte(1e47)) return true
                else if (player.sa.sandplanets != 229 && player.sa.points.gte(player.sa.sandplanetscost)) return true
            else return false},
            onClick() {return player.sa.points = player.sa.points.minus(player.sa.sandplanetscost),
            player.sa.sandplanets = player.sa.sandplanets.plus(1),
            player.sa.sandplanetsbar = player.sa.sandplanetsbar.plus(1)},
            onHold() {return player.sa.points = player.sa.points.minus(player.sa.sandplanetscost),
                player.sa.sandplanets = player.sa.sandplanets.plus(1),
                player.sa.sandplanetsbar = player.sa.sandplanetsbar.plus(1)},
            unlocked() {return (hasMilestone('sa', 5))},
        },
    },
    bars: {
        theBar: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFE800"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.sa.grainsofsandbar.div(10)},
            display() {return format(player.sa.grainsofsandbar, 0) + ' / 10'},
            unlocked: true,
        },
        theBartwo: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFE800"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.sa.beachesbar.div(player.sa.beachesreqbar)},
            display() {return format(player.sa.beachesbar, 0) + ' / ' + format(player.sa.beachesreqbar, 0)},
            unlocked() {return (hasMilestone('sa', 2))},
        },
        theBarthree: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFE800"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.sa.desertsbar.div(player.sa.desertsreqbar)},
            display() {return format(player.sa.desertsbar, 0) + ' / ' + format(player.sa.desertsreqbar, 0)},
            unlocked() {return (hasMilestone('sa', 3))},
        },
        theBarfour: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFE800"},
            direction() {if (player.sa.sandplanetslevels == 3) return LEFT
            else return RIGHT},
            width: 325,
            height: 40,
            progress() {return player.sa.sandplanetsbar.div(player.sa.sandplanetsreqbar)},
            display() { if (player.sa.sandplanetslevels.gte(4) && player.nu.annihilatednemesis.lte(0)) return "Okay then... You didn't need those stupid rocks anyway."
                else if (player.sa.sandplanetslevels.gte(3) && player.nu.annihilatednemesis.lte(0)) return "Did they not even try to stop you?"
                else if (player.sa.sandplanetslevels.gte(2) && player.nu.annihilatednemesis.lte(0)) return "Why are you still going over the limit?"
                else if (player.sa.sandplanetslevels.gte(1) && player.nu.annihilatednemesis.lte(0)) return "What do you think you're doing?"
                else return format(player.sa.sandplanetsbar, 0) + ' / ' + format(player.sa.sandplanetsreqbar, 0)},
            unlocked() {return (hasMilestone('sa', 5))},
        },
    },
    milestones: {
        1: {
            requirementDescription: "1 Total Sand",
            effectDescription: "Unlock the Sand Pile in The Distribution Zone",
            done() { return player.sa.total.gte(1) }
        },
        2: {
            requirementDescription: "5 Total Sand",
            effectDescription: "Unlock the Beach in The Distribution Zone",
            done() { return player.sa.total.gte(5) },
            unlocked() {return (hasMilestone('sa', 1))}
        },
        3: {
            requirementDescription: "100 Total Sand",
            effectDescription: "Unlock the Desert in The Distribution Zone",
            done() { return player.sa.total.gte(100) },
            unlocked() {return (hasMilestone('sa', 2))}
        },
        4: {
            requirementDescription: "500,000,000 Total Sand",
            effectDescription: "You gain 100% of Moss gain every second",
            done() { return player.sa.total.gte(500000000) },
            unlocked() {return (hasMilestone('sa', 3))}
        },
        5: {
            requirementDescription: "1.00e25 Total Sand",
            effectDescription: "Unlock the Sand Planet in The Distribution Zone.",
            done() { return player.sa.total.gte(1e25) },
            unlocked() {return (hasMilestone('sa', 4))}
        },
    }
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.