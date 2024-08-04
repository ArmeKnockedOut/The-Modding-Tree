addLayer("m", {
    name: "moss", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0,
    branches: true,
    passiveGeneration() {
        if (hasMilestone('sa', 4)) return 1
        else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        mossspread: new Decimal(1),
        upgradesixsoftcap: new Decimal(100),
        upgradesixsoftcapr: new Decimal(0)
    }},
    onPrestige() {return player.m.mossspread = new Decimal(1), player.m.upgradesixsoftcap = new Decimal(100), player.m.upgradesixsoftcapr = new Decimal(0)},
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
    color() { if (hasUpgrade('wa', 24) && player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "#bf8f8f"
         else return "#688553"},
    requires: new Decimal(50000), // Can be a function that takes requirement increases into account
    resource() {if (hasUpgrade('wa', 24) && player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "X"
    else return "Moss"}, // Name of prestige currency
    baseResource: "Grass Blades", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type() {if (hasUpgrade('wa', 24) && player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "none"
    else return "normal"}, // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.315,
    deactivated() {return hasUpgrade('wa', 24) && player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)},
    symbol() {if (hasUpgrade('wa', 24) && player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "X"
else return "M"},
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('d', 133)) mult = mult.times(player.f.purpleflowers.log10().plus(1))
        player.m.mossspread = player.m.mossspread.plus(player.m.points.div(200))
        if (player.m.points.gte(1)) player.m.mossspread = player.m.mossspread.minus(player.m.mossspread.div(400))
        mult = mult.times(player.f.blueflowers.log10().plus(1))
        mult = mult.times(player.s.farmedbeetrootmultiplier)
        mult = mult.times(player.t.bananas.plus(1).log2().plus(1))
        if (hasUpgrade('r', 21)) mult = mult.times(1.25)
        if (getBuyableAmount('w', 13).gte(3)) mult = mult.times(player.f.magentaflowers.pow(0.4).log10().plus(1))
        mult = mult.times(Decimal.pow(2, player.sa.desertslevels).times(player.sa.deserts.plus(1).log10().plus(1)))
        if (hasUpgrade('r', 25)) player.m.upgradesixsoftcapr = new Decimal(24900)
        player.m.upgradesixsoftcap = player.m.upgradesixsoftcapr.plus(100)
        mult = mult.times(player.s.farmedmushroommultiplier)
        if (getBuyableAmount('w', 16).gte(1)) mult = mult.times(buyableEffect('w', 16))
        if (hasUpgrade('wa', 14)) mult = mult.times(player.wa.utricularia_purpurea.plus(1).pow(7).log(8).plus(1))
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
    layerShown(){return hasUpgrade('g', 22) || player.m.total.gte(1) || player.sa.total.gte(1) || player.w.total.gte(1)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
        savedUpgrades = []
        if (hasUpgrade('wa', 12) && ['sa', 'w', 'wa'].includes(resettingLayer)) {
            if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
            if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
            if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
            if (hasUpgrade(this.layer, 21)) {savedUpgrades.push(21)}
            if (hasUpgrade(this.layer, 22)) {savedUpgrades.push(22)}
            if (hasUpgrade(this.layer, 23)) {savedUpgrades.push(23)}
        }
        let keep = []
        if (hasUpgrade('wa', 12)) keep.push('milestones')
        layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    upgrades: {
        11: {
            title: "Oh, hey.",
            description: "Unspent Moss slightly boosts Grass Blade gain. (Remember, 0 Moss = 0 generating Moss Spread!)",
            cost() {if (hasAchievement('ach', 35)) return new Decimal(1e51)
          else return new Decimal(1)},
            effect() {
                return player[this.layer].points.add(3).pow(0.18)
            },
            effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(600) , 0.115))+"x" },
        },
        12: {
            title: "You're new around here, aren't you?",
            description: "Dirt Upgrade Two formula power 0.095 -> 0.13",
            cost() {if (hasAchievement('ach', 35)) return new Decimal(1e55)
          else return new Decimal(2)},
            unlocked() {return (hasUpgrade('m', 11))},
        },
        13: {
            title: "I hope you enjoy your stay.",
            description: "Dirt Upgrade Three formula power 0.1111 -> 0.1511",
            cost() {if (hasAchievement('ach', 35)) return new Decimal(2e55)
          else return new Decimal(3)},
            unlocked() {return (hasUpgrade('m', 12))},
        },
        21: {
            title: "These are the steps to success.",
            description: "Unspent Seeds now boost power gain.",
            cost() {if (hasAchievement('ach', 35)) return new Decimal(2e57)
          else return new Decimal(100)},
            unlocked() {return (hasUpgrade('m', 13))},
            effect() {
                return player.s.points.add(2).pow(0.37)
            },
            effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(1000) , 0.109))+"x" },
        },
        22: {
            title: "Follow along.",
            description: "Unspent Flowers now boost power gain.",
            cost() {if (hasAchievement('ach', 35)) return new Decimal(1e59)
          else return new Decimal(250)},
            unlocked() {return (hasUpgrade('m', 21))},
            effect() {
                return player.f.points.add(2).pow(0.416)
            },
            effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(750) , 0.104))+"x" },
        },
        23: {
            title: "You can have immeasurable power.",
            description: "Unspent Moss now boosts power gain.",
            cost() {if (hasAchievement('ach', 35)) return new Decimal(1e60)
          else return new Decimal(500000)},
            unlocked() {return (hasUpgrade('m', 22))},
            effect() {
                return player.m.points.add(2).pow(0.35)
            },
            effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(player.m.upgradesixsoftcap) , 0.107))+"x" },
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