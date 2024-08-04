addLayer("r", {
    name: "rocks", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 1,
    branches: true,
    resetsNothing() {return (hasMilestone('s', 1))},
    canBuyMax() {return (hasMilestone('s', 1))},
    autoPrestige() {return (hasMilestone('s', 1))},
    automate() {if (hasMilestone('f', 2)) buyUpgrade('r', 11), buyUpgrade('r', 12), buyUpgrade('r', 13), buyUpgrade('r', 14), buyUpgrade('r', 15)},
   // autoUpgrade() {return (hasMilestone('f', 2))},
  //  passiveGeneration() {
  //      if (hasUpgrade('c', 15)) return 100
  //      else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        oldrockmultiplier: new Decimal(1.185)
    }},
    tabFormat: [
        "main-display",
        ["display-text",
            function() { return 'Each total Rock gives a ' + format(player.d.rockmultiplier, 3) + 'x multiplicative multiplier to power gain.' },
            { "color": "gray", "font-size": "12px" }],
        ["blank", "5px"],
        ["display-text",
            function() { return 'Your total Rocks multiply power gain by ' + format(tmp[this.layer].effect) + 'x'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        "prestige-button",
        "resource-display",
        "blank",
        ["display-text",
            function() { return 'Upon buying any upgrade, the costs of the other upgrades increase. You can respec your upgrades to get all your rocks back.' },
            { "color": "gray", "font-size": "12px" }],
        "blank",
        "clickables",
        "blank",
        "upgrades"
    ],
    effect(){ if (player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return new Decimal(1)
        else return Decimal.pow(player.d.rockmultiplier, player[this.layer].total)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
    color() { if (player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "#bf8f8f"
         else return "#8C9387"},
    requires() {if (player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return new Decimal(1e10000)
        else return new Decimal(250000)}, // Can be a function that takes requirement increases into account
    resource() {if (player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "X"
    else return "Rocks"}, // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type() {if (player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "none"
    else return "static"}, // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2.71,
    deactivated() {return player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)},
    symbol() {if (player.sa.sandplanetslevels == 4 && player.nu.annihilatednemesis.lte(0)) return "X"
else return "R"},
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (player.r.total.gte(1200)) mult = mult.times(player.r.total.pow(20))
        if (player.r.total.gte(2500)) mult = mult.times(player.r.total.pow(35))
        if (hasUpgrade('d', 102)) player.d.rockmultiplier = player.r.oldrockmultiplier.plus(0.065)
        if (hasUpgrade('d', 112)) player.d.rockmultiplier = player.r.oldrockmultiplier.plus(0.115)
        if (hasUpgrade('d', 122)) player.d.rockmultiplier = player.r.oldrockmultiplier.plus(0.165)
        if (hasUpgrade('d', 132)) player.d.rockmultiplier = player.r.oldrockmultiplier.plus(0.215)
        if (hasUpgrade('d', 142)) player.d.rockmultiplier = player.r.oldrockmultiplier.plus(0.315)
        if (hasUpgrade('upgtree', 11)) mult = mult.div(upgradeEffect('upgtree', 11))
        if (getBuyableAmount('w', 13).gte(1)) mult = mult.div(player.f.greenflowers.pow(0.45).log10().plus(1))
        if (hasUpgrade('r', 22)) mult = mult.div(1e6)
        mult = mult.div(player.s.farmedendivemultiplier)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reset for Rocks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['d'],
    layerShown(){return hasUpgrade('g', 15) || player.r.total.gte(1) || player.m.total.gte(1) || player.sa.total.gte(1) || player.w.total.gte(1)},
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
    clickables: {
        11: {
            display() {return "Respec Upgrades"},
            canClick() {return true},
            onClick() {return player.r.points = player.r.total,
                   player.r.upgrades = [],
                    player.d.upgradeonesoftcapr = new Decimal(0),
                    player.g.upgradeonesoftcapr = new Decimal(0),
                    player.m.upgradesixsoftcapr = new Decimal(0)}
         }
    },
    upgrades: {
        11: {
          title: "You seem off.",
          description: "You gain 50% more power.",
          cost() {if (hasMilestone('f', 2)) return new Decimal(1)
          else return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
        12: {
            title: "Is something bothering you?",
            description: "You gain 40% more Dirt.",
            cost() {if (hasMilestone('f', 2)) return new Decimal(2)
            else return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
        13: {
            title: "Please talk to me.",
            description: "You gain 15% more Grass Blades.",
            cost() {if (hasMilestone('f', 2)) return new Decimal(3)
            else return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
        14: {
            title: "You'll be okay.",
            description: "You gain 30% more power, but you gain 10% less Grass Blades.",
            unlocked() {return (hasUpgrade('g', 22))},
            cost() {if (hasMilestone('f', 2)) return new Decimal(4)
            else return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
        15: {
            title: "Just hold on.",
            description: "You gain 30% more Grass Blades, but you gain 10% less power.",
            unlocked() {return (hasUpgrade('g', 22))},
            cost() {if (hasMilestone('f', 2)) return new Decimal(5)
            else return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
        21: {
            title: "why are you back",
            description: "You gain 25% more Moss, Flowers, and Seeds.",
            unlocked() {return getBuyableAmount('w', 11).gte(1)},
            canAfford() {return (hasUpgrade('r', 11)) && (hasUpgrade('r', 12)) && (hasUpgrade('r', 13)) && (hasUpgrade('r', 14)) && (hasUpgrade('r', 15))},
            cost() { return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
        22: {
            title: "you weren't supposed to progress further",
            description: "The Rock Requirement is divided by x1.00e6.",
            unlocked() {return getBuyableAmount('w', 11).gte(2)},
            canAfford() {return (hasUpgrade('r', 11)) && (hasUpgrade('r', 12)) && (hasUpgrade('r', 13)) && (hasUpgrade('r', 14)) && (hasUpgrade('r', 15))},
            cost() { return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
        23: {
            title: "now what?",
            description: "Dirt Upgrade One's softcap starts another 250,000 later.",
            unlocked() {return getBuyableAmount('w', 11).gte(3)},
            canAfford() {return (hasUpgrade('r', 11)) && (hasUpgrade('r', 12)) && (hasUpgrade('r', 13)) && (hasUpgrade('r', 14)) && (hasUpgrade('r', 15))},
            cost() { return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
        24: {
            title: "we are all letting her down..",
            description: "Grass Upgrade One's softcap starts 50,000 later.",
            unlocked() {return getBuyableAmount('w', 11).gte(4)},
            canAfford() {return (hasUpgrade('r', 11)) && (hasUpgrade('r', 12)) && (hasUpgrade('r', 13)) && (hasUpgrade('r', 14)) && (hasUpgrade('r', 15))},
            cost() { return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
        25: {
            title: "don't you realize what she'll do to us?",
            description: "Moss Upgrade Six's softcap starts 24,900 later.",
            unlocked() {return getBuyableAmount('w', 11).gte(5)},
            canAfford() {return (hasUpgrade('r', 11)) && (hasUpgrade('r', 12)) && (hasUpgrade('r', 13)) && (hasUpgrade('r', 14)) && (hasUpgrade('r', 15))},
            cost() { return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
    }
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.