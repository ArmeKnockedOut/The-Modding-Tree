addLayer("f", {
    name: "flowers", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol() {if (player.nu.fsdeactivated.gte(1)) return "X"
        else return "F"}, // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    branches: true,
    passiveGeneration() {
        if (hasMilestone('w', 4)) return 1
        else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        redflowers: new Decimal(1),
        orangeflowers: new Decimal(1),
        yellowflowers: new Decimal(1),
        greenflowers: new Decimal(1),
        cyanflowers: new Decimal(1),
        blueflowers: new Decimal(1),
        magentaflowers: new Decimal(1),
        purpleflowers: new Decimal(1)
    }},
    onPrestige() {return player.m.mossspread = new Decimal(1), player.m.upgradesixsoftcap = new Decimal(100), player.m.upgradesixsoftcapr = new Decimal(0)},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        ["display-text",
            function() { if (getBuyableAmount('w', 13).gte(3)) return 'You can equally distribute all your flowers into any of the eight colored flowers below. This functions similarly to grass. The Red and Orange flowers give a boost based on log2. The Yellow flower gives a boost based off the Yellow flowers amount raised to the power of 1.6, then log10`d. The Green flower gives a boost based off the Green flowers amount raised to the power of 0.45, then log10`d. The Cyan flower gives a boost based off the Cyan flowers amount raised to the power of 0.6, then log10`d. The Magenta flower gives a boost based off the Magenta flowers amount raised to the power of 0.4, then log10`d. The Blue and Purple flowers give a boost based on log10.'
                else if (getBuyableAmount('w', 13).gte(2)) return 'You can equally distribute all your flowers into any of the seven colored flowers below. This functions similarly to grass. The Red and Orange flowers give a boost based on log2. The Yellow flower gives a boost based off the Yellow flowers amount raised to the power of 1.6, then log10`d. The Green flower gives a boost based off the Green flowers amount raised to the power of 0.45, then log10`d. The Cyan flower gives a boost based off the Cyan flowers amount raised to the power of 0.6, then log10`d. The Blue and Purple flowers give a boost based on log10.'
                else if (getBuyableAmount('w', 13).gte(1)) return 'You can equally distribute all your flowers into any of the six colored flowers below. This functions similarly to grass. The Red and Orange flowers give a boost based on log2. The Yellow flower gives a boost based off the Yellow flowers amount raised to the power of 1.6, then log10`d. The Green flower gives a boost based off the Green flowers amount raised to the power of 0.45, then log10`d. The Blue and Purple flowers give a boost based on log10.'
                else return 'You can equally distribute all your flowers into any of the five colored flowers below. This functions similarly to grass. The Red and Orange flowers give a boost based on log2. The Yellow flower gives a boost based off the Yellow flowers amount raised to the power of 1.6, then log10`d. The Blue and Purple flowers give a boost based on log10.'},
            { "color": "gray", "font-size": "12px" }],
        "blank",
        ["display-text",
        function() { return 'You have ' + format(player.f.total) + ' total Flowers.' },
        { "color": "white", "font-size": "16px" }],
        "milestones",
        "blank",
        ["display-text",
            function() { return 'You have ' +  '<h2 style="color: red">' + format(player.f.redflowers) + '</h2>' + ' Red Flowers, which multiply your power gain by ' + format(player.f.redflowers.log2().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { return 'You have ' +  '<h2 style="color: orange">' + format(player.f.orangeflowers) + '</h2>' + ' Orange Flowers, which multiply your Dirt gain by ' + format(player.f.orangeflowers.log2().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { return 'You have ' +  '<h2 style="color: yellow">' + format(player.f.yellowflowers) + '</h2>' + ' Yellow Flowers, which multiply your Grass Blade gain by ' + format(player.f.yellowflowers.pow(1.6).log10().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { if (getBuyableAmount('w', 13).gte(1)) return 'You have ' +  '<h2 style="color: green">' + format(player.f.greenflowers) + '</h2>' + ' Green Flowers, which divide the Rock Requirement by ' + format(player.f.greenflowers.pow(0.45).log10().plus(1)) + 'x'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { if (getBuyableAmount('w', 13).gte(2)) return 'You have ' +  '<h2 style="color: cyan">' + format(player.f.cyanflowers) + '</h2>' + ' Cyan Flowers, which divide the Tree Requirement by ' + format(player.f.cyanflowers.pow(0.6).log10().plus(1)) + 'x'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { return 'You have ' +  '<h2 style="color: blue">' + format(player.f.blueflowers) + '</h2>' + ' Blue Flowers, which multiply your Moss gain by ' + format(player.f.blueflowers.log10().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { return 'You have ' +  '<h2 style="color: purple">' + format(player.f.purpleflowers) + '</h2>' + ' Purple Flowers, which multiply your Seed gain by ' + format(player.f.purpleflowers.log10().plus(1)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { if (getBuyableAmount('w', 13).gte(3)) return 'You have ' +  '<h2 style="color: #FF00B7">' + format(player.f.magentaflowers) + '</h2>' + ' Magenta Flowers, which multiply power, Dirt, Grass Blade, Moss, Flower, and Seed gain by ' + format(player.f.magentaflowers.pow(0.4).log10().plus(1)) + 'x'
        else return ""},
            { "color": "white", "font-size": "15px" }],
        "blank",
        "blank",
        "clickables",
        "blank",
        "blank",
        "upgrades"
    ],
    color() { if (player.nu.fsdeactivated.gte(1)) return "#bf8f8f"
         else return "#00F2FF"},
    requires: new Decimal(5e13), // Can be a function that takes requirement increases into account
    resource() {if (player.nu.fsdeactivated.gte(1)) return "X"
        else return "Flowers"}, // Name of prestige currency
    baseResource: "Dirt", // Name of resource prestige is based on
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
    type() {if (player.nu.fsdeactivated.gte(1)) return "none"
       else return "normal"}, // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25,
    deactivated() {return player.nu.fsdeactivated.gte(1)},
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasAchievement('ach', 22)) mult = mult.times(1.5)
        mult = mult.times(player.s.farmedsugarcanemultiplier)
        if (hasAchievement('ach', 24)) player.f.redflowers = player.f.redflowers.plus(player.f.points.div(2000))
        if (hasAchievement('ach', 24)) player.f.orangeflowers = player.f.orangeflowers.plus(player.f.points.div(2000))
        if (hasAchievement('ach', 24)) player.f.yellowflowers = player.f.yellowflowers.plus(player.f.points.div(2000))
        if (hasAchievement('ach', 24)) player.f.blueflowers = player.f.blueflowers.plus(player.f.points.div(2000))
        if (hasAchievement('ach', 24)) player.f.purpleflowers = player.f.purpleflowers.plus(player.f.points.div(2000))
        if (hasAchievement('ach', 24) && getBuyableAmount('w', 13).gte(1)) player.f.greenflowers = player.f.greenflowers.plus(player.f.points.div(2000))
        if (hasAchievement('ach', 24) && getBuyableAmount('w', 13).gte(2)) player.f.cyanflowers = player.f.cyanflowers.plus(player.f.points.div(2000))
        if (hasAchievement('ach', 24) && getBuyableAmount('w', 13).gte(3)) player.f.magentaflowers = player.f.magentaflowers.plus(player.f.points.div(2000))
        if (hasUpgrade('d', 143)) player.f.purpleflowers = player.f.purpleflowers.plus(player.f.points.div(80))
        if (hasUpgrade('d', 144)) player.f.blueflowers = player.f.blueflowers.plus(player.f.points.div(80))
        mult = mult.times(player.t.oranges.plus(1).log2().plus(1))
        if (hasUpgrade('r', 21)) mult = mult.times(1.25)
        if (hasUpgrade('upgtree', 17)) mult = mult.times(upgradeEffect('upgtree', 17))
        if (hasUpgrade('upgtree', 18)) mult = mult.times(upgradeEffect('upgtree', 18))
        if (getBuyableAmount('w', 13).gte(3)) mult = mult.times(player.f.magentaflowers.pow(0.4).log10().plus(1))
        mult = mult.times(Decimal.pow(2, player.sa.desertslevels).times(player.sa.deserts.plus(1).log10().plus(1)))
        mult = mult.times(player.s.farmedmushroommultiplier)
        if (getBuyableAmount('w', 16).gte(1)) mult = mult.times(buyableEffect('w', 16))
        if (hasUpgrade('wa', 15)) mult = mult.times(player.wa.hydrilla_verticillate.plus(1).pow(6).log(9).plus(1))
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
    layerShown(){return hasUpgrade('m', 13) || player.f.total.gte(1) || player.sa.total.gte(1) || player.w.total.gte(1)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasUpgrade('wa', 13) && ['sa', 'w', 'wa'].includes(resettingLayer)) {
            }
            let keep = []
            if (hasUpgrade('wa', 13)) keep.push('milestones')
            layerDataReset(this.layer, keep)
                player[this.layer].upgrades = savedUpgrades
            }
    },
    upgrades: {
    },

    clickables: {
        11: {
            display() {return "Distribute Flowers"},
            canClick() {if (hasAchievement('ach', 24)) return false
        else return true},
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
            effectDescription: "Rock upgrades 1-5 are bought automatically",
            done() { return player.f.total.gte(50) }
        },
    }
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.