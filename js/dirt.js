addLayer("d", {
    name: "dirt", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    branches: true,
    passiveGeneration() {
      if (hasMilestone('g', 2)) return 1
      else return 0},
    startData() { return {
      unlocked: true,
		  points: new Decimal(0),
      upgradeonesoftcap: new Decimal(1500),
      upgradeonesoftcapincrease: new Decimal(1500),
      upgradeonesoftcapcurrentincrease: new Decimal(0),
      upgradeonesoftcappower: new Decimal(0.125),
      refineddirt: new Decimal(0),
      refineddirtcost: new Decimal(1e28),
      refineddirtcurrency: new Decimal(0),
      achievementmulti: new Decimal(1.085),
      rockmultiplier: new Decimal(1.185),
      oldupgradesixmulti: new Decimal(1.0625),
      upgradesixmulti: new Decimal(1.0625),
      oldupgradefourmulti: new Decimal(1.175),
      upgradefourmulti: new Decimal(1.175),
    }},
    tabFormat: {
      "Main": {
        content: [
          "main-display",
          "prestige-button",
          "resource-display",
          ["row", [
            ["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14], ["upgrade", 15]]],
          ["row", [
            ["upgrade", 21], ["upgrade", 22], ["upgrade", 23], ["upgrade", 24], ["upgrade", 25]]],
      ]
      },
      "Refinery": {
        content: [
          ["display-text",
            function() { return 'You have refined Dirt ' + format(player.d.refineddirt) + ' times, which increases the first Dirt Upgrades softcap threshold by +' + format(player.d.upgradeonesoftcapcurrentincrease) },
            { "color": "white", "font-size": "16.5px" }],
          "blank",
          ["display-text",
            function() { return 'Current Dirt Upgrade One softcap threshold: ' + format(player.d.upgradeonesoftcap) },
            { "color": "gray", "font-size": "15px" }],
          "blank",
          ["clickable", 11],
          "blank",
          ["display-text",
            function() { return 'Current Refined Dirt cost: ' + format(player.d.refineddirtcost) + ' Dirt' },
            { "color": "white", "font-size": "15px" }],
          "blank",
          "blank",
          ["display-text",
            function() { return 'You have ' + format(player.d.refineddirtcurrency) + ' Refined Dirt' },
            { "color": "white", "font-size": "16.5px" }],
          ["display-text",
            function() { return '(Spending Refined Dirt on upgrades does not decrease the Refined Dirt Amount boost)' },
            { "color": "gray", "font-size": "13px" }],
          "blank",
          ["row", [
            ["upgrade", 101], ["upgrade", 102], ["upgrade", 103], ["upgrade", 104], ["upgrade", 105]]],
          ["row", [
            ["upgrade", 111], ["upgrade", 112], ["upgrade", 113], ["upgrade", 114], ["upgrade", 115]]],
          ["row", [
            ["upgrade", 121], ["upgrade", 122], ["upgrade", 123], ["upgrade", 124], ["upgrade", 125]]],
          ["row", [
            ["upgrade", 131], ["upgrade", 132], ["upgrade", 133], ["upgrade", 134], ["upgrade", 135]]],
          ["row", [
            ["upgrade", 141], ["upgrade", 142], ["upgrade", 143], ["upgrade", 144], ["upgrade", 145]]],
        ],
      unlocked() {return (hasMilestone('s', 4))}
      },
    },
    color: "#A87950",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Dirt", // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('d', 12)) mult = mult.times(softcap((upgradeEffect('d', 12)), new Decimal(300) , 0.2))
        if (hasUpgrade('d', 15)) mult = mult.times(softcap((upgradeEffect('d', 15)), new Decimal(35) , 0.091))
        if (hasUpgrade('d', 21)) mult = mult.times(upgradeEffect('d', 21))
        if (hasUpgrade('g', 12)) mult = mult.times(softcap((upgradeEffect('g', 12)), new Decimal(1200) , 0.092))
        if (hasUpgrade('g', 15)) mult = mult.times(player.g.plantedgrass.log10().plus(1))
        if (hasUpgrade('r', 12)) mult = mult.times(1.4)
        if (hasUpgrade('d', 113)) mult = mult.times(player.f.purpleflowers.log10().plus(1))
        if (hasUpgrade('d', 114)) mult = mult.times(player.f.blueflowers.log10().plus(1))
        mult = mult.times(player.m.mossspread.log2().plus(1))
        mult = mult.times(player.f.orangeflowers.log2().plus(1))
        mult = mult.times(player.s.farmedcarrotsmultiplier)
        mult = mult.times(player.t.apples.plus(1).log2().plus(1))
        if (hasAchievement('ach', 27)) mult = mult.times(2)
        if (hasAchievement('ach', 25)) player.d.upgradeonesoftcappower = new Decimal(0.15)
        if (hasUpgrade('d', 105)) player.d.upgradesixmulti = player.d.oldupgradesixmulti.plus(0.0625)
        if (hasUpgrade('d', 115)) player.d.upgradesixmulti = player.d.oldupgradesixmulti.plus(0.1125)
        if (hasUpgrade('d', 125)) player.d.upgradesixmulti = player.d.oldupgradesixmulti.plus(0.1875)
        if (hasUpgrade('d', 135)) player.d.upgradefourmulti = player.d.oldupgradefourmulti.plus(0.06)
        if (hasUpgrade('d', 145)) player.d.upgradefourmulti = player.d.oldupgradefourmulti.plus(0.11)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "D: Reset for Dirt", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('g', 1) && ['g', 'r', 'm', 'f', 's', 't'].includes(resettingLayer)) {
              if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
              if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
              if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
              if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
              if (hasUpgrade(this.layer, 15)) {savedUpgrades.push(15)}
              if (hasUpgrade(this.layer, 21)) {savedUpgrades.push(21)}
              if (hasUpgrade(this.layer, 22)) {savedUpgrades.push(22)}
              if (hasUpgrade(this.layer, 23)) {savedUpgrades.push(23)}
              if (hasUpgrade(this.layer, 24)) {savedUpgrades.push(24)}
              if (hasUpgrade(this.layer, 25)) {savedUpgrades.push(25)}
            }
         layerDataReset(this.layer, [])
            player[this.layer].upgrades = savedUpgrades
          }
    },
    clickables: {
      11: {
          display() {return "Refine Dirt"},
          canClick() {return player.d.points.gte(player.d.refineddirtcost)},
          onClick() {return player.d.points = player.d.points.minus(player.d.refineddirtcost),
          player.d.refineddirt = player.d.refineddirt.plus(1),
          player.d.refineddirtcost = player.d.refineddirtcost.times(10),
          player.d.upgradeonesoftcap = player.d.upgradeonesoftcap.plus(player.d.upgradeonesoftcapincrease),
          player.d.upgradeonesoftcapcurrentincrease = player.d.upgradeonesoftcapcurrentincrease.plus(player.d.upgradeonesoftcapincrease),
          player.d.upgradeonesoftcapincrease = player.d.upgradeonesoftcapincrease.plus(250),
          player.d.refineddirtcurrency = player.d.refineddirtcurrency.plus(1)}
      },
  },
    upgrades: {
      11: {
        title: "The Beginning",
        description: "Unspent Dirt boosts power gain.",
        cost: new Decimal(1),
        effect() {
          if (hasUpgrade('g', 14)) return player[this.layer].points.add(2).pow(0.45)
          else return player[this.layer].points.add(2).pow(0.35)
      },
      effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), player.d.upgradeonesoftcap , player.d.upgradeonesoftcappower))+"x" },
      },
      12: {
        title: "Don't let the power consume you.",
        description: "Power boosts Dirt gain.",
        cost: new Decimal(1),
        unlocked() {return hasUpgrade('d', 11)},
        effect() {
          if (hasUpgrade('m', 12)) return player.points.add(1).pow(0.13)
          else if (hasUpgrade('d', 22)) return player.points.add(1).pow(0.095)
          else return player.points.add(1).pow(0.07)
      },
      effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(300) , 0.2))+"x" },
      },
    13: {
      title: "You're not alone,",
      description: "Power boosts power gain.",
      cost: new Decimal(2),
      unlocked() {return hasUpgrade('d', 12)},
      effect() {
        if (hasUpgrade('m', 13)) return player.points.add(1).pow(0.1511)
        else if (hasUpgrade('d', 24)) return player.points.add(1).pow(0.1111)
        else return player.points.add(1).pow(0.0978)
    },
    effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(650) , 0.215))+"x" },
    },
    14: {
      title: "yet this is the most alone you've been.",
      description() {if (hasUpgrade('d', 145)) return "Each Dirt upgrade bought multiplies power gain by x1.285"
      else if (hasUpgrade('d', 135)) return "Each Dirt upgrade bought multiplies power gain by x1.235"
      else return "Each Dirt upgrade bought multiplies power gain by x1.175"},
      cost: new Decimal(2),
      unlocked() {return hasUpgrade('d', 13)},
      effect() {
        return new Decimal.pow(player.d.upgradefourmulti, player.d.upgrades.length)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
    },
    15: {
      title: "Don't hide your emotions. No one will hear you.",
      description: "Unspent Dirt boosts Dirt gain.",
      cost: new Decimal(4),
      unlocked() {return hasUpgrade('d', 14)},
      effect() {
        if (hasUpgrade('d', 25)) return player[this.layer].points.add(2).pow(0.1145)
        else return player[this.layer].points.add(2).pow(0.1)
    },
    effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(35) , 0.091))+"x" },
    },
    21: {
      title: "You can make it far. Just have patience.",
      description() {if (hasUpgrade('d', 125)) return "Each Dirt upgrade bought multiplies Dirt gain by x1.25"
    else if (hasUpgrade('d', 115)) return "Each Dirt upgrade bought multiplies Dirt gain by x1.175"
    else if (hasUpgrade('d', 105)) return "Each Dirt upgrade bought multiplies Dirt gain by x1.125"
    else return "Each Dirt upgrade bought multiplies Dirt gain by x1.0625"},
      cost: new Decimal(10),
      unlocked() {return hasUpgrade('d', 15)},
      effect() {
        return new Decimal.pow(player.d.upgradesixmulti, player.d.upgrades.length)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
    },
    22: {
      title: "Shoot higher than the stars.",
      description: "'Don't let the power consume you.' formula power 0.07 -> 0.095",
      cost: new Decimal(20),
      unlocked() {return hasUpgrade('d', 21)},
    },
    23: {
      title: "Maybe you're just mastering the wrong skill.",
      description() { if (hasMilestone('s', 4)) return "Time played boosts power gain based on log2."
      else return "Time played boosts power gain based on log10."},
      cost: new Decimal(35),
      unlocked() {return hasUpgrade('d', 22)},
      effect() { if (hasMilestone('s', 4)) return Math.log(player.timePlayed) / Math.log(2) 
      else return Math.log(player.timePlayed) / Math.log(10)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
    },
    24: {
      title: "No one is around to help.",
      description: "'You're not alone,' formula power 0.0978 -> 0.1111",
      cost: new Decimal(100),
      unlocked() {return hasUpgrade('d', 23)},
    },
    25: {
      title: "Don't let the lack of progress discourage you.",
      description: "Dirt Upgrade Five formula power 0.1 -> 0.1145",
      cost: new Decimal(300),
      unlocked() {return hasUpgrade('d', 24)},
    },




    101: {
      title: "Achievement Multiplier I",
      description: "Achievement Multiplier 1.085x -> 1.2x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      cost: new Decimal(1)
    },
    102: {
      title: "Rock Multiplier I",
      description: "Total Rock Multiplier 1.185x -> 1.25x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      cost: new Decimal(1)
    },
    103: {
      title: "Purple Flower Multiplier I",
      description: "Purple Flowers now boost power gain",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      cost: new Decimal(1)
    },
    104: {
      title: "Blue Flower Multiplier I",
      description: "Blue Flowers now boost power gain",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      cost: new Decimal(1)
    },
    105: {
      title: "Dirt Upgrade Multiplier I",
      description: "Dirt Upgrade Six Multiplier 1.0625x -> 1.125x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      cost: new Decimal(1)
    },
    111: {
      title: "Achievement Multiplier II",
      description: "Achievement Multiplier 1.2x -> 1.3x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 101))},
      cost: new Decimal(2)
    },
    112: {
      title: "Rock Multiplier II",
      description: "Total Rock Multiplier 1.25x -> 1.3x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 102))},
      cost: new Decimal(2)
    },
    113: {
      title: "Purple Flower Multiplier II",
      description: "Purple Flowers now boost Dirt gain",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 103))},
      cost: new Decimal(3)
    },
    114: {
      title: "Blue Flower Multiplier II",
      description: "Blue Flowers now boost Dirt gain",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 104))},
      cost: new Decimal(3)
    },
    115: {
      title: "Dirt Upgrade Multiplier II",
      description: "Dirt Upgrade Six Multiplier 1.125x -> 1.175x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 105))},
      cost: new Decimal(4)
    },
    121: {
      title: "Achievement Multiplier III",
      description: "Achievement Multiplier 1.3x -> 1.4x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 111))},
      cost: new Decimal(4)
    },
    122: {
      title: "Rock Multiplier III",
      description: "Total Rock Multiplier 1.3x -> 1.35x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 112))},
      cost: new Decimal(4)
    },
    123: {
      title: "Purple Flower Multiplier III",
      description: "Purple Flowers now boost Grass Blade gain",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 113))},
      cost: new Decimal(5)
    },
    124: {
      title: "Blue Flower Multiplier III",
      description: "Blue Flowers now boost Grass Blade gain",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 114))},
      cost: new Decimal(5)
    },
    125: {
      title: "Dirt Upgrade Multiplier III",
      description: "Dirt Upgrade Six Multiplier 1.175x -> 1.25x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 115))},
      cost: new Decimal(6)
    },
    131: {
      title: "Achievement Multiplier IV",
      description: "Achievement Multiplier 1.4x -> 1.5x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 121))},
      cost: new Decimal(6)
    },
    132: {
      title: "Rock Multiplier IV",
      description: "Total Rock Multiplier 1.35x -> 1.4x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 122))},
      cost: new Decimal(6)
    },
    133: {
      title: "Purple Flower Multiplier IV",
      description: "Purple Flowers now boost Moss gain",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 123))},
      cost: new Decimal(7)
    },
    134: {
      title: "Blue Flower Multiplier IV",
      description: "Blue Flowers now boost Seed gain",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 124))},
      cost: new Decimal(7)
    },
    135: {
      title: "Dirt Upgrade Multiplier IV",
      description: "Dirt Upgrade Four Multiplier 1.175x -> 1.235x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 125))},
      cost: new Decimal(8)
    },
    141: {
      title: "Achievement Multiplier V",
      description: "Achievement Multiplier 1.5x -> 1.6x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 131))},
      cost: new Decimal(8)
    },
    142: {
      title: "Rock Multiplier V",
      description: "Total Rock Multiplier 1.4x -> 1.5x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 132))},
      cost: new Decimal(8)
    },
    143: {
      title: "Purple Flower Multiplier V",
      description: "Purple Flower gain 1% -> 25%",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 133))},
      cost: new Decimal(9)
    },
    144: {
      title: "Blue Flower Multiplier V",
      description: "Blue Flower gain 1% -> 25%",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 134))},
      cost: new Decimal(9)
    },
    145: {
      title: "Dirt Upgrade Multiplier V",
      description: "Dirt Upgrade Four Multiplier 1.235x -> 1.285x",
      currencyLocation() {return player.d},
      currencyInternalName: "refineddirtcurrency",
      currencyDisplayName: "Refined Dirt",
      canAfford() {return (hasUpgrade('d', 135))},
      cost: new Decimal(10)
    },
  },
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.