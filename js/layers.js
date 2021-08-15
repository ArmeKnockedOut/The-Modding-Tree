addLayer("d", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "DW", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    branches: true,
    passiveGeneration() {
        if (hasUpgrade('c', 15)) return 100
        else return 0},
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
        if (hasUpgrade('s', 11)) mult = mult.times(upgradeEffect('s', 11))
        if (hasUpgrade('s', 12)) mult = mult.times(upgradeEffect('s', 12))
        if (hasUpgrade('sdw', 11)) mult = mult.times(upgradeEffect('sdw', 11))
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
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasUpgrade('c', 15) && ['c', 's', 'm', 'f', 'o', 'a', 'v', 'sm', 'sdw', 'ss'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
                if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
                if (hasUpgrade(this.layer, 15)) {savedUpgrades.push(15)}
                if (hasUpgrade(this.layer, 16)) {savedUpgrades.push(16)}
                if (hasUpgrade(this.layer, 17)) {savedUpgrades.push(17)}
                if (hasUpgrade(this.layer, 18)) {savedUpgrades.push(18)}
            }
            layerDataReset(this.layer, [])
            player[this.layer].upgrades = savedUpgrades
        }
    },
    upgrades: {
        11: {
            name: "Getting help",
            description: "Get more dirt cleaned based on the amount of dirt washers.",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
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
            description: "Get more dirt cleaned based on the amount of dirt cleaned.",
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
            description: "Get more dirt washers based on the amount of dirt cleaned.",
            cost: new Decimal(100),
            effect() {
                return player.points.add(1).pow(0.20)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        15: {
            name: "Work harder",
            description: "Get even more dirt cleaned based on the amount of dirt washers.",
            cost: new Decimal(300),
            effect() {
                return player[this.layer].points.add(1).pow(0.18)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        16: {
            name: "Power",
            description: "Get 5x more machines and sponges",
            cost: new Decimal(320000000)
        },
        17: {
            name: "This should have been earlier...",
            description: "Get more dirt washers based on the amount of dirt washers.",
            cost: new Decimal('1e7000'),
            unlocked() {return hasUpgrade('o', 11)}
        },
        18: {
            name: "no ideas",
            description: "Unlock acid upgrades",
            cost: new Decimal('e460000000'),
            unlocked() {return hasUpgrade('o', 11)}
        }
        
   },   
})
addLayer("m", {
   name: "machine",
   symbol: "M",
   position: 1,
   passiveGeneration() {
    if (hasMilestone('o', 1)) return 3
    else return 0},
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
        if (hasUpgrade('d', 16)) mult = mult.times(5)
        if (hasUpgrade('c', 13)) mult = mult.times(upgradeEffect('c', 13))
        if (hasUpgrade('f', 11)) mult = mult.times(upgradeEffect('f', 11))
        if (hasUpgrade('sm', 11)) mult = mult.times(upgradeEffect('sm', 11))
        if (hasUpgrade('a', 11)) mult = mult.times(upgradeEffect('a', 11))
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
    branches: ["d"],
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('o', 1) && ['c', 'o', 'f', 'a', 'v', 'sm', 'sdw', 'ss'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
                if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
            }
            layerDataReset(this.layer, [])
            player[this.layer].upgrades = savedUpgrades
        }
    },
    upgrades: {
        11: {
            name: "Machine help",
            description: "Machines boosts dirt cleaned production.",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            name: "Machine help 2",
            description: "Machines boost dirt washer production.",
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
        },
        14: {
            name: "again?",
            description: "Unlock a layer",
            cost: new Decimal('e378730000')
        }

    },
          
})  

addLayer("s", {
    name: "spong", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    passiveGeneration() {
        if (hasMilestone('o', 1)) return 3
        else return 0}, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "Yellow",
    requires: new Decimal(25000), // Can be a function that takes requirement increases into account
    resource: "Sponges", // Name of prestige currency
    baseResource: "dirt cleaned", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('d', 16)) mult = mult.times(5)
        if (hasUpgrade('c', 13)) mult = mult.times(upgradeEffect('c', 13))
        if (hasUpgrade('f', 12)) mult = mult.times(upgradeEffect('f', 12))
        if (hasUpgrade('a', 11)) mult = mult.times(upgradeEffect('a', 11))
        if (hasUpgrade('ss', 11)) mult = mult.times(upgradeEffect('ss', 11))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for Sponges", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    branches: ["d"],
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('o', 1) && ['c', 'o', 'f', 'a', 'v', 'sm', 'sdw', 'ss'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
                if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
            }
            layerDataReset(this.layer, [])
            player[this.layer].upgrades = savedUpgrades
        }
    },
    upgrades: {
        11: {
            name: "Clean method",
            description: "Machines use sponges instead of their bare hands. (makes machines stronger)",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(1).pow(0.28)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            name: "what...",
            description: "Sponges boost dirt washers gain.",
            cost: new Decimal(35),
            effect() {
                return player[this.layer].points.add(1).pow(0.20)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            name: "More mops",
            description: "Get more mops based on the amount of sponges.",
            cost: new Decimal('e8614200'),
            unlocked() {return hasUpgrade('o', 11)},
            effect() {
                return player[this.layer].points.add(1).pow(0.0000001)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        14: {
            name: "Beyond",
            description: "Unlock a new layer, mop gain 100x and dirt cleaned gain 1e200x",
            cost: new Decimal('e8614270'),
            unlocked() {return hasUpgrade('o', 11)}
        }

        
    },
})
addLayer("c", {
    name: "cleanew", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "CW", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    passiveGeneration() {
        if (hasMilestone('f', 1)) return 1
        else return 0}, 
    canBuyMax() {return hasUpgrade('c', 16)},
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "Blue",
    requires: new Decimal(1.79e308), // Can be a function that takes requirement increases into account
    resource: "Cleaner Water", // Name of prestige currency
    baseResource: "dirt cleaned", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Cleaner Water", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.points.gte(1e50)},
    branches: ["m","s"],
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('o', 1) && ['o', 'f', 'a', 'v', 'sm', 'sdw', 'ss'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
                if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
                if (hasUpgrade(this.layer, 15)) {savedUpgrades.push(15)}
                if (hasUpgrade(this.layer, 16)) {savedUpgrades.push(16)}
            }
            layerDataReset(this.layer, [])
            player[this.layer].upgrades = savedUpgrades
        }
    },
    upgrades: {
        11: {
            name: "Insane Boost",
            description: "Dirt cleaned gain 100x",
            cost: new Decimal(1)
        },

        12: {
            name: "Insane Boost 2",
            description: "Get an insane boost each cleaner water you buy.",
            cost: new Decimal(2),
            effect() {
                return player[this.layer].points.add(4.8).pow(4.8)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },

        13: {
            name: "Insane Boost 3",
            description: "Get more machines and sponges based on cleaner water.",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(5).pow(5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        14: {
            name: "Insane Boost 4",
            description: "Dirt cleaned gain 10000x",
            cost: new Decimal(5),
            
        },
        15: {
            name: "Passive Generation",
            description: "You get 10000% of dirt washers every second, and keep dirt washer upgrades on ALL resets.",
            cost: new Decimal(5),
        },
        16: {
            name: "finally",
            description: "You can buy max cleaner water.",
            cost: new Decimal(55)
        }
    }

})

addLayer("o", {
    name: "mo", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    passiveGeneration() {
        if (hasMilestone('f', 1)) return 1
        else return 0},  
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "White",
    requires: new Decimal(6), // Can be a function that takes requirement increases into account
    resource: "Mops", // Name of prestige currency
    baseResource: "cleaner water", // Name of resource prestige is based on
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('s', 13)) mult = mult.times(upgradeEffect('s', 13))
        if (hasUpgrade('s', 14)) mult = mult.times(100)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "o", description: "O: Reset for Mops", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.c.points.gte(1)},
    branches: ["c"],
    upgrades: {
        11: {
            name: "Secret revealed",
            description: "Unlock more dirt washer and sponge upgrades.",
            cost: new Decimal(1)
        },
        12: {
            name: "Giant boost",
            description: "Get more dirt cleaned based on the amount of mops.",
            cost: new Decimal(4),
            effect() {
                return player[this.layer].points.add(1).pow(1.34)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        }
    },
    milestones: {
        1: {
            requirementDescription: "1 Mop",
        effectDescription: "Gain 300% of machine and sponges gain and keep clearer water, sponges and machines upgrades on most resets. (kinda buggy when u get the milestone but afterwards it works)",
        done() { return player.o.points.gte(1) }
        }
    }
})

addLayer("f", {
    name: "fir", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    branches: true,
    passiveGeneration() {
        if (hasMilestone('f', 1)) return 1
        else return 0}, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "Orange",
    requires: new Decimal('e9476255'), // Can be a function that takes requirement increases into account
    resource: "Fire", // Name of prestige currency
    baseResource: "machines", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Reset for Fire", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade('s', 14)},
    branches: ['o'],
    upgrades: {
        11: {
            name: "logic -1000",
            description: "Get more machines based on the amount of fire.",
            cost: new Decimal(5),
            effect() {
                return player[this.layer].points.add(5).pow(5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            name: "logic -2000",
            description: "Get more sponges and dirt cleaned based on the amount of fire.",
            cost: new Decimal(235),
            effect() {
                return player[this.layer].points.add(5).pow(5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        }
    },
    milestones: {
        1: {
            requirementDescription: "1e60 Fire",
            effectDescription: "Automatically gain cleaner water, mops and fire.",
            done() { return player.f.points.gte(1e60) }
        }
    }
})

addLayer("a", {
    name: "aci", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3,
    branches: true,
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "Green",
    requires: new Decimal('1e1000'), // Can be a function that takes requirement increases into account
    resource: "Acid", // Name of prestige currency
    baseResource: "fire", // Name of resource prestige is based on
    baseAmount() {return player.f.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.000001, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for Acid", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.f.points.gte('1')},
    branches: ['f'],
    upgrades: {
        11: {
            name: "Old layer boost",
            description: "Get more machines and sponges based on the amount of acid",
            cost: new Decimal(2e23),
            unlocked() {return hasUpgrade('d', 18)},
            effect() {
                return player[this.layer].points.add(1).pow(1.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        12: {
            name: "Beyond... A new row...",
            description: "Unlock a new layer",
            cost: new Decimal('e2e16'),
            unlocked() {return hasUpgrade('d', 18)},
        }
        
    },
    milestones: {
        1: {
            requirementDescription: "1 Acid",
            effectDescription: "Unlock 2 layers.",
            done() { return player.a.points.gte(1) }
        }
    }
})

addLayer("v", {
    name: "vacuumc", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "VC", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    branches: true,
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "#1b1b1b",
    requires: new Decimal('e2.6e24'), // Can be a function that takes requirement increases into account
    resource: "Vacuum cleaners", // Name of prestige currency
    baseResource: "dirt cleaned", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.00000000000000000000001, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "v", description: "V: Reset for Vacuum Cleaners", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade('a', 12)},
    branches: ['o', 'f'],
    upgrades: {
        11: {
            name: "im running out of ideas",
            description: "Gain more dirt cleaned based on the amount of vacuum cleaners.",
            cost: (1),
            effect() {
                return player[this.layer].points.add(2).pow(12)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        }
    },
    milestones: {
        1: {
            requirementDescription: "1 Vacuum Cleaner",
            effectDescription: "Get 10,000% of super dirt washers, super machines and super sponges every second, and 1000x dirt cleaned gain.",
            done() { return player.v.points.gte(1) }
        }
    }
})

addLayer("sm", {
    name: "superm", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    branches: true,
    passiveGeneration() {
        if (hasMilestone('v', 1)) return 100
        else return 0}, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "#7e7e7e",
    requires: new Decimal('e11400000'), // Can be a function that takes requirement increases into account
    resource: "Super Machines", // Name of prestige currency
    baseResource: "machines", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.00005, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('sdw', 12)) mult = mult.times(upgradeEffect('sdw', 12))
        if (hasUpgrade('sm', 13)) mult = mult.times(upgradeEffect('sm', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for Super Machines", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasMilestone('a', 1)},
    branches: ['m'],
    upgrades: {
        11: {
            name: "This was expected...",
            description: "Gain WAY more machines based on the amount of super machines.",
            cost: (1),
            effect() {
                return player[this.layer].points.add(7).pow(7)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        12: {
            name: "Crossxproduction",
            description: "Get more super dirt washers based on the amount of super machines.",
            cost: new Decimal(25),
            effect() {
                return player[this.layer].points.add(1).pow(0.9)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        13: {
            name: "Selfboost",
            description: "Get more super machines based on the amount of super machines.",
            cost: new Decimal(1e10),
            effect() {
                return player[this.layer].points.add(1).pow(0.8)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        14: {
            name: "Crossxproduction",
            description: "Gain more super sponges based on the amount of super machines.",
            cost: new Decimal('e33400000'),
            unlocked() {return hasUpgrade('ss', 13)},
            effect() {
                return player[this.layer].points.add(1).pow(2.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        }
    }
})

addLayer("sdw", {
    name: "supdw", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SDW", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4,
    branches: true,
    passiveGeneration() {
        if (hasMilestone('v', 1)) return 100
        else return 0}, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "Brown",
    requires: new Decimal('e16000000'), // Can be a function that takes requirement increases into account
    resource: "Super Dirt Washers", // Name of prestige currency
    baseResource: "dirt washers", // Name of resource prestige is based on
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.00005, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('sm', 12)) mult = mult.times(upgradeEffect('sm', 12))
        if (hasUpgrade('sdw', 13)) mult = mult.times(upgradeEffect('sdw', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "L: Reset for Super Dirt Washers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasMilestone('a', 1)},
    branches: ['d'],
    upgrades: {
        11: {
            name: "This was expected...",
            description: "Gain WAY more dirt washers based on the amount of super dirt washers.",
            cost: (1),
            effect() {
                return player[this.layer].points.add(7).pow(7)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        12: {
            name: "Crossxproduction",
            description: "Get more super machines based on the amount of super dirt washers.",
            cost: (25),
            effect() {
                return player[this.layer].points.add(1).pow(0.9)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        13: {
            name: "Selfboost",
            description: "Get more super dirt washers based on the amount of super dirt washers.",
            cost: new Decimal(1e10),
            effect() {
                return player[this.layer].points.add(1).pow(0.8)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        14: {
            name: "Crossxproduction",
            description: "Gain more super sponges based on the amount of super dirt washers.",
            cost: new Decimal('e33400000'),
            unlocked() {return hasUpgrade('ss', 13)},
            effect() {
                return player[this.layer].points.add(1).pow(2.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        }
    }
})

addLayer("ss", {
    name: "supes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SS", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 5,
    branches: true,
    passiveGeneration() {
        if (hasMilestone('v', 1)) return 100
        else return 0}, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "Yellow",
    requires: new Decimal('e243850000'), // Can be a function that takes requirement increases into account
    resource: "Super Sponges", // Name of prestige currency
    baseResource: "sponges", // Name of resource prestige is based on
    baseAmount() {return player.s.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.00005, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('sdw', 14)) mult = mult.times(upgradeEffect('sdw', 14))
        if (hasUpgrade('sm', 14)) mult = mult.times(upgradeEffect('sm', 14))
        if (hasUpgrade('ss', 14)) mult = mult.times(upgradeEffect('ss', 14))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "n", description: "N: Reset for Super Sponges", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade('m', 14)},
    branches: ['s'],
    upgrades: {
        11: {
            name: "This was expected... I mean, really.",
            description: "Get more sponges based on the amount of super sponges.",
            cost: new Decimal(245),
            effect() {
                return player[this.layer].points.add(100).pow(356)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        12: {
            name: "Crossxproduction",
            description: "Gain more super dirt washers and super machines based on the amount of super sponges.",
            cost: new Decimal(400),
            effect() {
                return player[this.layer].points.add(100).pow(600)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        13: {
            name: "unlocked",
            description: "Unlock more super dirt washer and super machine upgrades.",
            cost: new Decimal(800000)
        },
        14: {
            name: "Selboost",
            description: "Gain more super sponges based on the amount of super sponges.",
            cost: new Decimal('e86420069'),
            effect() {
                return player[this.layer].points.add(1).pow(10)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        }
    }
})