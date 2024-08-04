addLayer("s", {
    name: "seeds", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol() {if (player.nu.fsdeactivated.gte(1)) return "X"
        else return "S"}, // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    branches: true,
    passiveGeneration() {
        if (hasAchievement('ach', 34)) return 1
        else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        farmedwheat: new Decimal(0),
        farmedwheattime: new Decimal(0),
        farmedwheatreqtime: new Decimal(5),
        farmedwheatoldreqtime: new Decimal(5),
        farmedwheatnewreqtime: new Decimal(5),
        farmedwheatgain: new Decimal(0),
        farmedwheattemp: new Decimal(0),
        farmedwheatcost: new Decimal(1),
        farmedwheatexponent: new Decimal(1),
        farmedwheatmaxexponent: new Decimal(1.25),
        farmedcarrots: new Decimal(0),
        farmedcarrotstime: new Decimal(0),
        farmedcarrotsoldreqtime: new Decimal(5),
        farmedcarrotsnewreqtime: new Decimal(5),
        farmedcarrotsreqtime: new Decimal(10),
        farmedcarrotsgain: new Decimal(0),
        farmedcarrotstemp: new Decimal(0),
        farmedcarrotscost: new Decimal(10),
        farmedcarrotsmultiplier: new Decimal(1),
        farmedpotatoes: new Decimal(0),
        farmedpotatoestime: new Decimal(0),
        farmedpotatoesoldreqtime: new Decimal(7.5),
        farmedpotatoesnewreqtime: new Decimal(7.5),
        farmedpotatoesreqtime: new Decimal(15),
        farmedpotatoesgain: new Decimal(0),
        farmedpotatoestemp: new Decimal(0),
        farmedpotatoescost: new Decimal(25),
        farmedpotatoesmultiplier: new Decimal(1),
        farmedbeetroot: new Decimal(0),
        farmedbeetroottime: new Decimal(0),
        farmedbeetrootoldreqtime: new Decimal(5),
        farmedbeetrootnewreqtime: new Decimal(5),
        farmedbeetrootreqtime: new Decimal(10),
        farmedbeetrootgain: new Decimal(0),
        farmedbeetroottemp: new Decimal(0),
        farmedbeetrootcost: new Decimal(100),
        farmedbeetrootmultiplier: new Decimal(1),
        farmedsugarcane: new Decimal(0),
        farmedsugarcanetime: new Decimal(0),
        farmedsugarcaneoldreqtime: new Decimal(6.25),
        farmedsugarcanenewreqtime: new Decimal(6.25),
        farmedsugarcanereqtime: new Decimal(12.5),
        farmedsugarcanegain: new Decimal(0),
        farmedsugarcanetemp: new Decimal(0),
        farmedsugarcanecost: new Decimal(250),
        farmedsugarcanemultiplier: new Decimal(1),
        farmedcorn: new Decimal(0),
        farmedcorntime: new Decimal(0),
        farmedcornoldreqtime: new Decimal(7.5),
        farmedcornnewreqtime: new Decimal(7.5),
        farmedcornreqtime: new Decimal(15),
        farmedcorngain: new Decimal(0),
        farmedcorntemp: new Decimal(0),
        farmedcorncost: new Decimal(1000),
        farmedcornmultiplier: new Decimal(1),
        farmedrice: new Decimal(0),
        farmedricetime: new Decimal(0),
        farmedriceoldreqtime: new Decimal(6.25),
        farmedricenewreqtime: new Decimal(6.25),
        farmedricereqtime: new Decimal(12.5),
        farmedricegain: new Decimal(0),
        farmedricetemp: new Decimal(0),
        farmedricecost: new Decimal(2000),
        farmedricemultiplier: new Decimal(1),
        farmedendive: new Decimal(0),
        farmedendivetime: new Decimal(0),
        farmedendiveoldreqtime: new Decimal(100),
        farmedendivenewreqtime: new Decimal(100),
        farmedendivereqtime: new Decimal(200),
        farmedendivegain: new Decimal(0),
        farmedendivetemp: new Decimal(0),
        farmedendivecost: new Decimal(10000),
        farmedendivemultiplier: new Decimal(1),
        farmedstrawberry: new Decimal(0),
        farmedstrawberrytime: new Decimal(0),
        farmedstrawberryoldreqtime: new Decimal(200),
        farmedstrawberrynewreqtime: new Decimal(200),
        farmedstrawberryreqtime: new Decimal(400),
        farmedstrawberrygain: new Decimal(0),
        farmedstrawberriestemp: new Decimal(0),
        farmedstrawberrycost: new Decimal(25000),
        farmedstrawberrymultiplier: new Decimal(1),
        farmedmushroom: new Decimal(0),
        farmedmushroomtime: new Decimal(0),
        farmedmushroomoldreqtime: new Decimal(300),
        farmedmushroomnewreqtime: new Decimal(300),
        farmedmushroomreqtime: new Decimal(600),
        farmedmushroomgain: new Decimal(0),
        farmedmushroomtemp: new Decimal(0),
        farmedmushroomcost: new Decimal(1e9),
        farmedmushroommultiplier: new Decimal(1),
        farmedwheatauto: new Decimal(0),
        farmedcarrotsauto: new Decimal(0),
        farmedpotatoesauto: new Decimal(0),
        farmedbeetrootauto: new Decimal(0),
        farmedsugarcaneauto: new Decimal(0),
        farmedcornauto: new Decimal(0),
        farmedriceauto: new Decimal(0),
        farmedendiveauto: new Decimal(0),
        farmedstrawberryauto: new Decimal(0),
        farmedmushroomauto: new Decimal(0),
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
            function() { return 'Each Farmed Wheat makes the next cost 1,000x as many Seeds.'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Current Farming Wheat cost: ' + format(player.s.farmedwheatcost) + ' Seeds'},
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
            function() { return 'Each Farmed Carrot makes the next cost 2x as many Seeds.'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Current Farming Carrots cost: ' + format(player.s.farmedcarrotscost) + ' Seeds'},
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
            function() { return 'Each Farmed Potato makes the next cost 3x as many Seeds.'},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { return 'Current Farming Potatoes cost: ' + format(player.s.farmedpotatoescost) + ' Seeds'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
        ["clickable", 15], ["blank", ["15px"]], ["clickable", 16]]],
        () => (hasAchievement('ach', 23)) ? "blank" : "",
        () => (hasAchievement('ach', 23)) ? "blank" : "",
        () => (hasAchievement('ach', 23)) ? "blank" : "",
        () => (hasAchievement('ach', 23)) ? "blank" : "",
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'Each Farmed Beetroot increases the Moss multiplier by +1.00'
            else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'You have ' + format(player.s.farmedbeetroot) + ' Farmed Beetroot, which multiplies Moss gain by ' + format(player.s.farmedbeetrootmultiplier) + 'x'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBarfour"],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'Each Farmed Beetroot makes the next cost 3.33x as many Seeds.'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'Current Farming Beetroot cost: ' + format(player.s.farmedbeetrootcost) + ' Seeds'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 17], ["blank", ["15px"]], ["clickable", 18]]],
        "blank",
        "blank",
        "blank",
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'Each Farmed Sugar Cane increases the Flower multiplier by +1.00'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'You have ' + format(player.s.farmedsugarcane) + ' Farmed Sugar Cane, which multiplies Flower gain by ' + format(player.s.farmedsugarcanemultiplier) + 'x'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBarfive"],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'Each Farmed Sugar Cane makes the next cost 3.67x as many Seeds.'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'Current Farming Sugar Cane cost: ' + format(player.s.farmedsugarcanecost) + ' Seeds'
        else return},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 21], ["blank", ["15px"]], ["clickable", 22]]],
        "blank",
        "blank",
        "blank",
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'Each Farmed Corn increases the Seed multiplier by +1.00'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'You have ' + format(player.s.farmedcorn) + ' Farmed Corn, which multiplies Seed gain by ' + format(player.s.farmedcornmultiplier) + 'x'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBarsix"],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'Each Farmed Corn makes the next cost 4x as many Seeds.'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasAchievement('ach', 23)) return 'Current Farming Corn cost: ' + format(player.s.farmedcorncost) + ' Seeds'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 23], ["blank", ["15px"]], ["clickable", 24]]],
        () => (hasMilestone('s', 3)) ? "blank" : "",
        () => (hasMilestone('s', 3)) ? "blank" : "",
        () => (hasMilestone('s', 3)) ? "blank" : "",
        () => (hasMilestone('s', 3)) ? "blank" : "",
        ["display-text",
            function() { if (hasMilestone('s', 3)) return 'Each Farmed Rice increases the power multiplier by +1.00'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasMilestone('s', 3)) return 'You have ' + format(player.s.farmedrice) + ' Farmed Rice, which multiplies power gain by ' + format(player.s.farmedricemultiplier) + 'x'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBarseven"],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasMilestone('s', 3)) return 'Each Farmed Rice makes the next cost 2.5x as many Seeds.'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (hasMilestone('s', 3)) return 'Current Farming Rice cost: ' + format(player.s.farmedricecost) + ' Seeds'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 25], ["blank", ["15px"]], ["clickable", 26]]],
        () => (getBuyableAmount('w', 14).gte(1)) ? "blank" : "",
        () => (getBuyableAmount('w', 14).gte(1)) ? "blank" : "",
        () => (getBuyableAmount('w', 14).gte(1)) ? "blank" : "",
        () => (getBuyableAmount('w', 14).gte(1)) ? "blank" : "",
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(1)) return 'Each Farmed Endive increases the Rock Requirement divisor by +1.00'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(1)) return 'You have ' + format(player.s.farmedendive) + ' Farmed Endives, which divide the Rock Requirement by ' + format(player.s.farmedendivemultiplier) + 'x'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBareight"],
        ["blank", "10px"],
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(1)) return 'Each Farmed Endive makes the next cost 3.5x as many Seeds.'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(1)) return 'Current Farming Endive cost: ' + format(player.s.farmedendivecost) + ' Seeds'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 27], ["blank", ["15px"]], ["clickable", 28]]],
        () => (getBuyableAmount('w', 14).gte(2)) ? "blank" : "",
        () => (getBuyableAmount('w', 14).gte(2)) ? "blank" : "",
        () => (getBuyableAmount('w', 14).gte(2)) ? "blank" : "",
        () => (getBuyableAmount('w', 14).gte(2)) ? "blank" : "",
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(2)) return 'Each Farmed Strawberry increases the Tree Requirement divisor by +1.00'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(2)) return 'You have ' + format(player.s.farmedstrawberry) + ' Farmed Strawberries, which divide the Tree Requirement by ' + format(player.s.farmedstrawberrymultiplier) + 'x'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBarnine"],
        ["blank", "10px"],
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(2)) return 'Each Farmed Strawberry makes the next cost 3.75x as many Seeds.'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(2)) return 'Current Farming Strawberry cost: ' + format(player.s.farmedstrawberrycost) + ' Seeds'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 31], ["blank", ["15px"]], ["clickable", 32]]],
        () => (getBuyableAmount('w', 14).gte(3)) ? "blank" : "",
        () => (getBuyableAmount('w', 14).gte(3)) ? "blank" : "",
        () => (getBuyableAmount('w', 14).gte(3)) ? "blank" : "",
        () => (getBuyableAmount('w', 14).gte(3)) ? "blank" : "",
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(3)) return 'Each Farmed Mushroom increases the power, Dirt, Grass Blade, Moss, Flower and Seed multiplier by +0.25'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(3)) return 'You have ' + format(player.s.farmedmushroom) + ' Farmed Mushrooms, which multiply power, Dirt, Grass Blade, Moss, Flower and Seed gain by ' + format(player.s.farmedmushroommultiplier) + 'x'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        ["blank", "15px"],
        ["bar", "theBarten"],
        ["blank", "10px"],
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(3)) return 'Each Farmed Mushroom makes the next cost 5x as many Seeds.'
        else return ""},
            { "color": "gray", "font-size": "12px" }],
        ["blank", "10px"],
        ["display-text",
            function() { if (getBuyableAmount('w', 14).gte(3)) return 'Current Farming Mushroom cost: ' + format(player.s.farmedmushroomcost) + ' Seeds'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["row", [
            ["clickable", 33], ["blank", ["15px"]], ["clickable", 34]]],
    ],
    onPrestige() {return player.m.mossspread = new Decimal(1), player.m.upgradesixsoftcap = new Decimal(100), player.m.upgradesixsoftcapr = new Decimal(0)},
    color() { if (player.nu.fsdeactivated.gte(1)) return "#bf8f8f"
         else return "#FFEF00"},
    requires: new Decimal(5e13), // Can be a function that takes requirement increases into account
    resource() {if (player.nu.fsdeactivated.gte(1)) return "X"
        else return "Seeds"}, // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type() {if (player.nu.fsdeactivated.gte(1)) return "none"
       else return "normal"}, // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    deactivated() {return player.nu.fsdeactivated.gte(1)},
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
        player.s.farmedendivetime = player.s.farmedendivetime.plus(player.s.farmedendivegain)
        player.s.farmedstrawberrytime = player.s.farmedstrawberrytime.plus(player.s.farmedstrawberrygain)
        player.s.farmedmushroomtime = player.s.farmedmushroomtime.plus(player.s.farmedmushroomgain)
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
        if (player.s.farmedendivetime.gte(player.s.farmedendivereqtime)) player.s.farmedendivecost = player.s.farmedendivecost.times(3.5)
        if (player.s.farmedendivetime.gte(player.s.farmedendivereqtime)) player.s.farmedendive = player.s.farmedendive.plus(1)
        if (player.s.farmedendivetime.gte(player.s.farmedendivereqtime)) player.s.farmedendivemultiplier = player.s.farmedendivemultiplier.plus(1)
        if (player.s.farmedendivetime.gte(player.s.farmedendivereqtime)) player.s.farmedendivegain = new Decimal(0)
        if (player.s.farmedendivetime.gte(player.s.farmedendivereqtime)) player.s.farmedendivetemp = new Decimal(0)
        if (player.s.farmedendivetime.gte(player.s.farmedendivereqtime)) player.s.farmedendivetime = new Decimal(0)
        if (player.s.farmedstrawberrytime.gte(player.s.farmedstrawberryreqtime)) player.s.farmedstrawberrycost = player.s.farmedstrawberrycost.times(3.75)
        if (player.s.farmedstrawberrytime.gte(player.s.farmedstrawberryreqtime)) player.s.farmedstrawberry = player.s.farmedstrawberry.plus(1)
        if (player.s.farmedstrawberrytime.gte(player.s.farmedstrawberryreqtime)) player.s.farmedstrawberrymultiplier = player.s.farmedstrawberrymultiplier.plus(1)
        if (player.s.farmedstrawberrytime.gte(player.s.farmedstrawberryreqtime)) player.s.farmedstrawberrygain = new Decimal(0)
        if (player.s.farmedstrawberrytime.gte(player.s.farmedstrawberryreqtime)) player.s.farmedstrawberriestemp = new Decimal(0)
        if (player.s.farmedstrawberrytime.gte(player.s.farmedstrawberryreqtime)) player.s.farmedstrawberrytime = new Decimal(0)
        if (player.s.farmedmushroomtime.gte(player.s.farmedmushroomreqtime)) player.s.farmedmushroomcost = player.s.farmedmushroomcost.times(5)
        if (player.s.farmedmushroomtime.gte(player.s.farmedmushroomreqtime)) player.s.farmedmushroom = player.s.farmedmushroom.plus(1)
        if (player.s.farmedmushroomtime.gte(player.s.farmedmushroomreqtime)) player.s.farmedmushroommultiplier = player.s.farmedmushroommultiplier.plus(0.25)
        if (player.s.farmedmushroomtime.gte(player.s.farmedmushroomreqtime)) player.s.farmedmushroomgain = new Decimal(0)
        if (player.s.farmedmushroomtime.gte(player.s.farmedmushroomreqtime)) player.s.farmedmushroomtemp = new Decimal(0)
        if (player.s.farmedmushroomtime.gte(player.s.farmedmushroomreqtime)) player.s.farmedmushroomtime = new Decimal(0)
        if (player.s.farmedwheatexponent.gt(player.s.farmedwheatmaxexponent)) player.s.farmedwheatexponent = player.s.farmedwheatmaxexponent
        mult = mult.times(player.s.farmedcornmultiplier)
        if (hasAchievement('ach', 24)) player.s.farmedcarrotsreqtime = new Decimal(5)
        if (hasAchievement('ach', 24)) player.s.farmedpotatoesreqtime = new Decimal(7.5)
        if (hasAchievement('ach', 24)) player.s.farmedbeetrootreqtime = new Decimal(5)
        if (hasAchievement('ach', 24)) player.s.farmedsugarcanereqtime = new Decimal(6.25)
        if (hasAchievement('ach', 24)) player.s.farmedcornreqtime = new Decimal(7.5)
        if (hasAchievement('ach', 24)) player.s.farmedricereqtime = new Decimal(6.25)
        if (hasAchievement('ach', 24)) player.s.farmedendivereqtime = new Decimal(100)
        if (hasAchievement('ach', 24)) player.s.farmedstrawberryreqtime = new Decimal(200)
        if (hasAchievement('ach', 24)) player.s.farmedmushroomreqtime = new Decimal(300)
        if (hasAchievement('ach', 33)) player.s.farmedwheatoldreqtime = new Decimal(2.5)
        if (hasAchievement('ach', 33)) player.s.farmedwheatnewreqtime = new Decimal(2.5)
        if (hasAchievement('ach', 33)) player.s.farmedwheatreqtime = new Decimal(2.5)
        if (hasAchievement('ach', 33)) player.s.farmedcarrotsoldreqtime = new Decimal(2.5)
        if (hasAchievement('ach', 33)) player.s.farmedcarrotsnewreqtime = new Decimal(2.5)
        if (hasAchievement('ach', 33)) player.s.farmedcarrotsreqtime = new Decimal(2.5)
        if (hasAchievement('ach', 33)) player.s.farmedpotatoesoldreqtime = new Decimal(3.75)
        if (hasAchievement('ach', 33)) player.s.farmedpotatoesnewreqtime = new Decimal(3.75)
        if (hasAchievement('ach', 33)) player.s.farmedpotatoesreqtime = new Decimal(3.75)
        if (hasAchievement('ach', 33)) player.s.farmedbeetrootoldreqtime = new Decimal(2.5)
        if (hasAchievement('ach', 33)) player.s.farmedbeetrootnewreqtime = new Decimal(2.5)
        if (hasAchievement('ach', 33)) player.s.farmedbeetrootreqtime = new Decimal(2.5)
        if (hasAchievement('ach', 33)) player.s.farmedsugarcaneoldreqtime = new Decimal(3.125)
        if (hasAchievement('ach', 33)) player.s.farmedsugarcanenewreqtime = new Decimal(3.125)
        if (hasAchievement('ach', 33)) player.s.farmedsugarcanereqtime = new Decimal(3.125)
        if (hasAchievement('ach', 33)) player.s.farmedcornoldreqtime = new Decimal(3.75)
        if (hasAchievement('ach', 33)) player.s.farmedcornnewreqtime = new Decimal(3.75)
        if (hasAchievement('ach', 33)) player.s.farmedcornreqtime = new Decimal(3.75)
        if (hasAchievement('ach', 33)) player.s.farmedriceoldreqtime = new Decimal(3.125)
        if (hasAchievement('ach', 33)) player.s.farmedricenewreqtime = new Decimal(3.125)
        if (hasAchievement('ach', 33)) player.s.farmedricereqtime = new Decimal(3.125)
        if (hasAchievement('ach', 33)) player.s.farmedendiveoldreqtime = new Decimal(50)
        if (hasAchievement('ach', 33)) player.s.farmedendivenewreqtime = new Decimal(50)
        if (hasAchievement('ach', 33)) player.s.farmedendivereqtime = new Decimal(50)
        if (hasAchievement('ach', 33)) player.s.farmedstrawberryoldreqtime = new Decimal(100)
        if (hasAchievement('ach', 33)) player.s.farmedstrawberrynewreqtime = new Decimal(100)
        if (hasAchievement('ach', 33)) player.s.farmedstrawberryreqtime = new Decimal(100)
        if (hasAchievement('ach', 33)) player.s.farmedmushroomoldreqtime = new Decimal(150)
        if (hasAchievement('ach', 33)) player.s.farmedmushroomnewreqtime = new Decimal(150)
        if (hasAchievement('ach', 33)) player.s.farmedmushroomreqtime = new Decimal(150)
        if (hasUpgrade('upgtree', 12)) mult = mult.times(upgradeEffect('upgtree', 12))
        if (hasUpgrade('upgtree', 13)) player.s.farmedwheatoldreqtime = player.s.farmedwheatnewreqtime.div(upgradeEffect('upgtree', 13))
        if (hasUpgrade('upgtree', 13)) player.s.farmedcarrotsoldreqtime = player.s.farmedcarrotsnewreqtime.div(upgradeEffect('upgtree', 13))
        if (hasUpgrade('upgtree', 13)) player.s.farmedpotatoesoldreqtime = player.s.farmedpotatoesnewreqtime.div(upgradeEffect('upgtree', 13))
        if (hasUpgrade('upgtree', 13)) player.s.farmedbeetrootoldreqtime = player.s.farmedbeetrootnewreqtime.div(upgradeEffect('upgtree', 13))
        if (hasUpgrade('upgtree', 13)) player.s.farmedsugarcaneoldreqtime = player.s.farmedsugarcanenewreqtime.div(upgradeEffect('upgtree', 13))
        if (hasUpgrade('upgtree', 13)) player.s.farmedcornoldreqtime = player.s.farmedcornnewreqtime.div(upgradeEffect('upgtree', 13))
        if (hasUpgrade('upgtree', 13)) player.s.farmedriceoldreqtime = player.s.farmedricenewreqtime.div(upgradeEffect('upgtree', 13))
        if (hasUpgrade('upgtree', 13)) player.s.farmedendiveoldreqtime = player.s.farmedendivenewreqtime.div(upgradeEffect('upgtree', 13))
        if (hasUpgrade('upgtree', 13)) player.s.farmedstrawberryoldreqtime = player.s.farmedstrawberrynewreqtime.div(upgradeEffect('upgtree', 13))
        if (hasUpgrade('upgtree', 13)) player.s.farmedmushroomoldreqtime = player.s.farmedmushroomnewreqtime.div(upgradeEffect('upgtree', 13))
        player.s.farmedwheatreqtime = player.s.farmedwheatoldreqtime.div(player.t.treeroots.log10().plus(1))
        player.s.farmedcarrotsreqtime = player.s.farmedcarrotsoldreqtime.div(player.t.treeroots.log10().plus(1))
        player.s.farmedpotatoesreqtime = player.s.farmedpotatoesoldreqtime.div(player.t.treeroots.log10().plus(1))
        player.s.farmedbeetrootreqtime = player.s.farmedbeetrootoldreqtime.div(player.t.treeroots.log10().plus(1))
        player.s.farmedsugarcanereqtime = player.s.farmedsugarcaneoldreqtime.div(player.t.treeroots.log10().plus(1))
        player.s.farmedcornreqtime = player.s.farmedcornoldreqtime.div(player.t.treeroots.log10().plus(1))
        player.s.farmedricereqtime = player.s.farmedriceoldreqtime.div(player.t.treeroots.log10().plus(1))
        player.s.farmedendivereqtime = player.s.farmedendiveoldreqtime.div(player.t.treeroots.log10().plus(1))
        player.s.farmedstrawberryreqtime = player.s.farmedstrawberryoldreqtime.div(player.t.treeroots.log10().plus(1))
        player.s.farmedmushroomreqtime = player.s.farmedmushroomoldreqtime.div(player.t.treeroots.log10().plus(1))
        mult = mult.times(player.t.cherries.plus(1).log2().plus(1))
        if (hasUpgrade('r', 21)) mult = mult.times(1.25)
        if (getBuyableAmount('w', 13).gte(3)) mult = mult.times(player.f.magentaflowers.pow(0.4).log10().plus(1))
        mult = mult.times(Decimal.pow(2, player.sa.desertslevels).times(player.sa.deserts.plus(1).log10().plus(1)))
        mult = mult.times(player.s.farmedmushroommultiplier)
        if (getBuyableAmount('w', 16).gte(1)) mult = mult.times(buyableEffect('w', 16))
        if (hasUpgrade('wa', 21)) mult = mult.times(player.wa.egeria_densa.plus(1).pow(5).log(10).plus(1))
        if (hasUpgrade('wa', 12)) player.s.farmedwheatauto = new Decimal(1)
        if (hasUpgrade('wa', 12)) player.s.farmedcarrotsauto = new Decimal(1)
        if (hasUpgrade('wa', 12)) player.s.farmedpotatoesauto = new Decimal(1)
        if (hasUpgrade('wa', 12)) player.s.farmedbeetrootauto = new Decimal(1)
        if (hasUpgrade('wa', 12)) player.s.farmedsugarcaneauto = new Decimal(1)
        if (hasUpgrade('wa', 12)) player.s.farmedcornauto = new Decimal(1)
        if (hasUpgrade('wa', 12)) player.s.farmedriceauto = new Decimal(1)
        if (hasUpgrade('wa', 14)) player.s.farmedendiveauto = new Decimal(1)
        if (hasUpgrade('wa', 14)) player.s.farmedstrawberryauto = new Decimal(1)
        if (hasUpgrade('wa', 14)) player.s.farmedmushroomauto = new Decimal(1)
        if (hasUpgrade('wa', 12) && player.s.points.gte(player.s.farmedwheatcost) && player.s.farmedwheatexponent.lt(player.s.farmedwheatmaxexponent)) player.s.farmedwheatcost = player.s.farmedwheatcost.times(1000), player.s.farmedwheat = player.s.farmedwheat.plus(1), player.s.farmedwheatexponent = player.s.farmedwheatexponent.plus(0.01)
        if (hasUpgrade('wa', 12) && player.s.points.gte(player.s.farmedcarrotscost)) player.s.farmedcarrotscost = player.s.farmedcarrotscost.times(2), player.s.farmedcarrots = player.s.farmedcarrots.plus(1), player.s.farmedcarrotsmultiplier = player.s.farmedcarrotsmultiplier.plus(1)
        if (hasUpgrade('wa', 12) && player.s.points.gte(player.s.farmedpotatoescost)) player.s.farmedpotatoescost = player.s.farmedpotatoescost.times(3), player.s.farmedpotatoes = player.s.farmedpotatoes.plus(1), player.s.farmedpotatoesmultiplier = player.s.farmedpotatoesmultiplier.plus(1)
        if (hasUpgrade('wa', 12) && player.s.points.gte(player.s.farmedbeetrootcost)) player.s.farmedbeetrootcost = player.s.farmedbeetrootcost.times(3.33), player.s.farmedbeetroot = player.s.farmedbeetroot.plus(1), player.s.farmedbeetrootmultiplier = player.s.farmedbeetrootmultiplier.plus(1)
        if (hasUpgrade('wa', 12) && player.s.points.gte(player.s.farmedsugarcanecost)) player.s.farmedsugarcanecost = player.s.farmedsugarcanecost.times(3.67), player.s.farmedsugarcane = player.s.farmedsugarcane.plus(1), player.s.farmedsugarcanemultiplier = player.s.farmedsugarcanemultiplier.plus(1)
        if (hasUpgrade('wa', 12) && player.s.points.gte(player.s.farmedcorncost)) player.s.farmedcorncost = player.s.farmedcorncost.times(4), player.s.farmedcorn = player.s.farmedcorn.plus(1), player.s.farmedcornmultiplier = player.s.farmedcornmultiplier.plus(1)
        if (hasUpgrade('wa', 12) && player.s.points.gte(player.s.farmedricecost)) player.s.farmedricecost = player.s.farmedricecost.times(2.5), player.s.farmedrice = player.s.farmedrice.plus(1), player.s.farmedricemultiplier = player.s.farmedricemultiplier.plus(1)
        if (hasUpgrade('wa', 14) && player.s.points.gte(player.s.farmedendivecost) && getBuyableAmount('w', 14).gte(1)) player.s.farmedendivecost = player.s.farmedendivecost.times(3.5), player.s.farmedendive = player.s.farmedendive.plus(1), player.s.farmedendivemultiplier = player.s.farmedendivemultiplier.plus(1)
        if (hasUpgrade('wa', 14) && player.s.points.gte(player.s.farmedstrawberrycost) && getBuyableAmount('w', 14).gte(2)) player.s.farmedstrawberrycost = player.s.farmedstrawberrycost.times(3.75), player.s.farmedstrawberry = player.s.farmedstrawberry.plus(1), player.s.farmedstrawberrymultiplier = player.s.farmedstrawberrymultiplier.plus(1)
        if (hasUpgrade('wa', 14) && player.s.points.gte(player.s.farmedmushroomcost) && getBuyableAmount('w', 14).gte(3)) player.s.farmedmushroomcost = player.s.farmedmushroomcost.times(5), player.s.farmedmushroom = player.s.farmedmushroom.plus(1), player.s.farmedmushroommultiplier = player.s.farmedmushroommultiplier.plus(0.25)
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
    layerShown(){return hasUpgrade('m', 13) || player.s.total.gte(1) || player.sa.total.gte(1) || player.w.total.gte(1)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasUpgrade('wa', 14) && ['sa', 'w', 'wa'].includes(resettingLayer)) {
            }
            let keep = []
            if (hasUpgrade('wa', 14)) keep.push('milestones')
            layerDataReset(this.layer, keep)
                player[this.layer].upgrades = savedUpgrades
            }
    },
    upgrades: {
    },
    clickables: {
        11: {
            display() {return "Start Farming Wheat"},
            canClick() {return player.s.farmedwheatauto.lte(0) && player.s.farmedricetemp.lte(0) && player.s.farmedmushroomtemp.lte(0) && player.s.farmedstrawberriestemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedendivetemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedwheatexponent.lt(player.s.farmedwheatmaxexponent) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.points.gte(player.s.farmedwheatcost)},
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
            canClick() {return player.s.farmedcarrotsauto.lte(0) && player.s.farmedricetemp.lte(0) && player.s.farmedmushroomtemp.lte(0) && player.s.farmedstrawberriestemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedendivetemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.points.gte(player.s.farmedcarrotscost)},
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
            canClick() {return player.s.farmedpotatoesauto.lte(0) && player.s.farmedricetemp.lte(0) && player.s.farmedmushroomtemp.lte(0) && player.s.farmedstrawberriestemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedendivetemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedpotatoescost)},
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
            display() {if (hasAchievement('ach', 23)) return "Start Farming Beetroot"
        else return "LOCKED (Achievement 23"},
            canClick() {return (hasAchievement('ach', 23)) && player.s.farmedbeetrootauto.lte(0) && player.s.farmedmushroomtemp.lte(0) && player.s.farmedstrawberriestemp.lte(0) && player.s.farmedricetemp.lte(0) && player.s.farmedendivetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedbeetrootcost)},
            onClick() {return player.s.farmedbeetrootgain = player.s.farmedbeetrootgain.plus(0.05),
            player.s.farmedbeetroottemp = player.s.farmedbeetroottemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedbeetrootcost)},
            unlocked() {return (hasAchievement('ach', 23))}
        },
        18: {
            display() {if (hasAchievement('ach', 23)) return "Stop Farming Beetroot"
            else return "LOCKED (Achievement 23"},
            canClick() {return player.s.farmedbeetroottemp.gte(1)},
            onClick() {return player.s.farmedbeetrootgain = new Decimal(0),
            player.s.farmedbeetroottemp = new Decimal(0)},
            unlocked() {return (hasAchievement('ach', 23))}
        },
        21: {
            display() {if (hasAchievement('ach', 23)) return "Start Farming Sugar Cane"
            else return "LOCKED (Achievement 23"},
            canClick() {return (hasAchievement('ach', 23)) && player.s.farmedsugarcaneauto.lte(0) && player.s.farmedmushroomtemp.lte(0) && player.s.farmedstrawberriestemp.lte(0) && player.s.farmedricetemp.lte(0) && player.s.farmedendivetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedsugarcanecost)},
            onClick() {return player.s.farmedsugarcanegain = player.s.farmedsugarcanegain.plus(0.05),
            player.s.farmedsugarcanetemp = player.s.farmedsugarcanetemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedsugarcanecost)},
            unlocked() {return (hasAchievement('ach', 23))}
        },
        22: {
            display() {if (hasAchievement('ach', 23)) return "Stop Farming Sugar Cane"
            else return "LOCKED (Achievement 23"},
            canClick() {return player.s.farmedsugarcanetemp.gte(1)},
            onClick() {return player.s.farmedsugarcanegain = new Decimal(0),
            player.s.farmedsugarcanetemp = new Decimal(0)},
            unlocked() {return (hasAchievement('ach', 23))}
        },
        23: {
            display() {if (hasAchievement('ach', 23)) return "Start Farming Corn"
            else return "LOCKED (Achievement 23"},
            canClick() {return (hasAchievement('ach', 23)) && player.s.farmedcornauto.lte(0) && player.s.farmedmushroomtemp.lte(0) && player.s.farmedstrawberriestemp.lte(0) && player.s.farmedricetemp.lte(0) && player.s.farmedendivetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedcorncost)},
            onClick() {return player.s.farmedcorngain = player.s.farmedcorngain.plus(0.05),
            player.s.farmedcorntemp = player.s.farmedcorntemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedcorncost)},
            unlocked() {return (hasAchievement('ach', 23))}
        },
        24: {
            display() {if (hasAchievement('ach', 23)) return "Stop Farming Corn"
            else return "LOCKED (Achievement 23"},
            canClick() {return player.s.farmedcorntemp.gte(1)},
            onClick() {return player.s.farmedcorngain = new Decimal(0),
            player.s.farmedcorntemp = new Decimal(0)},
            unlocked() {return (hasAchievement('ach', 23))}
        },
        25: {
            display() {if (hasMilestone('s', 3)) return "Start Farming Rice"
            else return "LOCKED (Seed Milestone 3)"},
            canClick() {return (hasMilestone('s', 3)) && player.s.farmedriceauto.lte(0) && player.s.farmedmushroomtemp.lte(0) && player.s.farmedstrawberriestemp.lte(0) && player.s.farmedricetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedendivetemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedricecost)},
            onClick() {return player.s.farmedricegain = player.s.farmedricegain.plus(0.05),
            player.s.farmedricetemp = player.s.farmedricetemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedricecost)},
            unlocked() {return (hasMilestone('s', 3))}
        },
        26: {
            display() {if (hasMilestone('s', 3)) return "Stop Farming Rice"
            else return "LOCKED (Seed Milestone 3)"},
            canClick() {return player.s.farmedricetemp.gte(1)},
            onClick() {return player.s.farmedricegain = new Decimal(0),
            player.s.farmedricetemp = new Decimal(0)},
            unlocked() {return (hasMilestone('s', 3))}
        },
        27: {
            display() {if (getBuyableAmount('w', 14).gte(1)) return "Start Farming Endives"
            else return "LOCKED (Wood Buyable 4 Purchase 1)"},
            canClick() {return (getBuyableAmount('w', 14).gte(1)) && player.s.farmedendiveauto.lte(0) && player.s.farmedmushroomtemp.lte(0) && player.s.farmedstrawberriestemp.lte(0) && player.s.farmedricetemp.lte(0) && player.s.farmedendivetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedendivecost)},
            onClick() {return player.s.farmedendivegain = player.s.farmedendivegain.plus(0.05),
            player.s.farmedendivetemp = player.s.farmedendivetemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedendivecost)},
            unlocked() {return (getBuyableAmount('w', 14).gte(1))}
        },
        28: {
            display() {if (getBuyableAmount('w', 14).gte(1)) return "Stop Farming Endives"
            else return "LOCKED (Wood Buyable 4 Purchase 1)"},
            canClick() {return player.s.farmedendivetemp.gte(1)},
            onClick() {return player.s.farmedendivegain = new Decimal(0),
            player.s.farmedendivetemp = new Decimal(0)},
            unlocked() {return (getBuyableAmount('w', 14).gte(1))}
        },
        31: {
            display() {if (getBuyableAmount('w', 14).gte(2)) return "Start Farming Strawberries"
            else return "LOCKED (Wood Buyable 4 Purchase 2)"},
            canClick() {return (getBuyableAmount('w', 14).gte(2)) && player.s.farmedstrawberryauto.lte(0) && player.s.farmedmushroomtemp.lte(0) && player.s.farmedstrawberriestemp.lte(0) && player.s.farmedricetemp.lte(0) && player.s.farmedendivetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedstrawberrycost)},
            onClick() {return player.s.farmedstrawberrygain = player.s.farmedstrawberrygain.plus(0.05),
            player.s.farmedstrawberriestemp = player.s.farmedstrawberriestemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedstrawberrycost)},
            unlocked() {return (getBuyableAmount('w', 14).gte(2))}
        },
        32: {
            display() {if (getBuyableAmount('w', 14).gte(2)) return "Stop Farming Strawberries"
            else return "LOCKED (Wood Buyable 4 Purchase 2)"},
            canClick() {return player.s.farmedstrawberriestemp.gte(1)},
            onClick() {return player.s.farmedstrawberrygain = new Decimal(0),
            player.s.farmedstrawberriestemp = new Decimal(0)},
            unlocked() {return (getBuyableAmount('w', 14).gte(2))}
        },
        33: {
            display() {if (getBuyableAmount('w', 14).gte(3)) return "Start Farming Mushrooms"
            else return "LOCKED (Wood Buyable 4 Purchase 3)"},
            canClick() {return (getBuyableAmount('w', 14).gte(3)) && player.s.farmedmushroomauto.lte(0) && player.s.farmedmushroomtemp.lte(0) && player.s.farmedstrawberriestemp.lte(0) && player.s.farmedricetemp.lte(0) && player.s.farmedendivetemp.lte(0) && player.s.farmedcorntemp.lte(0) && player.s.farmedsugarcanetemp.lte(0) && player.s.farmedbeetroottemp.lte(0) && player.s.farmedpotatoestemp.lte(0) && player.s.farmedwheattemp.lte(0) && player.s.farmedcarrotstemp.lte(0) && player.s.points.gte(player.s.farmedmushroomcost)},
            onClick() {return player.s.farmedmushroomgain = player.s.farmedmushroomgain.plus(0.05),
            player.s.farmedmushroomtemp = player.s.farmedmushroomtemp.plus(1),
            player.s.points = player.s.points.minus(player.s.farmedmushroomcost)},
            unlocked() {return (getBuyableAmount('w', 14).gte(3))}
        },
        34: {
            display() {if (getBuyableAmount('w', 14).gte(3)) return "Stop Farming Mushrooms"
            else return "LOCKED (Wood Buyable 4 Purchase 3)"},
            canClick() {return player.s.farmedmushroomtemp.gte(1)},
            onClick() {return player.s.farmedmushroomgain = new Decimal(0),
            player.s.farmedmushroomtemp = new Decimal(0)},
            unlocked() {return (getBuyableAmount('w', 14).gte(3))}
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
            unlocked() {return (hasAchievement('ach', 23))}
        },
        theBarfive: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedsugarcanetime.div(player.s.farmedsugarcanereqtime)},
            display() {return format(player.s.farmedsugarcanetime) + 's / ' + format(player.s.farmedsugarcanereqtime) + 's'},
            unlocked() {return (hasAchievement('ach', 23))}
        },
        theBarsix: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedcorntime.div(player.s.farmedcornreqtime)},
            display() {return format(player.s.farmedcorntime) + 's / ' + format(player.s.farmedcornreqtime) + 's'},
            unlocked() {return (hasAchievement('ach', 23))}
        },
        theBarseven: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedricetime.div(player.s.farmedricereqtime)},
            display() {return format(player.s.farmedricetime) + 's / ' + format(player.s.farmedricereqtime) + 's'},
            unlocked() {return (hasMilestone('s', 3))}
        },
        theBareight: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedendivetime.div(player.s.farmedendivereqtime)},
            display() {return format(player.s.farmedendivetime) + 's / ' + format(player.s.farmedendivereqtime) + 's'},
            unlocked() {return (getBuyableAmount('w', 14).gte(1))}
        },
        theBarnine: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedstrawberrytime.div(player.s.farmedstrawberryreqtime)},
            display() {return format(player.s.farmedstrawberrytime) + 's / ' + format(player.s.farmedstrawberryreqtime) + 's'},
            unlocked() {return (getBuyableAmount('w', 14).gte(2))}
        },
        theBarten: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#FFEF00"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.s.farmedmushroomtime.div(player.s.farmedmushroomreqtime)},
            display() {return format(player.s.farmedmushroomtime) + 's / ' + format(player.s.farmedmushroomreqtime) + 's'},
            unlocked() {return (getBuyableAmount('w', 14).gte(3))}
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