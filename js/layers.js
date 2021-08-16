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
        if (hasUpgrade('d', 21)) mult = mult.times(upgradeEffect('d', 21))
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
                if (hasUpgrade(this.layer, 19)) {savedUpgrades.push(19)}
                if (hasUpgrade(this.layer, 21)) {savedUpgrades.push(21)}
            }
            layerDataReset(this.layer, [])
            player[this.layer].upgrades = savedUpgrades
        }
    },
    upgrades: {
        11: {
            title: "Getting help",
            description: "Get more dirt cleaned based on the amount of dirt washers.",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
           
        12: {
            title: "Motivation",
            description: "Triple the dirt cleaned gain.",
            cost: new Decimal(8),
          },

        13: {
            title: "Dirt slides down",
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
            title: "Famous",
            description: "Get more dirt washers based on the amount of dirt cleaned.",
            cost: new Decimal(100),
            effect() {
                return player.points.add(1).pow(0.20)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        15: {
            title: "Work harder",
            description: "Get even more dirt cleaned based on the amount of dirt washers.",
            cost: new Decimal(300),
            effect() {
                return player[this.layer].points.add(1).pow(0.18)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        16: {
            title: "Power",
            description: "Get 5x more machines and sponges",
            cost: new Decimal(320000000)
        },
        17: {
            title: "This should have been earlier...",
            description: "Get more dirt washers based on the amount of dirt washers.",
            cost: new Decimal('1e7000'),
            unlocked() {return hasUpgrade('o', 11)}
        },
        18: {
            title: "Discovery",
            description: "Unlock acid upgrades",
            cost: new Decimal('e117000000'),
            unlocked() {return hasUpgrade('o', 11)}
        },
        19: {
            title: "This REALLY should have been earlier",
            description: "Gain more dirt washers based on the amount of acid and acid gain 100% per second.",
            cost: new Decimal('e150676000'),
            unlocked() {return hasMilestone('v', 3)},
            effect() {
                return player.a.points.add(1).pow(300)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "No logic",
            description: "Gain more dirt washers based on the amount of fire.",
            cost: new Decimal('e150676100'),
            unlocked() {return hasMilestone('v', 3)},
            effect() {
                return player.f.points.add(1).pow(0.0001)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
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
            title: "Machine help",
            description: "Machines boosts dirt cleaned production.",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "Machine help 2",
            description: "Machines boost dirt washer production.",
            cost: new Decimal(15),
            effect() {
                return player[this.layer].points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        
            
        },
        13: {
            title: "Learning",
            description: "Points boost machine gain.",
            cost: new Decimal(100),
            effect() {
                return player.points.add(1).pow(0.05)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        14: {
            title: "again?",
            description: "Unlock a layer",
            cost: new Decimal('e96500000')
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
            title: "Different Cleaning Method",
            description: "Dirt washers use sponges instead of their bare hands. (get more dirt washers)",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(1).pow(0.28)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "Crossxproduction",
            description: "Sponges boost dirt washers gain.",
            cost: new Decimal(35),
            effect() {
                return player[this.layer].points.add(1).pow(0.20)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "More mops",
            description: "Get more mops based on the amount of sponges.",
            cost: new Decimal('e8614200'),
            unlocked() {return hasUpgrade('o', 11)},
            effect() {
                return player[this.layer].points.add(1).pow(0.0000001)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        14: {
            title: "Beyond",
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
            title: "Insane Boost",
            description: "Dirt cleaned gain 100x",
            cost: new Decimal(1)
        },

        12: {
            title: "Insane Boost 2",
            description: "Get an insane boost each cleaner water you buy.",
            cost: new Decimal(2),
            effect() {
                return player[this.layer].points.add(4.8).pow(4.8)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },

        13: {
            title: "Insane Boost 3",
            description: "Get more machines and sponges based on cleaner water.",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(5).pow(5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        14: {
            title: "Insane Boost 4",
            description: "Dirt cleaned gain 10000x",
            cost: new Decimal(5),
            
        },
        15: {
            title: "Passive Generation",
            description: "You get 10000% of dirt washers every second, and keep dirt washer upgrades on ALL resets.",
            cost: new Decimal(5),
        },
        16: {
            title: "finally",
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
            title: "Secret revealed",
            description: "Unlock more dirt washer and sponge upgrades.",
            cost: new Decimal(1)
        },
        12: {
            title: "Giant boost",
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
            title: "logic -1000",
            description: "Get more machines based on the amount of fire.",
            cost: new Decimal(5),
            effect() {
                return player[this.layer].points.add(5).pow(5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "logic -2000",
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
    passiveGeneration() {
        if (hasUpgrade('d', 19)) return 1
        else return 0}, 
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
            title: "Old layer boost",
            description: "Get more machines and sponges based on the amount of acid",
            cost: new Decimal(1e11),
            unlocked() {return hasUpgrade('d', 18)},
            effect() {
                return player[this.layer].points.add(1).pow(0.9)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        12: {
            title: "Beyond... A new row...",
            description: "Unlock a new layer",
            cost: new Decimal('1e13'),
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
    passiveGeneration() {
        if (hasMilestone('v', 2)) return 1
        else return 0}, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "#1b1b1b",
    requires: new Decimal('e263420000'), // Can be a function that takes requirement increases into account
    resource: "Vacuum cleaners", // Name of prestige currency
    baseResource: "dirt cleaned", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.00000000000000000000001, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('v', 12)) mult = mult.times(upgradeEffect('v', 12))
        if (hasUpgrade('v', 13)) mult = mult.times(upgradeEffect('v', 13))
        if (hasUpgrade('v', 14)) mult = mult.times(upgradeEffect('v', 14))
        if (hasUpgrade('v', 15)) mult = mult.times(upgradeEffect('v', 15))
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
            title: "That makes sense...",
            description: "Gain more dirt cleaned based on the amount of vacuum cleaners.",
            cost: (1),
            effect() {
                return player[this.layer].points.add(1.1).pow(50)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        12: {
            title: "Self boost",
            description: "Get more vacuum cleaners based on the amount of vacuum cleaners.",
            cost: new Decimal(100),
            effect() {
                return player[this.layer].points.add(1).pow(0.6)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        13: {
            title: "Revert",
            description: "Gain more vacuum cleaners based on the amount of super sponges.",
            cost: new Decimal(25000),
            effect() {
                return player.ss.points.add(1).pow(0.00000001)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        14: {
            title: "Revert 2",
            description: "Gain more vacuum cleaners based on the amount of super machines.",
            cost: new Decimal(69420),
            effect() {
                return player.sm.points.add(1).pow(0.0000001)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        15: {
            title: "Revert 3",
            description: "Gain more vacuum cleaners based on the amount of super dirt washers.",
            cost: new Decimal(1e13),
            effect() {
                return player.sdw.points.add(1).pow(0.0000001)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        }
    },
    milestones: {
        1: {
            requirementDescription: "1 Vacuum Cleaner",
            effectDescription: "Get 100% of super dirt washers, super machines and super sponges every second, and 1000x dirt cleaned gain.",
            done() { return player.v.points.gte(1) }
        },
        2: {
            requirementDescription: "3 Vacuum Cleaners",
            effectDescription: "Gain 100% of vacuum cleaners every second",
            done() { return player.v.points.gte(3) }
        },
        3: {
            requirementDescription: "1e20 Vacuum Cleaners",
            effectDescription: "Unlock more super dirt washer and dirt washer upgrades.",
            done() { return player.v.points.gte(1e20) }
        }
    }
})

addLayer("sm", {
    name: "superm", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    branches: true,
    passiveGeneration() {
        if (hasMilestone('v', 1)) return 1
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
            title: "This was expected...",
            description: "Gain more machines based on the amount of super machines.",
            cost: (1),
            effect() {
                return player[this.layer].points.add(1).pow(0.8)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        12: {
            title: "Crossxproduction",
            description: "Get more super dirt washers based on the amount of super machines.",
            cost: new Decimal(25),
            effect() {
                return player[this.layer].points.add(1).pow(0.9)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        13: {
            title: "Selfboost",
            description: "Get more super machines based on the amount of super machines.",
            cost: new Decimal(1e10),
            effect() {
                return player[this.layer].points.add(1).pow(0.8)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        14: {
            title: "Crossxproduction",
            description: "Gain more super sponges based on the amount of super machines.",
            cost: new Decimal('e33348000'),
            unlocked() {return hasUpgrade('ss', 13)},
            effect() {
                return player[this.layer].points.add(1).pow(0.6)
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
        if (hasMilestone('v', 1)) return 1
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
        if (hasUpgrade('sdw', 15)) mult = mult.times(upgradeEffect('sdw', 15))
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
            title: "This was expected...",
            description: "Gain more dirt washers based on the amount of super dirt washers.",
            cost: (1),
            effect() {
                return player[this.layer].points.add(7).pow(0.9)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        12: {
            title: "Crossxproduction",
            description: "Get more super machines based on the amount of super dirt washers.",
            cost: (25),
            effect() {
                return player[this.layer].points.add(1).pow(0.9)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        13: {
            title: "Selfboost",
            description: "Get more super dirt washers based on the amount of super dirt washers.",
            cost: new Decimal(1e10),
            effect() {
                return player[this.layer].points.add(1).pow(0.8)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        14: {
            title: "Crossxproduction",
            description: "Gain more super sponges based on the amount of super dirt washers.",
            cost: new Decimal('e33348000'),
            unlocked() {return hasUpgrade('ss', 13)},
            effect() {
                return player[this.layer].points.add(1).pow(0.9)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        15: {
            title: "Even more logic",
            description: "Gain more super dirt washers based on the amount of fire.",
            cost: new Decimal('e33350000'),
            unlocked() {return hasMilestone('v', 3)},
            effect() {
                return player.f.points.add(1).pow(0.0001)
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
        if (hasMilestone('v', 1)) return 1
        else return 0}, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "Yellow",
    requires: new Decimal('e78070000'), // Can be a function that takes requirement increases into account
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
            title: "This was expected... I mean, really.",
            description: "Get more sponges based on the amount of super sponges.",
            cost: new Decimal(245),
            effect() {
                return player[this.layer].points.add(1).pow(0.99)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        12: {
            title: "Crossxproduction",
            description: "Gain more super dirt washers and super machines based on the amount of super sponges.",
            cost: new Decimal(400),
            effect() {
                return player[this.layer].points.add(100).pow(0.9)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        },
        13: {
            title: "Unlocked",
            description: "Unlock more super dirt washer and super machine upgrades.",
            cost: new Decimal(15000)
        },
        14: {
            title: "Selboost",
            description: "Gain more super sponges based on the amount of super sponges.",
            cost: new Decimal('e30013000'),
            effect() {
                return player[this.layer].points.add(1).pow(0.9)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }
        }
    }
})

addLayer("g", {
    name: "glove", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    branches: true,
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "Red",
    requires: new Decimal('1e24'), // Can be a function that takes requirement increases into account
    resource: "Gloves", // Name of prestige currency
    baseResource: "Vacuum Cleaners", // Name of resource prestige is based on
    baseAmount() {return player.v.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.005, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: Reset for Gloves", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return false},
    branches: ['v'],
})

addLayer("ha", {
    name: "hoa", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "HA", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    branches: true,
    startData() { return {
        unlocked: false,
		points: new Decimal(0)
    }},
    color: "White",
    requires: new Decimal('1e24'), // Can be a function that takes requirement increases into account
    resource: "Hot air", // Name of prestige currency
    baseResource: "Vacuum Cleaners", // Name of resource prestige is based on
    baseAmount() {return player.v.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.005, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "h", description: "H: Reset for Hot Air", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return false},
    branches: ['v'],
})