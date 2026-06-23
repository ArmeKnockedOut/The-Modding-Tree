addLayer("a", {
    name: "atoms", 
    symbol: "A",
    position: 0,
    branches: true,
    onPrestige() {return player.a.timesinceatomreset = new Decimal(0)},
    passiveGeneration() {
        if (hasMilestone('i', 7) && player.tog.passiveAtomGen == true) return 0.01
        else return 0},
    automate() {if (player.tog.autobuyAtomUpg == true && !inChallenge('i', 13)) buyUpgrade('a', 11), buyUpgrade('a', 12), buyUpgrade('a', 13), buyUpgrade('a', 14), buyUpgrade('a', 15), buyUpgrade('a', 16), buyUpgrade('a', 17), buyUpgrade('a', 18), buyUpgrade('a', 19), buyUpgrade('a', 20), buyUpgrade('a', 21), buyUpgrade('a', 22), buyUpgrade('a', 23), buyUpgrade('a', 24), buyUpgrade('a', 25), buyUpgrade('a', 26), buyUpgrade('a', 27), buyUpgrade('a', 28), buyUpgrade('a', 29), buyUpgrade('a', 30), buyUpgrade('a', 31), buyUpgrade('a', 32), buyUpgrade('a', 33), buyUpgrade('a', 34), buyUpgrade('a', 35), buyUpgrade('a', 36), buyUpgrade('a', 37), buyUpgrade('a', 38), buyUpgrade('a', 39), buyUpgrade('a', 40), buyUpgrade('a', 41), buyUpgrade('a', 42), buyUpgrade('a', 43), buyUpgrade('a', 44), buyUpgrade('a', 45)},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
        atomchallenge11: new Decimal(1),
        ac12protonmulti: new Decimal(1),
        ac13powerexp: new Decimal(1),
        atomchallenge11completions: new Decimal(0),
        atomchallenge12completions: new Decimal(0),
        atomchallenge13completions: new Decimal(0),
        atomchallenge14completions: new Decimal(0),
        atomchallenge15completions: new Decimal(0),
        atomchallenge16completions: new Decimal(0),
        atomchallenge17completions: new Decimal(0),
        atomchallenge18completions: new Decimal(0),
        atomchallenge19completions: new Decimal(0),
        atomchallenge20completions: new Decimal(0),
        totalatomchallengecompletions: new Decimal(0),
        timesinceatomreset: new Decimal(0),
        bestquarks: new Decimal(0),
        bestelectrons: new Decimal(0),
        atomchallenge14: new Decimal(1),
        atomchallenge14multiplier: new Decimal(1),
        atomchallenge15multiplier: new Decimal(1),
        atomchallenge16multiplier: new Decimal(1),
        atomchallenge17divisor: new Decimal(1),
        ac18quarkexp: new Decimal(1),
        ac19electronexp: new Decimal(1),
        extratotalatomchallengecompletions: new Decimal(0),
        actualtotalatomchallengecompletions: new Decimal(0),
        ac20everythingmult: new Decimal(1)
    }},
    update(diff) {
        if (inChallenge('a', 17)) player.a.atomchallenge17divisor *= Math.pow(5, diff)

    if (hasMilestone('i', 14) && player.tog.autoCompleteAtomChallenges && !inChallenge('i', 11) && !inChallenge('i', 12) && !inChallenge('i', 13)) {
    let interval = Decimal.div(50, player.i.infinities).toNumber()
    interval = Math.max(interval, 0.05)
    player.a.acAutoTimer = (player.a.acAutoTimer || 0) + diff
    while (player.a.acAutoTimer >= interval) {
        player.a.acAutoTimer -= interval
        for (let id = 11; id <= 20; id++) {
            let comps = challengeCompletions('a', id)
            if (comps >= 5)
                continue
            player.a.challenges[id] = comps + 1
            break
        }
    }
}

    player.a.timesinceatomreset = player.a.timesinceatomreset.plus(new Decimal(1).times(diff))

    let ac11 = challengeCompletions('a', 11)
    let ac12 = challengeCompletions('a', 12)
    let ac13 = challengeCompletions('a', 13)
    let ac14 = challengeCompletions('a', 14)
    let ac15 = challengeCompletions('a', 15)
    let ac16 = challengeCompletions('a', 16)
    let ac17 = challengeCompletions('a', 17)
    let ac18 = challengeCompletions('a', 18)
    let ac19 = challengeCompletions('a', 19)
    let ac20 = challengeCompletions('a', 20)

    player.a.ac13powerexp = new Decimal([1, 1.02, 1.04, 1.06, 1.08, 1.1][ac13] || 1)
    player.a.ac12protonmulti = new Decimal([1, 1.1, 1.2, 1.4, 1.6, 1.8][ac12] || 1)

    for (let i = 11; i <= 20; i++) {
        player.a[`atomchallenge${i}completions`] = new Decimal(challengeCompletions('a', i))
    }

    if (player.q.points.gte(player.a.bestquarks))
        player.a.bestquarks = player.q.points
    if (player.e.points.gte(player.a.bestelectrons))
        player.a.bestelectrons = player.e.points

    player.a.atomchallenge14multiplier = new Decimal([1, 1.1, 1.2, 1.3, 1.4, 1.5][ac14] || 1)
    player.a.atomchallenge15multiplier = new Decimal([1, 1.05, 1.1, 1.15, 1.2, 1.25][ac15] || 1)
    player.a.atomchallenge16multiplier = new Decimal([1, 1.066, 1.133, 1.2, 1.266, 1.33][ac16] || 1)
    if (player.d.boost8active == 1 && player.d.total.gte(1)) player.a.atomchallenge14multiplier = player.a.atomchallenge14multiplier.times(player.d.boost8mult), player.a.atomchallenge15multiplier = player.a.atomchallenge15multiplier.times(player.d.boost8mult), player.a.atomchallenge16multiplier = player.a.atomchallenge16multiplier.times(player.d.boost8mult)
    player.a.ac18quarkexp = new Decimal([1, 1.01, 1.02, 1.03, 1.04, 1.05][ac18] || 1)
    player.a.ac19electronexp = new Decimal([1, 1.0133, 1.0266, 1.04, 1.0533, 1.0666][ac19] || 1)
    player.a.ac20everythingmult = new Decimal([1, 1.3, 1.6, 2.0, 2.45, 3.0][ac20] || 1)

    player.a.totalatomchallengecompletions = player.a.atomchallenge11completions.plus(player.a.atomchallenge12completions).plus(player.a.atomchallenge13completions).plus(player.a.atomchallenge14completions).plus(player.a.atomchallenge15completions).plus(player.a.atomchallenge16completions).plus(player.a.atomchallenge17completions).plus(player.a.atomchallenge18completions).plus(player.a.atomchallenge19completions).plus(player.a.atomchallenge20completions)
    player.a.atomchallenge11 = inChallenge('a', 11) ? new Decimal(0) : new Decimal(1)
    player.a.atomchallenge14 = inChallenge('a', 14) ? new Decimal(0) : new Decimal(1)
    let eTAC = new Decimal(0).plus(upgradeEffect('a', 41)).plus(player.m.moleculeextraatomchallenges).plus(buyableEffect('m', 14)).plus(upgradeEffect('w', 17))
    if (player.d.boost3active == 1) eTAC = eTAC.plus(player.d.boost3add)
    player.a.extratotalatomchallengecompletions = eTAC
    player.a.actualtotalatomchallengecompletions = player.a.totalatomchallengecompletions.plus(player.a.extratotalatomchallengecompletions)
    },
    milestonePopups() {if (hasMilestone('i', 9)) return false
        else return true
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        "milestones",
        "blank",
        ["display-text",
            function() {if (hasMilestone('a', 12)) return 'You have ' +  '<h2 style="color: white">' + format(player.a.totalatomchallengecompletions, 0) + '+' + format(player.a.extratotalatomchallengecompletions, 0) + '/50</h2>' + ' Total Atom Challenge Completions, which are multiplying power gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge14multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x, Quark gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge15multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x, and Electron gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge16multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x'
                else if (hasUpgrade('a', 41)) return 'You have ' +  '<h2 style="color: white">' + format(player.a.totalatomchallengecompletions, 0) + '+' + format(player.a.extratotalatomchallengecompletions, 0) + '/45</h2>' + ' Total Atom Challenge Completions, which are multiplying power gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge14multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x, Quark gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge15multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x, and Electron gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge16multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x'
                else if (hasMilestone('a', 6)) return 'You have ' +  '<h2 style="color: white">' + format(player.a.actualtotalatomchallengecompletions, 0) + '/45</h2>' + ' Total Atom Challenge Completions, which are multiplying power gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge14multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x, Quark gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge15multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x, and Electron gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge16multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x'
                else if (hasMilestone('a', 4)) return 'You have ' +  '<h2 style="color: white">' + format(player.a.actualtotalatomchallengecompletions, 0) + '/30</h2>' + ' Total Atom Challenge Completions, which are multiplying power gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge14multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x, Quark gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge15multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x, and Electron gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge16multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x'
                else if (hasMilestone('a', 1)) return 'You have ' +  '<h2 style="color: white">' + format(player.a.actualtotalatomchallengecompletions, 0) + '/15</h2>' + ' Total Atom Challenge Completions'},
            { "color": "white", "font-size": "16px" }],
        () => (hasMilestone('a', 1)) ? "blank" : "",
        ["row", [["challenge", 11], ["challenge", 12], ["challenge", 13]]],
        ["row", [["challenge", 14], ["challenge", 15], ["challenge", 16]]],
        ["row", [["challenge", 17], ["challenge", 18], ["challenge", 19]]],
        ["challenge", 20],
        () => (hasMilestone('a', 1)) ? "blank" : "",
        () => (hasMilestone('a', 1)) ? "blank" : "",
        ["upgrade-tree", [ [11, 12, 13],[14, 15],[16, 17, 18],[19, 20, 21],[22, 23, 24, 25],[26, 27],[28],[29,30],[31,32,33,34],[35],[36,37],[38,39,40],[41,42,43,44,45] ] ],
        "blank",
    ],
    color: "#e6e4d6",
    requires: new Decimal(1e30), 
    resource: "Atoms", 
    baseResource: "Quarks", 
    baseAmount() {return player.q.points}, 
    type: "normal", 
    exponent: 0.38, 
    gainMult() { 
        mult = new Decimal(1)
        if (hasUpgrade('i', 15)) mult = mult.times(upgradeEffect('i', 15))
        if (hasUpgrade('i', 17)) mult = mult.times(upgradeEffect('i', 17))
        if (hasUpgrade('i', 23)) mult = mult.times(upgradeEffect('i', 23))
        if (hasUpgrade('i', 27)) mult = mult.times(upgradeEffect('i', 27))
        if (hasUpgrade('i', 31)) mult = mult.times(upgradeEffect('i', 31))
        if (hasUpgrade('i', 34)) mult = mult.times(upgradeEffect('i', 34))
        if (hasUpgrade('i', 37)) mult = mult.times(upgradeEffect('i', 37))
        if (hasUpgrade('i', 38)) mult = mult.times(upgradeEffect('i', 38))
        if (hasUpgrade('i', 44)) mult = mult.times(upgradeEffect('i', 44))
        if (hasMilestone('i', 12)) mult = mult.times(new Decimal.pow(3.08, player.i.totalinfinitychallengecompletions))
        if (getBuyableAmount('m', 23).gte(1)) mult = mult.times(buyableEffect('m', 23))
        if (player.am.total.gte(1) && player.am.nitrogen.gte(1)) mult = mult.times(player.am.nitrogenboost)
        if (hasUpgrade('w', 11)) mult = mult.times(upgradeEffect('w', 11))
        if (hasUpgrade('w', 24)) mult = mult.times(upgradeEffect('w', 24))
        if (hasUpgrade('w', 36)) mult = mult.times(upgradeEffect('w', 36))
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1,
    hotkeys: [
        {key: "a", description: "A: Reset for Atoms", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['e', 'q'],
    layerShown(){return (hasMilestone('e', 8) || hasMilestone('a', 0) || player.i.total.gte(1))},
    doReset(resettingLayer) {
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
    },
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
        description: "Power gain is multiplied based on your Atoms.",
        cost: new Decimal(1),
        effect() {
        return player.a.points.add(2).pow(0.389)
      },
      effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(10) , 0.4))+"x" },
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      12: {
        title: "02",
        description: "Quark gain is multiplied based on your Atoms.",
        cost: new Decimal(1),
        effect() {
        return player.a.points.add(2).pow(0.346)
      },
      effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(10) , 0.4))+"x" },
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      13: {
        title: "03",
        description: "Electron gain is multiplied based on your Atoms.",
        cost: new Decimal(1),
        effect() {
        return player.a.points.add(2).pow(0.364)
      },
      effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(10) , 0.4))+"x" },
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      14: {
        title: "04",
        description: "Power gain is multiplied based on your Electrons.",
        cost: new Decimal(100),
        effect() {
        return player.e.points.add(1).pow(0.012)
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 11, 12],
      unlocked() {return (hasUpgrade('a', 11) && hasUpgrade('a', 12) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      15: {
        title: "05",
        description: "Quark gain is multiplied based on your Electrons.",
        cost: new Decimal(100),
        effect() {
        return player.e.points.add(1).pow(0.007)
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 12, 13],
      unlocked() {return (hasUpgrade('a', 12) && hasUpgrade('a', 13) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      16: {
        title: "06",
        description: "Power gain is multiplied based on your total time played.",
        cost: new Decimal(10000),
        effect() {
        return Math.log(player.timePlayed) / Math.log(100)
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 14],
      unlocked() {return (hasUpgrade('a', 14) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      17: {
        title: "07",
        description: "Quark gain is multiplied based on your total time played.",
        cost: new Decimal(10000),
        effect() {
        return Math.log(player.timePlayed) / Math.log(250)
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 14, 15],
      unlocked() {return (hasUpgrade('a', 14) && hasUpgrade('a', 15) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      18: {
        title: "08",
        description: "Electron gain is multiplied based on your total time played.",
        cost: new Decimal(10000),
        effect() {
        return Math.log(player.timePlayed) / Math.log(225)
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 15],
      unlocked() {return (hasUpgrade('a', 15) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      19: {
        title: "09",
        description: "Power gain is multiplied based on the time spent in this Atom Reset, not reset by entering/exiting Atom Challenges.",
        cost: new Decimal(1e8),
        effect() {
        return Math.log(player.a.timesinceatomreset.plus(1)) / Math.log(235) + 1
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 16],
      unlocked() {return (hasUpgrade('a', 16) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      20: {
        title: "10",
        description: "Quark gain is multiplied based on the time spent in this Atom Reset, not reset by entering/exiting Atom Challenges.",
        cost: new Decimal(1e8),
        effect() {
        return Math.log(player.a.timesinceatomreset.plus(1)) / Math.log(345) / 1.25 + 1    
    },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 17],
      unlocked() {return (hasUpgrade('a', 17) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      21: {
        title: "11",
        description: "Electron gain is multiplied based on the time spent in this Atom Reset, not reset by entering/exiting Atom Challenges.",
        cost: new Decimal(1e8),
        effect() {
        return Math.log(player.a.timesinceatomreset.plus(1)) / Math.log(305) / 1.125 + 1
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 18],
      unlocked() {return (hasUpgrade('a', 18) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      22: {
        title: "12",
        description: "Proton multiplier is boosted based on your Electrons.",
        cost: new Decimal(5e8),
        effect() {
        if (hasUpgrade('a', 22)) return player.e.points.add(1).pow(0.00133)
            else return 1
      },
      effectDisplay() { return format(player.e.points.add(1).pow(0.00133))+"x" },
      branches: ['a', 19],
      unlocked() {return (hasUpgrade('a', 19) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      23: {
        title: "13",
        description: "Secondary Proton multiplier is boosted based on your Electrons.",
        cost: new Decimal(5e8),
        effect() {
        if (hasUpgrade('a', 23)) return player.e.points.add(1).pow(0.0019)
            else return 1
      },
      effectDisplay() { return format(player.e.points.add(1).pow(0.0019))+"x" },
      branches: ['a', 19, 20,],
      unlocked() {return (hasUpgrade('a', 19) && hasUpgrade('a', 20) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      24: {
        title: "14",
        description: "Proton multiplier is boosted based on your power.",
        cost: new Decimal(5e8),
        effect() {
        if (hasUpgrade('a', 24)) return player.points.add(1).pow(0.00083)
            else return 1
      },
      effectDisplay() { return format(player.points.add(1).pow(0.00083))+"x" },
      branches: ['a', 20, 21],
      unlocked() {return (hasUpgrade('a', 20) && hasUpgrade('a', 21) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      25: {
        title: "15",
        description: "Secondary Proton multiplier is boosted based on your power.",
        cost: new Decimal(5e8),
        effect() {
        if (hasUpgrade('a', 25)) return player.points.add(1).pow(0.00107)
            else return 1
      },
      effectDisplay() { return format(player.points.add(1).pow(0.00107))+"x" },
      branches: ['a', 21],
      unlocked() {return (hasUpgrade('a', 21) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      26: {
        title: "16",
        description: "Power gain is multiplied based on your Best Quarks.",
        cost: new Decimal(1e11),
        effect() {
            return player.a.bestquarks.add(1).pow(0.004)
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 22, 23],
      unlocked() {return (hasUpgrade('a', 22) && hasUpgrade('a', 23) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      27: {
        title: "17",
        description: "Power gain is multiplied based on your Best Electrons.",
        cost: new Decimal(1e11),
        effect() {
            return player.a.bestelectrons.add(1).pow(0.0074)      
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 24, 25],
      unlocked() {return (hasUpgrade('a', 24) && hasUpgrade('a', 25) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      28: {
        title: "18",
        description: "Secondary Neutron multiplier is boosted based on your Quarks.",
        cost: new Decimal(1e14),
        effect() {
            if (hasUpgrade('a', 28)) return player.q.points.add(1).pow(0.00610)
            else return 1   
      },
      effectDisplay() { return format(player.q.points.add(1).pow(0.00610))+"x" },
      branches: ['a', 26, 27],
      unlocked() {return (hasUpgrade('a', 26) && hasUpgrade('a', 27) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      29: {
        title: "19",
        description: "All Charges gains are multiplied based on your Atoms.",
        cost: new Decimal(5e14),
        effect() {
            if (hasUpgrade('a', 29)) return softcap(player.a.points.add(1).pow(0.1820), new Decimal(1e6), 0.3)
            else return 1   
      },
      effectDisplay() { return format(softcap(player.a.points.add(1).pow(0.1820), new Decimal(1e6), 0.3))+"x" },
      branches: ['a', 28],
      unlocked() {return (hasUpgrade('a', 28) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      30: {
        title: "20",
        description: "All Charges gains are multiplied by 1.425x for every Atom Upgrade bought.",
        cost: new Decimal(5e14),
        effect() {
            if (hasUpgrade('a', 30)) return new Decimal.pow(1.425, player.a.upgrades.length)
            else return 1   
      },
      effectDisplay() { return format(new Decimal.pow(1.425, player.a.upgrades.length))+"x" },
      branches: ['a', 28],
      unlocked() {return (hasUpgrade('a', 28) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      31: {
        title: "21",
        description: "Power gain is multiplied by 1.05x for every Atom Upgrade bought.",
        cost: new Decimal(5e15),
        effect() {
            if (hasUpgrade('a', 30)) return new Decimal.pow(1.05, player.a.upgrades.length)
            else return 1   
      },
      effectDisplay() { return format(new Decimal.pow(1.05, player.a.upgrades.length))+"x" },
      branches: ['a', 29],
      unlocked() {return (hasUpgrade('a', 29) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      32: {
        title: "22",
        description: "Quark gain is multiplied by 1.045x for every Atom Upgrade bought.",
        cost: new Decimal(7.5e15),
        effect() {
            if (hasUpgrade('a', 30)) return new Decimal.pow(1.045, player.a.upgrades.length)
            else return 1   
      },
      effectDisplay() { return format(new Decimal.pow(1.045, player.a.upgrades.length))+"x" },
      branches: ['a', 29],
      unlocked() {return (hasUpgrade('a', 29) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      33: {
        title: "23",
        description: "Electron gain is multiplied by 1.06x for every Atom Upgrade bought.",
        cost: new Decimal(1.12e16),
        effect() {
            if (hasUpgrade('a', 30)) return new Decimal.pow(1.06, player.a.upgrades.length)
            else return 1   
      },
      effectDisplay() { return format(new Decimal.pow(1.06, player.a.upgrades.length))+"x" },
      branches: ['a', 30],
      unlocked() {return (hasUpgrade('a', 30) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      34: {
        title: "24",
        description: "Proton multiplier is multiplied by 1.0133x for every Atom Upgrade bought.",
        cost: new Decimal(1.68e16),
        effect() {
            if (hasUpgrade('a', 30)) return new Decimal.pow(1.0133, player.a.upgrades.length)
            else return 1   
      },
      effectDisplay() { return format(new Decimal.pow(1.0133, player.a.upgrades.length))+"x" },
      branches: ['a', 30],
      unlocked() {return (hasUpgrade('a', 30) || inChallenge('i', 13))},
      canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      35: {
        title: "25",
        description: "Unlock Tertiary Protons.",
        cost: new Decimal(1e24),
        branches: ['a', 31, 32, 33, 34],
        unlocked() {return (hasUpgrade('a', 31) && hasUpgrade('a', 32) && hasUpgrade('a', 33) && hasUpgrade('a', 34) || inChallenge('i', 13))},
        canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      36: {
        title: "26",
        description: "Tertiary Proton multiplier is multiplied by 1.015x for every Atom Upgrade bought.",
        cost: new Decimal(2e42),
        branches: ['a', 35],
        effect() {
            if (hasUpgrade('a', 36)) return new Decimal.pow(1.015, player.a.upgrades.length)
            else return 1   
        },
        effectDisplay() { return format(new Decimal.pow(1.015, player.a.upgrades.length))+"x" },
        unlocked() {return (hasAchievement('ach', 43) && hasUpgrade('a', 35) || inChallenge('i', 13))},
        canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      37: {
        title: "27",
        description: "Tertiary Neutron multiplier is boosted based on your Quarks.",
        cost: new Decimal(2e42),
        branches: ['a', 35],
        effect() {
            if (hasUpgrade('a', 37)) return player.q.points.plus(1).pow(0.0067)
            else return 1   
        },
        effectDisplay() { return format(player.q.points.plus(1).pow(0.0067))+"x" },
        unlocked() {return (hasAchievement('ach', 43) && hasUpgrade('a', 35) || inChallenge('i', 13))},
        canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      38: {
        title: "28",
        description: "Primary, Secondary, And Tertiary Proton multipliers are multiplied by 1.0069x for every Atom Upgrade bought.",
        cost: new Decimal(4e43),
        branches: ['a', 36],
        effect() {
            if (hasUpgrade('a', 38)) return new Decimal.pow(1.0069, player.a.upgrades.length)
            else return 1   
        },
        effectDisplay() { return format(new Decimal.pow(1.0069, player.a.upgrades.length))+"x" },
        unlocked() {return (hasUpgrade('a', 36) || inChallenge('i', 13))},
        canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      39: {
        title: "29",
        description: "Tertiary Proton multiplier is boosted based on your Quarks.",
        cost: new Decimal(2e43),
        branches: ['a', 36, 37],
        effect() {
            if (hasUpgrade('a', 39)) return player.q.points.plus(1).pow(0.00077)
            else return 1   
        },
        effectDisplay() { return format(player.q.points.plus(1).pow(0.00077))+"x" },
        unlocked() {return (hasUpgrade('a', 36) && hasUpgrade('a', 37) || inChallenge('i', 13))},
        canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      40: {
        title: "30",
        description: "Primary, Secondary, And Tertiary Neutron multipliers are multiplied by 1.0266x for every Atom Upgrade bought.",
        cost: new Decimal(4e43),
        branches: ['a', 37],
        effect() {
            if (hasUpgrade('a', 40)) return new Decimal.pow(1.0266, player.a.upgrades.length)
            else return 1   
        },
        effectDisplay() { return format(new Decimal.pow(1.0266, player.a.upgrades.length))+"x" },
        unlocked() {return (hasUpgrade('a', 37) || inChallenge('i', 13))},
        canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      41: {
        title: "31",
        description: "You get 3 Extra Total Atom Challenge completions.",
        cost: new Decimal(1e51),
        branches: ['a', 38],
        effect() {if (hasUpgrade('a', 41)) return new Decimal(3)
            else return 0
        },
        unlocked() {return (hasUpgrade('a', 38) || inChallenge('i', 13))},
        canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      42: {
        title: "32",
        description: "All Charges gains are multiplied by 200,000x.",
        cost: new Decimal(2e51),
        branches: ['a', 38],
        effect() {
            if (hasUpgrade('a', 42)) return new Decimal(200000)
            else return 1   
        },
        unlocked() {return (hasUpgrade('a', 38) || inChallenge('i', 13))},
        canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      43: {
        title: "33",
        description: "+50% Proton multiplier.",
        cost: new Decimal(3e51),
        branches: ['a', 38, 39, 40],
        effect() {
            if (hasUpgrade('a', 43)) return new Decimal(1.5)
            else return 1   
        },
        unlocked() {return (hasUpgrade('a', 38) && hasUpgrade('a', 39) && hasUpgrade('a', 40) || inChallenge('i', 13))},
        canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      44: {
        title: "34",
        description: "Quark gain is multiplied by 3x.",
        cost: new Decimal(1e53),
        branches: ['a', 40],
        unlocked() {return (hasUpgrade('a', 40) || inChallenge('i', 13))},
        canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },

      45: {
        title: "35",
        description: "Electron gain is multiplied by 15x.",
        cost: new Decimal(5e53),
        branches: ['a', 40],
        unlocked() {return (hasUpgrade('a', 40) || inChallenge('i', 13))},
        canAfford() {if (inChallenge('i', 13) && player.a.upgrades.length < 5) return true
        else if (inChallenge('i', 13) && player.a.upgrades.length >= 5) return false
        else return true
      }
      },
    },
    milestones: {
        0: {
            requirementDescription: "1 Atom",
            effectDescription: "You passively gain 10% of the Electrons you'd gain on reset per second",
            done() { return player.a.points.gte(1) },
            toggles: [["tog", "passiveElectronGen"]]
        },
        1: {
            requirementDescription: "10 Atoms",
            effectDescription: "Unlock Atom Challenges",
            done() { return player.a.points.gte(10) }
        },
        2: {
            requirementDescription: "10,000,000 Atoms",
            effectDescription: "You passively gain 1% of each secondary-colored Quark based on your Quarks per second, multiplied by the Neutron multipliers. Primary-colored Quark generation is also increased to 1%.",
            done() { return player.a.points.gte(10000000) }
        },
        3: {
            requirementDescription: "100,000,000 Atoms",
            effectDescription: "Electron passive gain is increased to 100%",
            done() { return player.a.points.gte(1e8) }
        },
        4: {
            requirementDescription: "1.00e12 Atoms",
            effectDescription: "Unlock 3 more Atom Challenges",
            done() { return player.a.points.gte(1e12) },
            unlocked() {return hasMilestone('a', 1)}
        },
        5: {
            requirementDescription: "1.00e18 Atoms",
            effectDescription: "You passively gain 10% of the Protons, Neutrons, Secondary Protons, and Secondary Neutrons you'd get on Converting",
            done() { return player.a.points.gte(1e18) },
            unlocked() {return hasMilestone('a', 3) || hasMilestone('i', 1)}
        },
        6: {
            requirementDescription: "1.00e21 Atoms",
            effectDescription: "Unlock 3 more Atom Challenges",
            done() { return player.a.points.gte(1e21) },
            unlocked() {return hasMilestone('a', 4)}
        },
        7: {
            requirementDescription: "1.00e25 Atoms",
            effectDescription: "Unlock Quark Upgrade Autobuyer",
            done() { return player.a.points.gte(1e25) },
            unlocked() {return hasMilestone('a', 6) || hasMilestone('i', 0)},
            toggles: [["tog", "autobuyQuarkUpg"]]
        },
        8: {
            requirementDescription: "1.00e32 Atoms",
            effectDescription: "You passively gain 1% of the Quarks you'd gain on reset every second",
            done() { return player.a.points.gte(1e32) },
            unlocked() {return hasMilestone('a', 7) || hasMilestone('i', 2)},
            toggles: [["tog", "passiveQuarkGen"]]
        },
        9: {
            requirementDescription: "1.00e40 Atoms",
            effectDescription: "Quark passive gain is increased to 10%",
            done() { return player.a.points.gte(1e40) },
            unlocked() {return hasMilestone('a', 8) || hasMilestone('i', 10)},
        },
        10: {
            requirementDescription: "1.00e48 Atoms",
            effectDescription: "Quark passive gain is increased to 100%",
            done() { return player.a.points.gte(1e48) },
            unlocked() {return hasMilestone('a', 9) || hasMilestone('i', 10)},
        },
        12: {
            requirementDescription: "5.00e55 Atoms",
            effectDescription: "Unlock Atom Challenge 10.",
            done() { return player.a.points.gte(5e55) },
            unlocked() {return hasMilestone('a', 10)},
        },
        11: {
            requirementDescription: "1.00e53 Atoms",
            effectDescription: "You passively gain 1% of the Tertiary Protons and Tertiary Neutrons you'd get on Converting.",
            done() { return player.a.points.gte(1e53) },
            unlocked() {return hasMilestone('a', 10)},
        },
    },
    challenges: {
11: {
    requirements: [1e21,1e30,1e40,1e50,6.96e69],
    getChallengeBulk() {
        let comp = challengeCompletions('a', 11)
        if (!inChallenge('a', 11)) return comp
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i + 1
        }
        return comp
    },
    name() {return `Atom Challenge 1<br>Power Outage<br> (${challengeCompletions('a', 11)} / 5)`},
    challengeDescription: "Charges aren't generated.",
    goalDescription() {
    let current = challengeCompletions('a', 11)
    let bulk = this.getChallengeBulk()
    // NO BULK MODE
    if (!hasMilestone('i', 9) && !player.a.atomchallenge11completions.gte(5)) {
        let ready = player.q.points.gte(this.requirements[current]) && inChallenge('a', 11)
        return `${format(this.requirements[current])} Quarks (+${ready ? 1 : 0})`
    }
    if (player.a.atomchallenge11completions.gte(5)) {
        return "Fully completed (6.96e69 Quarks)"
    }
    // BULK MODE
    if (bulk >= this.completionLimit)
        return "Fully completed (6.96e69 Quarks)"

    let gained = bulk - current
    return `${format(this.requirements[bulk])} Quarks (+${gained})`
},
    rewardDescription() {
        let comp = challengeCompletions('a', 11)
        if (comp == 0) return "Challenge not yet completed."
        return `Charges 6${comp >= 2 ? ", 7" : ""}${comp >= 3 ? ", 8" : ""}${comp >= 4 ? ", 9" : ""}${comp >= 5 ? " and 10" : ""} now boost another resource.`
    },
    canComplete() {
        let comp = challengeCompletions('a', 11)
        if (!hasMilestone('i', 9)) return player.q.points.gte(this.requirements[comp])
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i - comp + 1
        }
        return false
    },
    completionLimit: 5,
    onEnter() {return player.a.atomchallenge11 = new Decimal(0)},
    onExit() {return player.a.atomchallenge11 = new Decimal(1)},
    unlocked() {return hasMilestone('a', 1)}
},

12: {
    requirements: [5e6,5e8,1e11,1e16,1e20],
    rewards: ["+10% to the Proton Multiplier.","+20% to the Proton Multiplier.","+40% to the Proton Multiplier.","+60% to the Proton Multiplier.","+80% to the Proton Multiplier."],
    name() {return `Atom Challenge 2<br>steal quarks corp.<br> (${challengeCompletions('a', 12)} / 5)`},
    challengeDescription: "You cannot buy Quark upgrades.",
    getChallengeBulk() {
        let comp = challengeCompletions('a', 12)
        if (!inChallenge('a', 12)) return comp
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i + 1
        }
        return comp
    },
    goalDescription() {
    let current = challengeCompletions('a', 12)
    let bulk = this.getChallengeBulk()
    // NO BULK MODE
    if (!hasMilestone('i', 9) && !player.a.atomchallenge12completions.gte(5)) {
        let ready = player.q.points.gte(this.requirements[current]) && inChallenge('a', 12)
        return `${format(this.requirements[current])} Quarks (+${ready ? 1 : 0})`
    }
    if (player.a.atomchallenge12completions.gte(5)) {
        return "Fully completed (1.00e20 Quarks)"
    }
    // BULK MODE
    if (bulk >= this.completionLimit)
        return "Fully completed (1.00e20 Quarks)"

    let gained = bulk - current
    return `${format(this.requirements[bulk])} Quarks (+${gained})`
},
    rewardDescription() {
        let comp = challengeCompletions('a', 12)
        if (comp == 0) return "Challenge not yet completed."
        return this.rewards[comp - 1]
    },
    canComplete() {
        let comp = challengeCompletions('a', 12)
        if (!hasMilestone('i', 9)) return player.q.points.gte(this.requirements[comp])
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i - comp + 1
        }
        return false
    },
    completionLimit: 5,
    unlocked() {return hasMilestone('a', 1)}
},

13: {
    requirements: [1e13,1e18,1e30,1e35,1e45],
    rewards: ["Power gain above 1 is raised to ^1.02.","Power gain above 1 is raised to ^1.04.","Power gain above 1 is raised to ^1.06.","Power gain above 1 is raised to ^1.08.","Power gain above 1 is raised to ^1.1."],
    name() {return `Atom Challenge 3<br>power power<br> (${challengeCompletions('a', 13)} / 5)`},
    challengeDescription: "Power gain is ^0.5.",
    getChallengeBulk() {
        let comp = challengeCompletions('a', 13)
        if (!inChallenge('a', 13)) return comp
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i + 1
        }
        return comp
    },
    goalDescription() {
    let current = challengeCompletions('a', 13)
    let bulk = this.getChallengeBulk()
    // NO BULK MODE
    if (!hasMilestone('i', 9) && !player.a.atomchallenge13completions.gte(5)) {
        let ready = player.q.points.gte(this.requirements[current]) && inChallenge('a', 13)
        return `${format(this.requirements[current])} Quarks (+${ready ? 1 : 0})`
    }
    if (player.a.atomchallenge13completions.gte(5)) {
        return "Fully completed (1.00e45 Quarks)"
    }
    // BULK MODE
    if (bulk >= this.completionLimit)
        return "Fully completed (1.00e45 Quarks)"

    let gained = bulk - current
    return `${format(this.requirements[bulk])} Quarks (+${gained})`
},
    rewardDescription() {
        let comp = challengeCompletions('a', 13)
        if (comp == 0) return "Challenge not yet completed."
        return this.rewards[comp - 1]
    },
    canComplete() {
        let comp = challengeCompletions('a', 13)
        if (!hasMilestone('i', 9)) return player.q.points.gte(this.requirements[comp])
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i - comp + 1
        }
        return false
    },
    completionLimit: 5,
    unlocked() {return hasMilestone('a', 1)}
},

14: {
    requirements: [1e15,1e20,1e30,1e37,1e43],
    name() {return `Atom Challenge 4<br>Stability<br> (${challengeCompletions('a', 14)} / 5)`},
    challengeDescription: "You cannot get Colored Quarks.",
    getChallengeBulk() {
        let comp = challengeCompletions('a', 14)
        if (!inChallenge('a', 14)) return comp
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i + 1
        }
        return comp
    },
    goalDescription() {
    let current = challengeCompletions('a', 14)
    let bulk = this.getChallengeBulk()
    // NO BULK MODE
    if (!hasMilestone('i', 9) && !player.a.atomchallenge14completions.gte(5)) {
        let ready = player.q.points.gte(this.requirements[current]) && inChallenge('a', 14)
        return `${format(this.requirements[current])} Quarks (+${ready ? 1 : 0})`
    }
    if (player.a.atomchallenge14completions.gte(5)) {
        return "Fully completed (1.00e43 Quarks)"
    }
    // BULK MODE
    if (bulk >= this.completionLimit)
        return "Fully completed (1.00e43 Quarks)"

    let gained = bulk - current
    return `${format(this.requirements[bulk])} Quarks (+${gained})`
},
    rewardDescription() {
        return 'Every Atom Challenge completed gives a ' + format(player.a.atomchallenge14multiplier) + 'x multiplicative boost to power gain.'
    },
    canComplete() {
        let comp = challengeCompletions('a', 14)
        if (!hasMilestone('i', 9)) return player.q.points.gte(this.requirements[comp])
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i - comp + 1
        }
        return false
    },
    completionLimit: 5,
    onEnter() {return player.a.atomchallenge14 = new Decimal(0)},
    onExit() {return player.a.atomchallenge14 = new Decimal(1)},
    unlocked() {return hasMilestone('a', 4)}
},

15: {
    requirements: [1e20,1e30,1e35,1e40,1e50],
    name() {return `Atom Challenge 5<br>Duality<br> (${challengeCompletions('a', 15)} / 5)`},
    challengeDescription: "Atom Challenges 1 and 3 at the same time.",
    getChallengeBulk() {
        let comp = challengeCompletions('a', 15)
        if (!inChallenge('a', 15)) return comp
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i + 1
        }
        return comp
    },
    goalDescription() {
    let current = challengeCompletions('a', 15)
    let bulk = this.getChallengeBulk()
    // NO BULK MODE
    if (!hasMilestone('i', 9) && !player.a.atomchallenge15completions.gte(5)) {
        let ready = player.q.points.gte(this.requirements[current]) && inChallenge('a', 15)
        return `${format(this.requirements[current])} Quarks (+${ready ? 1 : 0})`
    }
    if (player.a.atomchallenge15completions.gte(5)) {
        return "Fully completed (1.00e50 Quarks)"
    }
    // BULK MODE
    if (bulk >= this.completionLimit)
        return "Fully completed (1.00e50 Quarks)"

    let gained = bulk - current
    return `${format(this.requirements[bulk])} Quarks (+${gained})`
},
    rewardDescription() {
        return 'Every Atom Challenge completed gives a ' + format(player.a.atomchallenge15multiplier) + 'x multiplicative boost to Quark gain.'
    },
    canComplete() {
        let comp = challengeCompletions('a', 15)
        if (!hasMilestone('i', 9)) return player.q.points.gte(this.requirements[comp])
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i - comp + 1
        }
        return false
    },
    completionLimit: 5,
    countsAs: [11, 13],
    onEnter() {return player.a.atomchallenge11 = new Decimal(0)},
    onExit() {return player.a.atomchallenge11 = new Decimal(1)},
    unlocked() {return hasMilestone('a', 4)}
},

16: {
    requirements: [2.5e8,1e20,1e27,1e30,1e34],
    name() {return `Atom Challenge 6<br>Quarkless<br> (${challengeCompletions('a', 16)} / 5)`},
    challengeDescription: "Atom Challenges 2 and 4 at the same time.",
    getChallengeBulk() {
        let comp = challengeCompletions('a', 16)
        if (!inChallenge('a', 16)) return comp
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i + 1
        }
        return comp
    },
    goalDescription() {
    let current = challengeCompletions('a', 16)
    let bulk = this.getChallengeBulk()
    // NO BULK MODE
    if (!hasMilestone('i', 9) && !player.a.atomchallenge16completions.gte(5)) {
        let ready = player.q.points.gte(this.requirements[current]) && inChallenge('a', 16)
        return `${format(this.requirements[current])} Quarks (+${ready ? 1 : 0})`
    }
    if (player.a.atomchallenge16completions.gte(5)) {
        return "Fully completed (1.00e34 Quarks)"
    }
    // BULK MODE
    if (bulk >= this.completionLimit)
        return "Fully completed (1.00e34 Quarks)"

    let gained = bulk - current
    return `${format(this.requirements[bulk])} Quarks (+${gained})`
},
    rewardDescription() {
        return 'Every Atom Challenge completed gives a ' + format(player.a.atomchallenge16multiplier) + 'x multiplicative boost to Electron gain.'
    },
    canComplete() {
        let comp = challengeCompletions('a', 16)
        if (!hasMilestone('i', 9)) return player.q.points.gte(this.requirements[comp])
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i - comp + 1
        }
        return false
    },
    completionLimit: 5,
    countsAs: [12, 14],
    onEnter() {return player.a.atomchallenge14 = new Decimal(0)},
    onExit() {return player.a.atomchallenge14 = new Decimal(1)},
    unlocked() {return hasMilestone('a', 4)}
},

17: {
    requirements: [1e60,1e70,1e80,1e90,1e100],
    rewards: [5,400,30000,2000000,1e8],
    name() {return `Atom Challenge 7<br>a playground slide<br> (${challengeCompletions('a', 17)} / 5)`},
    challengeDescription: "Power gain is divided by 5 every second.",
    getChallengeBulk() {
        let comp = challengeCompletions('a', 17)
        if (!inChallenge('a', 17)) return comp
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i + 1
        }
        return comp
    },
    goalDescription() {
    let current = challengeCompletions('a', 17)
    let bulk = this.getChallengeBulk()
    // NO BULK MODE
    if (!hasMilestone('i', 9) && !player.a.atomchallenge17completions.gte(5)) {
        let ready = player.q.points.gte(this.requirements[current]) && inChallenge('a', 17)
        return `${format(this.requirements[current])} Quarks (+${ready ? 1 : 0})`
    }
    if (player.a.atomchallenge17completions.gte(5)) {
        return "Fully completed (1.00e100 Quarks)"
    }
    // BULK MODE
    if (bulk >= this.completionLimit)
        return "Fully completed (1.00e100 Quarks)"

    let gained = bulk - current
    return `${format(this.requirements[bulk])} Quarks (+${gained})`
},
    rewardDescription() {
        let comp = challengeCompletions('a', 17)
        if (comp == 0) return "Challenge not yet completed."
        return `For every second in an Atom Reset, +${format(this.rewards[comp - 1])}x to all Charges gains. Currently: ${format(player.e.ac17allchargesmultiplier)}x`
    },
    canComplete() {
        let comp = challengeCompletions('a', 17)
        if (!hasMilestone('i', 9)) return player.q.points.gte(this.requirements[comp])
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i - comp + 1
        }
        return false
    },
    completionLimit: 5,
    onEnter() {return player.a.atomchallenge17divisor = new Decimal(1)},
    onExit() {return player.a.atomchallenge17divisor = new Decimal(1)},
    unlocked() {return hasMilestone('a', 6)}
},

18: {
    requirements: [1e24,1e30,1e36,1e42,1e48],
    rewards: [1.01,1.02,1.03,1.04,1.05],
    name() {return `Atom Challenge 8<br>Resourceless<br> (${challengeCompletions('a', 18)} / 5)`},
    challengeDescription: "Atom Challenges 1 and 4 at the same time.",
    getChallengeBulk() {
        let comp = challengeCompletions('a', 18)
        if (!inChallenge('a', 18)) return comp
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i + 1
        }
        return comp
    },
    goalDescription() {
    let current = challengeCompletions('a', 18)
    let bulk = this.getChallengeBulk()
    // NO BULK MODE
    if (!hasMilestone('i', 9) && !player.a.atomchallenge18completions.gte(5)) {
        let ready = player.q.points.gte(this.requirements[current]) && inChallenge('a', 18)
        return `${format(this.requirements[current])} Quarks (+${ready ? 1 : 0})`
    }
    if (player.a.atomchallenge18completions.gte(5)) {
        return "Fully completed (1.00e48 Quarks)"
    }
    // BULK MODE
    if (bulk >= this.completionLimit)
        return "Fully completed (1.00e48 Quarks)"

    let gained = bulk - current
    return `${format(this.requirements[bulk])} Quarks (+${gained})`
},
    rewardDescription() {
        let comp = challengeCompletions('a', 18)
        if (comp == 0) return "Challenge not yet completed."
        return `Quark gain is raised to ^${this.rewards[comp - 1]}.`
    },
    canComplete() {
        let comp = challengeCompletions('a', 18)
        if (!hasMilestone('i', 9)) return player.q.points.gte(this.requirements[comp])
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.q.points.gte(this.requirements[i])) return i - comp + 1
        }
        return false
    },
    completionLimit: 5,
    countsAs: [11, 14],
    onEnter() {return player.a.atomchallenge11 = new Decimal(0), player.a.atomchallenge14 = new Decimal(0)},
    onExit() {return player.a.atomchallenge11 = new Decimal(1), player.a.atomchallenge14 = new Decimal(1)},
    unlocked() {return hasMilestone('a', 6)}
},

19: {
    requirements: [1e11,1e13,1e15,1e18,1e23],
    rewards: [1.0133,1.0266,1.04,1.0533,1.0666],
    name() {return `Atom Challenge 9<br>Resourceful<br> (${challengeCompletions('a', 19)} / 5)`},
    challengeDescription: "You only have one Quark and Electron.",
    getChallengeBulk() {
        let comp = challengeCompletions('a', 19)
        if (!inChallenge('a', 19)) return comp
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.points.gte(this.requirements[i])) return i + 1
        }
        return comp
    },
    goalDescription() {
    let current = challengeCompletions('a', 19)
    let bulk = this.getChallengeBulk()
    // NO BULK MODE
    if (!hasMilestone('i', 9) && !player.a.atomchallenge19completions.gte(5)) {
        let ready = player.points.gte(this.requirements[current]) && inChallenge('a', 19)
        return `${format(this.requirements[current])} Power (+${ready ? 1 : 0})`
    }
    if (player.a.atomchallenge19completions.gte(5)) {
        return "Fully completed (1.00e23 Power)"
    }
    // BULK MODE
    if (bulk >= this.completionLimit)
        return "Fully completed (1.00e23 Power)"

    let gained = bulk - current
    return `${format(this.requirements[bulk])} Power (+${gained})`
},
    rewardDescription() {
        let comp = challengeCompletions('a', 19)
        if (comp == 0) return "Challenge not yet completed."
        return `Electron gain is raised to ^${this.rewards[comp - 1]}.`
    },
    canComplete() {
        let comp = challengeCompletions('a', 19)
        if (!hasMilestone('i', 9)) return player.points.gte(this.requirements[comp])
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.points.gte(this.requirements[i])) return i - comp + 1
        }
        return false
    },
    completionLimit: 5,
    onEnter() {return player.q.points = new Decimal(1), player.e.points = new Decimal(1)},
    unlocked() {return hasMilestone('a', 6)}
},

20: {
    requirements: [4.5e10,1e11,2.5e11,7.5e11,1.75e12],
    rewards: [1.3,1.6,2,2.45,3],
    name() {return `Atom Challenge 10<br>The Void<br> (${challengeCompletions('a', 20)} / 5)`},
    challengeDescription: "All Atom Challenges at once.",
    getChallengeBulk() {
        let comp = challengeCompletions('a', 20)
        if (!inChallenge('a', 20)) return comp
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.points.gte(this.requirements[i])) return i + 1
        }
        return comp
    },
    goalDescription() {
    let current = challengeCompletions('a', 20)
    let bulk = this.getChallengeBulk()
    // NO BULK MODE
    if (!hasMilestone('i', 9) && !player.a.atomchallenge20completions.gte(5)) {
        let ready = player.points.gte(this.requirements[current]) && inChallenge('a', 20)
        return `${format(this.requirements[current])} Power (+${ready ? 1 : 0})`
    }
    if (player.a.atomchallenge20completions.gte(5)) {
        return "Fully completed (1.75e12 Power)"
    }
    // BULK MODE
    if (bulk >= this.completionLimit)
        return "Fully completed (1.75e12 Power)"

    let gained = bulk - current
    return `${format(this.requirements[bulk])} Power (+${gained})`
},
    rewardDescription() {
        let comp = challengeCompletions('a', 20)
        if (comp == 0) return "Challenge not yet completed."
        return `${this.rewards[comp - 1]}x multiplier to ALL Quark Sub-Resources multipliers (including Tertiary)`
    },
    canComplete() {
        let comp = challengeCompletions('a', 20)
        if (!hasMilestone('i', 9)) return player.points.gte(this.requirements[comp])
        for (let i = this.completionLimit - 1; i >= comp; i--) {
            if (player.points.gte(this.requirements[i])) return i - comp + 1
        }
        return false
    },
    completionLimit: 5,
    countsAs: [11, 12, 13, 14, 17, 19],
    onEnter() {return player.a.atomchallenge11 = new Decimal(0), player.a.atomchallenge14 = new Decimal(0), player.a.atomchallenge17divisor = new Decimal(1), player.q.points = new Decimal(1), player.e.points = new Decimal(1)},
    onExit() {return player.a.atomchallenge11 = new Decimal(1), player.a.atomchallenge14 = new Decimal(1), player.a.atomchallenge17divisor = new Decimal(1)},
    unlocked() {return hasMilestone('a', 12)}
},
    }
})
