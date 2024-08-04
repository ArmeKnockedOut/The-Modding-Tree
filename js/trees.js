addLayer("t", {
    name: "trees", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3,
    branches: true,
  //  passiveGeneration() {
  //      if (hasUpgrade('c', 15)) return 100
  //      else return 0},
    resetsNothing() {return (hasUpgrade('wa', 15))},
    canBuyMax() {return (hasUpgrade('wa', 15))},
    autoPrestige() {return (hasUpgrade('wa', 15))},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        disposabletrees: new Decimal(0),
        totaldisposabletrees: new Decimal(0),
        treesize: new Decimal(1),
        treebranches: new Decimal(1),
        treeroots: new Decimal(1),
        apples: new Decimal(0),
        allocatedtreesapples: new Decimal(0),
        allocatedtreesapplesmax: new Decimal(5),
        allocatedtreesapplesoldmax: new Decimal(5),
        grownapplestime: new Decimal(0),
        grownapplesoldreqtime: new Decimal(60),
        grownapplesreqtime: new Decimal(60),
        pears: new Decimal(0),
        allocatedtreespears: new Decimal(0),
        allocatedtreespearsmax: new Decimal(5),
        allocatedtreespearsoldmax: new Decimal(5),
        grownpearstime: new Decimal(0),
        grownpearsoldreqtime: new Decimal(60),
        grownpearsreqtime: new Decimal(60),
        bananas: new Decimal(0),
        allocatedtreesbananas: new Decimal(0),
        allocatedtreesbananasmax: new Decimal(5),
        allocatedtreesbananasoldmax: new Decimal(5),
        grownbananastime: new Decimal(0),
        grownbananasoldreqtime: new Decimal(60),
        grownbananasreqtime: new Decimal(60),
        oranges: new Decimal(0),
        allocatedtreesoranges: new Decimal(0),
        allocatedtreesorangesmax: new Decimal(5),
        allocatedtreesorangesoldmax: new Decimal(5),
        grownorangestime: new Decimal(0),
        grownorangesoldreqtime: new Decimal(60),
        grownorangesreqtime: new Decimal(60),
        cherries: new Decimal(0),
        allocatedtreescherries: new Decimal(0),
        allocatedtreescherriesmax: new Decimal(5),
        allocatedtreescherriesoldmax: new Decimal(5),
        growncherriestime: new Decimal(0),
        growncherriesoldreqtime: new Decimal(60),
        growncherriesreqtime: new Decimal(60),
        fruitsauto: new Decimal(0),
        
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text",
            function() { return 'Your trees grow passively at a rate of 5^trees meters per second. Your trees grow more branches at a rate of 100^(treesize log2`d) per second. Your trees grow more roots at a rate of 75^(treesize log10`d) per second.'},
            { "color": "gray", "font-size": "12px" }],
        "blank",
        ["display-text",
            function() { return 'Your trees are ' + format(player.t.treesize, 2) + ' meters tall, which is diving fruit gain time by ' + format(player.t.treesize.log10().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "5px"],
        ["display-text",
            function() { return 'Your trees have ' + format(player.t.treebranches, 2) + ' branches each, which are multiplying power gain by ' + format(player.t.treebranches.log2().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "5px"],
        ["display-text",
            function() { return 'Your trees have ' + format(player.t.treeroots, 2) + ' roots each, which are diving crop farm time by ' + format(player.t.treeroots.log10().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["display-text",
            function() { return 'You can allocate a Disposable Tree(s) into any of the five fruits below. Each single allocated tree into a fruit increases the fruits gains by x2.'},
            { "color": "gray", "font-size": "12px" }],
        "blank",
        ["clickable", 11],
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.t.disposabletrees) + ' Disposable Trees'},
            { "color": "white", "font-size": "16.5px" }],
        ["display-text",
            function() { return 'All fruits give a boost based on log2.'},
            { "color": "gray", "font-size": "12px" }],
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.t.apples) + ' Apples, which are boosting Dirt gain by ' + format(player.t.apples.plus(1).log2().plus(1)) + 'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "5px"],
        ["display-text",
            function() { return 'You have allocated ' + format(player.t.allocatedtreesapples) + ' Trees into Apples (Cap: ' + format(player.t.allocatedtreesapplesmax) + '), which will gain you +' + format(Decimal.pow(2, player.t.allocatedtreesapples.minus(1))) + ' Apples'},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBar"],
        "blank",
        ["clickable", 21],
        "blank",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.t.pears) + ' Pears, which are boosting Grass Blade gain by ' + format(player.t.pears.plus(1).log2().plus(1)) + 'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "5px"],
        ["display-text",
            function() { return 'You have allocated ' + format(player.t.allocatedtreespears) + ' Trees into Pears (Cap: ' + format(player.t.allocatedtreespearsmax) + '), which will gain you +' + format(Decimal.pow(2, player.t.allocatedtreespears.minus(1))) + ' Pears'},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBartwo"],
        "blank",
        ["clickable", 22],
        "blank",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.t.bananas) + ' Bananas, which are boosting Moss gain by ' + format(player.t.bananas.plus(1).log2().plus(1)) + 'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "5px"],
        ["display-text",
            function() { return 'You have allocated ' + format(player.t.allocatedtreesbananas) + ' Trees into Bananas (Cap: ' + format(player.t.allocatedtreesbananasmax) + '), which will gain you +' + format(Decimal.pow(2, player.t.allocatedtreesbananas.minus(1))) + ' Bananas'},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBarthree"],
        "blank",
        ["clickable", 23],
        "blank",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.t.oranges) + ' Oranges, which are boosting Flower gain by ' + format(player.t.oranges.plus(1).log2().plus(1)) + 'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "5px"],
        ["display-text",
            function() { return 'You have allocated ' + format(player.t.allocatedtreesoranges) + ' Trees into Oranges (Cap: ' + format(player.t.allocatedtreesorangesmax) + '), which will gain you +' + format(Decimal.pow(2, player.t.allocatedtreesoranges.minus(1))) + ' Oranges'},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBarfour"],
        "blank",
        ["clickable", 24],
        "blank",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.t.cherries) + ' Cherries, which are boosting Seed gain by ' + format(player.t.cherries.plus(1).log2().plus(1)) + 'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "5px"],
        ["display-text",
            function() { return 'You have allocated ' + format(player.t.allocatedtreescherries) + ' Trees into Cherries (Cap: ' + format(player.t.allocatedtreescherriesmax) + '), which will gain you +' + format(Decimal.pow(2, player.t.allocatedtreescherries.minus(1))) + ' Cherries'},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBarfive"],
        "blank",
        ["clickable", 25]
    ],
    onPrestige() {return player.m.mossspread = new Decimal(1), player.t.disposabletrees = player.t.disposabletrees.plus(1), player.t.totaldisposabletrees = player.t.totaldisposabletrees.plus(1), player.m.upgradesixsoftcap = new Decimal(100), player.m.upgradesixsoftcapr = new Decimal(0)},
    color: "#3B4F26",
    requires: new Decimal(1e33), // Can be a function that takes requirement increases into account
    resource: "Trees", // Name of prestige currency
    baseResource: "Dirt", // Name of resource prestige is based on
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.9, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (player.t.total.gte(1)) player.t.treesize = player.t.treesize.plus(Decimal.pow(5, player.t.total).div(20))
       // if (player.t.total.gte(1)) player.t.treebranches = player.t.treebranches.plus(player.t.treesize.log2().plus(1).div(20))
        if (player.t.total.gte(1)) player.t.treebranches = player.t.treebranches.plus(Decimal.pow(100, player.t.treesize.log2().plus(1).div(20)))
        if (player.t.total.gte(1)) player.t.treeroots = player.t.treeroots.plus(Decimal.pow(75, player.t.treesize.log10().plus(1).div(20)))
        player.t.grownapplesreqtime = player.t.grownapplesoldreqtime.div(player.t.treesize.log10().plus(1))
        player.t.grownpearsreqtime = player.t.grownpearsoldreqtime.div(player.t.treesize.log10().plus(1))
        player.t.grownbananasreqtime = player.t.grownbananasoldreqtime.div(player.t.treesize.log10().plus(1))
        player.t.grownorangesreqtime = player.t.grownorangesoldreqtime.div(player.t.treesize.log10().plus(1))
        player.t.growncherriesreqtime = player.t.growncherriesoldreqtime.div(player.t.treesize.log10().plus(1))
        if (player.t.allocatedtreesapples.gte(1)) player.t.grownapplestime = player.t.grownapplestime.plus(0.05)
        if (player.t.grownapplestime.gte(player.t.grownapplesreqtime)) player.t.apples = player.t.apples.plus(Decimal.pow(2, player.t.allocatedtreesapples.minus(1)))
        if (player.t.grownapplestime.gte(player.t.grownapplesreqtime)) player.t.grownapplestime = new Decimal(0)
        if (player.t.allocatedtreespears.gte(1)) player.t.grownpearstime = player.t.grownpearstime.plus(0.05)
        if (player.t.grownpearstime.gte(player.t.grownpearsreqtime)) player.t.pears = player.t.pears.plus(Decimal.pow(2, player.t.allocatedtreespears.minus(1)))
        if (player.t.grownpearstime.gte(player.t.grownpearsreqtime)) player.t.grownpearstime = new Decimal(0)
        if (player.t.allocatedtreesbananas.gte(1)) player.t.grownbananastime = player.t.grownbananastime.plus(0.05)
        if (player.t.grownbananastime.gte(player.t.grownbananasreqtime)) player.t.bananas = player.t.bananas.plus(Decimal.pow(2, player.t.allocatedtreesbananas.minus(1)))
        if (player.t.grownbananastime.gte(player.t.grownbananasreqtime)) player.t.grownbananastime = new Decimal(0)
        if (player.t.allocatedtreesoranges.gte(1)) player.t.grownorangestime = player.t.grownorangestime.plus(0.05)
        if (player.t.grownorangestime.gte(player.t.grownorangesreqtime)) player.t.oranges = player.t.oranges.plus(Decimal.pow(2, player.t.allocatedtreesoranges.minus(1)))
        if (player.t.grownorangestime.gte(player.t.grownorangesreqtime)) player.t.grownorangestime = new Decimal(0)
        if (player.t.allocatedtreescherries.gte(1)) player.t.growncherriestime = player.t.growncherriestime.plus(0.05)
        if (player.t.growncherriestime.gte(player.t.growncherriesreqtime)) player.t.cherries = player.t.cherries.plus(Decimal.pow(2, player.t.allocatedtreescherries.minus(1)))
        if (player.t.growncherriestime.gte(player.t.growncherriesreqtime)) player.t.growncherriestime = new Decimal(0)
        if (getBuyableAmount('w', 12).gte(1)) player.t.allocatedtreesapplesmax = player.t.allocatedtreesapplesoldmax.plus(buyableEffect('w', 12))
        if (getBuyableAmount('w', 12).gte(1)) player.t.allocatedtreespearsmax = player.t.allocatedtreespearsoldmax.plus(buyableEffect('w', 12))
        if (getBuyableAmount('w', 12).gte(1)) player.t.allocatedtreesbananasmax = player.t.allocatedtreesbananasoldmax.plus(buyableEffect('w', 12))
        if (getBuyableAmount('w', 12).gte(1)) player.t.allocatedtreesorangesmax = player.t.allocatedtreesorangesoldmax.plus(buyableEffect('w', 12))
        if (getBuyableAmount('w', 12).gte(1)) player.t.allocatedtreescherriesmax = player.t.allocatedtreescherriesoldmax.plus(buyableEffect('w', 12))
        if (hasUpgrade('upgtree', 14)) mult = mult.div(upgradeEffect('upgtree', 14))
        if (hasUpgrade('upgtree', 15)) mult = mult.div(upgradeEffect('upgtree', 15))
        if (hasUpgrade('upgtree', 16)) mult = mult.div(upgradeEffect('upgtree', 16))
        if (getBuyableAmount('w', 13).gte(2)) mult = mult.div(player.f.cyanflowers.pow(0.6).log10().plus(1))
        mult = mult.div(player.s.farmedstrawberrymultiplier)
        if (hasUpgrade('wa', 21)) player.t.fruitsauto = new Decimal(1)
        if (hasUpgrade('wa', 21)) player.t.grownapplestime = player.t.grownapplestime.plus(0.05)
        if (hasUpgrade('wa', 21)) player.t.grownpearstime = player.t.grownpearstime.plus(0.05)
        if (hasUpgrade('wa', 21)) player.t.grownbananastime = player.t.grownbananastime.plus(0.05)
        if (hasUpgrade('wa', 21)) player.t.grownorangestime = player.t.grownorangestime.plus(0.05)
        if (hasUpgrade('wa', 21)) player.t.growncherriestime = player.t.growncherriestime.plus(0.05)
        if (hasUpgrade('wa', 21)) player.t.allocatedtreesapples = player.t.total
        if (hasUpgrade('wa', 21)) player.t.allocatedtreespears = player.t.total
        if (hasUpgrade('wa', 21)) player.t.allocatedtreesoranges = player.t.total
        if (hasUpgrade('wa', 21)) player.t.allocatedtreesbananas = player.t.total
        if (hasUpgrade('wa', 21)) player.t.allocatedtreescherries = player.t.total
        if (hasUpgrade('wa', 21) && player.t.allocatedtreesapples.gt(player.t.allocatedtreesapplesmax)) player.t.allocatedtreesapples = player.t.allocatedtreesapplesmax
        if (hasUpgrade('wa', 21) && player.t.allocatedtreespears.gt(player.t.allocatedtreespearsmax)) player.t.allocatedtreespears = player.t.allocatedtreespearsmax
        if (hasUpgrade('wa', 21) && player.t.allocatedtreesbananas.gt(player.t.allocatedtreesbananasmax)) player.t.allocatedtreesbananas = player.t.allocatedtreesbananasmax
        if (hasUpgrade('wa', 21) && player.t.allocatedtreesoranges.gt(player.t.allocatedtreesorangesmax)) player.t.allocatedtreesoranges = player.t.allocatedtreesorangesmax
        if (hasUpgrade('wa', 21) && player.t.allocatedtreescherries.gt(player.t.allocatedtreescherriesmax)) player.t.allocatedtreescherries = player.t.allocatedtreescherriesmax
        if (hasUpgrade('wa', 15) && player.t.totaldisposabletrees.lt(player.t.total)) player.t.totaldisposabletrees = player.t.total, player.t.disposabletrees = player.t.totaldisposabletrees.minus(player.t.allocatedtreesapples).minus(player.t.allocatedtreespears).minus(player.t.allocatedtreesbananas).minus(player.t.allocatedtreesoranges).minus(player.t.allocatedtreescherries)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "T: Reset for Trees", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['g', 'r'],
    layerShown(){return hasMilestone('s', 3) || player.t.total.gte(1) || player.sa.total.gte(1) || player.w.total.gte(1)},
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
            display() {return "Respec"},
            canClick() {return player.t.allocatedtreesapples.gte(1) || player.t.allocatedtreespears.gte(1) || player.t.allocatedtreesbananas.gte(1) || player.t.allocatedtreesoranges.gte(1) || player.t.allocatedtreescherries.gte(1)},
            onClick() {return player.t.disposabletrees = player.t.total,
            player.t.allocatedtreesapples = player.t.allocatedtreesapples.minus(player.t.allocatedtreesapples),
            player.t.allocatedtreespears = player.t.allocatedtreespears.minus(player.t.allocatedtreespears),
            player.t.allocatedtreesbananas = player.t.allocatedtreesbananas.minus(player.t.allocatedtreesbananas),
            player.t.allocatedtreesoranges = player.t.allocatedtreesoranges.minus(player.t.allocatedtreesoranges),
            player.t.allocatedtreescherries = player.t.allocatedtreescherries.minus(player.t.allocatedtreescherries)}
        },
        21: {
            display() {return "Allocate to Apples"},
            canClick() {return player.t.fruitsauto.lte(0) && player.t.disposabletrees.gte(1) && player.t.allocatedtreesapples.lt(player.t.allocatedtreesapplesmax)},
            onClick() {return player.t.disposabletrees = player.t.disposabletrees.minus(1),
            player.t.allocatedtreesapples = player.t.allocatedtreesapples.plus(1)}
        },
        22: {
            display() {return "Allocate to Pears"},
            canClick() {return player.t.fruitsauto.lte(0) && player.t.disposabletrees.gte(1) && player.t.allocatedtreespears.lt(player.t.allocatedtreespearsmax)},
            onClick() {return player.t.disposabletrees = player.t.disposabletrees.minus(1),
            player.t.allocatedtreespears = player.t.allocatedtreespears.plus(1)}
        },
        23: {
            display() {return "Allocate to Bananas"},
            canClick() {return player.t.fruitsauto.lte(0) && player.t.disposabletrees.gte(1) && player.t.allocatedtreesbananas.lt(player.t.allocatedtreesbananasmax)},
            onClick() {return player.t.disposabletrees = player.t.disposabletrees.minus(1),
            player.t.allocatedtreesbananas = player.t.allocatedtreesbananas.plus(1)}
        },
        24: {
            display() {return "Allocate to Oranges"},
            canClick() {return player.t.fruitsauto.lte(0) && player.t.disposabletrees.gte(1) && player.t.allocatedtreesoranges.lt(player.t.allocatedtreesorangesmax)},
            onClick() {return player.t.disposabletrees = player.t.disposabletrees.minus(1),
            player.t.allocatedtreesoranges = player.t.allocatedtreesoranges.plus(1)}
        },
        25: {
            display() {return "Allocate to Cherries"},
            canClick() {return player.t.fruitsauto.lte(0) && player.t.disposabletrees.gte(1) && player.t.allocatedtreescherries.lt(player.t.allocatedtreescherriesmax)},
            onClick() {return player.t.disposabletrees = player.t.disposabletrees.minus(1),
            player.t.allocatedtreescherries = player.t.allocatedtreescherries.plus(1)}
        },
    },
    bars: {
        theBar: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#3B4F26"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.t.grownapplestime.div(player.t.grownapplesreqtime)},
            display() {return format(player.t.grownapplestime) + 's / ' + format(player.t.grownapplesreqtime) + 's'},
            unlocked: true,
        },
        theBartwo: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#3B4F26"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.t.grownpearstime.div(player.t.grownpearsreqtime)},
            display() {return format(player.t.grownpearstime) + 's / ' + format(player.t.grownpearsreqtime) + 's'},
            unlocked: true,
        },
        theBarthree: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#3B4F26"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.t.grownbananastime.div(player.t.grownbananasreqtime)},
            display() {return format(player.t.grownbananastime) + 's / ' + format(player.t.grownbananasreqtime) + 's'},
            unlocked: true,
        },
        theBarfour: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#3B4F26"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.t.grownorangestime.div(player.t.grownorangesreqtime)},
            display() {return format(player.t.grownorangestime) + 's / ' + format(player.t.grownorangesreqtime) + 's'},
            unlocked: true,
        },
        theBarfive: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#3B4F26"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.t.growncherriestime.div(player.t.growncherriesreqtime)},
            display() {return format(player.t.growncherriestime) + 's / ' + format(player.t.growncherriesreqtime) + 's'},
            unlocked: true,
        },
    },
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.