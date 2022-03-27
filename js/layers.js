addLayer("d", {
    name: "dirt", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration() {
        if (hasMilestone('g', 1)) return 1
        else return 0
    },
    color: "#25100e",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "dirt", // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('d', 12)) mult = mult.times(upgradeEffect('d', 12))
        if (hasUpgrade('d', 14)) mult = mult.times(upgradeEffect('d', 14))
        if (hasUpgrade('g', 11)) mult = mult.times(upgradeEffect('g', 11))
        if (hasUpgrade('s', 11)) mult = mult.times(upgradeEffect('s', 11))
        if (hasUpgrade('st', 11)) mult = mult.times(upgradeEffect('st', 11))
        if (hasMilestone('st', 2)) mult = mult.times(1.70)
        if (hasMilestone('st', 3)) mult = mult.times(1.35)
        if (hasMilestone('go', 1)) mult = mult.times(30)
        if (hasMilestone('c', 1)) mult = mult.times(12)
        if (hasMilestone('i', 1)) mult = mult.times(19)
        if (hasChallenge('i', 12)) mult = mult.times(20)
        if (inChallenge('i', 22)) mult = mult.div(500000)
        if (hasUpgrade('r', 11)) mult = mult.times(upgradeEffect('r', 11))
        if (hasUpgrade('sa', 11)) mult = mult.times(upgradeEffect('sa', 11))
        if (hasUpgrade('di', 11)) mult = mult.times(upgradeEffect('di', 11))
        if (hasUpgrade('r', 12)) mult = mult.times(10000)
        if (hasUpgrade('w', 11)) mult = mult.times(upgradeEffect('w', 11))
        if (hasUpgrade('l', 11)) mult = mult.times(upgradeEffect('l', 11))
        if (hasMilestone('l', 2)) mult = mult.times(9000)
        if (hasUpgrade('t', 31)) mult = mult.times(upgradeEffect('t', 31))
        if (hasMilestone('ic', 2)) mult = mult.times(100000)
        if (hasMilestone('ic', 3)) mult = mult.times(250000)
        if (hasMilestone('ic', 4)) mult = mult.times(1000000)
        if (hasMilestone('ic', 5)) mult = mult.times(1e50)
        if (hasUpgrade('f', 21)) mult = mult.times(upgradeEffect('f', 21))
        if (hasMilestone('ic', 7)) mult = mult.times(10000)
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('c', 1) || (hasMilestone('i', 1)) || (hasMilestone('go', 1)) && ['g', 's', 'st', 'i', 'c', 'go'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
                if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
            }
            let keep = []
if (hasMilestone('c', 3)) keep.push('milestones')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "D: Reset for dirt", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
        upgrades: {
            11: {
                title: "THE POWER!",
                description: "Get more power based on how much dirt you have.",
                cost: new Decimal(2),
                effect() {
                    return player[this.layer].points.add(2).pow(0.2)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            },
            12: {
                title: "How the hell does dirt gro-",
                description: "Get more dirt based on how much dirt you have.",
                cost: new Decimal(5),
                effect() {
                    if (inChallenge('i', 13)) return 1
                    if (inChallenge('i', 21)) return 1
                    if (inChallenge('go', 11)) return 1
                    return player[this.layer].points.add(2).pow(0.3)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            },
            13: {
                title: "How does dirt relate to this???",
                description: "Get more power based on how much power you have.",
                cost: new Decimal(20),
                effect() {
                    if (inChallenge('i', 13)) return 1
                    if (inChallenge('i', 21)) return 1
                    if (inChallenge('go', 11)) return 1
                    return player.points.add(1).pow(0.17)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            },
            14: {
                title: "I mean that makes sense a tiny bit...",
                description: "Get more dirt based on how much power you have.",
                cost: new Decimal(50),
                effect() {
                    if (inChallenge('i', 13)) return 1
                    if (inChallenge('i', 21)) return 1
                    if (inChallenge('go', 11)) return 1
                    return player.points.add(1).pow(0.08)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            }
        }
})

addLayer("s", {
    name: "sand", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration() {
        if (hasMilestone('ic', 6)) return 100
        else if (hasMilestone('r', 2)) return 1
        else if (hasMilestone('g', 2)) return 0.5
        else return 0
    },
    color: "Yellow",
    requires: new Decimal(250), // Can be a function that takes requirement increases into account
    resource: "sand", // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('g', 12)) mult = mult.times(upgradeEffect('g', 12))
        if (hasMilestone('st', 1)) mult = mult.times(1.15)
        if (hasUpgrade('st', 12)) mult = mult.times(upgradeEffect('st', 12))
        if (hasMilestone('st', 3)) mult = mult.times(1.35)
        if (hasUpgrade('st', 13)) mult = mult.times(upgradeEffect('st', 13))
        if (inChallenge('i', 22)) mult = mult.div(500000)
        if (hasUpgrade('w', 12)) mult = mult.times(upgradeEffect('w', 12))
        if (hasUpgrade('l', 12)) mult = mult.times(upgradeEffect('l', 12))
        if (hasMilestone('l', 2)) mult = mult.times(5000)
        if (hasUpgrade('t', 32)) mult = mult.times(upgradeEffect('t', 32))
        if (hasUpgrade('f', 23)) mult = mult.times(upgradeEffect('f', 23))
        if (hasMilestone('ic', 7)) mult = mult.times(10000)
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('c', 1) || (hasMilestone('i', 1)) || (hasMilestone('go', 1)) && ['st', 'i', 'c', 'go'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
            }
            let keep = []
if (hasMilestone('c', 3)) keep.push('milestones')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for sand", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    branches: ["d"],
    upgrades: {
        11: {
            title: "Makes sense...",
            description: "You get more dirt based on how much sand you have.",
            cost: new Decimal(1),
            effect() {
                if (inChallenge('i', 12)) return 1
                if (inChallenge('i', 21)) return 1
                if (inChallenge('go', 11)) return 1
                return player[this.layer].points.add(16).pow(0.31)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "wow more babies?",
            description: "You get more grass based on how much sand you have.",
            cost: new Decimal(4),
            effect() {
                if (inChallenge('i', 12)) return 1
                if (inChallenge('i', 21)) return 1
                if (inChallenge('go', 11)) return 1
                return player[this.layer].points.add(10).pow(0.44)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }
    },
})

addLayer("g", {
    name: "grass", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration() {
        if (hasMilestone('r', 2)) return 1
        else if (hasMilestone('g', 2)) return 0.5
        else return 0
    },
    color: "Green",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "grass", // Name of prestige currency
    baseResource: "dirt", // Name of resource prestige is based on
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.48, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('s', 12)) mult = mult.times(upgradeEffect('s', 12))
        if (hasMilestone('st', 1)) mult = mult.times(1.15)
        if (hasUpgrade('st', 12)) mult = mult.times(upgradeEffect('st', 12))
        if (hasMilestone('st', 3)) mult = mult.times(1.35)
        if (hasUpgrade('st', 13)) mult = mult.times(upgradeEffect('st', 13))
        if (inChallenge('i', 22)) mult = mult.div(500000)
        if (hasUpgrade('w', 13)) mult = mult.times(upgradeEffect('w', 13))
        if (hasUpgrade('l', 12)) mult = mult.times(upgradeEffect('l', 12))
        if (hasMilestone('l', 2)) mult = mult.times(3000)
        if (hasUpgrade('t', 32)) mult = mult.times(upgradeEffect('t', 32))
        if (hasUpgrade('f', 14)) mult = mult.times(upgradeEffect('f', 14))
        if (hasMilestone('ic', 7)) mult = mult.times(10000)
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('c', 1) || (hasMilestone('i', 1)) || (hasMilestone('go', 1)) && ['st', 'i', 'c', 'go'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
            }
            let keep = []
if (hasMilestone('c', 3)) keep.push('milestones')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: Reset for grass", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    branches: ["d"],
    upgrades: {
        11: {
            title: "Oh hell no no no-",
            description: "You get more dirt based on how much grass you have.",
            cost: new Decimal(1),
            effect() {
                if (inChallenge('i', 12)) return 1
                if (inChallenge('i', 21)) return 1
                if (inChallenge('go', 11)) return 1
                return player[this.layer].points.add(20).pow(0.26)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "what",
            description: "You get more sand based on how much grass you have.",
            cost: new Decimal(3),
            effect() {
                if (inChallenge('i', 12)) return 1
                if (inChallenge('i', 21)) return 1
                if (inChallenge('go', 11)) return 1
                return player[this.layer].points.add(10).pow(0.42)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }
    },
    milestones: {
        1: {
            requirementDescription: "50 Grass",
            effectDescription: "You gain 100% of dirt every second.",
            done() { return player.g.points.gte(50) }
        },
        2: {
            requirementDescription: "1500 Grass",
            effectDescription: "You gain 50% of grass and sand every second.",
            done() { return player.g.points.gte('1500') }
        }
    }
}),
addLayer("st", {
    name: "stone", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "St", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    canBuyMax() {return hasMilestone('st', 4) || (hasMilestone('c', 1)) || (hasMilestone('i', 1)) || (hasMilestone('go', 1))},
    autoPrestige() {return hasMilestone('st', 5) || (hasMilestone('go', 2)) || (hasMilestone('i', 2)) || (hasMilestone('c', 2))},
    resetsNothing() {return hasMilestone('st', 5) || (hasMilestone('go', 2)) || (hasMilestone('i', 2)) || (hasMilestone('c', 2))},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "Gray",
    requires: new Decimal("100000"), // Can be a function that takes requirement increases into account
    resource: "stone", // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasChallenge('go', 11)) mult = mult.div(1e9)
        if (hasUpgrade('w', 14)) mult = mult.div(player.w.points.plus(1))
        if (hasUpgrade('l', 13)) mult = mult.div(player.l.total.plus(1))
        if (hasUpgrade('t', 33)) mult = mult.div(player.t.points.plus(1))
        if (hasUpgrade('f', 33)) mult = mult.div(player.f.points.log10())
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('c', 1) || (hasMilestone('i', 1)) || (hasMilestone('go', 1)) && ['i', 'c', 'go'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
            }
            let keep = []
if (hasMilestone('c', 3)) keep.push('milestones')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "T: Reset for stone", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.points.gte(50000) || (hasUpgrade('st', 11)) || player.st.points.gte(1)},
    branches: ["g", "s"],
    upgrades: {
        11: {
            title: "Omg so unexpected",
            description: "You get more dirt based on how much stone you have.",
            cost: new Decimal(1),
            effect() {
                if (inChallenge('i', 13)) return 1
                if (inChallenge('i', 21)) return 1
                if (inChallenge('go', 11)) return 1
                return player[this.layer].points.add(10).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "cool",
            description: "You get more sand and grass based on how much stone you have.",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('st', 11)},
            effect() {
                if (inChallenge('i', 13)) return 1
                if (inChallenge('i', 21)) return 1
                if (inChallenge('go', 11)) return 1
                return player[this.layer].points.add(10).pow(0.4)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "woah i didnt think of this before",
            description: "You get more sand and grass based on how much dirt you have.",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade('st', 12)},
            effect() {
                if (inChallenge('i', 13)) return 1
                if (inChallenge('i', 21)) return 1
                if (inChallenge('go', 11)) return 1
                return player.d.points.add(1).pow(0.02)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }
    },
    milestones: {
        1: {
            requirementDescription: "2 total stone",
            effectDescription: "You get 15% more grass and sand.",
            done() { return player.st.total.gte(2) }
        },
        2: {
            requirementDescription: "4 total stone",
            effectDescription: "You get 70% more dirt.",
            done() { return player.st.total.gte(4) }
        },
        3: {
            requirementDescription: "5 total stone",
            effectDescription: "You get 35% more dirt, sand and grass.",
            done() { return player.st.total.gte(5) }
        },
        4: {
            requirementDescription: "7 total stone",
            effectDescription: "You can buy max stone. (very slow part starts)",
            done() { return player.st.total.gte(7) }
        },
        5: {
            requirementDescription: "100 stone",
            effectDescription: "Stone buys automatically and it resets nothing, and multiply power gain by 5x.",
            done() { return player.st.points.gte(100) }
        }
    }
}),

addLayer("i", {
    name: "iron", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration() {
        if (hasMilestone('sa', 2)) return 1
        else if (hasChallenge('i', 21)) return 0.12
        else return 0
    },
    color: "#99845b",
    requires: new Decimal("150"), // Can be a function that takes requirement increases into account
    resource: "iron", // Name of prestige currency
    baseResource: "stone", // Name of resource prestige is based on
    baseAmount() {return player.st.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('i', 12)) mult = mult.times(upgradeEffect('i', 12))
        if (hasUpgrade('c', 13)) mult = mult.times(upgradeEffect('c', 13))
        if (hasUpgrade('w', 15)) mult = mult.times(upgradeEffect('w', 15))
        if (hasUpgrade('l', 14)) mult = mult.times(upgradeEffect('l', 14))
        if (hasUpgrade('f', 41)) mult = mult.times(upgradeEffect('f', 41))
        if (hasMilestone('ic', 7)) mult = mult.times(10000)
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('r', 3) || (hasMilestone('sa', 2)) || (hasMilestone('di', 2)) && ['r', 'sa', 'di'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
                if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
            }
            let keep = []
if (hasMilestone('r', 1) || ('sa', 1) || ('di', 1)) keep.push('milestones')
if (hasMilestone('r', 5)) keep.push('challenges')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "i", description: "I: Reset for iron", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.st.points.gte(100) || (hasUpgrade('i', 11)) || player.i.points.gte(1) || (hasMilestone('r', 1)) || (hasMilestone('sa', 1)) || (hasMilestone('di', 1))},
    branches: ["st"],
    upgrades: {
        11: {
            title: "repetitive+",
            description: "Get more dirt based on how much iron you have.",
            cost: new Decimal(1),
            effect() {
                if (inChallenge('i', 21)) return 1
                return player[this.layer].points.add(5).pow(0.34)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "selfbooster",
            description: "Get more iron based on how much iron you have.",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade('i', 11)},
            effect() {
                if (inChallenge('i', 21)) return 1
                return player[this.layer].points.add(10).pow(0.7)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "wow",
            description: "Get more gold based on how much iron you have.",
            cost: new Decimal(350),
            unlocked() {return hasUpgrade('i', 12)},
            effect() {
                if (inChallenge('i', 21)) return 1
                return player[this.layer].points.add(10).pow(0.26)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            title: "omg",
            description: "Unlock iron CHALLENGES",
            cost: new Decimal(2000),
            unlocked() {return hasUpgrade('i', 13)}
        }
    },
    milestones: {
        1: {
            requirementDescription: "1 iron",
            effectDescription: "You keep row 1-3 upgrades, you can buy max stone and you get 19x more dirt.",
            done() { return player.i.points.gte(1) }
        },
        2: {
            requirementDescription: "4 iron",
            effectDescription: "Stone buys automatically and it resets nothing.",
            done() { return player.i.points.gte(4) }
        }
    },
    challenges: {
        12: {
            name: "Row2-GoPOOF!",
            challengeDescription: "Row 2's upgrades are useless.",
            canComplete: function() {return player.points.gte(1000000)},
            goalDescription: "1,000,000 Power",
            rewardDescription: "You get 20x more dirt.",
            unlocked() {return (hasUpgrade('i', 14))},
        },
        13: {
            name: "name",
            challengeDescription: "Row 1's upgrades 2-4 and row 3's upgrades are useless.",
            canComplete: function() {return player.points.gte(100000)},
            goalDescription: "100,000 Power",
            rewardDescription: "You get 5% of gold every second.",
            unlocked() {return (hasChallenge('i', 12))},
        },
        21: {
            name: "only a waiting game (doesnt matter how much of anything you have)",
            challengeDescription: "Every upgrade from row 1-4 is useless except dirt upgrade 1.",
            canComplete: function() {return player.points.gte(50000)},
            goalDescription: "50,000 Power",
            rewardDescription: "You get 12% of iron every second.",
            unlocked() {return (hasChallenge('i', 13))},
        },
        22: {
            name: "divaido",
            challengeDescription: "Dirt, sand and grass gain is divided by 500000x.",
            canComplete: function() {return player.d.points.gte(5000000)},
            goalDescription: "5,000,000 Dirt",
            rewardDescription: "You get 7% of coal every second.",
            unlocked() {return (hasChallenge('i', 21))},
        }
    }
}),
addLayer("c", {
    name: "coal", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration() {
        if (hasMilestone('r', 7)) return 1
        else if (hasChallenge('i', 22)) return 0.07
        else return 0
    },
    color: "#242424",
    requires: new Decimal("100"), // Can be a function that takes requirement increases into account
    resource: "coal", // Name of prestige currency
    baseResource: "stone", // Name of resource prestige is based on
    baseAmount() {return player.st.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('c', 12)) mult = mult.times(upgradeEffect('c', 12))
        if (hasUpgrade('go', 13)) mult = mult.times(upgradeEffect('go', 13))
        if (hasUpgrade('w', 15)) mult = mult.times(upgradeEffect('w', 15))
        if (hasUpgrade('l', 14)) mult = mult.times(upgradeEffect('l', 14))
        if (hasUpgrade('f', 41)) mult = mult.times(upgradeEffect('f', 41))
        if (hasMilestone('ic', 7)) mult = mult.times(10000)
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('r', 3) || (hasMilestone('sa', 2)) || (hasMilestone('di', 2)) && ['r', 'sa', 'di'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
            }
            let keep = []
if (hasMilestone('r', 1) || ('sa', 1) || ('di', 1)) keep.push('milestones')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for coal", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.st.points.gte(100) || (hasUpgrade('c', 11)) || player.c.points.gte(1) || (hasMilestone('r', 1)) || (hasMilestone('sa', 1)) || (hasMilestone('di', 1))},
    branches: ["st"],
    upgrades: {
        11: {
            title: "repetitive",
            description: "Get more dirt based on how much coal you have.",
            cost: new Decimal(1),
            effect() {
                if (inChallenge('i', 21)) return 1
                return player[this.layer].points.add(5).pow(0.28)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "selfbooster",
            description: "Get more coal based on how much coal you have.",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade('c', 11)},
            effect() {
                if (inChallenge('i', 21)) return 1
                return player[this.layer].points.add(10).pow(0.8)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "wow",
            description: "Get more iron based on how much coal you have.",
            cost: new Decimal(500),
            unlocked() {return hasUpgrade('c', 12)},
            effect() {
                if (inChallenge('i', 21)) return 1
                return player[this.layer].points.add(10).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }
    },
    milestones: {
        1: {
            requirementDescription: "1 coal",
            effectDescription: "You keep row 1-3 upgrades you can buy max stone and you get 12x more dirt.",
            done() { return player.c.points.gte(1) }
        },
        2: {
            requirementDescription: "4 coal",
            effectDescription: "Stone buys automatically and it resets nothing.",
            done() { return player.c.points.gte(4) }
        },
        3: {
            requirementDescription: "10 coal",
            effectDescription: "You keep row 1-3 milestones.",
            done() { return player.c.points.gte(10) }
        }
    },

}),
addLayer("go", {
    name: "gold", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Go", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration() {
        if (hasMilestone('di', 2)) return 1
        else if (hasChallenge('i', 13)) return 0.05
        else return 0
    },
    color: "Gold",
    requires: new Decimal("200"), // Can be a function that takes requirement increases into account
    resource: "gold", // Name of prestige currency
    baseResource: "stone", // Name of resource prestige is based on
    baseAmount() {return player.st.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('go', 12)) mult = mult.times(upgradeEffect('go', 12))
        if (hasUpgrade('i', 13)) mult = mult.times(upgradeEffect('i', 13))
        if (hasUpgrade('w', 15)) mult = mult.times(upgradeEffect('w', 15))
        if (hasUpgrade('l', 14)) mult = mult.times(upgradeEffect('l', 14))
        if (hasUpgrade('f', 32)) mult = mult.times(upgradeEffect('f', 32))
        if (hasMilestone('ic', 7)) mult = mult.times(10000)
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('r', 3) || (hasMilestone('sa', 2)) || (hasMilestone('di', 2)) && ['r', 'sa', 'di'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
            }
            let keep = []
if (hasMilestone('r', 1) || ('sa', 1) || ('di', 1)) keep.push('milestones')
if (hasMilestone('r', 6)) keep.push('challenges')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "o", description: "O: Reset for gold", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.st.points.gte(100) || (hasUpgrade('go', 11)) || player.go.points.gte(1) || (hasMilestone('r', 1)) || (hasMilestone('sa', 1)) || (hasMilestone('di', 1))},
    branches: ["st"],
    upgrades: {
        11: {
            title: "repetitive++",
            description: "Get more dirt based on how much gold you have.",
            cost: new Decimal(1),
            effect() {
                if (inChallenge('i', 21)) return 1
                return player[this.layer].points.add(5).pow(0.4)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "selfbooster",
            description: "Get more gold based on how much gold you have.",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade('go', 11)},
            effect() {
                if (inChallenge('i', 21)) return 1
                return player[this.layer].points.add(10).pow(0.6)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "wow",
            description: "Get more coal based on how much gold you have.",
            cost: new Decimal(25),
            unlocked() {return hasUpgrade('go', 12)},
            effect() {
                if (inChallenge('i', 21)) return 1
                return player[this.layer].points.add(10).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }
    },
    milestones: {
        1: {
            requirementDescription: "1 gold",
            effectDescription: "You keep row 1-3 upgrades, you can buy max stone and you get 30x more dirt.",
            done() { return player.go.points.gte(1) }
        },
        2: {
            requirementDescription: "4 gold",
            effectDescription: "Stone buys automatically and it resets nothing.",
            done() { return player.go.points.gte(4) }
        },
        3: {
            requirementDescription: "1e10 gold",
            effectDescription: "Unlock a gold challenge.",
            done() { return player.go.points.gte(1e10) }
        }
    },
    challenges: {
        11: {
            name: "Row-4-relying",
            challengeDescription: "Row 1-3's upgrades are useless except dirt upgrade 1.",
            canComplete: function() {return player.d.points.gte(1.5e9)},
            goalDescription: "1.5e9 Dirt",
            rewardDescription: "Unlock more ores (wowie row 5 already), and stone is 1e9x cheaper.",
            unlocked() {return (hasMilestone('go', 3))},
        }
    }

}),

addLayer("r", {
    name: "ruby", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration() {
        if (hasMilestone('l', 2)) return 1
        else if (hasMilestone('r', 8)) return 0.25
        else return 0
    },
    color: "#8a0000",
    requires: new Decimal(3000), // Can be a function that takes requirement increases into account
    resource: "rubies", // Name of prestige currency
    baseResource: "stone", // Name of resource prestige is based on
    baseAmount() {return player.st.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.483, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('r', 13)) mult = mult.times(upgradeEffect('r', 13))
        if (hasUpgrade('r', 14)) mult = mult.times(upgradeEffect('r', 14))
        if (hasUpgrade('w', 21)) mult = mult.times(upgradeEffect('w', 21))
        if (hasMilestone('t', 2)) mult = mult.times(50000)
        if (hasUpgrade('t', 24)) mult = mult.times(player.t.heat)
        if (hasUpgrade('f', 13)) mult = mult.times(upgradeEffect('f', 13))
        if (hasMilestone('ic', 7)) mult = mult.times(10000)
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('t', 2) && ['t', 'ic', 'f'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
                if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
            }
            let keep = []
if (hasMilestone('t', 1)) keep.push('milestones')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reset for rubies", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasChallenge('go', 11)) || (hasMilestone('r', 1)) || (hasMilestone('sa', 1)) || (hasMilestone('di', 1))},
    branches: ["st"],
    milestones: {
        1: {
            requirementDescription: "1 total ruby",
            effectDescription: "You keep row 4 milestones.",
            done() { return player.r.points.gte(1) }
        },
        2: {
            requirementDescription: "2 total rubies",
            effectDescription: "You gain 100% of grass and sand every second instead of 50%.",
            done() { return player.r.total.gte(2) }
        },
        3: {
            requirementDescription: "3 total rubies",
            effectDescription: "Keep row 4 upgrades.",
            done() { return player.r.total.gte(3)
             }
        },
        5: {
            requirementDescription: "4 total rubies",
            effectDescription: "Keep iron challenges.",
            done() { return player.r.total.gte(4)
             }
        },
        6: {
            requirementDescription: "5 total rubies",
            effectDescription: "Keep gold challenges.",
            done() { return player.r.total.gte(5)
             }
        },
        7: {
            requirementDescription: "10 rubies",
            effectDescription: "You get 100% of coal every second.",
            done() { return player.r.points.gte(10)
             }
        },
        8: {
            requirementDescription: "1e65 rubies",
            effectDescription: "You get 25% of rubies, sapphires and diamonds every second.",
            done() { return player.r.points.gte(1e65)
             }
        },
    },
    upgrades: {
        11: {
            title: "yo even more repetitive",
            description: "Get more dirt based on how many rubies you have.",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(3).pow(0.9)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "boost",
            description: "Get 10000x more dirt.",
            cost: new Decimal(10),
        },
        13: {
            title: "self-explanatory",
            description: "Power boosts ruby gain.",
            cost: new Decimal(25),
            unlocked() {return (hasUpgrade('di', 11))},
            effect() {
                return player.points.add(1).pow(0.06)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            title: "self-explanatory also",
            description: "Rubies boost ruby gain.",
            cost: new Decimal(100),
            unlocked() {return (hasUpgrade('di', 12))},
            effect() {
                return player[this.layer].points.add(1).pow(0.82)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    }
}),
addLayer("di", {
    name: "diamond", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Di", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration() {
        if (hasMilestone('l', 2)) return 1
        else if (hasMilestone('r', 8)) return 0.25
        else return 0
    },
    color: "#00ffe7",
    requires: new Decimal(5000), // Can be a function that takes requirement increases into account
    resource: "diamonds", // Name of prestige currency
    baseResource: "stone", // Name of resource prestige is based on
    baseAmount() {return player.st.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.51, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('di', 12)) mult = mult.times(upgradeEffect('di', 12))
        if (hasUpgrade('di', 13)) mult = mult.times(upgradeEffect('di', 13))
        if (hasUpgrade('w', 23)) mult = mult.times(upgradeEffect('w', 23))
        if (hasMilestone('t', 2)) mult = mult.times(50000)
        if (hasUpgrade('t', 14)) mult = mult.times(player.t.cold)
        if (hasUpgrade('f', 31)) mult = mult.times(upgradeEffect('f', 31))
        if (hasMilestone('ic', 7)) mult = mult.times(10000)
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('t', 2) && ['t', 'ic', 'f'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
            }
            let keep = []
if (hasMilestone('t', 1)) keep.push('milestones')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "l: Reset for diamonds", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasChallenge('go', 11)) || (hasMilestone('r', 1)) || (hasMilestone('sa', 1)) || (hasMilestone('di', 1))},
    branches: ["st"],
    milestones: {
        1: {
            requirementDescription: "1 diamond",
            effectDescription: "You keep row 4 milestones.",
            done() { return player.di.points.gte(1) }
        },
        2: {
            requirementDescription: "20 diamonds",
            effectDescription: "You get 100% of gold every second.",
            done() { return player.di.points.gte(20) }
        },
    },
    upgrades: {
        11: {
            title: "yo even more repetitive",
            description: "Get more dirt based on how many diamonds you have.",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(10).pow(0.97)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "self-explanatory",
            description: "Power boosts diamond gain.",
            cost: new Decimal(25),
            unlocked() {return (hasUpgrade('di', 11))},
            effect() {
                return player.points.add(1).pow(0.03)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "self-explanatory also",
            description: "Diamonds boost diamond gain.",
            cost: new Decimal(50),
            unlocked() {return (hasUpgrade('di', 12))},
            effect() {
                return player[this.layer].points.add(1).pow(0.7)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    }

}),
addLayer("sa", {
    name: "sapphire", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Sa", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration() {
        if (hasMilestone('l', 2)) return 1
        else if (hasMilestone('r', 8)) return 0.25
        else return 0
    },
    color: "#2e5baf",
    requires: new Decimal(4000), // Can be a function that takes requirement increases into account
    resource: "sapphires", // Name of prestige currency
    baseResource: "stone", // Name of resource prestige is based on
    baseAmount() {return player.st.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.492, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('sa', 12)) mult = mult.times(upgradeEffect('sa', 12))
        if (hasUpgrade('sa', 13)) mult = mult.times(upgradeEffect('sa', 13))
        if (hasUpgrade('w', 22)) mult = mult.times(upgradeEffect('w', 22))
        if (hasMilestone('t', 2)) mult = mult.times(50000)
        if (hasUpgrade('t', 34)) mult = mult.times(upgradeEffect('t', 34))
        if (hasUpgrade('f', 22)) mult = mult.times(upgradeEffect('f', 22))
        if (hasMilestone('ic', 7)) mult = mult.times(10000)
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('t', 2) && ['t', 'ic', 'f'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
            }
            let keep = []
if (hasMilestone('t', 1)) keep.push('milestones')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for sapphires", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasChallenge('go', 11)) || (hasMilestone('r', 1)) || (hasMilestone('sa', 1)) || (hasMilestone('di', 1))},
    branches: ["st"],
    milestones: {
        1: {
            requirementDescription: "1 sapphire",
            effectDescription: "You keep row 4 milestones.",
            done() { return player.sa.points.gte(1) }
        },
        2: {
            requirementDescription: "15 sapphires",
            effectDescription: "Get 100% of iron every second.",
            done() { return player.sa.points.gte(15) }
        },

    },
    upgrades: {
        11: {
            title: "yo even more repetitive",
            description: "Get more dirt based on how many sapphires you have.",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(6.5).pow(0.93)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "self-explanatory",
            description: "Power boosts sapphire gain.",
            cost: new Decimal(25),
            unlocked() {return (hasUpgrade('sa', 11))},
            effect() {
                return player.points.add(1).pow(0.04)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "self-explanatory also",
            description: "Sapphires boost sapphire gain.",
            cost: new Decimal(60),
            unlocked() {return (hasUpgrade('sa', 12))},
            effect() {
                return player[this.layer].points.add(1).pow(0.8)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    }

}),

addLayer("w", {
    name: "water", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    canBuyMax() {return (hasUpgrade('w', 14))},
    autoPrestige() {return (hasMilestone('w', 1))},
    resetsNothing() {return (hasMilestone('w', 1))},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#244beb",
    requires: new Decimal(1e50), // Can be a function that takes requirement increases into account
    resource: "water", // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.9, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('w', 24)) mult = mult.div(player.di.points.plus(1))
        if (hasUpgrade('w', 25)) mult = mult.div(player.d.points.plus(1))
        if (hasUpgrade('l', 15)) mult = mult.div(player.l.total.plus(1))
        mult = mult.div(player.t.cold.log10())
        if (hasUpgrade('f', 42)) mult = mult.div(player.f.points.log10())
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('c', 1) || (hasMilestone('i', 1)) || (hasMilestone('go', 1)) && ['i', 'c', 'go', 'r', 'sa', 'di'].includes(resettingLayer)) {
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
            let keep = []
if (hasMilestone('c', 3)) keep.push('milestones')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "w", description: "W: Reset for water", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.points.gte(1e50) || player.w.points.gte(1) || (hasUpgrade('w', 11))  || (hasMilestone('w', 1))},
    branches: ["g", "s"],
    upgrades:{
        11: {
            title: "W1",
            description: "Best water boosts dirt gain.",
            cost: new Decimal(5),
            effect() {
                return player[this.layer].best.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "W2",
            description: "Best water boosts sand gain.",
            cost: new Decimal(7),
            effect() {
                return player[this.layer].best.add(1).pow(0.6)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "W3",
            description: "Best water boosts grass gain.",
            cost: new Decimal(7),
            effect() {
                return player[this.layer].best.add(1).pow(0.4)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            title: "W4",
            description: "Best water boosts stone gain and you can buy max water.",
            cost: new Decimal(10),
            effect() {
                return player[this.layer].best.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        15: {
            title: "W5",
            description: "Best water boosts row 4's gain.",
            cost: new Decimal(20),
            effect() {
                return player[this.layer].best.add(1).pow(0.4)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        21: {
            title: "W6",
            description: "Best water boosts rubies gain.",
            cost: new Decimal(55),
            unlocked() {return (hasMilestone('w', 1))},
            effect() {
                return player[this.layer].best.add(1).pow(0.7)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        22: {
            title: "W7",
            description: "Best water boosts sapphires gain.",
            cost: new Decimal(60),
            unlocked() {return (hasMilestone('w', 1))},
            effect() {
                return player[this.layer].best.add(1).pow(0.72)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        23: {
            title: "W8",
            description: "Best water boosts diamonds gain.",
            cost: new Decimal(69),
            unlocked() {return (hasMilestone('w', 1))},
            effect() {
                return player[this.layer].best.add(1).pow(0.75)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        24: {
            title: "W9",
            description: "Diamonds boost water gain.",
            cost: new Decimal(300),
            unlocked() {return (hasMilestone('w', 1))},
            effect() {
                return player.di.points.add(1).pow(0.08)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        25: {
            title: "W10",
            description: "Dirt boosts water gain.",
            cost: new Decimal(500),
            unlocked() {return (hasMilestone('w', 1))},
            effect() {
                return player.d.points.add(1).pow(0.0047)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }
    },
    milestones: {
        1: {
            requirementDescription: "50 water",
            effectDescription: "Unlock a new row of upgrades, water buys automatically and it resets nothing.",
            done() { return player.w.points.gte(50) }
        }
    }
 }),


addLayer("l", {
    name: "lava", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3,
    canBuyMax() {return (hasUpgrade('l', 21))},
    autoPrestige() {return (hasUpgrade('l', 21))},
    resetsNothing() {return (hasUpgrade('l', 21))},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ff6800",
    requires: new Decimal('1e150'), // Can be a function that takes requirement increases into account
    resource: "lava", // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('l', 21)) mult = mult.div(player.w.best.plus(1))
        if (hasUpgrade('l', 22)) mult = mult.div(player.d.best.plus(1))
        mult = mult.div(player.t.heat.log10())
        if (hasUpgrade('f', 34)) mult = mult.div(player.f.points.log10())
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            savedUpgrades = []
            if (hasMilestone('c', 1) || (hasMilestone('i', 1)) || (hasMilestone('go', 1)) && ['i', 'c', 'go', 'r', 'sa', 'di'].includes(resettingLayer)) {
                if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
                if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
                if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
                if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
                if (hasUpgrade(this.layer, 15)) {savedUpgrades.push(15)}
                if (hasUpgrade(this.layer, 21)) {savedUpgrades.push(21)}
                if (hasUpgrade(this.layer, 22)) {savedUpgrades.push(22)}
            }
            let keep = []
if (hasMilestone('c', 3)) keep.push('milestones')
layerDataReset(this.layer, keep)
            player[this.layer].upgrades = savedUpgrades
        }
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for lava", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.points.gte(1e50) || player.l.points.gte(1) || (hasUpgrade('l', 11))  || (hasMilestone('l', 1)) || player.w.points.gte(1) || (hasUpgrade('w', 11))},
    branches: ["g", "s"],
    upgrades: {
        11: {
            title: "L1",
            description: "Total lava boosts dirt gain.",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].total.add(1).pow(0.8)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "L2",
            description: "Total lava boosts grass and sand gain.",
            cost: new Decimal(5),
            effect() {
                return player[this.layer].total.add(1).pow(0.74)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "L3",
            description: "Total lava boosts stone gain.",
            cost: new Decimal(10),
            effect() {
                return player[this.layer].total.add(1).pow(0.6)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            title: "L4",
            description: "Total lava boosts row 4's gain.",
            cost: new Decimal(12),
            effect() {
                return player[this.layer].total.add(1).pow(0.76)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        15: {
            title: "L5",
            description: "Total lava boosts water gain.",
            cost: new Decimal(15),
        },
        21: {
            title: "L6",
            description: "Best water boosts lava gain and lava is bought automatically and it resets nothing.",
            cost: new Decimal(15),
            unlocked() {return (hasUpgrade('l', 15))},
        },
        22: {
            title: "L7",
            description: "Best dirt boosts lava gain.",
            cost: new Decimal(15),
            unlocked() {return (hasUpgrade('l', 15))}
        }
    },
    milestones: {
        1: {
            requirementDescription: "40 total lava",
            effectDescription: "Multiply power gain by 15000x.",
            done() { return player.l.total.gte(40) }
        },
        2: {
            requirementDescription: "17 lava",
            effectDescription: "Get 100% of rubies, sapphires and diamonds every second and multiply dirt gain by 9000x, sand gain by 5000x and grass gain by 3000x.",
            done() { return player.l.points.gte(17) }
        }
    }
})

addLayer("t", {
    name: "temperature", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    canBuyMax() {return (hasUpgrade('t', 12))},
    autoPrestige() {return (hasMilestone('t', 3))},
    resetsNothing() {return (hasMilestone('t', 3))},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        cold: new Decimal(1),
        heat: new Decimal(1)
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.t.cold) + ' cold, which is boosting water gain based by its amount but its log10' },
            {"font-size": "16px"}],
        ["display-text",
            function() { return 'You have ' + format(player.t.heat) + ' heat, which is boosting lava gain based by its amount but its log10' },
            {"font-size": "16px"}],
        "blank",
        "milestones",
        "blank",
        "blank",
        "upgrades",
        "blank",
        "blank",
        "challenges"
    ],
    update() {player.t.cold = player.t.cold.add(0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001)
              player.t.heat = player.t.heat.add(0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001)},
    color: "White",
    requires: new Decimal('1e250'), // Can be a function that takes requirement increases into account
    resource: "temperature", // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.998, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        player.t.cold = player.t.cold.add(player.t.points.div(20))
        player.t.heat = player.t.heat.add(player.t.points.div(20))
        if (hasUpgrade('t', 11)) player.t.cold = player.t.cold.add(0.20)
        if (hasUpgrade('t', 21)) player.t.heat = player.t.heat.add(0.25)
        if (hasUpgrade('t', 12)) mult = mult.div(player.t.cold.log10())
        if (hasUpgrade('t', 13)) player.t.cold = player.t.cold.add(1.5)
        if (hasUpgrade('t', 23)) player.t.heat = player.t.heat.add(2.5)
        if (hasChallenge('t', 12)) mult = mult.div(player.st.points.times(1e308))
        if (hasUpgrade('f', 24)) mult = mult.div(player.f.points.log10())
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "T: Reset for temperature", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.points.gte(1e200) || player.t.points.gte(1) || (hasUpgrade('t', 11))  || (hasMilestone('t', 1))},
    branches: ["w", "l"],
    upgrades: {
        11: {
            fullDisplay() {return "Add 4 to cold gain per second...... Cost: 300 cold"},
            currencyLocation() {return player.t},
            currencyInternalName: "cold",
            cost: new Decimal(300)
        },
        21: {
            fullDisplay() {return "Add 5 to heat gain per second...... Cost: 300 heat"},
            currencyLocation() {return player.t},
            currencyInternalName: "heat",
            cost: new Decimal(300)
        },
        31: {
            title: "temperature upgrades have names",
            description: "Get more dirt based on how much temperature you have.",
            unlocked() {return (hasUpgrade('t', 11))},
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(2).pow(0.99)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            fullDisplay() {return "You get more temperature based on how much cold you have but its log 10 and you can buy max temperature....... Cost: 1000 cold"},
            unlocked() {return (hasUpgrade('t', 11))},
            currencyLocation() {return player.t},
            currencyInternalName: "cold",
            cost: new Decimal(1000)
        },
        22: {
            fullDisplay() {return "You get more coal based on how much heat you have....... Cost: 1500 heat"},
            unlocked() {return (hasUpgrade('t', 21))},
            currencyLocation() {return player.t},
            currencyInternalName: "heat",
            cost: new Decimal(1500)
        },
        32: {
            title: "temperature upgrades have names",
            description: "Get more grass and sand based on how much temperature you have.",
            unlocked() {return (hasUpgrade('t', 31))},
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(2).pow(0.99)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            fullDisplay() {return "Add 30 to cold gain per second....... Cost: 2350 cold"},
            unlocked() {return (hasUpgrade('t', 12))},
            currencyLocation() {return player.t},
            currencyInternalName: "cold",
            cost: new Decimal(2350)
        },
        23: {
            fullDisplay() {return "Add 50 to heat gain per second....... Cost: 2700 heat"},
            unlocked() {return (hasUpgrade('t', 22))},
            currencyLocation() {return player.t},
            currencyInternalName: "heat",
            cost: new Decimal(2700)
        },
        33: {
            title: "temperature upgrades have names",
            description: "Get more stone on how much temperature you have.",
            unlocked() {return (hasUpgrade('t', 32))},
            cost: new Decimal(10),
            effect() {
                return player[this.layer].points.add(2).pow(0.99)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            fullDisplay() {return "Cold boosts diamond gain............. Cost: 50000 cold"},
            unlocked() {return (hasUpgrade('t', 13))},
            currencyLocation() {return player.t},
            currencyInternalName: "cold",
            cost: new Decimal(50000)
        },
        24: {
            fullDisplay() {return "Heat boosts ruby gain............... Cost: 70000 heat"},
            unlocked() {return (hasUpgrade('t', 23))},
            currencyLocation() {return player.t},
            currencyInternalName: "heat",
            cost: new Decimal(70000)
        },
        34: {
            title: "it was 3 times so no more same name lol",
            description: "Temperature boosts sapphire gain.",
            unlocked() {return (hasUpgrade('t', 33))},
            cost: new Decimal(100),
            effect() {
                return player[this.layer].points.add(2).pow(0.99)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }
    },
    milestones: {
        1: {
            requirementDescription: "1 temperature",
            effectDescription: "You keep row 5 milestones.",
            done() { return player.t.points.gte(1) }
        },
        2: {
            requirementDescription: "50 total temperature",
            effectDescription: "You keep row 5 upgrades, and you get 50000x more rubies, sapphires and diamonds.",
            done() { return player.t.total.gte(50) }
        },
        3: {
            requirementDescription: "500 temperature",
            effectDescription: "Temperature buys automatically and it resets nothing.",
            done() { return player.t.points.gte(500) }
        },
    },
    challenges: {
        12: {
            name: "possible",
            challengeDescription: "Power gain is log 10.",
            canComplete: function() {return player.points.gte(30000)},
            goalDescription: "30000 Power",
            onEnter() {return player.points = player.points.minus(player.points)},
            rewardDescription: "You get more temperature based on how much stone you have.",
            unlocked() {return (hasMilestone('ic', 1))},
        },
        13: {
            name: "possible 2",
            challengeDescription: "The more power you have the less you gain of it.",
            canComplete: function() {return player.points.gte('1e500')},
            goalDescription: "1e500 Power",
            onEnter() {return player.points = player.points.minus(player.points)},
            rewardDescription: "You get more fire based on how much heat you have. (obviously log10)",
            unlocked() {return (hasMilestone('ic', 1))},
        },
        22: {
            name: "the not so final challenge",
            challengeDescription: "Fire upgrades with an effect description are useless.",
            canComplete: function() {return player.points.gte('1e880')},
            goalDescription: "1e880 Power",
            onEnter() {return player.points = player.points.minus(player.points), player.d.points = player.d.points.minus(player.d.points),
                player.g.points = player.g.points.minus(player.g.points), player.s.points = player.s.points.minus(player.s.points), player.w.points = player.w.points.minus(player.w.points), player.st.points = player.st.points.minus(player.st.points),
                player.l.points = player.l.points.minus(player.l.points), player.c.points = player.c.points.minus(player.c.points), player.i.points = player.i.points.minus(player.i.points), player.go.points = player.go.points.minus(player.go.points),
                player.r.points = player.r.points.minus(player.r.points), player.sa.points = player.sa.points.minus(player.sa.points), player.di.points = player.di.points.minus(player.di.points)},
            rewardDescription: "You gain 20000x more fire",
            unlocked() {return (hasMilestone('ic', 1))},
        },
    }
}),
addLayer("ic", {
    name: "ice", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Ic", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#000f0f",
    requires: new Decimal('1e500'), // Can be a function that takes requirement increases into account
    resource: "ice", // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.007, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('f', 12)) mult = mult.times(upgradeEffect('f', 12))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "n", description: "N: Reset for ice", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.points.gte('1e500') || player.ic.points.gte(1) || (hasUpgrade('ic', 11))  || (hasMilestone('ic', 1))},
    branches: ["w", "t"],
    milestones: {
        1: {
            requirementDescription: "1 ice",
            effectDescription: "Unlock temperature challenges.",
            done() { return player.ic.points.gte(1) }
        },
        2: {
            requirementDescription: "2 ice",
            effectDescription: "You get 100000x more dirt",
            done() { return player.ic.points.gte(2) }
        },
        3: {
            requirementDescription: "5 ice",
            effectDescription: "You get 250000x more dirt",
            done() { return player.ic.points.gte(5) }
        },
        4: {
            requirementDescription: "10 ice",
            effectDescription: "You get 1000000x more dirt",
            done() { return player.ic.points.gte(10) }
        },
        5: {
            requirementDescription: "100 ice",
            effectDescription: "You get 1e50x more dirt",
            done() { return player.ic.points.gte(100) }
        },
        6: {
            requirementDescription: "1e20 ice",
            effectDescription: "You get 10000% of sand every second",
            done() { return player.ic.points.gte(1e20) }
        },
        7: {
            requirementDescription: "1e100 ice",
            effectDescription: "You gain 10000x more of every non-static layer in row 1-5",
            done() { return player.ic.points.gte(1e100) }
        },
    }    
}),
addLayer("f", {
    name: "fire", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        blue_fire: new Decimal(10)
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.f.blue_fire) + ' blue fire particles, which are boosting fire gain based by its amount but its log10' },
            {"font-size": "16px"}],
        "blank",
        "milestones",
        "blank",
        "blank",
        "upgrades"
    ],
    update() {player.f.blue_fire = player.f.blue_fire.add(0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001)},
    color: "#ffad0e",
    requires: new Decimal('1e600'), // Can be a function that takes requirement increases into account
    resource: "fire", // Name of prestige currency
    baseResource: "power", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.009, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        player.f.blue_fire = player.f.blue_fire.add(player.f.points.div(50))
        mult = mult.times(player.f.blue_fire.log10())
        if (hasChallenge('t', 13)) mult = mult.times(player.t.heat.log10())
        if (hasUpgrade('f', 11)) mult = mult.times(upgradeEffect('f', 11))
        if (hasUpgrade('f', 43)) mult = mult.times(player.t.points)
        if (hasUpgrade('f', 44)) mult = mult.times(player.st.points)
        if (hasChallenge('t', 22)) mult = mult.times(20000)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Reset for fire", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.points.gte('1e500') || player.f.points.gte(1) || (hasUpgrade('f', 11))  || (hasMilestone('f', 1)) || player.ic.points.gte(1)},
    branches: ["l", "t"],
    upgrades: {
        11: {
            title: "F upgrady boi",
            description: "Fire boosts its own gain.",
            cost: new Decimal(1),
            effect() {
                if (inChallenge('t', 22)) return 1
                return player[this.layer].points.add(2).pow(0.6)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "im so bored of putting titles to upgrades",
            description: "Fire boosts ice gain.",
            cost: new Decimal(8),
            unlocked() {return (hasUpgrade('f', 11))},
            effect() {
                if (inChallenge('t', 22)) return 1
                return player[this.layer].points.add(2).pow(0.8)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        21: {
            title: "im so bored of putting titles to upgrades",
            description: "Fire boosts dirt gain.",
            cost: new Decimal(7),
            unlocked() {return (hasUpgrade('f', 11))},
            effect() {
                if (inChallenge('t', 22)) return 1
                return player[this.layer].points.add(2).pow(0.99999)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "im not so bored of putting titles to upgrades?",
            description: "Fire boosts ruby gain.",
            cost: new Decimal(333),
            unlocked() {return (hasUpgrade('f', 12))},
            effect() {
                if (inChallenge('t', 22)) return 1
                return player[this.layer].points.add(2).pow(0.999)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        22: {
            title: "im not so bored of putting titles to upgrades?",
            description: "Fire boosts sapphire gain.",
            cost: new Decimal(333),
            unlocked() {return (hasUpgrade('f', 21))},
            effect() {
                if (inChallenge('t', 22)) return 1
                return player[this.layer].points.add(2).pow(0.999)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        31: {
            title: "im not so bored of putting titles to upgrades?",
            description: "Fire boosts diamond gain.",
            cost: new Decimal(333),
            unlocked() {return (hasUpgrade('f', 21))},
            effect() {
                if (inChallenge('t', 22)) return 1
                return player[this.layer].points.add(2).pow(0.999)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            title: "too bored",
            description: "Fire boosts grass gain.",
            cost: new Decimal(1e15),
            unlocked() {return (hasUpgrade('f', 13))},
            effect() {
                if (inChallenge('t', 22)) return 1
                return player[this.layer].points.add(2).pow(0.4)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        23: {
            title: "too bored",
            description: "Fire boosts sand gain.",
            cost: new Decimal(1e15),
            unlocked() {return (hasUpgrade('f', 22))},
            effect() {
                if (inChallenge('t', 22)) return 1
                return player[this.layer].points.add(2).pow(0.45)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        32: {
            title: "too bored",
            description: "Fire boosts gold gain.",
            cost: new Decimal(1e15),
            unlocked() {return (hasUpgrade('f', 31))},
            effect() {
                if (inChallenge('t', 22)) return 1
                return player[this.layer].points.add(2).pow(0.999)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        41: {
            title: "too bored",
            description: "Fire boosts iron and coal gain.",
            cost: new Decimal(1e15),
            unlocked() {return (hasUpgrade('f', 31))},
            effect() {
                if (inChallenge('t', 22)) return 1
                return player[this.layer].points.add(2).pow(0.999)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        24: {
            title: "title name here",
            description: "Fire boosts temperature gain but its log 10.",
            cost: new Decimal(1e20),
            unlocked() {return (hasUpgrade('f', 23))},
        },
        33: {
            title: "title name here",
            description: "Fire boosts stone gain but its log 10.",
            cost: new Decimal(1e20),
            unlocked() {return (hasUpgrade('f', 32))},
        },
        42: {
            title: "title name here",
            description: "Fire boosts water gain but its log 10.",
            cost: new Decimal(1e20),
            unlocked() {return (hasUpgrade('f', 41))},
        },
        34: {
            title: "insert disc A",
            description: "Fire boosts lava gain but its log 10.",
            cost: new Decimal(1e22),
            unlocked() {return (hasUpgrade('f', 33))},
        },
        43: {
            title: "insert disc B",
            description: "Temperature boosts fire gain.",
            cost: new Decimal(1e22),
            unlocked() {return (hasUpgrade('f', 42))},
        },
        44: {
            title: "insert disc C",
            description: "Stone boosts fire gain.",
            cost: new Decimal(1e22),
            unlocked() {return (hasUpgrade('f', 43))}
        },
    }
})

//glass #0f0f0f