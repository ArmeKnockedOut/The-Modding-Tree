addLayer("w", {
    name: "wood", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    branches: true,
  //  passiveGeneration() {
  //      if (hasUpgrade('c', 15)) return 100
  //      else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        woodplanks: new Decimal(0),
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text",
            function() { return 'You can spend your wood on any of the Buyables in The Crafting Zone below. Purchasing one of a Buyable makes the next purchase cost more. The final purchase of a purchase-limited Buyable is usually much more powerful than the previous purchases, so you should prioritize it. Each Buyable that does not directly boost the gain of another currency also gives +1 Wooden Plank on purchase. You gain 1.5x more Dirt per Wooden Plank.'},
            { "color": "gray", "font-size": "12px" }],
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.w.woodplanks, 2) + ' Wooden Planks, which are multiplying Dirt gain by ' + format(Decimal.pow(1.5, player.w.woodplanks)) + 'x'},
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.w.total) + ' total Wood.' },
            { "color": "white", "font-size": "16px" }],
        "milestones",
        "blank",
        ["display-text",
            function() { return 'THE CRAFTING TABLE' },
            { "color": "white", "font-size": "32px" }],
        "blank",
        ["row", [
            ["buyable", 11], ["blank", ["15px"]], ["buyable", 12]]],
        ["blank", "10px"],
        ["row", [
            ["buyable", 13], ["blank", ["15px"]], ["buyable", 14]]],
        ["blank", "10px"],
        ["row", [
            ["buyable", 15], ["blank", ["15px"]], ["buyable", 16]]],
        ["blank", "10px"],
        ["row", [
            ["buyable", 17], ["blank", ["15px"]], ["buyable", 18]]],
    ],
    onPrestige() {return player.upgtree.upgrades = []},
    color: "#8A3F1E",
    requires: new Decimal(5e14), //Can be a function that takes requirement increases into account
    resource: "Wood", // Name of prestige currency
    baseResource: "Seeds", // Name of resource prestige is based on
    baseAmount() {return player.s.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.28, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (getBuyableAmount('w', 17).gte(1)) mult = mult.times(buyableEffect('w', 17))
        mult = mult.times(Decimal.pow(2, player.sa.sandplanetslevels).times(player.sa.sandplanets.plus(1).log10().plus(1)))
        if (hasUpgrade('wa', 23)) mult = mult.times(player.wa.ceratophyllum_demersum.plus(1).pow(3).log(12).plus(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "w", description: "W: Reset for Wood", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['s', 't'],
    layerShown(){return player.t.total.gte(1) || player.w.total.gte(1) || player.sa.total.gte(1)},
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
    },
    bars: {
    },
    buyables: {
        11: {
            cost(x) {
            let cost = Decimal.pow(3, x)
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.plus(1, x).minus(1)
                return eff;
            },
            title: "+1 New Rock Upgrade",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Wood\n\
            Amount: " + player[this.layer].buyables[this.id] + "/5\n\
            Uses like Wood and stuff to unlock " + format(data.effect, 0) + " new Rock Upgrades\n\
            (You can only purchase the new Rock Upgrades after purchasing the previous five)"
            },
            canAfford() { return getBuyableAmount('w', 11).lt(5) && player[this.layer].points.gte(this.cost()) && (hasMilestone('w', 1))},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.w.woodplanks = player.w.woodplanks.plus(1)
            },   
        },
        12: {
            cost(x) {
            if (x.gte(100)) x = x.pow(2).div(70)
            let cost = Decimal.pow(2, x)
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.plus(1, x).minus(1)
                return eff;
            },
            title: "+1 Max Allocated Tree",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Wood\n\
            Amount: " + player[this.layer].buyables[this.id] + "\n\
            Also uses like Wood and stuff to increase the Allocated Trees cap by +" + format(data.effect, 0)
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) && (hasMilestone('w', 1))},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.w.woodplanks = player.w.woodplanks.plus(1)
            },   
        },
        13: {
            cost(x) {
            let cost = Decimal.mul(3.5, x)
            if (x.lte(0)) cost = new Decimal(1)
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.plus(1, x).minus(1)
                return eff;
            },
            title: "+1 New Flower",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Wood\n\
            Amount: " + player[this.layer].buyables[this.id] + "/3\n\
            Somehow also uses like Wood and stuff to unlock " + format(data.effect, 0) + " new Flowers"
            },
            canAfford() { return getBuyableAmount('w', 13).lt(3) && player[this.layer].points.gte(this.cost())},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.w.woodplanks = player.w.woodplanks.plus(1)
            },
            unlocked() {return (hasMilestone('w', 2))}   
        },
        14: {
            cost(x) {
            let cost = Decimal.pow(4, x)
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.plus(1, x).minus(1)
                return eff;
            },
            title: "+1 New Crop",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Wood\n\
            Amount: " + player[this.layer].buyables[this.id] + "/3\n\
            Somehow ALSO also uses like Wood and stuff to unlock " + format(data.effect, 0) + " new Crops"
            },
            canAfford() { return getBuyableAmount('w', 14).lt(3) && player[this.layer].points.gte(this.cost())},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.w.woodplanks = player.w.woodplanks.plus(1)
            },
            unlocked() {return (hasMilestone('w', 2))}   
        },
        15: {
            cost(x) {
            let cost = Decimal.pow(15, x)
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.pow(2, x)
                return eff;
            },
            title: "2x Dirt & Grass Blades",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Wood\n\
            Amount: " + player[this.layer].buyables[this.id] + "/25\n\
            somehowalsoalso also uses like Wood and stuff to multiply Dirt and Grass Blade gain by " + format(data.effect, 2) + "x"
            },
            canAfford() { return getBuyableAmount('w', 15).lt(25) && player[this.layer].points.gte(this.cost())},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return (hasMilestone('w', 3))}   
        },
        16: {
            cost(x) {
            let cost = Decimal.pow(20, x)
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.pow(2.5, x)
                return eff;
            },
            title: "2.5x Moss, Flowers & Seeds",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Wood\n\
            Amount: " + player[this.layer].buyables[this.id] + "/25\n\
            somehowalsoalsoalso also uses like Wood and stuff to multiply Moss, Flower and Seed gain by " + format(data.effect, 2) + "x"
            },
            canAfford() { return getBuyableAmount('w', 16).lt(25) && player[this.layer].points.gte(this.cost())},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return (hasMilestone('w', 3))}   
        },
        17: {
            cost(x) {
            let cost = Decimal.pow(10, x)
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.pow(1.75, x)
                return eff;
            },
            title: "1.75x Sand & Wood Gain",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Wood\n\
            Amount: " + player[this.layer].buyables[this.id] + "/35\n\
            somehowalsoalsoalsoalso also uses like Wood and stuff to multiply Sand and Wood gain by " + format(data.effect, 2) + "x"
            },
            canAfford() { return getBuyableAmount('w', 17).lt(35) && player[this.layer].points.gte(this.cost())},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return (hasMilestone('w', 4))}   
        },
        18: {
            cost(x) {
            let cost = Decimal.pow(8, x)
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.pow(2.25, x)
                return eff;
            },
            title: "2.25x Water Gain",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Wood\n\
            Amount: " + player[this.layer].buyables[this.id] + "/35\n\
            somehowalsoalsoalsoalsoalso also uses like Wood and stuff to multiply Water gain by " + format(data.effect, 2) + "x"
            },
            canAfford() { return getBuyableAmount('w', 18).lt(35) && player[this.layer].points.gte(this.cost())},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return (hasMilestone('w', 4))}   
        },
    },
    milestones: {
        1: {
            requirementDescription: "1 Total Wood",
            effectDescription: "Unlock the first two Buyables in The Crafting Table",
            done() { return player.w.total.gte(1) }
        },
        2: {
            requirementDescription: "3 Total Wood",
            effectDescription: "Unlock two more Buyables in The Crafting Table",
            done() { return player.w.total.gte(3) },
            unlocked() {return (hasMilestone('w', 1))}
        },
        3: {
            requirementDescription: "2,500 Total Wood",
            effectDescription: "Unlock another two Buyables in The Crafting Table",
            done() { return player.w.total.gte(2500) },
            unlocked() {return (hasMilestone('w', 2))}
        },
        4: {
            requirementDescription: "12,500,000 Total Wood",
            effectDescription: "Unlock another two Buyables in The Crafting Table, and you gain 100% of Flower gain every second.",
            done() { return player.w.total.gte(12500000) },
            unlocked() {return (hasMilestone('w', 3))}
        },
    }
})

//make plant grass mechanic, which removes all ur grass, but adds it to a second currency in grass which u cant use for upgrades or take back, but boosts power gain.