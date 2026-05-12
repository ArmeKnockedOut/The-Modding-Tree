addLayer("i", {
    name: "infinity_points", 
    symbol: "I",
    position: 1,
    branches: true,
    onPrestige() {if (player.i.timesinceinfinityreset.lt(player.i.bestinfinitytime)) return player.i.infinitypower = new Decimal(0), player.i.bestinfinitytime = player.i.timesinceinfinityreset, player.i.infinities = player.i.infinities.plus(new Decimal(1).times(upgradeEffect('i', 45))), player.i.timesinceinfinityreset = new Decimal(0), player.i.besttertiaryprotons = new Decimal(0)
        else return player.i.infinitypower = new Decimal(0), player.i.infinities = player.i.infinities.plus(new Decimal(1).times(upgradeEffect('i', 45))), player.i.timesinceinfinityreset = new Decimal(0), player.i.besttertiaryprotons = new Decimal(0)},
 //   passiveGeneration() {
  //      if (hasUpgrade('q', 14)) return 1
  //      else return 0},
    autoPrestige() {if (hasMilestone('i', 13) && player.tog.autoInfinity) return true
        else return false
    },
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
        infinitypower: new Decimal(0),
        infinitypowermultiplier: new Decimal(1),
        infinities: new Decimal(0),
        infinitypowergain: new Decimal(0),
        infinitychallenge11completions: new Decimal(0),
        ic11multiplier: new Decimal(1),
        totalinfinitychallengecompletions: new Decimal(0),
        infinitychallenge12completions: new Decimal(0),
        ic12: new Decimal(1),
        ic12_1: new Decimal(1),
        ic12_2: new Decimal(1),
        ic12multiplier: new Decimal(1),
        ic12multiplier_2: new Decimal(1),
        ic12multiplier_3: new Decimal(1),
        im5pow: new Decimal(1),
        timesinceinfinityreset: new Decimal(0),
        besttertiaryprotons: new Decimal(0),
        bestinfinitytime: new Decimal(604800)
    }},
   // update(diff) {if (inChallenge('a', 17)) player.a.atomchallenge17divisor *= Math.pow(5, 1 / 20)},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text",
            function() {return 'You have ' + format(player.i.infinities, 0) + ' Infinities'},
            { "color": "#dfdfdf", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {return 'You have spent ' + formatTime(player.i.timesinceinfinityreset) + ' in this Infinity'},
            { "color": "#dfdfdf", "font-size": "16px" }],
        ["display-text",
            function() {return 'Your fastest Infinity took ' + formatTime(player.i.bestinfinitytime) + ' '},
            { "color": "#dfdfdf", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {return 'You have <h2><span style=\"color: #195ef3; text-shadow: 0px 0px 10px #195ef3; font-family: Lucida Console\">' + format(player.i.infinitypower) + '</span></h2> Infinity Power, which is multiplying all Colored Quark effects by <h3><span style=\"color: #195ef3; text-shadow: 0px 0px 10px #195ef3; font-family: Lucida Console\">' + format(player.i.infinitypowermultiplier) + '</span></h3>x'},
            { "color": "#dfdfdf", "font-size": "16px" }],
        ["display-text",
            function() {return 'You are gaining ' + format(player.i.infinitypowergain) + ' Infinity Power per second'},
            { "color": "#c2c2c2", "font-size": "12px" }],
        "blank",
        "milestones",
        "blank",
        ["display-text",
            function() {if (hasMilestone('i', 3) && hasMilestone('i', 12)) return 'You have ' +  '<h2><span style=\"color: #195ef3; text-shadow: 0px 0px 10px #195ef3; font-family: Lucida Console\">' + format(player.i.totalinfinitychallengecompletions, 0) + '/6</span></h2>' + ' Total Infinity Challenge Completions, which are multiplying Atom gain by ' + '<h3><span style=\"color: #195ef3; text-shadow: 0px 0px 10px #195ef3; font-family: Lucida Console\">' + format(new Decimal.pow(3.08, player.i.totalinfinitychallengecompletions)) + '</span></h3>' +'x'
                else if (hasMilestone('i', 3)) return 'You have ' +  '<h2><span style=\"color: #195ef3; text-shadow: 0px 0px 10px #195ef3; font-family: Lucida Console\">' + format(player.i.totalinfinitychallengecompletions, 0) + '/6</span></h2>' + ' Total Infinity Challenge Completions'},
            { "color": "white", "font-size": "16px" }],
        () => (hasMilestone('i', 3)) ? "blank" : "",
        "challenges",
        "blank",
        "blank",
        ["upgrade-tree", [ [11], [12, 13, 14, 15, 16],[17,18,19],[20,21,22,23],[24,25],[26],[27,28],[29,30,31],[32,33,34],[35,36,37],[38],[39],[40,41,42,43,44],[45],[46] ] ],
    ],
    color: "#195ef3",
    nodeStyle() {
        if (player.q.points.gte(1.79e308) || player.i.total.gte(1)) return {
            'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
            "background-origin": "border-box",
        }
    },
    componentStyles: {
    "prestige-button"() { if (player.q.points.gte(1.79e308)) return {
        'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
            "background-origin": "border-box",}
        },
    },
    update(diff) {
        //if (hasMilestone('i', 5)) player.i.im5pow = new Decimal(2)
        if (hasUpgrade('i', 46)) player.infinity_broken = true
        if (hasMilestone('i', 5)) player.i.im5pow = hasUpgrade('i', 39) ? new Decimal(3) : new Decimal(2)
        if (challengeCompletions('i', 11) == 3) player.i.ic11multiplier = new Decimal(210)
        if (challengeCompletions('i', 11) == 2) player.i.ic11multiplier = new Decimal(30)
        if (challengeCompletions('i', 11) == 1) player.i.ic11multiplier = new Decimal(5)
        if (player.i.infinitychallenge12completions.gte(3)) player.i.ic12multiplier_3 = new Decimal(3)
        if (player.i.infinitychallenge12completions.gte(2)) player.i.ic12multiplier_2 = new Decimal(3)
        if (player.i.infinitychallenge12completions.gte(1)) player.i.ic12multiplier = new Decimal(3)
        if (challengeCompletions('i', 12) == 3) player.i.infinitychallenge12completions = new Decimal(3)
        if (challengeCompletions('i', 12) == 2) player.i.infinitychallenge12completions = new Decimal(2)
        if (challengeCompletions('i', 12) == 1) player.i.infinitychallenge12completions = new Decimal(1)
        if (challengeCompletions('i', 11) == 3) player.i.infinitychallenge11completions = new Decimal(3)
        if (challengeCompletions('i', 11) == 2) player.i.infinitychallenge11completions = new Decimal(2)
        if (challengeCompletions('i', 11) == 1) player.i.infinitychallenge11completions = new Decimal(1)
        if (inChallenge('i', 12) && player.i.infinitychallenge12completions.gte(2)) player.i.ic12_2 = new Decimal(0)
        if (!inChallenge('i', 12)) player.i.ic12_2 = new Decimal(1)
        if (inChallenge('i', 12) && player.i.infinitychallenge12completions.gte(1)) player.i.ic12_1 = new Decimal(0)
        if (!inChallenge('i', 12)) player.i.ic12_1 = new Decimal(1)
        if (inChallenge('i', 12)) player.i.ic12 = new Decimal(0)
        if (!inChallenge('i', 12)) player.i.ic12 = new Decimal(1)
        if (hasUpgrade('i', 11)) player.i.infinitypowergain = player.i.total.pow(player.i.im5pow)
        if (hasUpgrade('i', 11)) player.i.infinitypower = player.i.infinitypower.plus(player.i.infinitypowergain.times(diff))
        player.i.infinitypowermultiplier = player.i.infinitypower.plus(1).log2().div(7.5).plus(1)
        player.i.totalinfinitychallengecompletions = player.i.infinitychallenge11completions.plus(player.i.infinitychallenge12completions)
        player.i.timesinceinfinityreset = player.i.timesinceinfinityreset.plus(new Decimal(1).times(diff))
        if (player.q.tertiaryprotons.gte(player.i.besttertiaryprotons)) player.i.besttertiaryprotons = player.q.tertiaryprotons
    },
    requires() {if (inChallenge('i', 11) || inChallenge('i', 12)) return new Decimal(2e308)
        else return new Decimal(1.79e308)}, 
    resource: "Infinity Points", 
    baseResource: "Quarks", 
    baseAmount() {return player.q.points}, 
    type: "normal", 
    exponent: 0.005, 
    gainMult() { 
        mult = new Decimal('1')
        //if (hasMilestone('i', 5)) player.i.im5pow = new Decimal(2)
        //if (challengeCompletions('i', 11) == 3) player.i.ic11multiplier = new Decimal(210)
        //if (challengeCompletions('i', 11) == 2) player.i.ic11multiplier = new Decimal(30)
        //if (challengeCompletions('i', 11) == 1) player.i.ic11multiplier = new Decimal(5)
        //if (player.i.infinitychallenge12completions.gte(3)) player.i.ic12multiplier_3 = new Decimal(3)
       // if (player.i.infinitychallenge12completions.gte(2)) player.i.ic12multiplier_2 = new Decimal(3)
       // if (player.i.infinitychallenge12completions.gte(1)) player.i.ic12multiplier = new Decimal(3)
       // if (challengeCompletions('i', 12) == 3) player.i.infinitychallenge12completions = new Decimal(3)
       // if (challengeCompletions('i', 12) == 2) player.i.infinitychallenge12completions = new Decimal(2)
       // if (challengeCompletions('i', 12) == 1) player.i.infinitychallenge12completions = new Decimal(1)
       // if (challengeCompletions('i', 11) == 3) player.i.infinitychallenge11completions = new Decimal(3)
       // if (challengeCompletions('i', 11) == 2) player.i.infinitychallenge11completions = new Decimal(2)
       // if (challengeCompletions('i', 11) == 1) player.i.infinitychallenge11completions = new Decimal(1)
       // if (inChallenge('i', 12) && player.i.infinitychallenge12completions.gte(2)) player.i.ic12_2 = new Decimal(0)
       // if (!inChallenge('i', 12)) player.i.ic12_2 = new Decimal(1)
       // if (inChallenge('i', 12) && player.i.infinitychallenge12completions.gte(1)) player.i.ic12_1 = new Decimal(0)
       // if (!inChallenge('i', 12)) player.i.ic12_1 = new Decimal(1)
       // if (inChallenge('i', 12)) player.i.ic12 = new Decimal(0)
       // if (!inChallenge('i', 12)) player.i.ic12 = new Decimal(1)
       // if (hasUpgrade('i', 11)) player.i.infinitypowergain = player.i.total.pow(player.i.im5pow).div(20)
       // if (hasUpgrade('i', 11)) player.i.infinitypower = player.i.infinitypower.plus(player.i.infinitypowergain)
       // player.i.infinitypowermultiplier = player.i.infinitypower.plus(1).log2().div(7.5).plus(1)
       // player.i.totalinfinitychallengecompletions = player.i.infinitychallenge11completions.plus(player.i.infinitychallenge12completions)
       // player.i.timesinceinfinityreset = player.i.timesinceinfinityreset.plus(0.05)
       // if (player.q.tertiaryprotons.gte(player.i.besttertiaryprotons)) player.i.besttertiaryprotons = player.q.tertiaryprotons
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 500,
    displayRow: "side",
    hotkeys: [
        {key: "i", description: "I: Reset for Infinity Points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
   // branches: [''],
    layerShown(){return (player.q.redquarks.gte(1.79e308) || player.q.points.gte(1.79e308) || player.i.total.gte(1))},
 //   doReset(resettingLayer) {
   //     if (layers[resettingLayer].row > layers[this.layer].row) {
     //       savedUpgrades = []
       //     if (hasUpgrade('c', 15) && ['c'].includes(resettingLayer)) {
         //       if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
           //     if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
             //   if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
             //   if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
            //    if (hasUpgrade(this.layer, 15)) {savedUpgrades.push(15)}
            //    if (hasUpgrade(this.layer, 16)) {savedUpgrades.push(16)}
            //    if (hasUpgrade(this.layer, 17)) {savedUpgrades.push(17)}
            //    if (hasUpgrade(this.layer, 18)) {savedUpgrades.push(18)}
            //    if (hasUpgrade(this.layer, 19)) {savedUpgrades.push(19)}
            //    if (hasUpgrade(this.layer, 21)) {savedUpgrades.push(21)}
          //  }
          //  layerDataReset(this.layer, [])
          //  player[this.layer].upgrades = savedUpgrades
     //   }
  //  },  
 //   clickables: {
  //      11: {
   //         display() {return "Convert Quarks into Red Quarks"},
   //         canClick() {return player.q.points.gte(1)},
   //         onClick() {if (hasAchievement('ach', 22)) return player.q.redquarks = player.q.redquarks.plus(player.q.points.times(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).plus(1)).times(player.q.secondaryneutrons.plus(1).log10().div(3).plus(1))), player.q.points = player.q.points.minus(player.q.points.div(2))
   //             else return player.q.redquarks = player.q.redquarks.plus(player.q.points.times(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1))), player.q.points = player.q.points.minus(player.q.points)},
   //         style: {
   //             'background-color'() {if (player.q.points.gte(1)) return "red"},
    //        }
   //     },
//},
    upgrades: {
        11: {
            title: "01",
            description: "Begin generating Infinity Power based on your Total Infinity Points.",
            cost: new Decimal(1)
        },
        12: {
            title: "02",
            description: "Infinities boost power gain.",
            cost: new Decimal(1),
            effect() {
                return player.i.infinities.times(0.5).plus(1)
            },
            effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
            branches: ['i', 11],
            unlocked() {return hasUpgrade('i', 11)}
        },
        13: {
            title: "03",
            description: "Infinities boost Quark gain.",
            cost: new Decimal(1),
            effect() {
                return player.i.infinities.times(0.3333).plus(1)
            },
            effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
            branches: ['i', 11],
            unlocked() {return hasUpgrade('i', 11)}
        },
        14: {
            title: "04",
            description: "Infinities boost Electron gain.",
            cost: new Decimal(1),
            effect() {
                return player.i.infinities.times(0.4).plus(1)
            },
            effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
            branches: ['i', 11],
            unlocked() {return hasUpgrade('i', 11)}
        },
        15: {
            title: "05",
            description: "Infinities boost Atom gain.",
            cost: new Decimal(1),
            effect() {
                return player.i.infinities.times(0.25).plus(1)
            },
            effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
            branches: ['i', 11],
            unlocked() {return hasUpgrade('i', 11)}
        },
        16: {
            title: "06",
            description: "Infinities boost Di/Poly/Monoatomic Energy gains & effects.",
            cost: new Decimal(1),
            effect() {
                if (hasUpgrade('i', 16)) return player.i.infinities.times(2.5)
                    else return 1
            },
            effectDisplay() { return format(player.i.infinities.times(2.5))+"x" },
            branches: ['i', 11],
            unlocked() {return hasUpgrade('i', 11)}
        },
        17: {
            title: "07",
            description: "Total Infinity Points boost Atom gain.",
            cost: new Decimal(1),
            effect() {
                if (hasUpgrade('i', 17)) return player.i.total.plus(1).times(5).pow(0.3)
                    else return 1
            },
            effectDisplay() { return format(player.i.total.plus(1).times(5).pow(0.3))+"x" },
            branches: ['i', 12, 13],
            unlocked() {return hasUpgrade('i', 12) && hasUpgrade('i', 13) && hasUpgrade('i', 14) && hasUpgrade('i', 15) && hasUpgrade('i', 16)}
        },
        18: {
            title: "08",
            description: "Total Infinity Points boost the Proton multiplier.",
            cost: new Decimal(1),
            effect() {
                if (hasUpgrade('i', 18)) return player.i.total.plus(1).times(4).pow(0.08)
                    else return 1
            },
            effectDisplay() { return format(player.i.total.plus(1).times(4).pow(0.08))+"x" },
            branches: ['i', 13, 14, 15],
            unlocked() {return hasUpgrade('i', 12) && hasUpgrade('i', 13) && hasUpgrade('i', 14) && hasUpgrade('i', 15) && hasUpgrade('i', 16)}
        },
        19: {
            title: "09",
            description: "Total Infinity Points boost all Neutron multipliers.",
            cost: new Decimal(1),
            effect() {
                if (hasUpgrade('i', 19)) return player.i.total.plus(1).times(3).pow(0.23)
                    else return 1
            },
            effectDisplay() { return format(player.i.total.plus(1).times(3).pow(0.23))+"x" },
            branches: ['i', 15, 16],
            unlocked() {return hasUpgrade('i', 12) && hasUpgrade('i', 13) && hasUpgrade('i', 14) && hasUpgrade('i', 15) && hasUpgrade('i', 16)}
        },
        20: {
            title: "10",
            description: "Your current Red Quarks boost power gain.",
            cost: new Decimal(1),
            effect() {
                if (hasUpgrade('i', 20)) return player.q.redquarks.plus(1).log10().div(10).plus(1)
                    else return 1
            },
            effectDisplay() { return format(player.q.redquarks.plus(1).log10().div(10).plus(1))+"x" },
            branches: ['i', 17],
            unlocked() {return hasUpgrade('i', 17)}
        },
        21: {
            title: "11",
            description: "Your current Cyan Quarks boost Quark gain.",
            cost: new Decimal(1),
            effect() {
                if (hasUpgrade('i', 21)) return player.q.cyanquarks.plus(1).log(100).div(15).plus(1)
                    else return 1
            },
            effectDisplay() { return format(player.q.cyanquarks.plus(1).log(100).div(15).plus(1))+"x" },
            branches: ['i', 17],
            unlocked() {return hasUpgrade('i', 17)}
        },
        22: {
            title: "12",
            description: "Your current Magenta Quarks boost Electron gain.",
            cost: new Decimal(1),
            effect() {
                if (hasUpgrade('i', 22)) return player.q.magentaquarks.plus(1).log(12).div(8).plus(1)
                    else return 1
            },
            effectDisplay() { return format(player.q.magentaquarks.plus(1).log(12).div(8).plus(1))+"x" },
            branches: ['i', 19],
            unlocked() {return hasUpgrade('i', 19)}
        },
        23: {
            title: "13",
            description: "Your current Yellow Quarks boost Atom gain.",
            cost: new Decimal(1),
            effect() {
                if (hasUpgrade('i', 23)) return player.q.yellowquarks.plus(1).log(250).div(20).plus(1)
                    else return 1
            },
            effectDisplay() { return format(player.q.yellowquarks.plus(1).log(250).div(20).plus(1))+"x" },
            branches: ['i', 19],
            unlocked() {return hasUpgrade('i', 19)}
        },
        24: {
            title: "14",
            description: "Neutrons now also multiply the Proton multiplier at a much reduced effect.",
            cost: new Decimal(1),
            branches: ['i', 20, 21],
            unlocked() {return hasUpgrade('i', 20) && hasUpgrade('i', 21)}
        },
        25: {
            title: "15",
            description: "Secondary Neutrons now also multiply the Secondary Proton multiplier at a much reduced effect.",
            cost: new Decimal(1),
            branches: ['i', 22, 23],
            unlocked() {return hasUpgrade('i', 22) && hasUpgrade('i', 23)}
        },
        26: {
            title: "16",
            description: "Tertiary Neutrons now also multiply the Tertiary Proton multiplier at a much reduced effect.",
            cost: new Decimal(1),
            branches: ['i', 24, 25],
            unlocked() {return hasUpgrade('i', 24) && hasUpgrade('i', 25)}
        },
        27: {
            title: "17",
            description: "Atom gain is multiplied based on the time spent in this Infinity.",
            cost: new Decimal(2),
            effect() {
                return Math.log(player.i.timesinceinfinityreset) / Math.log(150) * 1.125 + 1
            },
            effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
            branches: ['i', 26],
            unlocked() {return hasUpgrade('i', 26)}
        },
        28: {
            title: "18",
            description: "Quark gain is multiplied based on the time spent in this Infinity.",
            cost: new Decimal(2),
            effect() {
                return Math.log(player.i.timesinceinfinityreset) / Math.log(133) * 1.225 + 1
            },
            effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
            branches: ['i', 26],
            unlocked() {return hasUpgrade('i', 26)}
        },
        29: {
            title: "19",
            description: "Red Quarks' power and Quark multiplier effects no longer have a weakened formula.",
            cost: new Decimal(1),
            branches: ['i', 27],
            unlocked() {return hasUpgrade('i', 27) && hasUpgrade('i', 28)}
        },
        30: {
            title: "20",
            description: "Red Quarks slightly boost the Proton multiplier.",
            cost: new Decimal(1),
            effect() {
                if (hasUpgrade('i', 30)) return player.q.redquarks.plus(1).log(1e30).div(30.8).plus(1)
                else return 1
            },
            effectDisplay() { return format(player.q.redquarks.plus(1).log(1e30).div(30.8).plus(1))+"x" },
            branches: ['i', 27, 28],
            unlocked() {return hasUpgrade('i', 27) && hasUpgrade('i', 28)}
        },
        31: {
            title: "21",
            description: "Red Quarks boost Atom gain.",
            cost: new Decimal(1),
            effect() {
                if (hasUpgrade('i', 31)) return player.q.redquarks.plus(1).log(1e15).div(6.9).plus(1)
                else return 1
            },
            effectDisplay() { return format(player.q.redquarks.plus(1).log(1e15).div(6.9).plus(1))+"x" },
            branches: ['i', 28],
            unlocked() {return hasUpgrade('i', 27) && hasUpgrade('i', 28)}
        },
        32: {
            title: "22",
            description: "Green Quarks' power addition and Quark multiplier effects no longer have a weakened formula.",
            cost: new Decimal(2),
            branches: ['i', 29],
            unlocked() {return hasUpgrade('i', 27) && hasUpgrade('i', 28)},
            canAfford() {return hasUpgrade('i', 29)}
        },
        33: {
            title: "23",
            description: "Green Quarks slightly boost the Proton multiplier.",
            cost: new Decimal(2),
            effect() {
                if (hasUpgrade('i', 33)) return player.q.greenquarks.plus(1).log(1e40).div(31.6).plus(1)
                else return 1
            },
            effectDisplay() { return format(player.q.greenquarks.plus(1).log(1e40).div(31.6).plus(1))+"x" },
            branches: ['i', 30],
            unlocked() {return hasUpgrade('i', 27) && hasUpgrade('i', 28)},
            canAfford() {return hasUpgrade('i', 30)}
        },
        34: {
            title: "24",
            description: "Green Quarks boost Atom gain.",
            cost: new Decimal(2),
            effect() {
                if (hasUpgrade('i', 34)) return player.q.greenquarks.plus(1).log(5e17).div(7.5).plus(1)
                else return 1
            },
            effectDisplay() { return format(player.q.greenquarks.plus(1).log(5e17).div(7.5).plus(1))+"x" },
            branches: ['i', 31],
            unlocked() {return hasUpgrade('i', 27) && hasUpgrade('i', 28)},
            canAfford() {return hasUpgrade('i', 31)}
        },
        35: {
            title: "25",
            description: "Blue Quarks' power addition and power multiplier effects no longer have a weakened formula.",
            cost: new Decimal(3),
            branches: ['i', 32],
            unlocked() {return hasUpgrade('i', 27) && hasUpgrade('i', 28)},
            canAfford() {return hasUpgrade('i', 32)}
        },
        36: {
            title: "26",
            description: "Blue Quarks slightly boost the Proton multiplier.",
            cost: new Decimal(3),
            effect() {
                if (hasUpgrade('i', 36)) return player.q.bluequarks.plus(1).log(1e50).div(33.2).plus(1)
                else return 1
            },
            effectDisplay() { return format(player.q.bluequarks.plus(1).log(1e50).div(33.2).plus(1))+"x" },
            branches: ['i', 33],
            unlocked() {return hasUpgrade('i', 27) && hasUpgrade('i', 28)},
            canAfford() {return hasUpgrade('i', 33)}
        },
        37: {
            title: "27",
            description: "Blue Quarks boost Atom gain.",
            cost: new Decimal(3),
            effect() {
                if (hasUpgrade('i', 37)) return player.q.bluequarks.plus(1).log(1e20).div(8.25).plus(1)
                else return 1
            },
            effectDisplay() { return format(player.q.bluequarks.plus(1).log(1e20).div(8.25).plus(1))+"x" },
            branches: ['i', 34],
            unlocked() {return hasUpgrade('i', 27) && hasUpgrade('i', 28)},
            canAfford() {return hasUpgrade('i', 34)}
        },
        38: {
            title: "28",
            description: "Atom gain is multiplied by 1.1x for every Infinity Upgrade bought.",
            cost: new Decimal(5),
            effect() {
               if (hasUpgrade('i', 38)) return new Decimal.pow(1.1, player.i.upgrades.length)
                else return 1 
            },
            effectDisplay() { return format(new Decimal.pow(1.1, player.i.upgrades.length))+"x" },
            branches: ['i', 35, 36, 37],
            unlocked() {return hasUpgrade('i', 35) && hasUpgrade('i', 36) && hasUpgrade('i', 37)}
        },
        39: {
            title: "29",
            description: "Infinity Milestone 6 Reward ^2 -> ^3.",
            cost: new Decimal(8),
            branches: ['i', 38],
            unlocked() {return hasUpgrade('i', 38)}
        },
        40: {
            title: "30",
            description: "Infinity Power multiplies all Charges gains by its own amount.",
            cost: new Decimal(10),
            effect() {
               if (hasUpgrade('i', 40)) return player.i.infinitypower.plus(1)
                else return 1 
            },
            effectDisplay() { return format(player.i.infinitypower.plus(1))+"x" },
            branches: ['i', 39],
            unlocked() {return hasUpgrade('i', 39)}
        },
        41: {
            title: "31",
            description: "Infinity Power multiplies power gain.",
            cost: new Decimal(10),
            effect() {
               if (hasUpgrade('i', 41)) return player.i.infinitypower.plus(1).log10().plus(1)
                else return 1 
            },
            effectDisplay() { return format(player.i.infinitypower.plus(1).log10().plus(1))+"x" },
            branches: ['i', 39],
            unlocked() {return hasUpgrade('i', 39)}
        },
        42: {
            title: "32",
            description: "Infinity Power multiplies Quark gain.",
            cost: new Decimal(10),
            effect() {
               if (hasUpgrade('i', 42)) return player.i.infinitypower.plus(1).log10().div(2).plus(1)
                else return 1 
            },
            effectDisplay() { return format(player.i.infinitypower.plus(1).log10().div(2).plus(1))+"x" },
            branches: ['i', 39],
            unlocked() {return hasUpgrade('i', 39)}
        },
        43: {
            title: "33",
            description: "Infinity Power multiplies Electron gain.",
            cost: new Decimal(10),
            effect() {
               if (hasUpgrade('i', 43)) return player.i.infinitypower.plus(1).log10().times(3.08).plus(1)
                else return 1 
            },
            effectDisplay() { return format(player.i.infinitypower.plus(1).log10().times(3.08).plus(1))+"x" },
            branches: ['i', 39],
            unlocked() {return hasUpgrade('i', 39)}
        },
        44: {
            title: "34",
            description: "Infinity Power multiplies Atom gain.",
            cost: new Decimal(10),
            effect() {
               if (hasUpgrade('i', 44)) return player.i.infinitypower.plus(1).log10().div(3.08).plus(1)
                else return 1 
            },
            effectDisplay() { return format(player.i.infinitypower.plus(1).log10().div(3.08).plus(1))+"x" },
            branches: ['i', 39],
            unlocked() {return hasUpgrade('i', 39)}
        },
        45: {
            title: "35",
            description: "You gain 2x more Infinities.",
            cost: new Decimal(25),
            effect() {
               if (hasUpgrade('i', 45)) return 2
                else return 1 
            },
            branches: ['i', 40, 41, 42, 43, 44],
            unlocked() {return hasUpgrade('i', 40) && hasUpgrade('i', 41) && hasUpgrade('i', 42) && hasUpgrade('i', 43) && hasUpgrade('i', 44)}
        },
        46: {
            title: "36",
            description: "Break Infinity.",
            cost: new Decimal(50),
            branches: ['i', 45],
            unlocked() {return hasUpgrade('i', 45)}
        },
    },
    milestones: {
        0: {
            requirementDescription: "3 Infinities",
            effectDescription: "You keep Atom Milestones 1 and 8",
            done() { return player.i.infinities.gte(3) },
            style() {
                if (hasMilestone('i', 0)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
        },
        1: {
            requirementDescription: "4 Infinities",
            effectDescription: "You keep Atom Milestone 6",
            done() { return player.i.infinities.gte(4) },
            style() {
                if (hasMilestone('i', 1)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
        },
        2: {
            requirementDescription: "5 Infinities",
            effectDescription: "You keep Atom Milestone 9",
            done() { return player.i.infinities.gte(5) },
            style() {
                if (hasMilestone('i', 2)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
        },
        3: {
            requirementDescription: "8 Infinities",
            effectDescription: "Unlock Infinity Challenges",
            done() { return player.i.infinities.gte(8) },
            style() {
                if (hasMilestone('i', 3)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 0)}
        },
        4: {
            requirementDescription: "10 Infinities",
            effectDescription: "Molecules no longer reset atoms",
            done() { return player.i.infinities.gte(10) },
            style() {
                if (hasMilestone('i', 4)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 1)}
        },
        5: {
            requirementDescription: "12 Infinities",
            effectDescription: "Infinity Power gain is raised to ^2",
            done() { return player.i.infinities.gte(12) },
            style() {
                if (hasMilestone('i', 5)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 2)}
        },
        6: {
            requirementDescription: "14 Infinities",
            effectDescription: "Unlock Atom Upgrade Autobuyer",
            done() { return player.i.infinities.gte(14) },
            toggles: [["tog", "autobuyAtomUpg"]],
            style() {
                if (hasMilestone('i', 6)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 3)}
        },
        7: {
            requirementDescription: "16 Infinities",
            effectDescription: "You passively gain 1% of the Atoms you'd gain on reset every second",
            done() { return player.i.infinities.gte(16) },
            toggles: [["tog", "passiveAtomGen"]],
            style() {
                if (hasMilestone('i', 7)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 4)}
        },
        8: {
            requirementDescription: "18 Infinities",
            effectDescription: "You keep Electron Milestones",
            done() { return player.i.infinities.gte(18) },
            toggles: [["tog", "keepElectronMilestones"]],
            style() {
                if (hasMilestone('i', 8)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 5)}
        },
        9: {
            requirementDescription: "20 Infinities",
            effectDescription: "You keep Main Achievement 25 (wait... that's not a thing...), and you can now bulk complete Atom Challenges",
            done() { return player.i.infinities.gte(20) },
            style() {
                if (hasMilestone('i', 9)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 6)}
        },
        10: {
            requirementDescription: "21 Infinities",
            effectDescription: "You keep Main Achievement 47, and Atom Milestones 3, 4, 10, and 11",
            done() { return player.i.infinities.gte(21) },
            style() {
                if (hasMilestone('i', 10)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 7)}
        },
        11: {
            requirementDescription: "22 Infinities",
            effectDescription: "You keep Atom Milestones 2, 5, 7, and 13",
            done() { return player.i.infinities.gte(22) },
            style() {
                if (hasMilestone('i', 11)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 8)}
        },
        12: {
            requirementDescription: "25 Infinities",
            effectDescription: "Every Infinity Challenge completed gives a 3.08x multiplicative boost to Atom gain",
            done() { return player.i.infinities.gte(25) },
            style() {
                if (hasMilestone('i', 12)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 9)}
        },
        13: {
            requirementDescription: "32 Infinities",
            effectDescription: "Unlock Auto Infinity",
            done() { return player.i.infinities.gte(32) },
            toggles: [["tog", "autoInfinity"]],
            style() {
                if (hasMilestone('i', 13)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 10)}
        },
        14: {
            requirementDescription: "50 Infinities",
            effectDescription() {return 'While outside of Infinity Challenges, you gain 1 Atom Challenge Completion every second, scaling based on your Infinities, capping at 1 every tick (0.05s) at 1,000 Infinities. Currently: ' + format(Math.max(Decimal.div(50, player.i.infinities).toNumber(), 0.05), 2) + ' seconds per Challenge'},
            done() { return player.i.infinities.gte(50) },
            toggles: [["tog", "autoCompleteAtomChallenges"]],
            style() {
                if (hasMilestone('i', 14)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 11)}
        },
        15: {
            requirementDescription: "70 Infinities",
            effectDescription: "Unlock Molecule Autobuyer",
            done() { return player.i.infinities.gte(70) },
            toggles: [["tog", "autobuyMolecules"]],
            style() {
                if (hasMilestone('i', 15)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 12)}
        },
        16: {
            requirementDescription: "100 Infinities",
            effectDescription: "Molecules no longer reset anything",
            done() { return player.i.infinities.gte(100) },
            style() {
                if (hasMilestone('i', 16)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 13)}
        },
        17: {
            requirementDescription: "250 Infinities",
            effectDescription: "Molecule Buyables are automatically bought",
            done() { return player.i.infinities.gte(250) },
            toggles: [["tog", "autobuyMoleculeBuyables"]],
            style() {
                if (hasMilestone('i', 17)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            unlocked() {return hasMilestone('i', 14)}
        },
    },
    challenges: {
        11: {
            name() {if (challengeCompletions('i', 11) == 3) return "Infinity Challenge 1<br>PICK A SIDE<br> (3 / 3)"
                else if (challengeCompletions('i', 11) == 2) return "Infinity Challenge 1<br>PICK A SIDE<br> (2 / 3)"
                else if (challengeCompletions('i', 11) == 1) return "Infinity Challenge 1<br>PICK A SIDE<br> (1 / 3)"
                else return "Infinity Challenge 1<br>PICK A SIDE<br> (0 / 3)"
            },
            challengeDescription() {if (player.i.infinitychallenge11completions.gte(2)) return "All Neutrons colored Quarks effects are always 0.001, lowered to 0.00001 after getting your first Atom."
                else if (challengeCompletions('i', 11) == 1) return "All Neutrons colored Quarks effects are always 0.01, lowered to 0.0001 after getting your first Atom."
                else return "All Neutrons colored Quarks effects are always 0.1, lowered to 0.001 after getting your first Atom."},
            goalDescription: "1.79e308 Quarks",
            rewardDescription() {if (challengeCompletions('i', 11) == 3) return "All Neutrons colored Quarks multipliers are multiplied by 210x"
                else if (challengeCompletions('i', 11) == 2) return "All Neutrons colored Quarks multipliers are multiplied by 30x"
                else if (challengeCompletions('i', 11) == 1) return "All Neutrons colored Quarks multipliers are multiplied by 5x"
                else return "Challenge not yet completed."},
            canComplete() {return player.q.points.gte(1.79e308)},
            completionLimit: 3,
            onComplete() {player.i.infinities = player.i.infinities.plus(new Decimal(1).times(upgradeEffect('i', 45))), player.i.points = player.i.points.plus(1), player.i.total = player.i.total.plus(1)},
            unlocked() {return hasMilestone('i', 3)},
            style() {
                if (inChallenge('i', 11) && player.q.points.gte(1.79e308)) return {
                'background': 'linear-gradient(-15deg, #ffcb22 0%, #ffe600 100%)',
                "background-origin": "border-box"}
                else if (hasChallenge('i', 11)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
        },
        12: {
            name() {if (challengeCompletions('i', 12) == 3) return "Infinity Challenge 2<br>no i don't want you,<br> you're a side character!<br> (3 / 3)"
                else if (challengeCompletions('i', 12) == 2) return "Infinity Challenge 2<br>no i don't want you,<br> you're a side character!<br> (2 / 3)"
                else if (challengeCompletions('i', 12) == 1) return "Infinity Challenge 2<br>no i don't want you,<br> you're a side character!<br> (1 / 3)"
                else return "Infinity Challenge 2<br>no i don't want you,<br> you're a side character!<br> (0 / 3)"
            },
            challengeDescription() {if (player.i.infinitychallenge12completions.gte(2)) return "Secondary Colored Quarks, Green Quarks and Blue Quarks Effects are disabled."
                else if (challengeCompletions('i', 12) == 1) return "Secondary Colored Quarks, and Blue Quarks Effects are disabled."
                else return "Secondary Colored Quarks Effects are disabled."},
            goalDescription: "1.79e308 Quarks",
            rewardDescription() {if (challengeCompletions('i', 12) == 3) return "All Protons multipliers are multiplied by 3x"
                else if (challengeCompletions('i', 12) == 2) return "Proton and Secondary Proton multiplier is multiplied by 3x"
                else if (challengeCompletions('i', 12) == 1) return "Proton multiplier is multiplied by 3x"
                else return "Challenge not yet completed."},
            canComplete() {return player.q.points.gte(1.79e308)},
            completionLimit: 3,
            onComplete() {player.i.infinities = player.i.infinities.plus(new Decimal(1).times(upgradeEffect('i', 45))), player.i.points = player.i.points.plus(1), player.i.total = player.i.total.plus(1)},
            unlocked() {return hasMilestone('i', 3)},
            style() {
                if (hasChallenge('i', 12)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
        },
    },
    clickables: {
    },
    buyables: {  
    },
})
