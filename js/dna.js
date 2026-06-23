addLayer("d", {
    name: "dna", 
    symbol: "DNA",
    position: 1,
    branches: true,
    onPrestige() {if (!hasAchievement('ach', 55)) return player.ach.achievements.push(55)},
    passiveGeneration() {
        if (hasMilestone('i', 19) && player.tog.passiveDNAGen == true) return 0.01},
    //automate() {if (player.tog.autobuyAtomUpg == true && !inChallenge('i', 13)) buyUpgrade('a', 11), buyUpgrade('a', 12), buyUpgrade('a', 13), buyUpgrade('a', 14), buyUpgrade('a', 15), buyUpgrade('a', 16), buyUpgrade('a', 17), buyUpgrade('a', 18), buyUpgrade('a', 19), buyUpgrade('a', 20), buyUpgrade('a', 21), buyUpgrade('a', 22), buyUpgrade('a', 23), buyUpgrade('a', 24), buyUpgrade('a', 25), buyUpgrade('a', 26), buyUpgrade('a', 27), buyUpgrade('a', 28), buyUpgrade('a', 29), buyUpgrade('a', 30), buyUpgrade('a', 31), buyUpgrade('a', 32), buyUpgrade('a', 33), buyUpgrade('a', 34), buyUpgrade('a', 35), buyUpgrade('a', 36), buyUpgrade('a', 37), buyUpgrade('a', 38), buyUpgrade('a', 39), buyUpgrade('a', 40), buyUpgrade('a', 41), buyUpgrade('a', 42), buyUpgrade('a', 43), buyUpgrade('a', 44), buyUpgrade('a', 45)},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
        boost1active: new Decimal(0),
        boost2active: new Decimal(0),
        boost3active: new Decimal(0),
        boost4active: new Decimal(0),
        boost5active: new Decimal(0),
        boost6active: new Decimal(0),
        boost7active: new Decimal(0),
        boost8active: new Decimal(0),
        boost9active: new Decimal(0),
        currentboostsactive: new Decimal(0),
        maxboostsactive: new Decimal(1),
        boost1mult: new Decimal(3),
        boost2pow: new Decimal(1.01),
        boost3add: new Decimal(10),
        boost4mult: new Decimal(10),
        boost6mult: new Decimal(15),
        boost7add: new Decimal(0.1),
        boost8mult: new Decimal(1.1),
        boost9mult: new Decimal(2),
        strands: new Decimal(0),
        doublehelixes: new Decimal(0),
        doublehelixesmult: new Decimal(1),
        doublehelixesthreshold: new Decimal(2.7),
        extradoublehelixes: new Decimal(0),
        totaldoublehelixes: new Decimal(0),
        doublehelixeseffectbase: new Decimal(1.2),
        boost5cap: new Decimal(1.66),
    }},
    update(diff) {

        player.d.boost5cap = new Decimal(1.66)
        if (hasUpgrade('w', 39)) player.d.boost5cap = new Decimal(1.725)
        if (hasUpgrade('i', 54)) player.d.boost5cap = player.d.boost5cap.plus(0.025)

        player.d.currentboostsactive = player.d.boost1active.plus(player.d.boost2active).plus(player.d.boost3active).plus(player.d.boost4active).plus(player.d.boost5active).plus(player.d.boost6active).plus(player.d.boost7active).plus(player.d.boost8active).plus(player.d.boost9active)
        let maxBA = new Decimal(1).plus(upgradeEffect('w', 25)).plus(upgradeEffect('w', 40))
        if (player.d.total.gte(1e10)) maxBA = maxBA.plus(1)
        if (player.d.total.gte(1e26)) maxBA = maxBA.plus(1)
        if (player.d.total.gte(1e56)) maxBA = maxBA.plus(1)
        if (player.d.total.gte('1e1000')) maxBA = maxBA.plus(1)
        player.d.maxboostsactive = maxBA

        player.d.boost1mult = new Decimal(3).times(player.d.points.plus(1).log10().div(2).plus(1))
        player.d.boost2pow = new Decimal(1.01).plus(player.d.points.pow(0.33).plus(1).log(1e3).plus(1).log(1.5).div(100)).min(1.05)
        player.d.boost3add = new Decimal(10).plus(player.d.points.pow(0.1).plus(1).log2().plus(1).plus(1))
        player.d.boost4mult = new Decimal(10).times(player.d.points.plus(1).log(5).div(3).plus(1))
        player.m.moleculebuyable2mult = new Decimal(1.5)
        if (player.d.boost5active == 1) player.m.moleculebuyable2mult = new Decimal(1.5).times(player.d.points.plus(1).log(1000).div(50).plus(1)).min(player.d.boost5cap)
        player.d.boost6mult = new Decimal(15).times(player.d.points.plus(1).log(8).times(5).plus(1))
        player.d.boost7add = new Decimal(0.1).plus(player.d.points.pow(0.1).plus(1).log2()).min(25)
        player.d.boost8mult = new Decimal(1.1).plus(player.d.points.pow(0.0001).plus(1).log(5).min(25))
        player.d.boost9mult = new Decimal(2).times(player.d.points.plus(1).pow(0.1).plus(1).log(1e10).plus(1))
        
        let DHeffectbase = new Decimal(1.2)
        if (hasUpgrade('w', 26)) DHeffectbase = DHeffectbase.plus(0.05)
        if (hasUpgrade('w', 37)) DHeffectbase = DHeffectbase.plus(0.05)
        if (hasUpgrade('i', 54)) DHeffectbase = DHeffectbase.plus(0.01)
        player.d.doublehelixeseffectbase = DHeffectbase

        player.d.strands = player.d.strands.plus(player.d.points.times(player.d.strands.plus(1).log2().plus(1)).times(diff).times(20))
        function getDHThreshold(dh) {
            let base = 2.7;
            if (hasUpgrade('w', 23)) base = 1.75;
            return new Decimal(base).plus(Decimal.max(0, dh.minus(999)).times(0.001));
        }
        let low = player.d.doublehelixes;
        let high = low.plus(1);
        while (player.d.strands.gte(getDHThreshold(high).pow(high.plus(1)).minus(1))) {
            high = high.times(2);
        }
        while (high.minus(low).gt(1)) {
            let mid = low.plus(high).div(2).floor()
            let cost = getDHThreshold(mid).pow(mid.plus(1)).minus(1)
        if (player.d.strands.gte(cost)) low = mid
        else high = mid
}

player.d.doublehelixes = low;
player.d.doublehelixesthreshold = getDHThreshold(low);
        player.d.doublehelixesmult = Decimal.pow(player.d.doublehelixeseffectbase, player.d.totaldoublehelixes)
        
        if (player.d.currentboostsactive.gt(player.d.maxboostsactive)) player.d.boost1active = new Decimal(0), player.d.boost2active = new Decimal(0), player.d.boost3active = new Decimal(0), player.d.boost4active = new Decimal(0), player.d.boost5active = new Decimal(0), player.d.boost6active = new Decimal(0), player.d.boost7active = new Decimal(0), player.d.boost8active = new Decimal(0), player.d.boost9active = new Decimal(0)

        player.d.extradoublehelixes = new Decimal(0).plus(upgradeEffect('w', 32))
        player.d.totaldoublehelixes = player.d.doublehelixes.plus(player.d.extradoublehelixes)
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
            function() {if (hasUpgrade('w', 16)) return 'You have <h3 style="color: orange">' + format(player.d.strands, 2) + '</h3> DNA Strands, which make <h3 style="color: #FFCF66">' + format(player.d.doublehelixes, 0) + '</h3>+<h3 style="color: #FFCF66">' + format(player.d.extradoublehelixes, 0) + '</h3> Double Helixes, which multiply DNA, power and Quark gain by <h3 style="color: #FFCF66">' + format(player.d.doublehelixesmult, 2) + '</h3>x'
                else return 'You have <h3 style="color: orange">' + format(player.d.strands, 2) + '</h3> DNA Strands, which make <h3 style="color: #FFCF66">' + format(player.d.doublehelixes, 0) + '</h3>+<h3 style="color: #FFCF66">' + format(player.d.extradoublehelixes, 0) + '</h3> Double Helixes, which multiply DNA gain by <h3 style="color: #FFCF66">' + format(player.d.doublehelixesmult, 2) + '</h3>x'},
            { "color": "#dfdfdf", "font-size": "16px" }],
            ["display-text",
            function() {return '(' + format(player.d.doublehelixeseffectbase, 3) + 'x per Double Helix)'},
            { "color": "gray", "font-size": "12px" }],
        "blank",
        ["display-text",
            function() {return 'Next Double Helix at <h3 style="color: orange">' + format(new Decimal(hasUpgrade('w', 23) ? 1.75 : 2.7).plus(Math.max(0, player.d.doublehelixes.plus(1) - 999) * 0.001).pow(player.d.doublehelixes.plus(2)).minus(1)) + '</h3> DNA Strands'},
            { "color": "#dfdfdf", "font-size": "14px" }],
        ["display-text",
            function() {return '(' + format(player.d.doublehelixesthreshold, 3) + 'x more DNA Strands)'},
            { "color": "gray", "font-size": "12px" }],
        "blank",
        ["h-line", "350px"],
        "blank",
        ["display-text",
            function() { return 'Respeccing causes a Row 3 reset!'},
            { "color": "gray", "font-size": "14px" }],
        ["blank", "5px"],
        ["clickable", 10],
        "blank",
        ["h-line", "430px"],
        "blank",
        ["display-text",
            function() {if (player.d.maxboostsactive.gte(2)) return 'Currently, you can only have <h3 style="color: orange">' + format(player.d.maxboostsactive, 0) + '</h3> Boosts active at once.'
                else return 'Currently, you can only have <h3 style="color: orange">' + format(player.d.maxboostsactive, 0) + '</h3> Boost active at once.'},
            { "color": "#dfdfdf", "font-size": "16px" }],
        ["blank", "5px"],
        ["display-text",
            function() {if (player.d.total.gte(1.79e308)) return 'All Boosts have been unlocked.'
                else if (player.d.total.gte(1.00e121)) return 'You will unlock a new Boost at <h3 style="color: orange">1.79e308</h3> Total DNA.'
                else if (player.d.total.gte(1.00e45)) return 'You will unlock a new Boost at <h3 style="color: orange">1.00e121</h3> Total DNA.'
                else if (player.d.total.gte(1.00e21)) return 'You will unlock a new Boost at <h3 style="color: orange">1.00e45</h3> Total DNA.'
                else if (player.d.total.gte(1.00e9)) return 'You will unlock a new Boost at <h3 style="color: orange">1.00e21</h3> Total DNA.'
                else return 'You will unlock a new Boost at <h3 style="color: orange">1.00e9</h3> Total DNA.'},
            { "color": "#dfdfdf", "font-size": "16px" }],
        ["blank", "5px"],
        ["display-text",
            function() {if (player.d.total.gte(1.00e56)) return 'You will be able to activate another boost at <h3 style="color: orange">1.00e1000</h3> Total DNA.'
                else if (player.d.total.gte(1.00e26)) return 'You will be able to activate another boost at <h3 style="color: orange">1.00e56</h3> Total DNA.'
                else if (player.d.total.gte(1.00e10)) return 'You will be able to activate another boost at <h3 style="color: orange">1.00e26</h3> Total DNA.'
                else return 'You will be able to activate another boost at <h3 style="color: orange">1.00e10</h3> Total DNA.'},
            { "color": "#dfdfdf", "font-size": "16px" }],

        "blank",

        ["row", [["clickable", 11], "blank", ["display-text", function() {const active = player.d.boost1active == 1
        const color = active ? "orange" : "gray"
        return '<h3 style="color: ' + color + '">' + format(player.d.boost1mult, 2) + '</h3>x Tertiary Proton Multiplier'}, 
        {"color": function() {
            return player.d.boost1active == 1 ? "#dfdfdf" : "#808080"}, "font-size": "16px"}]]],

        "blank",

        ["row", [["clickable", 12], "blank", ["display-text", function() {const active = player.d.boost2active == 1
        const color = active ? "orange" : "gray"
            if (player.d.boost2pow.gte(1.05)) return '^<h3 style="color: ' + color + '">' + format(player.d.boost2pow, 4) + '</h3> power gain (capped)'
                else return '^<h3 style="color: ' + color + '">' + format(player.d.boost2pow, 4) + '</h3> power gain'
        }, {"color": function() {return player.d.boost2active == 1 ? "#dfdfdf" : "#808080"}, "font-size": "16px"}]]],

        "blank",

        ["row", [["clickable", 13], "blank", ["display-text",function() {const active = player.d.boost3active == 1
            const color = active ? "orange" : "gray"
            return '+<h3 style="color: ' + color + '">' + format(player.d.boost3add, 0) + '</h3> Extra Atom Challenge Completions'},
            {"color": function() {
            return player.d.boost3active == 1 ? "#dfdfdf" : "#808080"}, "font-size": "16px"}]]],

        "blank",

        ["row", [["clickable", 14], "blank", ["display-text",function() {const active = player.d.boost4active == 1
            const color = active ? "orange" : "gray"
            return '<h3 style="color: ' + color + '">' + format(player.d.boost4mult, 2) + '</h3>x Energy gains'},
            {"color": function() {
            return player.d.boost4active == 1 ? "#dfdfdf" : "#808080"}, "font-size": "16px"}]]],

        () => (player.d.total.gte(1e9)) ? "blank" : "",

        ["row", [["clickable", 15], "blank", ["display-text",function() {const active = player.d.boost5active == 1
            const color = active ? "orange" : "gray"
            if (player.d.total.gte(1e9) && player.m.moleculebuyable2mult.gte(player.d.boost5cap)) return '<h3 style="color: ' + color + '">1.50</h3>x-><h3 style="color: ' + color + '">' + format(new Decimal(1.5).times(player.d.points.plus(1).log(1000).div(50).plus(1)).min(player.d.boost5cap), 3) + '</h3>x Molecule Buyable 2 effect (capped)'
            else if (player.d.total.gte(1e9)) return '<h3 style="color: ' + color + '">1.50</h3>x-><h3 style="color: ' + color + '">' + format(new Decimal(1.5).times(player.d.points.plus(1).log(1000).div(50).plus(1)).min(player.d.boost5cap), 3) + '</h3>x Molecule Buyable 2 effect'
            else return ""},
            {"color": function() {
            return player.d.boost5active == 1 ? "#dfdfdf" : "#808080"}, "font-size": "16px"}]]],

        () => (player.d.total.gte(1e21)) ? "blank" : "",

        ["row", [["clickable", 16], "blank", ["display-text",function() {const active = player.d.boost6active == 1
            const color = active ? "orange" : "gray"
            if (player.d.total.gte(1e21)) return '<h3 style="color: ' + color + '">' + format(player.d.boost6mult, 2) + '</h3>x Row 3 resources gains'
            else return ""},
            {"color": function() {
            return player.d.boost6active == 1 ? "#dfdfdf" : "#808080"}, "font-size": "16px"}]]],

        () => (player.d.total.gte(1e45)) ? "blank" : "",

        ["row", [["clickable", 17], "blank", ["display-text",function() {const active = player.d.boost7active == 1
            const color = active ? "orange" : "gray"
            if (player.d.total.gte(1e45) && player.d.boost7add.gte(25)) return '+<h3 style="color: ' + color + '">' + format(player.d.boost7add, 2) + '</h3>x Achievement Multiplier Base (capped)'
            else if (player.d.total.gte(1e45)) return '+<h3 style="color: ' + color + '">' + format(player.d.boost7add, 2) + '</h3>x Achievement Multiplier Base'
            else return ""},
            {"color": function() {
            return player.d.boost7active == 1 ? "#dfdfdf" : "#808080"}, "font-size": "16px"}]]],
        () => (player.d.total.gte(1e121)) ? "blank" : "",

        ["row", [["clickable", 18], "blank", ["display-text",function() {const active = player.d.boost8active == 1
            const color = active ? "orange" : "gray"
            if (player.d.total.gte(1e121)) return '<h3 style="color: ' + color + '">' + format(player.d.boost8mult, 2) + '</h3>x Atom Challenge 4, 5, 6 Rewards'
            else return ""},
            {"color": function() {
            return player.d.boost8active == 1 ? "#dfdfdf" : "#808080"}, "font-size": "16px"}]]],

        () => (player.d.total.gte(1.79e308)) ? "blank" : "",

        ["row", [["clickable", 19], "blank", ["display-text",function() {const active = player.d.boost9active == 1
            const color = active ? "orange" : "gray"
            if (player.d.total.gte(1.79e308)) return '<h3 style="color: ' + color + '">' + format(player.d.boost9mult, 2) + '</h3>x Water Droplet effects'
            else return ""},
            {"color": function() {
            return player.d.boost9active == 1 ? "#dfdfdf" : "#808080"}, "font-size": "16px"}]]],

        "blank",
        ["h-line", "370px"],
        "blank",
        "upgrades",
    ],
    color: "orange",
    nodeStyle() {
        if (player.d.unlocked || player.d.total.gte(1)) return { 
            animation: "pulseColor 3s infinite alternate ease-in-out",
            "background-origin": "border-box",
        }
    },
    requires: new Decimal('1e500'),  
    resource: "DNA", 
    baseResource: "Quarks", 
    baseAmount() {return player.q.points}, 
    type: "normal", 
    exponent: 0.02725, 
    gainMult() { 
        mult = new Decimal('1')
        if (player.d.total.gte(1)) mult = mult.times(player.d.doublehelixesmult)
        if (hasAchievement('ach', 56)) mult = mult.times(3)
        if (hasUpgrade('d', 12)) mult = mult.times(softcap((upgradeEffect('d', 12)), new Decimal(500000), 0.2))
        if (hasUpgrade('w', 20)) mult = mult.times(upgradeEffect('w', 20))
        if (hasUpgrade('w', 33)) mult = mult.times(upgradeEffect('w', 33))
        if (player.d.total.gte(1) && player.d.boost6active == 1) mult = mult.times(player.d.boost6mult)
        if (hasUpgrade('i', 47)) mult = mult.times(3)
        //player.d.points = player.d.points.times('1.01')
        //player.d.points = player.d.points.pow(1.01)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 2,
    hotkeys: [
        {key: "d", description: "D: Reset for DNA", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['q', 'a'],
    layerShown(){return (hasUpgrade('i', 46) || player.d.total.gte(1))},
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
            display() {return "Respec Boosts"},
            canClick() {return player.d.currentboostsactive.gte(1)},
            onClick() {return player.d.boost1active = new Decimal(0), player.d.boost2active = new Decimal(0), player.d.boost3active = new Decimal(0), player.d.boost4active = new Decimal(0), player.d.boost5active = new Decimal(0), player.d.boost6active = new Decimal(0), player.d.boost7active = new Decimal(0), player.d.boost8active = new Decimal(0), player.d.boost9active = new Decimal(0), player.w.droplets32pow = player.w.dropletsmult.log2().plus(1), doReset('d', true)},
            style: {
                "min-height": "50px"
            }
        },
        11: {
            display() {return "Activate Boost 1"},
            canClick() {return player.d.currentboostsactive.lt(player.d.maxboostsactive) && player.d.boost1active == 0 && player.d.total.gte(1)},
            onClick() {return player.d.boost1active = new Decimal(1)},
            style: {
                "min-height": "50px"
            }
        },
        12: {
            display() {return "Activate Boost 2"},
            canClick() {return player.d.currentboostsactive.lt(player.d.maxboostsactive) && player.d.boost2active == 0 && player.d.total.gte(1)},
            onClick() {return player.d.boost2active = new Decimal(1)},
            style: {
                "min-height": "50px"
            }
        },
        13: {
            display() {return "Activate Boost 3"},
            canClick() {return player.d.currentboostsactive.lt(player.d.maxboostsactive) && player.d.boost3active == 0 && player.d.total.gte(1)},
            onClick() {return player.d.boost3active = new Decimal(1)},
            style: {
                "min-height": "50px"
            }
        },
        14: {
            display() {return "Activate Boost 4"},
            canClick() {return player.d.currentboostsactive.lt(player.d.maxboostsactive) && player.d.boost4active == 0 && player.d.total.gte(1)},
            onClick() {return player.d.boost4active = new Decimal(1)},
            style: {
                "min-height": "50px"
            }
        },
        15: {
            display() {return "Activate Boost 5"},
            canClick() {return player.d.currentboostsactive.lt(player.d.maxboostsactive) && player.d.boost5active == 0 && player.d.total.gte(1)},
            onClick() {return player.d.boost5active = new Decimal(1)},
            style: {
                "min-height": "50px"
            },
            unlocked() {return player.d.total.gte(1e9)}
        },
        16: {
            display() {return "Activate Boost 6"},
            canClick() {return player.d.currentboostsactive.lt(player.d.maxboostsactive) && player.d.boost6active == 0 && player.d.total.gte(1)},
            onClick() {return player.d.boost6active = new Decimal(1)},
            style: {
                "min-height": "50px"
            },
            unlocked() {return player.d.total.gte(1e21)}
        },
        17: {
            display() {return "Activate Boost 7"},
            canClick() {return player.d.currentboostsactive.lt(player.d.maxboostsactive) && player.d.boost7active == 0 && player.d.total.gte(1)},
            onClick() {return player.d.boost7active = new Decimal(1)},
            style: {
                "min-height": "50px"
            },
            unlocked() {return player.d.total.gte(1e45)}
        },
        18: {
            display() {return "Activate Boost 8"},
            canClick() {return player.d.currentboostsactive.lt(player.d.maxboostsactive) && player.d.boost8active == 0 && player.d.total.gte(1)},
            onClick() {return player.d.boost8active = new Decimal(1)},
            style: {
                "min-height": "50px"
            },
            unlocked() {return player.d.total.gte(1e121)}
        },
        19: {
            display() {return "Activate Boost 9"},
            canClick() {return player.d.currentboostsactive.lt(player.d.maxboostsactive) && player.d.boost9active == 0 && player.d.total.gte(1)},
            onClick() {return player.d.boost9active = new Decimal(1)},
            style: {
                "min-height": "50px"
            },
            unlocked() {return player.d.total.gte(1.79e308)}
        },
},
    upgrades: {
        11: {
            title: "01",
            description: "DNA boosts Quark gain.",
            cost: new Decimal(50000),
            effect() {
            return player.d.points.add(1).pow(0.24)
            },
            effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(1e20) , 0.25)) + 'x'},
            unlocked: true,
        },
        12: {
            title: "02",
            description: "DNA boosts its own gain.",
            cost: new Decimal(250000),
            effect() {
            return player.d.points.add(1).pow(0.064)
            },
            effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(500000) , 0.2)) + 'x'},
            unlocked: true,
        },
        13: {
            title: "03",
            description: "DNA boosts power gain.",
            cost: new Decimal(10000000),
            effect() {
            return player.d.points.add(1).pow(0.164)
            },
            effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(1e18) , 0.175)) + 'x'},
            unlocked: true,
        },
    },
    milestones: {
    },
    challenges: {}
})
