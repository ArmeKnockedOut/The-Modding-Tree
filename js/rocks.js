addLayer("r", {
    name: "rocks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    branches: true,
    resetsNothing() {return (hasMilestone('s', 1))},
    canBuyMax() {return (hasMilestone('s', 1))},
    autoPrestige() {return (hasMilestone('s', 1))},
    autoUpgrade() {return (hasMilestone('f', 2))},
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
    effect(){
        return Decimal.pow(player.d.rockmultiplier, player[this.layer].total)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
    color: "#8C9387",
    requires: new Decimal(250000), // Can be a function that takes requirement increases into account
    resource: "Rocks", // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2.71, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (player.r.total.gte(30)) mult = mult.times(player.r.total.pow(1.25))
        if (player.r.total.gte(1200)) mult = mult.times(player.r.total.pow(20))
        if (player.r.total.gte(2500)) mult = mult.times(player.r.total.pow(35))
        if (hasUpgrade('d', 102)) player.d.rockmultiplier = player.r.oldrockmultiplier.plus(0.065)
        if (hasUpgrade('d', 112)) player.d.rockmultiplier = player.r.oldrockmultiplier.plus(0.115)
        if (hasUpgrade('d', 122)) player.d.rockmultiplier = player.r.oldrockmultiplier.plus(0.165)
        if (hasUpgrade('d', 132)) player.d.rockmultiplier = player.r.oldrockmultiplier.plus(0.215)
        if (hasUpgrade('d', 142)) player.d.rockmultiplier = player.r.oldrockmultiplier.plus(0.315)
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
    layerShown(){return hasUpgrade('g', 15) || player.r.total.gte(1) || player.m.total.gte(1)},
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
            canClick() {if (hasMilestone('f', 2)) return false
            else return true},
            onClick() {return player.r.points = player.r.total,
                   player.r.upgrades = []}
         }
    },
    upgrades: {
        11: {
          title: "You seem off.",
          description: "You get 50% more power.",
          cost() {if (hasMilestone('f', 2)) return new Decimal(1)
          else return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
        12: {
            title: "Is something bothering you?",
            description: "You get 40% more Dirt.",
            cost() {if (hasMilestone('f', 2)) return new Decimal(2)
            else return new Decimal(1).times(player.r.upgrades.length).plus(1)}
        },
        13: {
            title: "Please talk to me.",
            description: "You get 15% more Grass Blades.",
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
    }
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.