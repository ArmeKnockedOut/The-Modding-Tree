addLayer("am", {
    name: "amino_acids", 
    symbol: "AM",
    position: 0,
    branches: true,
    onPrestige() {if (!hasAchievement('ach', 55)) return player.ach.achievements.push(55)},
    passiveGeneration() {
        if (hasMilestone('i', 20) && player.tog.passiveAMGen == true) return 0.01
        else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
        carbon: new Decimal(0),
        carboncost: new Decimal(0.1),
        carbonbar: new Decimal(0),
        carbonlevels: new Decimal(0),
        carbonreqbar: new Decimal(10),
        carbonlevelboost: new Decimal(1), // xlevelboost is what is BOOSTING the level boost, not the level boost itself
        carbonboost: new Decimal(1),
        hydrogen: new Decimal(0),
        hydrogencost: new Decimal(0.1),
        hydrogenbar: new Decimal(0),
        hydrogenlevels: new Decimal(0),
        hydrogenreqbar: new Decimal(10),
        hydrogenlevelboost: new Decimal(1),
        hydrogenboost: new Decimal(1),
        oxygen: new Decimal(0),
        oxygencost: new Decimal(0.1),
        oxygenbar: new Decimal(0),
        oxygenlevels: new Decimal(0),
        oxygenreqbar: new Decimal(10),
        oxygenlevelboost: new Decimal(1),
        oxygenboost: new Decimal(1),
        nitrogen: new Decimal(0),
        nitrogencost: new Decimal(0.1),
        nitrogenbar: new Decimal(0),
        nitrogenlevels: new Decimal(0),
        nitrogenreqbar: new Decimal(10),
        nitrogenlevelboost: new Decimal(1),
        nitrogenboost: new Decimal(1) 
    }},
    update(diff) {
        if (player.am.carbonbar.gte(player.am.carbonreqbar)) player.am.carboncost = player.am.carboncost.times(10)
        if (player.am.carbonbar.gte(player.am.carbonreqbar)) player.am.carbonlevels = player.am.carbonlevels.plus(1)
        if (player.am.carbonbar.gte(player.am.carbonreqbar)) player.am.carbonbar = player.am.carbonbar = new Decimal(0), player.am.carbonreqbar = player.am.carbonreqbar.plus(1)
        player.am.carbonlevelboost = player.am.carbon.plus(1).log2().times(1.75).plus(1)
        player.am.carbonboost = Decimal.pow(3, player.am.carbonlevels).times(player.am.carbonlevelboost)
        if (hasUpgrade('w', 35)) player.am.carbonboost = Decimal.pow(6, player.am.carbonlevels).times(player.am.carbonlevelboost)

        if (player.am.hydrogenbar.gte(player.am.hydrogenreqbar)) player.am.hydrogencost = player.am.hydrogencost.times(15)
        if (player.am.hydrogenbar.gte(player.am.hydrogenreqbar)) player.am.hydrogenlevels = player.am.hydrogenlevels.plus(1)
        if (player.am.hydrogenbar.gte(player.am.hydrogenreqbar)) player.am.hydrogenbar = player.am.hydrogenbar = new Decimal(0), player.am.hydrogenreqbar = player.am.hydrogenreqbar.plus(1)
        player.am.hydrogenlevelboost = player.am.hydrogen.plus(1).log(2.5).times(1.5).plus(1)
        player.am.hydrogenboost = Decimal.pow(3, player.am.hydrogenlevels).times(player.am.hydrogenlevelboost)
        if (hasUpgrade('w', 35)) player.am.hydrogenboost = Decimal.pow(6, player.am.hydrogenlevels).times(player.am.hydrogenlevelboost)

        if (player.am.oxygenbar.gte(player.am.oxygenreqbar)) player.am.oxygencost = player.am.oxygencost.times(8)
        if (player.am.oxygenbar.gte(player.am.oxygenreqbar)) player.am.oxygenlevels = player.am.oxygenlevels.plus(1)
        if (player.am.oxygenbar.gte(player.am.oxygenreqbar)) player.am.oxygenbar = player.am.oxygenbar = new Decimal(0), player.am.oxygenreqbar = player.am.oxygenreqbar.plus(1)
        player.am.oxygenlevelboost = player.am.oxygen.plus(1).log(1.6).times(3).plus(1)
        player.am.oxygenboost = Decimal.pow(4, player.am.oxygenlevels).times(player.am.oxygenlevelboost)
        if (hasUpgrade('w', 35)) player.am.oxygenboost = Decimal.pow(8, player.am.oxygenlevels).times(player.am.oxygenlevelboost)

        if (player.am.nitrogenbar.gte(player.am.nitrogenreqbar)) player.am.nitrogencost = player.am.nitrogencost.times(20)
        if (player.am.nitrogenbar.gte(player.am.nitrogenreqbar)) player.am.nitrogenlevels = player.am.nitrogenlevels.plus(1)
        if (player.am.nitrogenbar.gte(player.am.nitrogenreqbar)) player.am.nitrogenbar = player.am.nitrogenbar = new Decimal(0), player.am.nitrogenreqbar = player.am.nitrogenreqbar.plus(1)
        player.am.nitrogenlevelboost = player.am.nitrogen.plus(1).log(2.35).times(2.5).plus(1)
        player.am.nitrogenboost = Decimal.pow(3.25, player.am.nitrogenlevels).times(player.am.nitrogenlevelboost)
        if (hasUpgrade('w', 35)) player.am.nitrogenboost = Decimal.pow(6.5, player.am.nitrogenlevels).times(player.am.nitrogenlevelboost)


        if (player.am.points.lt(0)) player.am.points = new Decimal(0)
    },
   /* milestonePopups() {if (hasMilestone('i', 9)) return false
        else return true
    },*/
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        "milestones",
        "h-line",
        "blank",
        ["display-text",
            function() {return 'Carbon' },
            { "color": "white", "font-size": "32px" }],
        ["blank", "10px"],
        ["display-text",
            function() {return ' You have ' + format(player.am.carbon, 0) + ' Carbon, which is boosting the Level Boost by ' + format(player.am.carbonlevelboost) + 'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["display-text",
            function() {return 'Level: ' + format(player.am.carbonlevels, 0) + ' (Boost: ' + format(player.am.carbonboost) + 'x power)'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBar"],
        ["blank", "10px"],
        ["display-text",
            function() {return 'Current cost: ' + format(player.am.carboncost) + ' Amino Acid (10x Cost Each Level)'},
            { "color": "gray", "font-size": "15px" }],
        ["display-text",
            function() {return 'Cost until next level: ' + format(player.am.carboncost.times(player.am.carbonreqbar.minus(player.am.carbonbar))) + ' Amino Acid'},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["row", [["clickable", 11], "blank", "blank", ["clickable", 15]]],
        "blank",
        "blank",
        ["display-text",
            function() {return 'Hydrogen' },
            { "color": "white", "font-size": "32px" }],
        ["blank", "10px"],
        ["display-text",
            function() {return ' You have ' + format(player.am.hydrogen, 0) + ' Hydrogen, which is boosting the Level Boost by ' + format(player.am.hydrogenlevelboost) + 'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["display-text",
            function() {return 'Level: ' + format(player.am.hydrogenlevels, 0) + ' (Boost: ' + format(player.am.hydrogenboost) + 'x Quarks)'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBartwo"],
        ["blank", "10px"],
        ["display-text",
            function() {return 'Current cost: ' + format(player.am.hydrogencost) + ' Amino Acid (15x Cost Each Level)'},
            { "color": "gray", "font-size": "15px" }],
        ["display-text",
            function() {return 'Cost until next level: ' + format(player.am.hydrogencost.times(player.am.hydrogenreqbar.minus(player.am.hydrogenbar))) + ' Amino Acid'},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["row", [["clickable", 12], "blank", "blank", ["clickable", 16]]],
        "blank",
        "blank",
        ["display-text",
            function() {return 'Oxygen' },
            { "color": "white", "font-size": "32px" }],
        ["blank", "10px"],
        ["display-text",
            function() {return ' You have ' + format(player.am.oxygen, 0) + ' Oxygen, which is boosting the Level Boost by ' + format(player.am.oxygenlevelboost) + 'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["display-text",
            function() {return 'Level: ' + format(player.am.oxygenlevels, 0) + ' (Boost: ' + format(player.am.oxygenboost) + 'x Electrons)'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBarthree"],
        ["blank", "10px"],
        ["display-text",
            function() {return 'Current cost: ' + format(player.am.oxygencost) + ' Amino Acid (8x Cost Each Level)'},
            { "color": "gray", "font-size": "15px" }],
        ["display-text",
            function() {return 'Cost until next level: ' + format(player.am.oxygencost.times(player.am.oxygenreqbar.minus(player.am.oxygenbar))) + ' Amino Acid'},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["row", [["clickable", 13], "blank", "blank", ["clickable", 17]]],
        "blank",
        "blank",
        ["display-text",
            function() {return 'Nitrogen' },
            { "color": "white", "font-size": "32px" }],
        ["blank", "10px"],
        ["display-text",
            function() {return ' You have ' + format(player.am.nitrogen, 0) + ' Nitrogen, which is boosting the Level Boost by ' + format(player.am.nitrogenlevelboost) + 'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["display-text",
            function() {return 'Level: ' + format(player.am.nitrogenlevels, 0) + ' (Boost: ' + format(player.am.nitrogenboost) + 'x Atoms)'},
            { "color": "white", "font-size": "15px" }],
        ["blank", "10px"],
        ["bar", "theBarfour"],
        ["blank", "10px"],
        ["display-text",
            function() {return 'Current cost: ' + format(player.am.nitrogencost) + ' Amino Acid (20x Cost Each Level)'},
            { "color": "gray", "font-size": "15px" }],
        ["display-text",
            function() {return 'Cost until next level: ' + format(player.am.nitrogencost.times(player.am.nitrogenreqbar.minus(player.am.nitrogenbar))) + ' Amino Acid'},
            { "color": "gray", "font-size": "15px" }],
        ["blank", "10px"],
        ["row", [["clickable", 14], "blank", "blank", ["clickable", 18]]],
    ],
    color: "#63975c",
    nodeStyle() {
        if (player.am.unlocked || player.am.total.gte(1)) return { 
            animation: "pulseColor2 8s infinite alternate ease-in-out",
            "background-origin": "border-box",
        }
    },
    requires: new Decimal('1e190'), 
    resource: "Amino Acid", 
    baseResource: "Atoms", 
    baseAmount() {return player.a.points}, 
    type: "normal", 
    exponent: 0.03425, 
    gainMult() { 
        mult = new Decimal(1)
        if (hasUpgrade('w', 22)) mult = mult.times(upgradeEffect('w', 22))
        if (player.d.total.gte(1) && player.d.boost6active == 1) mult = mult.times(player.d.boost6mult)
        if (hasUpgrade('i', 47)) mult = mult.times(3)
        //player.am.points = player.am.points.pow(1.01)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 2,
    hotkeys: [
        {key: "n", description: "N: Reset for Amino Acids", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['a'],
    layerShown(){return (hasUpgrade('i', 46) || player.am.total.gte(1))},
    doReset(resettingLayer) {
    // Stage 1, almost always needed, makes resetting this layer not delete your progress
    if (layers[resettingLayer].row <= this.row) return;

    // Stage 2, track which specific subfeatures you want to keep, e.g. Upgrade 11, Challenge 32, Buyable 12
    let keptMilestones = []
    if (hasMilestone('i', 18)) keptMilestones.push(0)
    // Stage 3, track which main features you want to keep - all upgrades, total points, specific toggles, etc.
    let keep = [];

    // Stage 4, do the actual data reset
    layerDataReset(this.layer, keep);

    // Stage 5, add back in the specific subfeatures you saved earlier
    player[this.layer].milestones.push(...keptMilestones)
    },
    clickables: {
        11: {
            display() {return "Allocate"},
            canClick() {return player.am.points.gte(player.am.carboncost)},
            onClick() {return player.am.points = player.am.points.minus(player.am.carboncost),
            player.am.carbon = player.am.carbon.plus(1),
            player.am.carbonbar = player.am.carbonbar.plus(1)},
            onHold() {return player.am.points = player.am.points.minus(player.am.carboncost),
                player.am.carbon = player.am.carbon.plus(1),
                player.am.carbonbar = player.am.carbonbar.plus(1)}
        },
        12: {
            display() {return "Allocate"},
            canClick() {return player.am.points.gte(player.am.hydrogencost)},
            onClick() {return player.am.points = player.am.points.minus(player.am.hydrogencost),
            player.am.hydrogen = player.am.hydrogen.plus(1),
            player.am.hydrogenbar = player.am.hydrogenbar.plus(1)},
            onHold() {return player.am.points = player.am.points.minus(player.am.hydrogencost),
                player.am.hydrogen = player.am.hydrogen.plus(1),
                player.am.hydrogenbar = player.am.hydrogenbar.plus(1)}
        },
        13: {
            display() {return "Allocate"},
            canClick() {return player.am.points.gte(player.am.oxygencost)},
            onClick() {return player.am.points = player.am.points.minus(player.am.oxygencost),
            player.am.oxygen = player.am.oxygen.plus(1),
            player.am.oxygenbar = player.am.oxygenbar.plus(1)},
            onHold() {return player.am.points = player.am.points.minus(player.am.oxygencost),
                player.am.oxygen = player.am.oxygen.plus(1),
                player.am.oxygenbar = player.am.oxygenbar.plus(1)}
        },
        14: {
            display() {return "Allocate"},
            canClick() {return player.am.points.gte(player.am.nitrogencost)},
            onClick() {return player.am.points = player.am.points.minus(player.am.nitrogencost),
            player.am.nitrogen = player.am.nitrogen.plus(1),
            player.am.nitrogenbar = player.am.nitrogenbar.plus(1)},
            onHold() {return player.am.points = player.am.points.minus(player.am.nitrogencost),
                player.am.nitrogen = player.am.nitrogen.plus(1),
                player.am.nitrogenbar = player.am.nitrogenbar.plus(1)}
        },
        15: {
            display() {return "Allocate To Level"},
            canClick() {return player.am.points.gte(player.am.carboncost.times(player.am.carbonreqbar.minus(player.am.carbonbar)))},
            onClick() {return player.am.points = player.am.points.minus(player.am.carboncost.times(player.am.carbonreqbar.minus(player.am.carbonbar))),
            player.am.carbon = player.am.carbon.plus(player.am.carbonreqbar.minus(player.am.carbonbar)),
            player.am.carbonbar = new Decimal(0),
            player.am.carbonlevels = player.am.carbonlevels.plus(1),
            player.am.carbonreqbar = player.am.carbonreqbar.plus(1),
            player.am.carboncost = player.am.carboncost.times(10)},
            onHold() {return player.am.points = player.am.points.minus(player.am.carboncost.times(player.am.carbonreqbar.minus(player.am.carbonbar))),
            player.am.carbon = player.am.carbon.plus(player.am.carbonreqbar.minus(player.am.carbonbar)),
            player.am.carbonbar = new Decimal(0),
            player.am.carbonlevels = player.am.carbonlevels.plus(1),
            player.am.carbonreqbar = player.am.carbonreqbar.plus(1),
            player.am.carboncost = player.am.carboncost.times(10)}
        },
        16: {
            display() {return "Allocate To Level"},
            canClick() {return player.am.points.gte(player.am.hydrogencost.times(player.am.hydrogenreqbar.minus(player.am.hydrogenbar)))},
            onClick() {return player.am.points = player.am.points.minus(player.am.hydrogencost.times(player.am.hydrogenreqbar.minus(player.am.hydrogenbar))),
            player.am.hydrogen = player.am.hydrogen.plus(player.am.hydrogenreqbar.minus(player.am.hydrogenbar)),
            player.am.hydrogenbar = new Decimal(0),
            player.am.hydrogenlevels = player.am.hydrogenlevels.plus(1),
            player.am.hydrogenreqbar = player.am.hydrogenreqbar.plus(1),
            player.am.hydrogencost = player.am.hydrogencost.times(15)},
            onHold() {return player.am.points = player.am.points.minus(player.am.hydrogencost.times(player.am.hydrogenreqbar.minus(player.am.hydrogenbar))),
            player.am.hydrogen = player.am.hydrogen.plus(player.am.hydrogenreqbar.minus(player.am.hydrogenbar)),
            player.am.hydrogenbar = new Decimal(0),
            player.am.hydrogenlevels = player.am.hydrogenlevels.plus(1),
            player.am.hydrogenreqbar = player.am.hydrogenreqbar.plus(1),
            player.am.hydrogencost = player.am.hydrogencost.times(15)}
        },
        17: {
            display() {return "Allocate To Level"},
            canClick() {return player.am.points.gte(player.am.oxygencost.times(player.am.oxygenreqbar.minus(player.am.oxygenbar)))},
            onClick() {return player.am.points = player.am.points.minus(player.am.oxygencost.times(player.am.oxygenreqbar.minus(player.am.oxygenbar))),
            player.am.oxygen = player.am.oxygen.plus(player.am.oxygenreqbar.minus(player.am.oxygenbar)),
            player.am.oxygenbar = new Decimal(0),
            player.am.oxygenlevels = player.am.oxygenlevels.plus(1),
            player.am.oxygenreqbar = player.am.oxygenreqbar.plus(1),
            player.am.oxygencost = player.am.oxygencost.times(8)},
            onHold() {return player.am.points = player.am.points.minus(player.am.oxygencost.times(player.am.oxygenreqbar.minus(player.am.oxygenbar))),
            player.am.oxygen = player.am.oxygen.plus(player.am.oxygenreqbar.minus(player.am.oxygenbar)),
            player.am.oxygenbar = new Decimal(0),
            player.am.oxygenlevels = player.am.oxygenlevels.plus(1),
            player.am.oxygenreqbar = player.am.oxygenreqbar.plus(1),
            player.am.oxygencost = player.am.oxygencost.times(8)}
        },
        18: {
            display() {return "Allocate To Level"},
            canClick() {return player.am.points.gte(player.am.nitrogencost.times(player.am.nitrogenreqbar.minus(player.am.nitrogenbar)))},
            onClick() {return player.am.points = player.am.points.minus(player.am.nitrogencost.times(player.am.nitrogenreqbar.minus(player.am.nitrogenbar))),
            player.am.nitrogen = player.am.nitrogen.plus(player.am.nitrogenreqbar.minus(player.am.nitrogenbar)),
            player.am.nitrogenbar = new Decimal(0),
            player.am.nitrogenlevels = player.am.nitrogenlevels.plus(1),
            player.am.nitrogenreqbar = player.am.nitrogenreqbar.plus(1),
            player.am.nitrogencost = player.am.nitrogencost.times(20)},
            onHold() {return player.am.points = player.am.points.minus(player.am.nitrogencost.times(player.am.nitrogenreqbar.minus(player.am.nitrogenbar))),
            player.am.nitrogen = player.am.nitrogen.plus(player.am.nitrogenreqbar.minus(player.am.nitrogenbar)),
            player.am.nitrogenbar = new Decimal(0),
            player.am.nitrogenlevels = player.am.nitrogenlevels.plus(1),
            player.am.nitrogenreqbar = player.am.nitrogenreqbar.plus(1),
            player.am.nitrogencost = player.am.nitrogencost.times(20)}
        },
},
    upgrades: {},
    milestones: {
        0: {
            requirementDescription: "1.00e12 Total Amino Acid",
            effectDescription: "The second row of Molecule Buyables is automatically bought and they do not subtract your energy.",
            done() { return player.am.total.gte(1e12) },
            toggles: [["tog", "autobuyMoleculeBuyables2"]],
        },
    },
    challenges: {},
    bars: {
        theBar: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#63975c"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.am.carbonbar.div(player.am.carbonreqbar)},
            display() {return format(player.am.carbonbar, 0) + ' / ' + format(player.am.carbonreqbar, 0)},
            unlocked: true,
        },
        theBartwo: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#72a76b"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.am.hydrogenbar.div(player.am.hydrogenreqbar)},
            display() {return format(player.am.hydrogenbar, 0) + ' / ' + format(player.am.hydrogenreqbar, 0)},
            unlocked: true,
        },
        theBarthree: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#84bd7c"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.am.oxygenbar.div(player.am.oxygenreqbar)},
            display() {return format(player.am.oxygenbar, 0) + ' / ' + format(player.am.oxygenreqbar, 0)},
            unlocked: true,
        },
        theBarfour: {
            textStyle: {'text-shadow': '0px 0px 2px #000000'},
            fillStyle: {'background-color' : "#97d38f"},
            direction: RIGHT,
            width: 325,
            height: 40,
            progress() {return player.am.nitrogenbar.div(player.am.nitrogenreqbar)},
            display() {return format(player.am.nitrogenbar, 0) + ' / ' + format(player.am.nitrogenreqbar, 0)},
            unlocked: true,
        },
    }
})
