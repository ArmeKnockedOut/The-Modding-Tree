addLayer("s", {
    name: "seeds", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    branches: true,
  //  passiveGeneration() {
  //      if (hasUpgrade('c', 15)) return 100
  //      else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        farmedwheat: new Decimal(0),
        farmedwheattime: new Decimal(0),
        farmedwheatreqtime: new Decimal(5),
        farmedwheatoldreqtime: new Decimal(5),
        farmedwheatgain: new Decimal(0),
        farmedwheattemp: new Decimal(0),
        farmedwheatcost: new Decimal(1),
        farmedwheatexponent: new Decimal(1),
        farmedwheatmaxexponent: new Decimal(1.25),
        farmedcarrots: new Decimal(0),
        farmedcarrotstime: new Decimal(0),
        farmedcarrotsoldreqtime: new Decimal(5),
        farmedcarrotsreqtime: new Decimal(10),
        farmedcarrotsgain: new Decimal(0),
        farmedcarrotstemp: new Decimal(0),
        farmedcarrotscost: new Decimal(10),
        farmedcarrotsmultiplier: new Decimal(1),
        farmedpotatoes: new Decimal(0),
        farmedpotatoestime: new Decimal(0),
        farmedpotatoesoldreqtime: new Decimal(7.5),
        farmedpotatoesreqtime: new Decimal(15),
        farmedpotatoesgain: new Decimal(0),
        farmedpotatoestemp: new Decimal(0),
        farmedpotatoescost: new Decimal(25),
        farmedpotatoesmultiplier: new Decimal(1),
        farmedbeetroot: new Decimal(0),
        farmedbeetroottime: new Decimal(0),
        farmedbeetrootoldreqtime: new Decimal(5),
        farmedbeetrootreqtime: new Decimal(10),
        farmedbeetrootgain: new Decimal(0),
        farmedbeetroottemp: new Decimal(0),
        farmedbeetrootcost: new Decimal(100),
        farmedbeetrootmultiplier: new Decimal(1),
        farmedsugarcane: new Decimal(0),
        farmedsugarcanetime: new Decimal(0),
        farmedsugarcaneoldreqtime: new Decimal(6.25),
        farmedsugarcanereqtime: new Decimal(12.5),
        farmedsugarcanegain: new Decimal(0),
        farmedsugarcanetemp: new Decimal(0),
        farmedsugarcanecost: new Decimal(250),
        farmedsugarcanemultiplier: new Decimal(1),
        farmedcorn: new Decimal(0),
        farmedcorntime: new Decimal(0),
        farmedcornoldreqtime: new Decimal(7.5),
        farmedcornreqtime: new Decimal(15),
        farmedcorngain: new Decimal(0),
        farmedcorntemp: new Decimal(0),
        farmedcorncost: new Decimal(1000),
        farmedcornmultiplier: new Decimal(1),
        farmedrice: new Decimal(0),
        farmedricetime: new Decimal(0),
        farmedriceoldreqtime: new Decimal(6.25),
        farmedricereqtime: new Decimal(12.5),
        farmedricegain: new Decimal(0),
        farmedricetemp: new Decimal(0),
        farmedricecost: new Decimal(2000),
        farmedricemultiplier: new Decimal(1),
        
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        ["display-text",
            function() { return 'You can start farming a certain crop(s). Farming a crop disables power gain. Farming a crop requires an amount of seeds depending on the crop, which increases based on how much of the crop you have. If you stop farming a crop before it is finished, you will need to spend the amount of seeds again to continue farming. Each farmed crop gives a boost to a certain resource.'},
            { "color": "gray", "font-size": "12px" }],
        "blank",
        ["display-text",
        function() { return 'You have ' + format(player.s.total) + ' total Seeds.' },
        { "color": "white", "font-size": "16px" }],
        "milestones",
        "blank",
        ["display-text",
            function() { return 'Each Farmed Wheat increases the power exponent by +0.01, capping at ^' + format(player.s.farmedwheatmaxexponent)},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'You have ' + format(player.s.farmedwheat) + ' Farmed Wheat, which raises power gain to the power of ^' + format(player.s.farmedwheatexponent)},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBar"],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Each Farmed Wheat makes the next cost 1,000x as many seeds.'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Current Farming Wheat cost: ' + format(player.s.farmedwheatcost) + ' seeds'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 11], ["blank", ["15px"]], ["clickable", 12]]],
        "blank",
        "blank",
        "blank",
        ["display-text",
            function() { return 'Each Farmed Carrot increases the Dirt Multiplier by +1.00'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'You have ' + format(player.s.farmedcarrots) + ' Farmed Carrots, which multiply Dirt gain by ' + format(player.s.farmedcarrotsmultiplier) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBartwo"],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Each Farmed Carrot makes the next cost 2x as many seeds.'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Current Farming Carrots cost: ' + format(player.s.farmedcarrotscost) + ' seeds'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 13], ["blank", ["15px"]], ["clickable", 14]]],
        "blank",
        "blank",
        "blank",
        ["display-text",
            function() { return 'Each Farmed Potato increases the Grass Blade multiplier by +1.00'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'You have ' + format(player.s.farmedpotatoes) + ' Farmed Potatoes, which multiply Grass Blade gain by ' + format(player.s.farmedpotatoesmultiplier) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBarthree"],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Each Farmed Potato makes the next cost 3x as many seeds.'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Current Farming Potatoes cost: ' + format(player.s.farmedpotatoescost) + ' seeds'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
        ["clickable", 15], ["blank", ["15px"]], ["clickable", 16]]],
        "blank",
        "blank",
        "blank",
        ["display-text",
            function() { return 'You can only Farm Beetroot, Sugarcane and Corn if you have achievement 10.'},
            { "color": "red", "font-size": "15px" }],
        "blank",
        "blank",
        ["display-text",
            function() { return 'Each Farmed Beetroot increases the Moss multiplier by +1.00'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'You have ' + format(player.s.farmedbeetroot) + ' Farmed Beetroot, which multiplies Moss gain by ' + format(player.s.farmedbeetrootmultiplier) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBarfour"],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Each Farmed Beetroot makes the next cost 3.33x as many seeds.'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Current Farming Beetroot cost: ' + format(player.s.farmedbeetrootcost) + ' seeds'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 17], ["blank", ["15px"]], ["clickable", 18]]],
        "blank",
        "blank",
        "blank",
        ["display-text",
            function() { return 'Each Farmed Sugar Cane increases the Flower multiplier by +1.00'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'You have ' + format(player.s.farmedsugarcane) + ' Farmed Sugar Cane, which multiplies Flower gain by ' + format(player.s.farmedsugarcanemultiplier) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBarfive"],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Each Farmed Sugar Cane makes the next cost 3.67x as many seeds.'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Current Farming Sugar Cane cost: ' + format(player.s.farmedsugarcanecost) + ' seeds'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 21], ["blank", ["15px"]], ["clickable", 22]]],
        "blank",
        "blank",
        "blank",
        ["display-text",
            function() { return 'Each Farmed Corn increases the Seed multiplier by +1.00'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'You have ' + format(player.s.farmedcorn) + ' Farmed Corn, which multiplies Seed gain by ' + format(player.s.farmedcornmultiplier) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBarsix"],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Each Farmed Corn makes the next cost 4x as many seeds.'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Current Farming Corn cost: ' + format(player.s.farmedcorncost) + ' seeds'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 23], ["blank", ["15px"]], ["clickable", 24]]],
        "blank",
        "blank",
        "blank",
        ["display-text",
            function() { return 'You can only Farm Rice if you have Seed Milestone 3.'},
            { "color": "red", "font-size": "15px" }],
        "blank",
        "blank",
        ["display-text",
            function() { return 'Each Farmed Rice increases the power multiplier by +1.00'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'You have ' + format(player.s.farmedrice) + ' Farmed Rice, which multiplies power gain by ' + format(player.s.farmedricemultiplier) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBarseven"],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Each Farmed Rice makes the next cost 2.5x as many seeds.'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Current Farming Rice cost: ' + format(player.s.farmedricecost) + ' seeds'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 25], ["blank", ["15px"]], ["clickable", 26]]],
    ],
    onPrestige() {return player.m.mossspread = new Decimal(1)},
    color: "#FFEF00",
    requires: new Decimal(5e13), // Can be a function that takes requirement increases into account
    resource: "Seeds", // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        mult = mult.times(player.f.purpleflowers.log10().plus(1))
        if (hasUpgrade('d', 134)) mult = mult.times(player.f.blueflowers.log10().plus(1))
        if (hasAchievement('ach', 22)) mult = mult.times(1.5)
        player.s.farmedwheattime = player.s.farmedwheattime.plus(player.s.farmedwheatgain)
        player.s.farmedcarrotstime = player.s.farmedcarrotstime.plus(player.s.farmedcarrotsgain)
        player.s.farmedpotatoestime = player.s.farmedpotatoestime.plus(player.s.farmedpotatoesgain)
        player.s.farmedbeetroottime = player.s.farmedbeetroottime.plus(player.s.farmedbeetrootgain)
        player.s.farmedsugarcanetime = player.s.farmedsugarcanetime.plus(player.s.farmedsugarcanegain)
        player.s.farmedcorntime = player.s.farmedcorntime.plus(player.s.farmedcorngain)
        player.s.farmedricetime = player.s.farmedricetime.plus(player.s.farmedricegain)
        if (player.s.farmedwheattime.gte(player.s.farmedwheatreqtime)) player.s.farmedwheatcost = player.s.farmedwheatcost.times(1000)
        if (player.s.farmedwheattime.gte(player.s.farmedwheatreqtime)) player.s.farmedwheat = player.s.farmedwheat.plus(1)
        if (player.s.farmedwheattime.gte(player.s.farmedwheatreqtime)) player.s.farmedwheatexponent = player.s.farmedwheatexponent.plus(0.01)
        if (player.s.farmedwheattime.gte(player.s.farmedwheatreqtime)) player.s.farmedwheatgain = new Decimal(0)
        if (player.s.farmedwheattime.gte(player.s.farmedwheatreqtime)) player.s.farmedwheattemp = new Decimal(0)
        if (player.s.farmedwheattime.gte(player.s.farmedwheatreqtime)) player.s.farmedwheattime = new Decimal(0)
        if (player.s.farmedcarrotstime.gte(player.s.farmedcarrotsreqtime)) player.s.farmedcarrotscost = player.s.farmedcarrotscost.times(2)
        if (player.s.farmedcarrotstime.gte(player.s.farmedcarrotsreqtime)) player.s.farmedcarrots = player.s.farmedcarrots.plus(1)
        if (player.s.farmedcarrotstime.gte(player.s.farmedcarrotsreqtime)) player.s.farmedcarrotsmultiplier = player.s.farmedcarrotsmultiplier.plus(1)
        if (player.s.farmedcarrotstime.gte(player.s.farmedcarrotsreqtime)) player.s.farmedcarrotsgain = new Decimal(0)
        if (player.s.farmedcarrotstime.gte(player.s.farmedcarrotsreqtime)) player.s.farmedcarrotstemp = new Decimal(0)
        if (player.s.farmedcarrotstime.gte(player.s.farmedcarrotsreqtime)) player.s.farmedcarrotstime = new Decimal(0)
        if (player.s.farmedpotatoestime.gte(player.s.farmedpotatoesreqtime)) player.s.farmedpotatoescost = player.s.farmedpotatoescost.times(3)
        if (player.s.farmedpotatoestime.gte(player.s.farmedpotatoesreqtime)) player.s.farmedpotatoes = player.s.farmedpotatoes.plus(1)
        if (player.s.farmedpotatoestime.gte(player.s.farmedpotatoesreqtime)) player.s.farmedpotatoesmultiplier = player.s.farmedpotatoesmultiplier.plus(1)
        if (player.s.farmedpotatoestime.gte(player.s.farmedpotatoesreqtime)) player.s.farmedpotatoesgain = new Decimal(0)
        if (player.s.farmedpotatoestime.gte(player.s.farmedpotatoesreqtime)) player.s.farmedpotatoestemp = new Decimal(0)
        if (player.s.farmedpotatoestime.gte(player.s.farmedpotatoesreqtime)) player.s.farmedpotatoestime = new Decimal(0)
        if (player.s.farmedbeetroottime.gte(player.s.farmedbeetrootreqtime)) player.s.farmedbeetrootcost = player.s.farmedbeetrootcost.times(3.33)
        if (player.s.farmedbeetroottime.gte(player.s.farmedbeetrootreqtime)) player.s.farmedbeetroot = player.s.farmedbeetroot.plus(1)
        if (player.s.farmedbeetroottime.gte(player.s.farmedbeetrootreqtime)) player.s.farmedbeetrootmultiplier = player.s.farmedbeetrootmultiplier.plus(1)
        if (player.s.farmedbeetroottime.gte(player.s.farmedbeetrootreqtime)) player.s.farmedbeetrootgain = new Decimal(0)
        if (player.s.farmedbeetroottime.gte(player.s.farmedbeetrootreqtime)) player.s.farmedbeetroottemp = new Decimal(0)
        if (player.s.farmedbeetroottime.gte(player.s.farmedbeetrootreqtime)) player.s.farmedbeetroottime = new Decimal(0)
        if (player.s.farmedsugarcanetime.gte(player.s.farmedsugarcanereqtime)) player.s.farmedsugarcanecost = player.s.farmedsugarcanecost.times(3.67)
        if (player.s.farmedsugarcanetime.gte(player.s.farmedsugarcanereqtime)) player.s.farmedsugarcane = player.s.farmedsugarcane.plus(1)
        if (player.s.farmedsugarcanetime.gte(player.s.farmedsugarcanereqtime)) player.s.farmedsugarcanemultiplier = player.s.farmedsugarcanemultiplier.plus(1)
        if (player.s.farmedsugarcanetime.gte(player.s.farmedsugarcanereqtime)) player.s.farmedsugarcanegain = new Decimal(0)
        if (player.s.farmedsugarcanetime.gte(player.s.farmedsugarcanereqtime)) player.s.farmedsugarcanetemp = new Decimal(0)
        if (player.s.farmedsugarcanetime.gte(player.s.farmedsugarcanereqtime)) player.s.farmedsugarcanetime = new Decimal(0)
        if (player.s.farmedcorntime.gte(player.s.farmedcornreqtime)) player.s.farmedcorncost = player.s.farmedcorncost.times(4)
        if (player.s.farmedcorntime.gte(player.s.farmedcornreqtime)) player.s.farmedcorn = player.s.farmedcorn.plus(1)
        if (player.s.farmedcorntime.gte(player.s.farmedcornreqtime)) player.s.farmedcornmultiplier = player.s.farmedcornmultiplier.plus(1)
        if (player.s.farmedcorntime.gte(player.s.farmedcornreqtime)) player.s.farmedcorngain = new Decimal(0)
        if (player.s.farmedcorntime.gte(player.s.farmedcornreqtime)) player.s.farmedcorntemp = new Decimal(0)
        if (player.s.farmedcorntime.gte(player.s.farmedcornreqtime)) player.s.farmedcorntime = new Decimal(0)
        if (player.s.farmedricetime.gte(player.s.farmedricereqtime)) player.s.farmedricecost = player.s.farmedricecost.times(2.5)
        if (player.s.farmedricetime.gte(player.s.farmedricereqtime)) player.s.farmedrice = player.s.farmedrice.plus(1)
        if (player.s.farmedricetime.gte(player.s.farmedricereqtime)) player.s.farmedricemultiplier = player.s.farmedricemultiplier.plus(1)
        if (player.s.farmedricetime.gte(player.s.farmedricereqtime)) player.s.farmedricegain = new Decimal(0)
        if (player.s.farmedricetime.gte(player.s.farmedricereqtime)) player.s.farmedricetemp = new Decimal(0)
        if (player.s.farmedricetime.gte(player.s.farmedricereqtime)) player.s.farmedricetime = new Decimal(0)
        if (player.s.farmedwheatexponent.gt(player.s.farmedwheatmaxexponent)) player.s.farmedwheatexponent = player.s.farmedwheatmaxexponent
        mult = mult.times(player.s.farmedcornmultiplier)
        if (hasAchievement('ach', 24)) player.s.farmedcarrotsreqtime = new Decimal(5)
        if (hasAchievement('ach', 24)) player.s.farmedpotatoesreqtime = new Decimal(7.5)
        if (hasAchievement('ach', 24)) player.s.farmedbeetrootreqtime = new Decimal(5)
        if (hasAchievement('ach', 24)) player.s.farmedsugarcanereqtime = new Decimal(6.25)
        if (hasAchievement('ach', 24)) player.s.farmedcornreqtime = new Decimal(7.5)
        if (hasAchievement('ach', 24)) player.s.farmedricereqtime = new Decimal(6.25)
        if (player.t.total.gte(1)) player.s.farmedwheatreqtime = player.s.farmedwheatoldreqtime.div(player.t.treeroots.log10().plus(1))
        if (player.t.total.gte(1)) player.s.farmedcarrotsreqtime = player.s.farmedcarrotsoldreqtime.div(player.t.treeroots.log10().plus(1))
        if (player.t.total.gte(1)) player.s.farmedpotatoesreqtime = player.s.farmedpotatoesoldreqtime.div(player.t.treeroots.log10().plus(1))
        if (player.t.total.gte(1)) player.s.farmedbeetrootreqtime = player.s.farmedbeetrootoldreqtime.div(player.t.treeroots.log10().plus(1))
        if (player.t.total.gte(1)) player.s.farmedsugarcanereqtime = player.s.farmedsugarcaneoldreqtime.div(player.t.treeroots.log10().plus(1))
        if (player.t.total.gte(1)) player.s.farmedcornreqtime = player.s.farmedcornoldreqtime.div(player.t.treeroots.log10().plus(1))
        if (player.t.total.gte(1)) player.s.farmedricereqtime = player.s.farmedriceoldreqtime.div(player.t.treeroots.log10().plus(1))
        mult = mult.times(player.t.cherries.plus(1).log2().plus(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for Seeds", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['g'],
    layerShown(){return hasUpgrade('m', 13) || player.s.total.gte(1)},
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
            display() {return "Start Farming Wheat"},
            canClick() {return player.s.farmedricetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedwheatexponent.lt(player.s.farmedwheatmaxexponent) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.points.gte(player.s.farmedwheatcost)},
            onClick() {return player.s.farmedwheatgain = player.s.farmedwheatgain.plus(0.05),
            player.s.farmedwheattemp = player.s.farmedwheattemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedwheatcost)}
        },
        12: {
            display() {return "Stop Farming Wheat"},
            canClick() {return player.s.farmedwheattemp.gte(1)},
            onClick() {return player.s.farmedwheatgain = new Decimal(0),
            player.s.farmedwheattemp = new Decimal(0)}
        },
        13: {
            display() {return "Start Farming Carrots"},
            canClick() {return player.s.farmedricetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.points.gte(player.s.farmedcarrotscost)},
            onClick() {return player.s.farmedcarrotsgain = player.s.farmedcarrotsgain.plus(0.05),
            player.s.farmedcarrotstemp = player.s.farmedcarrotstemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedcarrotscost)}
        },
        14: {
            display() {return "Stop Farming Carrots"},
            canClick() {return player.s.farmedcarrotstemp.gte(1)},
            onClick() {return player.s.farmedcarrotsgain = new Decimal(0),
            player.s.farmedcarrotstemp = new Decimal(0)}
        },
        15: {
            display() {return "Start Farming Potatoes"},
            canClick() {return player.s.farmedricetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedpotatoescost)},
            onClick() {return player.s.farmedpotatoesgain = player.s.farmedpotatoesgain.plus(0.05),
            player.s.farmedpotatoestemp = player.s.farmedpotatoestemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedpotatoescost)}
        },
        16: {
            display() {return "Stop Farming Potatoes"},
            canClick() {return player.s.farmedpotatoestemp.gte(1)},
            onClick() {return player.s.farmedpotatoesgain = new Decimal(0),
            player.s.farmedpotatoestemp = new Decimal(0)}
        },
        17: {
            display() {return "Start Farming Beetroot"},
            canClick() {return (hasAchievement('ach', 23)) && player.s.farmedricetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedbeetrootcost)},
            onClick() {return player.s.farmedbeetrootgain = player.s.farmedbeetrootgain.plus(0.05),
            player.s.farmedbeetroottemp = player.s.farmedbeetroottemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedbeetrootcost)}
        },
        18: {
            display() {return "Stop Farming Beetroot"},
            canClick() {return player.s.farmedbeetroottemp.gte(1)},
            onClick() {return player.s.farmedbeetrootgain = new Decimal(0),
            player.s.farmedbeetroottemp = new Decimal(0)}
        },
        21: {
            display() {return "Start Farming Sugar Cane"},
            canClick() {return (hasAchievement('ach', 23)) && player.s.farmedricetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedsugarcanecost)},
            onClick() {return player.s.farmedsugarcanegain = player.s.farmedsugarcanegain.plus(0.05),
            player.s.farmedsugarcanetemp = player.s.farmedsugarcanetemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedsugarcanecost)}
        },
        22: {
            display() {return "Stop Farming Sugar Cane"},
            canClick() {return player.s.farmedsugarcanetemp.gte(1)},
            onClick() {return player.s.farmedsugarcanegain = new Decimal(0),
            player.s.farmedsugarcanetemp = new Decimal(0)}
        },
        23: {
            display() {return "Start Farming Corn"},
            canClick() {return (hasAchievement('ach', 23)) && player.s.farmedricetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedcorncost)},
            onClick() {return player.s.farmedcorngain = player.s.farmedcorngain.plus(0.05),
            player.s.farmedcorntemp = player.s.farmedcorntemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedcorncost)}
        },
        24: {
            display() {return "Stop Farming Corn"},
            canClick() {return player.s.farmedcorntemp.gte(1)},
            onClick() {return player.s.farmedcorngain = new Decimal(0),
            player.s.farmedcorntemp = new Decimal(0)}
        },
        25: {
            display() {return "Start Farming Rice"},
            canClick() {return (hasMilestone('s', 3)) && player.s.farmedricetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedricecost)},
            onClick() {return player.s.farmedricegain = player.s.farmedricegain.plus(0.05),
            player.s.farmedricetemp = player.s.farmedricetemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedricecost)}
        },
        26: {
            display() {return "Stop Farming Rice"},
            canClick() {return player.s.farmedricetemp.gte(1)},
            onClick() {return player.s.farmedricegain = new Decimal(0),
            player.s.farmedricetemp = new Decimal(0)}
        },
    },
    bars: {
        theBar: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedwheattime.div(player.s.farmedwheatreqtime)},
            display() {return format(player.s.farmedwheattime) + 's / ' + format(player.s.farmedwheatreqtime) + 's'},
            unlocked: true,
        },
        theBartwo: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedcarrotstime.div(player.s.farmedcarrotsreqtime)},
            display() {return format(player.s.farmedcarrotstime) + 's / ' + format(player.s.farmedcarrotsreqtime) + 's'},
            unlocked: true,
        },
        theBarthree: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedpotatoestime.div(player.s.farmedpotatoesreqtime)},
            display() {return format(player.s.farmedpotatoestime) + 's / ' + format(player.s.farmedpotatoesreqtime) + 's'},
            unlocked: true,
        },
        theBarfour: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedbeetroottime.div(player.s.farmedbeetrootreqtime)},
            display() {return format(player.s.farmedbeetroottime) + 's / ' + format(player.s.farmedbeetrootreqtime) + 's'},
            unlocked: true,
        },
        theBarfive: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedsugarcanetime.div(player.s.farmedsugarcanereqtime)},
            display() {return format(player.s.farmedsugarcanetime) + 's / ' + format(player.s.farmedsugarcanereqtime) + 's'},
            unlocked: true,
        },
        theBarsix: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedcorntime.div(player.s.farmedcornreqtime)},
            display() {return format(player.s.farmedcorntime) + 's / ' + format(player.s.farmedcornreqtime) + 's'},
            unlocked: true,
        },
        theBarseven: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedricetime.div(player.s.farmedricereqtime)},
            display() {return format(player.s.farmedricetime) + 's / ' + format(player.s.farmedricereqtime) + 's'},
            unlocked: true,
        },
    },
    milestones: {
        1: {
            requirementDescription: "10 Total Seeds",
            effectDescription: "You can buy max rocks, they reset nothing and are automatically bought",
            done() { return player.s.total.gte(10) }
        },
        2: {
            requirementDescription: "1,000 Total Seeds",
            effectDescription: "You gain 100% of Grass Blade gain every second",
            done() { return player.s.total.gte(1000) }
        },
        3: {
            requirementDescription: "3 Farmed Wheat",
            effectDescription: "Unlock another crop.",
            done() { return player.s.farmedwheat.gte(3) }
        },
        4: {
            requirementDescription: "500,000,000 Total Seeds",
            effectDescription: "Dirt Upgrade Eight log10 -> log2, Unlock Refined Dirt",
            done() { return player.s.total.gte(500000000) },
            unlocked() {return (hasMilestone('s', 3))}
        },
    }
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.