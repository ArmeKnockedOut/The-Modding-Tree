addLayer("g", {
    name: "grass", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0,
    branches: true,
    passiveGeneration() {
        if (hasMilestone('s', 2)) return 1
        else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        plantedgrass: new Decimal(1),
        upgradeonesoftcap: new Decimal(1500),
        upgradeonesoftcapr: new Decimal(0),
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text",
            function() { return 'You can plant all your current Grass Blades to transform them into Planted Grass, which makes them unusable for purchasing Grass Blade upgrades or getting the boost from Grass Blade upgrades. Instead Planted Grass gives its own seperate boost to power gain based on log10.' },
            { "color": "gray", "font-size": "12px" }],
        "blank",
        "blank",
        ["display-text",
        function() { if (hasUpgrade('g', 15)) return 'You have ' + format(player.g.plantedgrass) + ' Planted Grass, which boosts power and Dirt gain by ' + format(player.g.plantedgrass.log10().plus(1)) + 'x'
        else return 'You have ' + format(player.g.plantedgrass) + ' Planted Grass, which boosts power gain by ' + format(player.g.plantedgrass.log10().plus(1)) + 'x' },
        { "color": "white", "font-size": "16px", }],
        "blank",
        "clickables",
        "blank",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.g.total) + ' total Grass Blades.' },
            { "color": "white", "font-size": "16px" }],
        "milestones",
        "blank",
        "upgrades"
    ],
    color() { if (hasUpgrade('wa', 24) &&player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "#bf8f8f"
         else return "#69B039"},
    requires: new Decimal(1000), // Can be a function that takes requirement increases into account
    resource() {if (hasUpgrade('wa', 24) && player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "X"
    else return "Grass Blades"}, // Name of prestige currency
    baseResource: "Dirt", // Name of resource prestige is based on
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
    type() {if (hasUpgrade('wa', 24) && player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "none"
    else return "normal"}, // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.425,
    deactivated() {return hasUpgrade('wa', 24) && player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)},
    symbol() {if (hasUpgrade('wa', 24) && player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "X"
else return "R"},
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('g', 13)) mult = mult.times(softcap((upgradeEffect('g', 13)), new Decimal(7.5) , 0.0925))
        if (hasUpgrade('r', 13)) mult = mult.times(1.15)
        if (hasUpgrade('g', 21)) mult = mult.times(softcap((upgradeEffect('g', 21)), new Decimal(50) , 0.15))
        if (hasUpgrade('r', 14)) mult = mult.times(0.9)
        if (hasUpgrade('r', 15)) mult = mult.times(1.3)
        if (hasUpgrade('m', 11)) mult = mult.times(softcap((upgradeEffect('m', 11)), new Decimal(600) , 0.115))
        if (hasUpgrade('d', 123)) mult = mult.times(player.f.purpleflowers.log10().plus(1))
        if (hasUpgrade('d', 124)) mult = mult.times(player.f.blueflowers.log10().plus(1))
        if (hasMilestone('f', 1)) player.g.plantedgrass = player.g.plantedgrass.plus(player.g.points.div(200))
        mult = mult.times(player.t.pears.plus(1).log2().plus(1))
        if (hasAchievement('ach', 27)) mult = mult.times(2)
        mult = mult.times(player.f.yellowflowers.pow(1.6).log10().plus(1))
        mult = mult.times(Decimal.pow(2, player.sa.beacheslevels).times(player.sa.beaches.plus(1).log10().plus(1)))
        mult = mult.times(player.s.farmedpotatoesmultiplier)
        if (getBuyableAmount('w', 13).gte(3)) mult = mult.times(player.f.magentaflowers.pow(0.4).log10().plus(1))
        if (hasUpgrade('r', 24)) player.g.upgradeonesoftcapr = new Decimal(50000)
        player.g.upgradeonesoftcap = player.g.upgradeonesoftcapr.plus(1500)
        mult = mult.times(player.s.farmedmushroommultiplier)
        if (getBuyableAmount('w', 15).gte(1)) mult = mult.times(buyableEffect('w', 15))
        if (hasUpgrade('wa', 13)) mult = mult.times(player.wa.myriophyllum_spicatum.plus(1).pow(8).log(7).plus(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: Reset for Grass Blades", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['d'],
    layerShown(){return hasUpgrade('d', 15) || player.g.points.gte(1) || player.g.plantedgrass.gte(2) || hasUpgrade('g', 11) || player.m.total.gte(1) || player.sa.total.gte(1) || player.w.total.gte(1)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
        if (hasMilestone('m', 1) && ['m', 'f', 's', 't', 'sa', 'w', 'wa'].includes(resettingLayer)) {
            if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
            if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
            if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
            if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
            if (hasUpgrade(this.layer, 15)) {savedUpgrades.push(15)}
            if (hasUpgrade(this.layer, 21)) {savedUpgrades.push(21)}
            if (hasUpgrade(this.layer, 22)) {savedUpgrades.push(22)}
        }
        let keep = []
            if (hasMilestone('m', 2)) keep.push('milestones')
        layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    clickables: {
        11: {
            display() {return "Plant Grass"},
            canClick() {return true},
            onClick() {return player.g.plantedgrass = player.g.plantedgrass.plus(player.g.points),
                   player.g.points = player.g.points.minus(player.g.points)}
         }
    },
    upgrades: {
        11: {
            title: "The crowd watches your every mistake.",
            description: "Unspent Grass Blades boost power gain.",
            cost() {if (hasAchievement('ach', 35)) return new Decimal(1e69)
          else return new Decimal(1)},
            effect() {
              return player[this.layer].points.add(2).pow(0.44)
          },
          effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(player.g.upgradeonesoftcap) , 0.1))+"x" },
        },
        12: {
            title: "Do not dissapoint them.",
            description: "Unspent Grass Blades boost Dirt gain.",
            cost() {if (hasAchievement('ach', 35)) return new Decimal(1e70)
          else return new Decimal(1)},
            effect() {
              return player[this.layer].points.add(2).pow(0.42)
          },
          effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(1200) , 0.092))+"x" },
        },
        13: {
            title: "You've set high expectations for them.",
            description: "Unspent Grass Blades boost Grass Blade gain.",
            cost() {if (hasAchievement('ach', 35)) return new Decimal(5e75)
          else return new Decimal(1)},
            unlocked() {return (hasUpgrade('g', 11) && hasUpgrade('g', 12))},
            effect() {
              return player[this.layer].points.add(2).pow(0.19)
          },
          effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(7.5) , 0.0925))+"x" },
        },
        14: {
            title: "You shouldn't have.",
            description: "'The Beginning' formula power 0.35 -> 0.45",
            cost() {if (hasAchievement('ach', 35)) return new Decimal(1e78)
          else return new Decimal(2)},
            unlocked() {return (hasUpgrade('g', 11) && hasUpgrade('g', 12))},
        },
        15: {
            title: "But there's always a glimmer of hope.",
            description: "Planted Grass now also boosts Dirt gain.",
            cost() {if (hasAchievement('ach', 35)) return new Decimal(1e81)
          else return new Decimal(3)},
            unlocked() {return (hasUpgrade('g', 13) && hasUpgrade('g', 14))},
        },
        21: {
            fullDisplay() { if (hasAchievement('ach', 35) && player.nu.annihilatednemesis.lte(0)) return '<h3>..</h3><br>\n\
            Mourn the Rocks.<br>\n\
            <br>\n\
            Cost: 2.50e92 Grass Blades'
            else return '<h3>Be realistic.</h3><br>\n\
            Total Rocks slightly boost Grass Blade gain.<br>\n\
            Currently: ' + format(softcap((upgradeEffect('g', 21)), new Decimal(50), 0.15)) + 'x<br>\n\
            <br>\n\
            Cost: 35 Grass Blades'},
            cost() {if (hasAchievement('ach', 35) && player.nu.annihilatednemesis.lte(0)) return new Decimal(2.5e92)
          else return new Decimal(35)},
            unlocked() {return hasUpgrade('g', 15)},
            effect() {
                return player.r.total.add(1).pow(0.13)
            },
        },
        22: {
            title() {if (hasAchievement('ach', 35) && player.nu.annihilatednemesis.lte(0)) return "."
            else return "You won't get far."},
           description: "Unlock more rock upgrades.",
            cost() {if (hasAchievement('ach', 35) && player.nu.annihilatednemesis.lte(0)) return new Decimal(1e10000)
          else return new Decimal(500)},
            unlocked() {return hasUpgrade('g', 21)},
        },
   },
   milestones: {
    1: {
        requirementDescription: "10 Total Grass Blades",
        effectDescription: "You keep Dirt upgrades",
        done() { return player.g.total.gte(10) }
    },
    2: {
        requirementDescription: "15,000 Total Grass Blades",
        effectDescription: "You gain 100% of Dirt gain every second",
        done() { return player.g.total.gte(15000) }
    },
}
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.