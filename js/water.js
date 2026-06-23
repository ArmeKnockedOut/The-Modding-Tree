addLayer("w", {
    name: "water", 
    symbol: "W",
    position: 2,
    branches: true,
    onPrestige() {if (!hasAchievement('ach', 55)) return player.ach.achievements.push(55)},
    /*passiveGeneration() {
        if (player.tog.passiveAtomGen == true) return 0.01
        else return 0},
    automate() {if (player.tog.autobuyAtomUpg == true && !inChallenge('i', 13)) buyUpgrade('a', 11), buyUpgrade('a', 12), buyUpgrade('a', 13), buyUpgrade('a', 14), buyUpgrade('a', 15), buyUpgrade('a', 16), buyUpgrade('a', 17), buyUpgrade('a', 18), buyUpgrade('a', 19), buyUpgrade('a', 20), buyUpgrade('a', 21), buyUpgrade('a', 22), buyUpgrade('a', 23), buyUpgrade('a', 24), buyUpgrade('a', 25), buyUpgrade('a', 26), buyUpgrade('a', 27), buyUpgrade('a', 28), buyUpgrade('a', 29), buyUpgrade('a', 30), buyUpgrade('a', 31), buyUpgrade('a', 32), buyUpgrade('a', 33), buyUpgrade('a', 34), buyUpgrade('a', 35), buyUpgrade('a', 36), buyUpgrade('a', 37), buyUpgrade('a', 38), buyUpgrade('a', 39), buyUpgrade('a', 40), buyUpgrade('a', 41), buyUpgrade('a', 42), buyUpgrade('a', 43), buyUpgrade('a', 44), buyUpgrade('a', 45)},*/
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
        droplets: new Decimal(0),
        dropletsmult: new Decimal(1),
        droplets32pow: new Decimal(1),
        upg32base: new Decimal(1e16),
        row2upgrades: new Decimal(0),
        row2maxupgrades: new Decimal(1),
        row3upgrades: new Decimal(0),
        row3maxupgrades: new Decimal(1),
        row4upgrades: new Decimal(0),
        row4maxupgrades: new Decimal(1),
        row5upgrades: new Decimal(0),
        row5maxupgrades: new Decimal(1),
        row6upgrades: new Decimal(0),
        row6maxupgrades: new Decimal(1),
        row7upgrades: new Decimal(0),
        row7maxupgrades: new Decimal(1),
        row8upgrades: new Decimal(0),
        row8maxupgrades: new Decimal(1),
        row9upgrades: new Decimal(0),
        row9maxupgrades: new Decimal(1),
    }},
    update(diff) {
        player.w.upg32base = new Decimal(1e16)
        if (hasUpgrade('w', 29)) player.w.upg32base = new Decimal(1e32)
        if (hasUpgrade('i', 52)) player.w.upg32base = new Decimal(1e16).pow(player.w.droplets32pow)
        if (hasUpgrade('i', 52) && hasUpgrade('w', 29)) player.w.upg32base = new Decimal(1e32).pow(player.w.droplets32pow)

        player.w.droplets = player.w.total.pow(0.8).div(5)
        player.w.dropletsmult = player.w.droplets.plus(1).log(1.7).plus(1).pow(0.6)
        player.w.droplets32pow = player.w.dropletsmult.log2().plus(1)
        if (player.d.boost9active == 1 && player.d.points.gte(1)) player.w.droplets32pow = player.w.droplets32pow.times(player.d.boost9mult)

        player.w.row2maxupgrades = new Decimal(1)
        player.w.row3maxupgrades = new Decimal(1)
        player.w.row4maxupgrades = new Decimal(1)
        player.w.row5maxupgrades = new Decimal(1)
        player.w.row6maxupgrades = new Decimal(1)
        player.w.row7maxupgrades = new Decimal(1)
        player.w.row8maxupgrades = new Decimal(1)
        player.w.row9maxupgrades = new Decimal(1)
        if (hasUpgrade('i', 47)) player.w.row3maxupgrades = player.w.row3maxupgrades.plus(1)
        if (hasUpgrade('i', 47)) player.w.row9maxupgrades = player.w.row9maxupgrades.plus(1)
        if (hasUpgrade('i', 48)) player.w.row4maxupgrades = player.w.row4maxupgrades.plus(1)
        if (hasUpgrade('i', 48)) player.w.row5maxupgrades = player.w.row5maxupgrades.plus(1)
        if (hasUpgrade('i', 49)) player.w.row2maxupgrades = player.w.row2maxupgrades.plus(1)
        if (hasUpgrade('i', 49)) player.w.row6maxupgrades = player.w.row6maxupgrades.plus(1)
        if (hasUpgrade('i', 50)) player.w.row7maxupgrades = player.w.row7maxupgrades.plus(2)
        if (hasUpgrade('i', 51)) player.w.row8maxupgrades = player.w.row8maxupgrades.plus(2)
        if (hasUpgrade('i', 52)) player.w.row5maxupgrades = player.w.row5maxupgrades.plus(1)
        if (hasUpgrade('i', 52)) player.w.row6maxupgrades = player.w.row6maxupgrades.plus(1)
        if (hasUpgrade('i', 52)) player.w.row7maxupgrades = player.w.row7maxupgrades.plus(1)
        if (hasUpgrade('i', 53)) player.w.row3maxupgrades = player.w.row3maxupgrades.plus(1)
        if (hasUpgrade('i', 53)) player.w.row4maxupgrades = player.w.row4maxupgrades.plus(2)
        if (hasUpgrade('i', 53)) player.w.row5maxupgrades = player.w.row5maxupgrades.plus(2)
        if (hasUpgrade('i', 54)) player.w.row7maxupgrades = player.w.row7maxupgrades.plus(2)
        if (hasUpgrade('i', 54)) player.w.row8maxupgrades = player.w.row8maxupgrades.plus(1)
        if (hasUpgrade('i', 54)) player.w.row9maxupgrades = player.w.row9maxupgrades.plus(1)
    },
   /* milestonePopups() {if (hasMilestone('i', 9)) return false
        else return true
    },*/
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        "h-line",
        "blank",
        ["display-text",
            function() {if (hasUpgrade('i', 52)) return 'Your total Water makes up <h3 style="color: #7FB1E0">' + format(player.w.droplets, 2) + '</h3> Water Droplets, which boost the First Upgrade Effect by <h3 style="color: #7FB1E0">' + format(player.w.dropletsmult) + '</h3>x, and raise the Water Upgrade 3-2 effect to the power of ^<h3 style="color: #7FB1E0">' + format(player.w.droplets32pow) + '</h3>'
                else return 'Your total Water makes up <h3 style="color: #7FB1E0">' + format(player.w.droplets, 2) + '</h3> Water Droplets, which boost the First Upgrade Effect by <h3 style="color: #7FB1E0">' + format(player.w.dropletsmult) + '</h3>x'},
            { "color": "#dfdfdf", "font-size": "16px" }],
        "blank",
        ["h-line", "470px"],
        "blank",
        ["display-text",
            function() { return 'Respeccing causes a Row 3 reset!'},
            { "color": "gray", "font-size": "14px" }],
        ["blank", "5px"],
        ["clickable", 10],
        "blank",
        ["h-line", "350px"],
        "blank",
         ["display-text",
            function() {return 'You can only buy <h3 style="color: #4e50d1">1</h3> upgrade from each row.'
            },
            { "color": "#dfdfdf", "font-size": "16px" }],
        "blank",
        ["upgrade-tree", [ [11],[12,13],[14,15,16],[17,18,19,20],[21,22,23,24,25],[26,27,28],[29,30,31,32,33,34],[35,36,37,38],[39,40,41] ] ],
    ],
    color: "#4e50d1",
    nodeStyle() {
        if (player.w.unlocked || player.w.total.gte(1)) return { 
            animation: "pulseColor3 2.5s infinite alternate ease-in-out",
            "background-origin": "border-box",
        }
    },
    requires: new Decimal('1e365'),  
    resource: "Water", 
    baseResource: "power", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.02125, 
    gainMult() { 
        mult = new Decimal(1)
        if (hasUpgrade('w', 14)) mult = mult.times(upgradeEffect('w', 14))
        if (player.d.total.gte(1) && player.d.boost6active == 1) mult = mult.times(player.d.boost6mult)
        if (hasUpgrade('i', 47)) mult = mult.times(3)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 2,
    hotkeys: [
        {key: "w", description: "W: Reset for Water", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['m'],
    layerShown(){return (hasUpgrade('i', 46) || player.w.total.gte(1))},
    /*doReset(resettingLayer) {
    // Stage 1, almost always needed, makes resetting this layer not delete your progress
    if (layers[resettingLayer].row <= this.row) return;

    // Stage 2, track which specific subfeatures you want to keep, e.g. Upgrade 11, Challenge 32, Buyable 12
    let keptMilestones = []
    if (hasMilestone('i', 0) && hasMilestone('a', 0)) keptMilestones.push(0)
    if (hasMilestone('i', 0) && hasMilestone('a', 7)) keptMilestones.push(7)
    if (hasMilestone('i', 1) && hasMilestone('a', 5)) keptMilestones.push(5)
    if (hasMilestone('i', 2) && hasMilestone('a', 8)) keptMilestones.push(8)
    if (hasMilestone('i', 10) && hasMilestone('a', 2)) keptMilestones.push(2)
    if (hasMilestone('i', 10) && hasMilestone('a', 3)) keptMilestones.push(3)
    if (hasMilestone('i', 10) && hasMilestone('a', 9)) keptMilestones.push(9)
    if (hasMilestone('i', 10) && hasMilestone('a', 10)) keptMilestones.push(10)
    if (hasAchievement('infach', 16) && hasMilestone('a', 11)) keptMilestones.push(11)
    if (hasMilestone('i', 11) && hasMilestone('a', 1)) keptMilestones.push(1)
    if (hasMilestone('i', 11) && hasMilestone('a', 4)) keptMilestones.push(4)
    if (hasMilestone('i', 11) && hasMilestone('a', 6)) keptMilestones.push(6)
    if (hasMilestone('i', 11) && hasMilestone('a', 12)) keptMilestones.push(12)

    // Stage 3, track which main features you want to keep - all upgrades, total points, specific toggles, etc.
    let keep = [];
    //if (hasMilestone('i', 8) && player.tog.keepElectronMilestones) keep.push("milestones");

    // Stage 4, do the actual data reset
    layerDataReset(this.layer, keep);

    // Stage 5, add back in the specific subfeatures you saved earlier
    player[this.layer].milestones.push(...keptMilestones)
    },*/
    clickables: {
        10: {
            display() {return "Respec Upgrades and Double Helixes (Refunds Water)"},
            canClick() {return player.w.upgrades.length >= 1},
            onClick() {return player.w.upgrades = [], player.w.row2upgrades = new Decimal(0), player.w.row3upgrades = new Decimal(0), player.w.row4upgrades = new Decimal(0), player.w.row5upgrades = new Decimal(0), player.w.row6upgrades = new Decimal(0), player.w.row7upgrades = new Decimal(0), player.w.row8upgrades = new Decimal(0), player.w.row9upgrades = new Decimal(0), player.w.points = player.w.total, player.d.doublehelixes = new Decimal(0), doReset('w', true)},
            style: {
                "min-height": "50px"
            }
        },
    },
    upgrades: {
    11: {
        title: "1-1",
        description: "Water slightly boosts power, Quark, Electron, and Atom gain.",
        cost: new Decimal(1),
        effect() {
        return player.w.points.add(1).times(1000).pow(0.12).times(player.w.dropletsmult)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + 'x'},
    },
    12: {
        title: "2-1",
        description: "Water boosts the Proton Multiplier.",
        cost: new Decimal(3),
        effect() {
        if (hasUpgrade('w', 12)) return player.w.points.add(1).times(1e9).pow(0.07)
            else return 1
        },
        effectDisplay() { return format(player.w.points.add(1).times(1e9).pow(0.07))+"x" },
        branches: ['w', 11],
        unlocked: true,
        canAfford() {return player.w.row2upgrades.lt(player.w.row2maxupgrades) && hasUpgrade('w', 11)},
        onPurchase() {player.w.row2upgrades = player.w.row2upgrades.plus(1)}
    },
    13: {
        title: "2-2",
        description: "Power gain is raised to ^1.01.",
        cost: new Decimal(3),
        branches: ['w', 11],
        unlocked: true,
        canAfford() {return player.w.row2upgrades.lt(player.w.row2maxupgrades) && hasUpgrade('w', 11)},
        onPurchase() {player.w.row2upgrades = player.w.row2upgrades.plus(1)}
    },
    14: {
        title: "3-1",
        description: "Power boosts Water gain.",
        cost: new Decimal(5),
        effect() {
        return player.points.add(1).pow(0.00097)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + 'x'},
        branches: ['w', 12],
        unlocked: true,
        canAfford() {return player.w.row3upgrades.lt(player.w.row3maxupgrades) && hasUpgrade('w', 12)},
        onPurchase() {player.w.row3upgrades = player.w.row3upgrades.plus(1)}
    },
    15: {
        title: "3-2",
        description() {return 'Molecules are ' + format(player.w.upg32base) + 'x cheaper for every Water Upgrade bought.'},
        cost: new Decimal(5),
        effect() {
            return Decimal.pow(player.w.upg32base, player.w.upgrades.length)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + 'x'},
        branches: ['w', 12, 13],
        unlocked: true,
        canAfford() {return player.w.row3upgrades.lt(player.w.row3maxupgrades) && (hasUpgrade('w', 12) || hasUpgrade('w', 13))},
        onPurchase() {player.w.row3upgrades = player.w.row3upgrades.plus(1)}
    },
    16: {
        title: "3-3",
        description: "Double Helixes now also boost power and Quarks.",
        cost: new Decimal(5),
        branches: ['w', 13],
        unlocked: true,
        canAfford() {return player.w.row3upgrades.lt(player.w.row3maxupgrades) && hasUpgrade('w', 13)},
        onPurchase() {player.w.row3upgrades = player.w.row3upgrades.plus(1)}
    },
    17: {
        title: "4-1",
        description: "Every Quark Upgrade bought gives an Extra Atom Challenge Completion.",
        cost: new Decimal(10),
        effect() {
        if (hasUpgrade('w', 17)) return player.q.upgrades.length
        else return 0
        },
        effectDisplay() { return '+' + format(player.q.upgrades.length, 0) + ' Extra Atom Challenge Completions'},
        branches: ['w', 14],
        unlocked: true,
        canAfford() {return player.w.row4upgrades.lt(player.w.row4maxupgrades) && hasUpgrade('w', 14)},
        onPurchase() {player.w.row4upgrades = player.w.row4upgrades.plus(1)}
    },
    18: {
        title: "4-2",
        description: "The Molecule Proton Multiplier Boost now also boosts the Secondary Proton Multiplier at the same effect.",
        cost: new Decimal(10),
        branches: ['w', 14, 15],
        unlocked: true,
        canAfford() {return player.w.row4upgrades.lt(player.w.row4maxupgrades) && (hasUpgrade('w', 14) || hasUpgrade('w', 15))},
        onPurchase() {player.w.row4upgrades = player.w.row4upgrades.plus(1)}
    },
    19: {
        title: "4-3",
        description: "Achievement Multiplier Base is multiplied by 1.25x, and Achievements now also multiply Quarks.",
        cost: new Decimal(10),
        branches: ['w', 15, 16],
        unlocked: true,
        canAfford() {return player.w.row4upgrades.lt(player.w.row4maxupgrades) && (hasUpgrade('w', 15) || hasUpgrade('w', 16))},
        onPurchase() {player.w.row4upgrades = player.w.row4upgrades.plus(1)}
    },
    20: {
        title: "4-4",
        description: "Water boosts DNA gain.",
        cost: new Decimal(10),
        effect() {
        return player.w.points.add(1).pow(0.37)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + 'x'},
        branches: ['w', 16],
        unlocked: true,
        canAfford() {return player.w.row4upgrades.lt(player.w.row4maxupgrades) && hasUpgrade('w', 16)},
        onPurchase() {player.w.row4upgrades = player.w.row4upgrades.plus(1)}
    },
    21: {
        title: "5-1",
        description: "25x Energy gains.",
        cost: new Decimal(50),
        effect() {
        if (hasUpgrade('w', 21)) return 25
        else return 1},
        branches: ['w', 17],
        unlocked: true,
        canAfford() {return player.w.row5upgrades.lt(player.w.row5maxupgrades) && hasUpgrade('w', 17)},
        onPurchase() {player.w.row5upgrades = player.w.row5upgrades.plus(1)}
    },
    22: {
        title: "5-2",
        description: "Amino Acid boosts its own gain.",
        cost: new Decimal(50),
        effect() {
        return player.am.points.add(1).times(5).pow(0.18)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + 'x'},
        branches: ['w', 17, 18],
        unlocked: true,
        canAfford() {return player.w.row5upgrades.lt(player.w.row5maxupgrades) && (hasUpgrade('w', 17) || hasUpgrade('w', 18))},
        onPurchase() {player.w.row5upgrades = player.w.row5upgrades.plus(1)}
    },
    23: {
        title: "5-3",
        description: "Double Helix Threshold x2.7->x1.75.",
        cost: new Decimal(50),
        branches: ['w', 18, 19],
        unlocked: true,
        canAfford() {return player.w.row5upgrades.lt(player.w.row5maxupgrades) && (hasUpgrade('w', 18) || hasUpgrade('w', 19))},
        onPurchase() {player.w.row5upgrades = player.w.row5upgrades.plus(1)}
    },
    24: {
        title: "5-4",
        description: "Atom gain is multiplied by your power.",
        cost: new Decimal(50),
        effect() {
        return player.points.add(1).pow(0.015)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + 'x'},
        branches: ['w', 19, 20],
        unlocked: true,
        canAfford() {return player.w.row5upgrades.lt(player.w.row5maxupgrades) && (hasUpgrade('w', 19) || hasUpgrade('w', 20))},
        onPurchase() {player.w.row5upgrades = player.w.row5upgrades.plus(1)}
    },
    25: {
        title: "5-5",
        description: "You can activate one more DNA Boost.",
        cost: new Decimal(50),
        effect() {
        if (hasUpgrade('w', 25)) return 1
        else return 0
        },
        branches: ['w', 20],
        unlocked: true,
        canAfford() {return player.w.row5upgrades.lt(player.w.row5maxupgrades) && hasUpgrade('w', 20)},
        onPurchase() {player.w.row5upgrades = player.w.row5upgrades.plus(1)}
    },
    26: {
        title: "6-1",
        description: "Double Helix effect base +0.05x.",
        cost: new Decimal(10000),
        branches: ['w', 21, 22, 23],
        unlocked: true,
        canAfford() {return player.w.row6upgrades.lt(player.w.row6maxupgrades) && (hasUpgrade('w', 21) || hasUpgrade('w', 22) || hasUpgrade('w', 23))},
        onPurchase() {player.w.row6upgrades = player.w.row6upgrades.plus(1)}
    },
    27: {
        title: "6-2",
        description: "Amino Acid boosts power gain.",
        cost: new Decimal(10000),
        effect() {
        return player.am.points.add(1).times(5e3).pow(0.375)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + 'x'},
        branches: ['w', 22, 23, 24],
        unlocked: true,
        canAfford() {return player.w.row6upgrades.lt(player.w.row6maxupgrades) && (hasUpgrade('w', 22) || hasUpgrade('w', 23) || hasUpgrade('w', 24))},
        onPurchase() {player.w.row6upgrades = player.w.row6upgrades.plus(1)}
    },
    28: {
        title: "6-3",
        description: "DNA Strands boost Quark gain.",
        cost: new Decimal(10000),
        effect() {
        return player.d.strands.add(1).pow(0.425)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + 'x'},
        branches: ['w', 23, 24, 25],
        unlocked: true,
        canAfford() {return player.w.row6upgrades.lt(player.w.row6maxupgrades) && (hasUpgrade('w', 23) || hasUpgrade('w', 24) || hasUpgrade('w', 25))},
        onPurchase() {player.w.row6upgrades = player.w.row6upgrades.plus(1)}
    },
    29: {
        title: "7-1",
        description: "Water Upgrade 3-2 effect ^2.",
        cost: new Decimal(1e6),
        branches: ['w', 26],
        unlocked: true,
        canAfford() {return player.w.row7upgrades.lt(player.w.row7maxupgrades) && hasUpgrade('w', 26)},
        onPurchase() {player.w.row7upgrades = player.w.row7upgrades.plus(1)}
    },
    30: {
        title: "7-2",
        description: "Amino Acid boosts Quark gain.",
        cost: new Decimal(1e6),
        effect() {
        return player.am.points.add(1).times(1e30).pow(0.265)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + 'x'},
        branches: ['w', 26],
        unlocked: true,
        canAfford() {return player.w.row7upgrades.lt(player.w.row7maxupgrades) && hasUpgrade('w', 26)},
        onPurchase() {player.w.row7upgrades = player.w.row7upgrades.plus(1)}
    },
    31: {
        title: "7-3",
        description: "Molecule Buyable 3 now multiplies instead of adding.",
        cost: new Decimal(1e6),
        branches: ['w', 27],
        unlocked: true,
        canAfford() {return player.w.row7upgrades.lt(player.w.row7maxupgrades) && hasUpgrade('w', 27)},
        onPurchase() {player.w.row7upgrades = player.w.row7upgrades.plus(1)}
    },
    32: {
        title: "7-4",
        description: "The log10 of DNA gives Extra Double Helixes.",
        cost: new Decimal(1e6),
        effect() {
        if (hasUpgrade('w', 32)) return new Decimal(Math.floor(player.d.points.add(1).log10())).min(120)
            else return 0
        },
        effectDisplay() {if (player.d.points.gte(1e120)) return '+' + format(new Decimal(Math.floor(player.d.points.add(1).log10())).min(120)) + ' Extra Double Helixes (capped)'
            else return '+' + format(new Decimal(Math.floor(player.d.points.add(1).log10())).min(120)) + ' Extra Double Helixes'},
        branches: ['w', 27],
        unlocked: true,
        canAfford() {return player.w.row7upgrades.lt(player.w.row7maxupgrades) && hasUpgrade('w', 27)},
        onPurchase() {player.w.row7upgrades = player.w.row7upgrades.plus(1)}
    },
    33: {
        title: "7-5",
        description: "DNA Strands boost DNA gain.",
        cost: new Decimal(1e6),
        effect() {
        return player.d.strands.add(1).pow(0.04865)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + 'x'},
        branches: ['w', 28],
        unlocked: true,
        canAfford() {return player.w.row7upgrades.lt(player.w.row7maxupgrades) && hasUpgrade('w', 28)},
        onPurchase() {player.w.row7upgrades = player.w.row7upgrades.plus(1)}
    },
    34: {
        title: "7-6",
        description: "Molecule Buyable 1 effect base is 10% stronger.",
        cost: new Decimal(1e6),
        branches: ['w', 28],
        unlocked: true,
        canAfford() {return player.w.row7upgrades.lt(player.w.row7maxupgrades) && hasUpgrade('w', 28)},
        onPurchase() {player.w.row7upgrades = player.w.row7upgrades.plus(1)}
    },
    35: {
        title: "8-1",
        description: "Amino Acid per level multipliers are twice as strong.",
        cost: new Decimal(5e8),
        branches: ['w', 29, 30],
        unlocked: true,
        canAfford() {return player.w.row8upgrades.lt(player.w.row8maxupgrades) && (hasUpgrade('w', 29) || hasUpgrade('w', 30))},
        onPurchase() {player.w.row8upgrades = player.w.row8upgrades.plus(1)}
    },
    36: {
        title: "8-2",
        description: "Electrons boost Atom gain.",
        cost: new Decimal(5e8),
        effect() {
        return player.e.points.add(1).pow(0.0225)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + 'x'},
        branches: ['w', 31],
        unlocked: true,
        canAfford() {return player.w.row8upgrades.lt(player.w.row8maxupgrades) && hasUpgrade('w', 31)},
        onPurchase() {player.w.row8upgrades = player.w.row8upgrades.plus(1)}
    },
    37: {
        title: "8-3",
        description: "Double Helix effect base +0.05x.",
        cost: new Decimal(5e8),
        branches: ['w', 31, 32],
        unlocked: true,
        canAfford() {return player.w.row8upgrades.lt(player.w.row8maxupgrades) && (hasUpgrade('w', 31) || hasUpgrade('w', 32))},
        onPurchase() {player.w.row8upgrades = player.w.row8upgrades.plus(1)}
    },
    38: {
        title: "8-4",
        description: "Molecule Buyable 5 effect base 5x->10x.",
        cost: new Decimal(5e8),
        branches: ['w', 32, 33, 34],
        unlocked: true,
        canAfford() {return player.w.row8upgrades.lt(player.w.row8maxupgrades) && (hasUpgrade('w', 32) || hasUpgrade('w', 33) || hasUpgrade('w', 34))},
        onPurchase() {player.w.row8upgrades = player.w.row8upgrades.plus(1)}
    },
    39: {
        title: "9-1",
        description: "DNA Boost 5 cap 1.66x->1.725x.",
        cost: new Decimal(1e12),
        branches: ['w', 35, 36],
        unlocked: true,
        canAfford() {return player.w.row9upgrades.lt(player.w.row9maxupgrades) && (hasUpgrade('w', 35) || hasUpgrade('w', 36))},
        onPurchase() {player.w.row9upgrades = player.w.row9upgrades.plus(1)}
    },
    40: {
        title: "9-2",
        description: "You can activate one more DNA boost.",
        cost: new Decimal(1e12),
        effect() {
        if (hasUpgrade('w', 40)) return 1
        else return 0
        },
        branches: ['w', 36, 37],
        unlocked: true,
        canAfford() {return player.w.row9upgrades.lt(player.w.row9maxupgrades) && (hasUpgrade('w', 36) || hasUpgrade('w', 37))},
        onPurchase() {player.w.row9upgrades = player.w.row9upgrades.plus(1)}
    },
    41: {
        title: "9-3",
        description: "10x Tertiary Proton Multiplier.",
        cost: new Decimal(1e12),
        effect() {
        if (hasUpgrade('w', 41)) return 10
        else return 1
        },
        branches: ['w', 37, 38],
        unlocked: true,
        canAfford() {return player.w.row9upgrades.lt(player.w.row9maxupgrades) && (hasUpgrade('w', 37) || hasUpgrade('w', 38))},
        onPurchase() {player.w.row9upgrades = player.w.row9upgrades.plus(1)}
    },
},

    milestones: {},
    challenges: {}
})
