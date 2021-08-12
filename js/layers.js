addLayer("d", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "DW", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "Brown",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Dirt Washers", // Name of prestige currency
    baseResource: "dirt cleaned", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('d', 14)) mult = mult.times(upgradeEffect('d', 14))
        if (hasUpgrade('m', 12)) mult = mult.times(upgradeEffect('m', 12))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "D: Reset for Dirt Washers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            name: "Getting help",
            description: "Get more dirt cleaned based on the amount of dirt washers.",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(1).pow(0.6)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
           
        12: {
            name: "Motivation",
            description: "Triple the dirt cleaned gain.",
            cost: new Decimal(8),
          },

        13: {
            name: "Dirt slides down",
            description: "Get more dirt cleaned based on dirt cleaned.",
            cost: new Decimal(50),
            effect() {
                return player.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            gainMult() {
                let mult = new Decimal(1)
                if (hasUpgrade('d', 13)) mult = mult.times(upgradeEffect('d', 13))
                return mult
            },
        },
        14: {
            name: "Famous",
            description: "Get more dirt washers based on dirt cleaned",
            cost: new Decimal(100),
            effect() {
                return player.points.add(1).pow(0.20)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        15: {
            name: "Work harder",
            description: "Get even more dirt cleaned based on dirt washers.",
            cost: new Decimal(300),
            effect() {
                return player[this.layer].points.add(1).pow(0.18)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        }
   },   
})
addLayer("m", {
   name: "machine",
   symbol: "M",
   position: 0,
   startData() { return {
       unlocked: false,
       points: new Decimal(0)
   }},
   color: "Gray",
   requires: new Decimal(25000),
   resource: "Machines",
   baseResource: "dirt cleaned",
   baseAmount() {return player.points},
   type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('m', 13)) mult = mult.times(upgradeEffect('m', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for Machines", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            name: "Machine help",
            description: "Machines boosts dirt cleaned production",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            name: "Machine help 2",
            description: "Machines boost dirt washer production",
            cost: new Decimal(15),
            effect() {
                return player[this.layer].points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        
            
        },
        13: {
            name: "Learning",
            description: "Points boost machine gain.",
            cost: new Decimal(100),
            effect() {
                return player.points.add(1).pow(0.05)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        }

    },
          
})  