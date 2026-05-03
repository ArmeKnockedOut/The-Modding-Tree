addLayer("a", {
    name: "atoms", 
    symbol: "A",
    position: 0,
    branches: true,
    onPrestige() {return player.a.timesinceatomreset = new Decimal(0)},
 //   passiveGeneration() {
  //      if (hasUpgrade('q', 14)) return 1
  //      else return 0},
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
        autobuyQuarkUpg: false,
        passiveQuarkGen: false,
        passiveElectronGen: false,
        extratotalatomchallengecompletions: new Decimal(0),
        actualtotalatomchallengecompletions: new Decimal(0),
        ac20everythingmult: new Decimal(1)
    }},
    update(diff) {if (inChallenge('a', 17)) player.a.atomchallenge17divisor *= Math.pow(5, 1 / 20)},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        "milestones",
        "blank",
        ["display-text",
            function() {if (hasUpgrade('a', 41) && hasMilestone('a', 12)) return 'You have ' +  '<h2 style="color: white">' + format(player.a.totalatomchallengecompletions, 0) + '+' + format(player.a.extratotalatomchallengecompletions, 0) + '/50</h2>' + ' Total Atom Challenge Completions, which are multiplying power gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge14multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x, Quark gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge15multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x, and Electron gain by ' + '<h3 style="color: white">' + format(new Decimal.pow(player.a.atomchallenge16multiplier, player.a.actualtotalatomchallengecompletions)) + '</h3>' +'x'
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
        if (challengeCompletions('a', 13) == 5) player.a.ac13powerexp = new Decimal(1.1)
        if (challengeCompletions('a', 13) == 4) player.a.ac13powerexp = new Decimal(1.08)
        if (challengeCompletions('a', 13) == 3) player.a.ac13powerexp = new Decimal(1.06)
        if (challengeCompletions('a', 13) == 2) player.a.ac13powerexp = new Decimal(1.04)
        if (challengeCompletions('a', 13) == 1) player.a.ac13powerexp = new Decimal(1.02)
        if (challengeCompletions('a', 12) == 5) player.a.ac12protonmulti = new Decimal(1.8)
        if (challengeCompletions('a', 12) == 4) player.a.ac12protonmulti = new Decimal(1.6)
        if (challengeCompletions('a', 12) == 3) player.a.ac12protonmulti = new Decimal(1.4)
        if (challengeCompletions('a', 12) == 2) player.a.ac12protonmulti = new Decimal(1.2)
        if (challengeCompletions('a', 12) == 1) player.a.ac12protonmulti = new Decimal(1.1)
        if (challengeCompletions('a', 11) == 5) player.a.atomchallenge11completions = new Decimal(5)
        if (challengeCompletions('a', 11) == 4) player.a.atomchallenge11completions = new Decimal(4)
        if (challengeCompletions('a', 11) == 3) player.a.atomchallenge11completions = new Decimal(3)
        if (challengeCompletions('a', 11) == 2) player.a.atomchallenge11completions = new Decimal(2)
        if (challengeCompletions('a', 11) == 1) player.a.atomchallenge11completions = new Decimal(1)
        if (challengeCompletions('a', 12) == 5) player.a.atomchallenge12completions = new Decimal(5)
        if (challengeCompletions('a', 12) == 4) player.a.atomchallenge12completions = new Decimal(4)
        if (challengeCompletions('a', 12) == 3) player.a.atomchallenge12completions = new Decimal(3)
        if (challengeCompletions('a', 12) == 2) player.a.atomchallenge12completions = new Decimal(2)
        if (challengeCompletions('a', 12) == 1) player.a.atomchallenge12completions = new Decimal(1)
        if (challengeCompletions('a', 13) == 5) player.a.atomchallenge13completions = new Decimal(5)
        if (challengeCompletions('a', 13) == 4) player.a.atomchallenge13completions = new Decimal(4)
        if (challengeCompletions('a', 13) == 3) player.a.atomchallenge13completions = new Decimal(3)
        if (challengeCompletions('a', 13) == 2) player.a.atomchallenge13completions = new Decimal(2)
        if (challengeCompletions('a', 13) == 1) player.a.atomchallenge13completions = new Decimal(1)
        if (challengeCompletions('a', 14) == 5) player.a.atomchallenge14completions = new Decimal(5)
        if (challengeCompletions('a', 14) == 4) player.a.atomchallenge14completions = new Decimal(4)
        if (challengeCompletions('a', 14) == 3) player.a.atomchallenge14completions = new Decimal(3)
        if (challengeCompletions('a', 14) == 2) player.a.atomchallenge14completions = new Decimal(2)
        if (challengeCompletions('a', 14) == 1) player.a.atomchallenge14completions = new Decimal(1)
        if (challengeCompletions('a', 15) == 5) player.a.atomchallenge15completions = new Decimal(5)
        if (challengeCompletions('a', 15) == 4) player.a.atomchallenge15completions = new Decimal(4)
        if (challengeCompletions('a', 15) == 3) player.a.atomchallenge15completions = new Decimal(3)
        if (challengeCompletions('a', 15) == 2) player.a.atomchallenge15completions = new Decimal(2)
        if (challengeCompletions('a', 15) == 1) player.a.atomchallenge15completions = new Decimal(1)
        if (challengeCompletions('a', 16) == 5) player.a.atomchallenge16completions = new Decimal(5)
        if (challengeCompletions('a', 16) == 4) player.a.atomchallenge16completions = new Decimal(4)
        if (challengeCompletions('a', 16) == 3) player.a.atomchallenge16completions = new Decimal(3)
        if (challengeCompletions('a', 16) == 2) player.a.atomchallenge16completions = new Decimal(2)
        if (challengeCompletions('a', 16) == 1) player.a.atomchallenge16completions = new Decimal(1)
        if (challengeCompletions('a', 17) == 5) player.a.atomchallenge17completions = new Decimal(5)
        if (challengeCompletions('a', 17) == 4) player.a.atomchallenge17completions = new Decimal(4)
        if (challengeCompletions('a', 17) == 3) player.a.atomchallenge17completions = new Decimal(3)
        if (challengeCompletions('a', 17) == 2) player.a.atomchallenge17completions = new Decimal(2)
        if (challengeCompletions('a', 17) == 1) player.a.atomchallenge17completions = new Decimal(1)
        if (challengeCompletions('a', 18) == 5) player.a.atomchallenge18completions = new Decimal(5)
        if (challengeCompletions('a', 18) == 4) player.a.atomchallenge18completions = new Decimal(4)
        if (challengeCompletions('a', 18) == 3) player.a.atomchallenge18completions = new Decimal(3)
        if (challengeCompletions('a', 18) == 2) player.a.atomchallenge18completions = new Decimal(2)
        if (challengeCompletions('a', 18) == 1) player.a.atomchallenge18completions = new Decimal(1)
        if (challengeCompletions('a', 19) == 5) player.a.atomchallenge19completions = new Decimal(5)
        if (challengeCompletions('a', 19) == 4) player.a.atomchallenge19completions = new Decimal(4)
        if (challengeCompletions('a', 19) == 3) player.a.atomchallenge19completions = new Decimal(3)
        if (challengeCompletions('a', 19) == 2) player.a.atomchallenge19completions = new Decimal(2)
        if (challengeCompletions('a', 19) == 1) player.a.atomchallenge19completions = new Decimal(1)
        if (challengeCompletions('a', 20) == 5) player.a.atomchallenge20completions = new Decimal(5)
        if (challengeCompletions('a', 20) == 4) player.a.atomchallenge20completions = new Decimal(4)
        if (challengeCompletions('a', 20) == 3) player.a.atomchallenge20completions = new Decimal(3)
        if (challengeCompletions('a', 20) == 2) player.a.atomchallenge20completions = new Decimal(2)
        if (challengeCompletions('a', 20) == 1) player.a.atomchallenge20completions = new Decimal(1)
        player.a.timesinceatomreset = player.a.timesinceatomreset.plus(0.05)
        if (player.q.points.gte(player.a.bestquarks)) player.a.bestquarks = player.q.points
        if (player.e.points.gte(player.a.bestelectrons)) player.a.bestelectrons = player.e.points
        if (challengeCompletions('a', 14) == 5) player.a.atomchallenge14multiplier = new Decimal(1.5)
        if (challengeCompletions('a', 14) == 4) player.a.atomchallenge14multiplier = new Decimal(1.4)
        if (challengeCompletions('a', 14) == 3) player.a.atomchallenge14multiplier = new Decimal(1.3)
        if (challengeCompletions('a', 14) == 2) player.a.atomchallenge14multiplier = new Decimal(1.2)
        if (challengeCompletions('a', 14) == 1) player.a.atomchallenge14multiplier = new Decimal(1.1)
        if (challengeCompletions('a', 15) == 5) player.a.atomchallenge15multiplier = new Decimal(1.25)
        if (challengeCompletions('a', 15) == 4) player.a.atomchallenge15multiplier = new Decimal(1.2)
        if (challengeCompletions('a', 15) == 3) player.a.atomchallenge15multiplier = new Decimal(1.15)
        if (challengeCompletions('a', 15) == 2) player.a.atomchallenge15multiplier = new Decimal(1.1)
        if (challengeCompletions('a', 15) == 1) player.a.atomchallenge15multiplier = new Decimal(1.05)
        if (challengeCompletions('a', 16) == 5) player.a.atomchallenge16multiplier = new Decimal(1.33)
        if (challengeCompletions('a', 16) == 4) player.a.atomchallenge16multiplier = new Decimal(1.266)
        if (challengeCompletions('a', 16) == 3) player.a.atomchallenge16multiplier = new Decimal(1.2)
        if (challengeCompletions('a', 16) == 2) player.a.atomchallenge16multiplier = new Decimal(1.133)
        if (challengeCompletions('a', 16) == 1) player.a.atomchallenge16multiplier = new Decimal(1.066)
        if (challengeCompletions('a', 18) == 5) player.a.ac18quarkexp = new Decimal(1.05)
        if (challengeCompletions('a', 18) == 4) player.a.ac18quarkexp = new Decimal(1.04)
        if (challengeCompletions('a', 18) == 3) player.a.ac18quarkexp = new Decimal(1.03)
        if (challengeCompletions('a', 18) == 2) player.a.ac18quarkexp = new Decimal(1.02)
        if (challengeCompletions('a', 18) == 1) player.a.ac18quarkexp = new Decimal(1.01)
        if (challengeCompletions('a', 19) == 5) player.a.ac19electronexp = new Decimal(1.0666)
        if (challengeCompletions('a', 19) == 4) player.a.ac19electronexp = new Decimal(1.0533)
        if (challengeCompletions('a', 19) == 3) player.a.ac19electronexp = new Decimal(1.04)
        if (challengeCompletions('a', 19) == 2) player.a.ac19electronexp = new Decimal(1.0266)
        if (challengeCompletions('a', 19) == 1) player.a.ac19electronexp = new Decimal(1.0133)
        if (challengeCompletions('a', 20) == 5) player.a.ac20everythingmult = new Decimal(3.0)
        if (challengeCompletions('a', 20) == 4) player.a.ac20everythingmult = new Decimal(2.45)
        if (challengeCompletions('a', 20) == 3) player.a.ac20everythingmult = new Decimal(2.0)
        if (challengeCompletions('a', 20) == 2) player.a.ac20everythingmult = new Decimal(1.6)
        if (challengeCompletions('a', 20) == 1) player.a.ac20everythingmult = new Decimal(1.3)
        player.a.totalatomchallengecompletions = player.a.atomchallenge11completions.plus(player.a.atomchallenge12completions).plus(player.a.atomchallenge13completions).plus(player.a.atomchallenge14completions).plus(player.a.atomchallenge15completions).plus(player.a.atomchallenge16completions).plus(player.a.atomchallenge17completions).plus(player.a.atomchallenge18completions).plus(player.a.atomchallenge19completions).plus(player.a.atomchallenge20completions)
       // if (inChallenge('a', 17)) player.a.atomchallenge17divisor *= Math.pow(5, 1 / 20)
        if (inChallenge('a', 11)) player.a.atomchallenge11 = new Decimal(0)
        if (!inChallenge('a', 11)) player.a.atomchallenge11 = new Decimal(1)
        if (inChallenge('a', 14)) player.a.atomchallenge14 = new Decimal(0)
        if (!inChallenge('a', 14)) player.a.atomchallenge14 = new Decimal(1)
        if (hasUpgrade('a', 41)) player.a.extratotalatomchallengecompletions = new Decimal(3)
        player.a.actualtotalatomchallengecompletions = player.a.totalatomchallengecompletions.plus(player.a.extratotalatomchallengecompletions)
          //  mult = mult.times(1e2)
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
    layerShown(){return (hasMilestone('e', 8) || hasMilestone('a', 0))},
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
        description: "Power gain is multiplied based on your Atoms.",
        cost: new Decimal(1),
        effect() {
        return player.a.points.add(2).pow(0.389)
      },
      effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(10) , 0.4))+"x" },
      },

      12: {
        title: "02",
        description: "Quark gain is multiplied based on your Atoms.",
        cost: new Decimal(1),
        effect() {
        return player.a.points.add(2).pow(0.346)
      },
      effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(10) , 0.4))+"x" },
      },

      13: {
        title: "03",
        description: "Electron gain is multiplied based on your Atoms.",
        cost: new Decimal(1),
        effect() {
        return player.a.points.add(2).pow(0.364)
      },
      effectDisplay() { return format(softcap((upgradeEffect(this.layer, this.id)), new Decimal(10) , 0.4))+"x" },
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
      unlocked() {return (hasUpgrade('a', 11) && hasUpgrade('a', 12))}
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
      unlocked() {return (hasUpgrade('a', 12) && hasUpgrade('a', 13))}
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
      unlocked() {return (hasUpgrade('a', 14))}
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
      unlocked() {return (hasUpgrade('a', 14) && hasUpgrade('a', 15))}
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
      unlocked() {return (hasUpgrade('a', 15))}
      },

      19: {
        title: "09",
        description: "Power gain is multiplied based on the time spent in this Atom Reset, not reset by entering/exiting Atom Challenges.",
        cost: new Decimal(1e8),
        effect() {
        return Math.log(player.a.timesinceatomreset) / Math.log(235) + 1
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 16],
      unlocked() {return (hasUpgrade('a', 16))}
      },

      20: {
        title: "10",
        description: "Quark gain is multiplied based on the time spent in this Atom Reset, not reset by entering/exiting Atom Challenges.",
        cost: new Decimal(1e8),
        effect() {
        return Math.log(player.a.timesinceatomreset) / Math.log(345) / 1.25 + 1    
    },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 17],
      unlocked() {return (hasUpgrade('a', 17))}
      },

      21: {
        title: "11",
        description: "Electron gain is multiplied based on the time spent in this Atom Reset, not reset by entering/exiting Atom Challenges.",
        cost: new Decimal(1e8),
        effect() {
        return Math.log(player.a.timesinceatomreset) / Math.log(305) / 1.125 + 1
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      branches: ['a', 18],
      unlocked() {return (hasUpgrade('a', 18))}
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
      unlocked() {return (hasUpgrade('a', 19))}
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
      unlocked() {return (hasUpgrade('a', 19) && hasUpgrade('a', 20))}
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
      unlocked() {return (hasUpgrade('a', 20) && hasUpgrade('a', 21))}
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
      unlocked() {return (hasUpgrade('a', 21))}
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
      unlocked() {return (hasUpgrade('a', 22) && hasUpgrade('a', 23))}
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
      unlocked() {return (hasUpgrade('a', 24) && hasUpgrade('a', 25))}
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
      unlocked() {return (hasUpgrade('a', 26) && hasUpgrade('a', 27))}
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
      unlocked() {return (hasUpgrade('a', 28))}
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
      unlocked() {return (hasUpgrade('a', 28))}
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
      unlocked() {return (hasUpgrade('a', 29))}
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
      unlocked() {return (hasUpgrade('a', 29))}
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
      unlocked() {return (hasUpgrade('a', 30))}
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
      unlocked() {return (hasUpgrade('a', 30))}
      },

      35: {
        title: "25",
        description: "Unlock Tertiary Protons.",
        cost: new Decimal(1e24),
        branches: ['a', 31, 32, 33, 34],
        unlocked() {return (hasUpgrade('a', 31) && hasUpgrade('a', 32) && hasUpgrade('a', 33) && hasUpgrade('a', 34))}
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
        unlocked() {return (hasAchievement('ach', 43))}
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
        unlocked() {return (hasAchievement('ach', 43))}
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
        unlocked() {return (hasUpgrade('a', 36))}
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
        unlocked() {return (hasUpgrade('a', 36) && hasUpgrade('a', 37))}
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
        unlocked() {return (hasUpgrade('a', 37))}
      },

      41: {
        title: "31",
        description: "You get 3 extra Total Atom Challenge completions.",
        cost: new Decimal(1e51),
        branches: ['a', 38],
        unlocked() {return (hasUpgrade('a', 38))}
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
        unlocked() {return (hasUpgrade('a', 38))}
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
        unlocked() {return (hasUpgrade('a', 38) && hasUpgrade('a', 39) && hasUpgrade('a', 40))}
      },

      44: {
        title: "34",
        description: "Quark gain is multiplied by 3x.",
        cost: new Decimal(1e53),
        branches: ['a', 40],
        unlocked() {return (hasUpgrade('a', 40))}
      },

      45: {
        title: "35",
        description: "Electron gain is multiplied by 15x.",
        cost: new Decimal(5e53),
        branches: ['a', 40],
        unlocked() {return (hasUpgrade('a', 40))}
      },
    },
    milestones: {
        0: {
            requirementDescription: "1 Atom",
            effectDescription: "You passively gain 10% of the Electrons you'd gain on reset per second",
            done() { return player.a.points.gte(1) },
            toggles: [["a", "passiveElectronGen"]]
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
            unlocked() {return hasMilestone('a', 3)}
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
            unlocked() {return hasMilestone('a', 6)},
            toggles: [["a", "autobuyQuarkUpg"]]
        },
        8: {
            requirementDescription: "1.00e32 Atoms",
            effectDescription: "You passively gain 1% of the Quarks you'd gain on reset every second",
            done() { return player.a.points.gte(1e32) },
            unlocked() {return hasMilestone('a', 7)},
            toggles: [["a", "passiveQuarkGen"]]
        },
        9: {
            requirementDescription: "1.00e40 Atoms",
            effectDescription: "Quark passive gain is increased to 10%",
            done() { return player.a.points.gte(1e40) },
            unlocked() {return hasMilestone('a', 8)},
        },
        10: {
            requirementDescription: "1.00e48 Atoms",
            effectDescription: "Quark passive gain is increased to 100%",
            done() { return player.a.points.gte(1e48) },
            unlocked() {return hasMilestone('a', 9)},
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
            name() {if (challengeCompletions('a', 11) == 5) return "Atom Challenge 1<br>Power Outage<br> (5 / 5)"
                else if (challengeCompletions('a', 11) == 4) return "Atom Challenge 1<br>Power Outage<br> (4 / 5)"
                else if (challengeCompletions('a', 11) == 3) return "Atom Challenge 1<br>Power Outage<br> (3 / 5)"
                else if (challengeCompletions('a', 11) == 2) return "Atom Challenge 1<br>Power Outage<br> (2 / 5)"
                else if (challengeCompletions('a', 11) == 1) return "Atom Challenge 1<br>Power Outage<br> (1 / 5)"
                else return "Atom Challenge 1<br>Power Outage<br> (0 / 5)"
            },
            challengeDescription: "Charges aren't generated.",
            goalDescription() {if (player.a.atomchallenge11completions.gte(4)) return "6.96e69 Quarks"
                else if (challengeCompletions('a', 11) == 3) return "1.00e50 Quarks"
                else if (challengeCompletions('a', 11) == 2) return "1.00e40 Quarks"
                else if (challengeCompletions('a', 11) == 1) return "1.00e30 Quarks"
                else return "1.00e21 Quarks"},
            rewardDescription() {if (challengeCompletions('a', 11) == 5) return "Charges 6, 7, 8, 9 and 10 now boost another resource."
                else if (challengeCompletions('a', 11) == 4) return "Charges 6, 7, 8 and 9 now boost another resource."
                else if (challengeCompletions('a', 11) == 3) return "Charges 6, 7 and 8 now boost another resource."
                else if (challengeCompletions('a', 11) == 2) return "Charges 6 and 7 now boost another resource."
                else if (challengeCompletions('a', 11) == 1) return "Charge 6 now boosts another resource."
                else return "Challenge not yet completed."},
            canComplete: function() {if (player.a.atomchallenge11completions.gte(4)) return player.q.points.gte(6.96e69)
                else if (challengeCompletions('a', 11) == 3) return player.q.points.gte(1e50)
                else if (challengeCompletions('a', 11) == 2) return player.q.points.gte(1e40)
                else if (challengeCompletions('a', 11) == 1) return player.q.points.gte(1e30)
                else return player.q.points.gte(1e21)
            },
            completionLimit: 5,
            onEnter() {return player.a.atomchallenge11 = new Decimal(0)},
            onExit() {return player.a.atomchallenge11 = new Decimal(1)},
            unlocked() {return hasMilestone('a', 1)}
        },

        12: {
            name() {if (challengeCompletions('a', 12) == 5) return "Atom Challenge 2<br>steal quarks corp.<br> (5 / 5)"
                else if (challengeCompletions('a', 12) == 4) return "Atom Challenge 2<br>steal quarks corp.<br> (4 / 5)"
                else if (challengeCompletions('a', 12) == 3) return "Atom Challenge 2<br>steal quarks corp.<br> (3 / 5)"
                else if (challengeCompletions('a', 12) == 2) return "Atom Challenge 2<br>steal quarks corp.<br> (2 / 5)"
                else if (challengeCompletions('a', 12) == 1) return "Atom Challenge 2<br>steal quarks corp.<br> (1 / 5)"
                else return "Atom Challenge 2<br>steal quarks corp.<br> (0 / 5)"
            },
            challengeDescription: "You cannot buy Quark upgrades.",
            goalDescription() {if (player.a.atomchallenge12completions.gte(4)) return "1.00e20 Quarks"
                else if (challengeCompletions('a', 12) == 3) return "1.00e16 Quarks"
                else if (challengeCompletions('a', 12) == 2) return "1.00e11 Quarks"
                else if (challengeCompletions('a', 12) == 1) return "500,000,000 Quarks"
                else return "5,000,000 Quarks"},
            rewardDescription() {if (challengeCompletions('a', 12) == 5) return "+80% to the Proton Multiplier."
                else if (challengeCompletions('a', 12) == 4) return "+60% to the Proton Multiplier."
                else if (challengeCompletions('a', 12) == 3) return "+40% to the Proton Multiplier."
                else if (challengeCompletions('a', 12) == 2) return "+20% to the Proton Multiplier."
                else if (challengeCompletions('a', 12) == 1) return "+10% to the Proton Multiplier."
                else return "Challenge not yet completed."},
            canComplete: function() {if (player.a.atomchallenge12completions.gte(4)) return player.q.points.gte(1e20)
                else if (challengeCompletions('a', 12) == 3) return player.q.points.gte(1e16)
                else if (challengeCompletions('a', 12) == 2) return player.q.points.gte(1e11)
                else if (challengeCompletions('a', 12) == 1) return player.q.points.gte(5e8)
                else return player.q.points.gte(5e6)
            },
            completionLimit: 5,
            unlocked() {return hasMilestone('a', 1)}
        },

        13: {
            name() {if (challengeCompletions('a', 13) == 5) return "Atom Challenge 3<br>power power<br> (5 / 5)"
                else if (challengeCompletions('a', 13) == 4) return "Atom Challenge 3<br>power power<br> (4 / 5)"
                else if (challengeCompletions('a', 13) == 3) return "Atom Challenge 3<br>power power<br> (3 / 5)"
                else if (challengeCompletions('a', 13) == 2) return "Atom Challenge 3<br>power power<br> (2 / 5)"
                else if (challengeCompletions('a', 13) == 1) return "Atom Challenge 3<br>power power<br> (1 / 5)"
                else return "Atom Challenge 3<br>power power<br> (0 / 5)"
            },
            challengeDescription: "Power gain is ^0.5",
            goalDescription() {if (player.a.atomchallenge13completions.gte(4)) return "1.00e45 Quarks"
                else if (challengeCompletions('a', 13) == 3) return "1.00e35 Quarks"
                else if (challengeCompletions('a', 13) == 2) return "1.00e30 Quarks"
                else if (challengeCompletions('a', 13) == 1) return "1.00e18 Quarks"
                else return "1.00e13 Quarks"},
            rewardDescription() {if (challengeCompletions('a', 13) == 5) return "Power gain above 1 is raised to ^1.1."
                else if (challengeCompletions('a', 13) == 4) return "Power gain above 1 is raised to ^1.08."
                else if (challengeCompletions('a', 13) == 3) return "Power gain above 1 is raised to ^1.06."
                else if (challengeCompletions('a', 13) == 2) return "Power gain above 1 is raised to ^1.04."
                else if (challengeCompletions('a', 13) == 1) return "Power gain above 1 is raised to ^1.02."
                else return "Challenge not yet completed."},
            canComplete: function() {if (player.a.atomchallenge13completions.gte(4)) return player.q.points.gte(1e45)
                else if (challengeCompletions('a', 13) == 3) return player.q.points.gte(1e35)
                else if (challengeCompletions('a', 13) == 2) return player.q.points.gte(1e30)
                else if (challengeCompletions('a', 13) == 1) return player.q.points.gte(1e18)
                else return player.q.points.gte(1e13)
            },
            completionLimit: 5,
            unlocked() {return hasMilestone('a', 1)}
        },

        14: {
            name() {if (challengeCompletions('a', 14) == 5) return "Atom Challenge 4<br>Stability<br> (5 / 5)"
                else if (challengeCompletions('a', 14) == 4) return "Atom Challenge 4<br>Stability<br> (4 / 5)"
                else if (challengeCompletions('a', 14) == 3) return "Atom Challenge 4<br>Stability<br> (3 / 5)"
                else if (challengeCompletions('a', 14) == 2) return "Atom Challenge 4<br>Stability<br> (2 / 5)"
                else if (challengeCompletions('a', 14) == 1) return "Atom Challenge 4<br>Stability<br> (1 / 5)"
                else return "Atom Challenge 4<br>Stability<br> (0 / 5)"
            },
            challengeDescription: "You cannot get Colored Quarks.",
            goalDescription() {if (player.a.atomchallenge14completions.gte(4)) return "1.00e43 Quarks"
                else if (challengeCompletions('a', 14) == 3) return "1.00e37 Quarks"
                else if (challengeCompletions('a', 14) == 2) return "1.00e30 Quarks"
                else if (challengeCompletions('a', 14) == 1) return "1.00e20 Quarks"
                else return "1.00e15 Quarks"},
            rewardDescription() {if (challengeCompletions('a', 14) == 5) return "Every Atom Challenge completed gives a 1.5x multiplicative boost to power gain."
                else if (challengeCompletions('a', 14) == 4) return "Every Atom Challenge completed gives a 1.4x multiplicative boost to power gain."
                else if (challengeCompletions('a', 14) == 3) return "Every Atom Challenge completed gives a 1.3x multiplicative boost to power gain."
                else if (challengeCompletions('a', 14) == 2) return "Every Atom Challenge completed gives a 1.2x multiplicative boost to power gain."
                else if (challengeCompletions('a', 14) == 1) return "Every Atom Challenge completed gives a 1.1x multiplicative boost to power gain."
                else return "Challenge not yet completed."},
            canComplete: function() {if (player.a.atomchallenge14completions.gte(4)) return player.q.points.gte(1e43)
                else if (challengeCompletions('a', 14) == 3) return player.q.points.gte(1e37)
                else if (challengeCompletions('a', 14) == 2) return player.q.points.gte(1e30)
                else if (challengeCompletions('a', 14) == 1) return player.q.points.gte(1e20)
                else return player.q.points.gte(1e15)
            },
            completionLimit: 5,
            onEnter() {return player.a.atomchallenge14 = new Decimal(0)},
            onExit() {return player.a.atomchallenge14 = new Decimal(1)},
            unlocked() {return hasMilestone('a', 4)}
        },

        15: {
            name() {if (challengeCompletions('a', 15) == 5) return "Atom Challenge 5<br>Duality<br> (5 / 5)"
                else if (challengeCompletions('a', 15) == 4) return "Atom Challenge 5<br>Duality<br> (4 / 5)"
                else if (challengeCompletions('a', 15) == 3) return "Atom Challenge 5<br>Duality<br> (3 / 5)"
                else if (challengeCompletions('a', 15) == 2) return "Atom Challenge 5<br>Duality<br> (2 / 5)"
                else if (challengeCompletions('a', 15) == 1) return "Atom Challenge 5<br>Duality<br> (1 / 5)"
                else return "Atom Challenge 5<br>Duality<br> (0 / 5)"
            },
            challengeDescription: "Atom Challenges 1 and 3 at the same time.",
            goalDescription() {if (player.a.atomchallenge15completions.gte(4)) return "1.00e50 Quarks"
                else if (challengeCompletions('a', 15) == 3) return "1.00e40 Quarks"
                else if (challengeCompletions('a', 15) == 2) return "1.00e35 Quarks"
                else if (challengeCompletions('a', 15) == 1) return "1.00e30 Quarks"
                else return "1.00e20 Quarks"},
            rewardDescription() {if (challengeCompletions('a', 15) == 5) return "Every Atom Challenge completed gives a 1.25x multiplicative boost to Quark gain."
                else if (challengeCompletions('a', 15) == 4) return "Every Atom Challenge completed gives a 1.2x multiplicative boost to Quark gain."
                else if (challengeCompletions('a', 15) == 3) return "Every Atom Challenge completed gives a 1.15x multiplicative boost to Quark gain."
                else if (challengeCompletions('a', 15) == 2) return "Every Atom Challenge completed gives a 1.1x multiplicative boost to Quark gain."
                else if (challengeCompletions('a', 15) == 1) return "Every Atom Challenge completed gives a 1.05x multiplicative boost to Quark gain."
                else return "Challenge not yet completed."},
            canComplete: function() {if (player.a.atomchallenge15completions.gte(4)) return player.q.points.gte(1e50)
                else if (challengeCompletions('a', 15) == 3) return player.q.points.gte(1e40)
                else if (challengeCompletions('a', 15) == 2) return player.q.points.gte(1e35)
                else if (challengeCompletions('a', 15) == 1) return player.q.points.gte(1e30)
                else return player.q.points.gte(1e20)
            },
            completionLimit: 5,
            countsAs: [11, 13],
            onEnter() {return player.a.atomchallenge11 = new Decimal(0)},
            onExit() {return player.a.atomchallenge11 = new Decimal(1)},
            unlocked() {return hasMilestone('a', 4)}
        },

        16: {
            name() {if (challengeCompletions('a', 16) == 5) return "Atom Challenge 6<br>Quarkless<br> (5 / 5)"
                else if (challengeCompletions('a', 16) == 4) return "Atom Challenge 6<br>Quarkless<br> (4 / 5)"
                else if (challengeCompletions('a', 16) == 3) return "Atom Challenge 6<br>Quarkless<br> (3 / 5)"
                else if (challengeCompletions('a', 16) == 2) return "Atom Challenge 6<br>Quarkless<br> (2 / 5)"
                else if (challengeCompletions('a', 16) == 1) return "Atom Challenge 6<br>Quarkless<br> (1 / 5)"
                else return "Atom Challenge 6<br>Quarkless<br> (0 / 5)"
            },
            challengeDescription: "Atom Challenges 2 and 4 at the same time.",
            goalDescription() {if (player.a.atomchallenge16completions.gte(4)) return "1.00e34 Quarks"
                else if (challengeCompletions('a', 16) == 3) return "1.00e30 Quarks"
                else if (challengeCompletions('a', 16) == 2) return "1.00e27 Quarks"
                else if (challengeCompletions('a', 16) == 1) return "1.00e20 Quarks"
                else return "250,000,000 Quarks"},
            rewardDescription() {if (challengeCompletions('a', 16) == 5) return "Every Atom Challenge completed gives a 1.33x multiplicative boost to Electron gain."
                else if (challengeCompletions('a', 16) == 4) return "Every Atom Challenge completed gives a 1.266x multiplicative boost to Electron gain."
                else if (challengeCompletions('a', 16) == 3) return "Every Atom Challenge completed gives a 1.2x multiplicative boost to Electron gain."
                else if (challengeCompletions('a', 16) == 2) return "Every Atom Challenge completed gives a 1.133x multiplicative boost to Electron gain."
                else if (challengeCompletions('a', 16) == 1) return "Every Atom Challenge completed gives a 1.066x multiplicative boost to Electron gain."
                else return "Challenge not yet completed."},
            canComplete: function() {if (player.a.atomchallenge16completions.gte(4)) return player.q.points.gte(1e34)
                else if (challengeCompletions('a', 16) == 3) return player.q.points.gte(1e30)
                else if (challengeCompletions('a', 16) == 2) return player.q.points.gte(1e27)
                else if (challengeCompletions('a', 16) == 1) return player.q.points.gte(1e20)
                else return player.q.points.gte(2.5e8)
            },
            completionLimit: 5,
            countsAs: [12, 14],
            onEnter() {return player.a.atomchallenge14 = new Decimal(0)},
            onExit() {return player.a.atomchallenge14 = new Decimal(1)},
            unlocked() {return hasMilestone('a', 4)}
        },

        17: {
            name() {if (challengeCompletions('a', 17) == 5) return "Atom Challenge 7<br>a playground slide<br> (5 / 5)"
                else if (challengeCompletions('a', 17) == 4) return "Atom Challenge 7<br>a playground slide<br> (4 / 5)"
                else if (challengeCompletions('a', 17) == 3) return "Atom Challenge 7<br>a playground slide<br> (3 / 5)"
                else if (challengeCompletions('a', 17) == 2) return "Atom Challenge 7<br>a playground slide<br> (2 / 5)"
                else if (challengeCompletions('a', 17) == 1) return "Atom Challenge 7<br>a playground slide<br> (1 / 5)"
                else return "Atom Challenge 7<br>a playground slide<br> (0 / 5)"
            },
            challengeDescription: "Power gain is divided by 5 every second.",
            goalDescription() {if (player.a.atomchallenge17completions.gte(4)) return "1.00e100 Quarks" 
                else if (challengeCompletions('a', 17) == 3) return "1.00e90 Quarks"
                else if (challengeCompletions('a', 17) == 2) return "1.00e80 Quarks"
                else if (challengeCompletions('a', 17) == 1) return "1.00e70 Quarks"
                else return "1.00e60 Quarks"},
            rewardDescription() {if (challengeCompletions('a', 17) == 5) return 'For every second in an Atom Reset, +1.00e8x to all Charges gains. Currently: ' + format(player.e.ac17allchargesmultiplier) + 'x'
                else if (challengeCompletions('a', 17) == 4) return 'For every second in an Atom Reset, +2,000,000x to all Charges gains. Currently: ' + format(player.e.ac17allchargesmultiplier) + 'x'
                else if (challengeCompletions('a', 17) == 3) return 'For every second in an Atom Reset, +30,000x to all Charges gains. Currently: ' + format(player.e.ac17allchargesmultiplier) + 'x'
                else if (challengeCompletions('a', 17) == 2) return 'For every second in an Atom Reset, +400x to all Charges gains. Currently: ' + format(player.e.ac17allchargesmultiplier) + 'x'
                else if (challengeCompletions('a', 17) == 1) return 'For every second in an Atom Reset, +5.00x to all Charges gains. Currently: ' + format(player.e.ac17allchargesmultiplier) + 'x'
                else return "Challenge not yet completed."},
            canComplete: function() {if (player.a.atomchallenge17completions.gte(4)) return player.q.points.gte(1e100)
                else if (challengeCompletions('a', 17) == 3) return player.q.points.gte(1e90)
                else if (challengeCompletions('a', 17) == 2) return player.q.points.gte(1e80)
                else if (challengeCompletions('a', 17) == 1) return player.q.points.gte(1e70)
                else return player.q.points.gte(1e60)
            },
            completionLimit: 5,
            onEnter() {return player.a.atomchallenge17divisor = new Decimal(1)},
            onExit() {return player.a.atomchallenge17divisor = new Decimal(1)},
            unlocked() {return hasMilestone('a', 6)}
        },

        18: {
            name() {if (challengeCompletions('a', 18) == 5) return "Atom Challenge 8<br>Resourceless<br> (5 / 5)"
                else if (challengeCompletions('a', 18) == 4) return "Atom Challenge 8<br>Resourceless<br> (4 / 5)"
                else if (challengeCompletions('a', 18) == 3) return "Atom Challenge 8<br>Resourceless<br> (3 / 5)"
                else if (challengeCompletions('a', 18) == 2) return "Atom Challenge 8<br>Resourceless<br> (2 / 5)"
                else if (challengeCompletions('a', 18) == 1) return "Atom Challenge 8<br>Resourceless<br> (1 / 5)"
                else return "Atom Challenge 8<br>Resourceless<br> (0 / 5)"
            },
            challengeDescription: "Atom Challenges 1 and 4 at the same time.",
            goalDescription() {if (player.a.atomchallenge18completions.gte(4)) return "1.00e48 Quarks" 
                else if (challengeCompletions('a', 18) == 3) return "1.00e42 Quarks"
                else if (challengeCompletions('a', 18) == 2) return "1.00e36 Quarks"
                else if (challengeCompletions('a', 18) == 1) return "1.00e30 Quarks"
                else return "1.00e24 Quarks"},
            rewardDescription() {if (challengeCompletions('a', 18) == 5) return 'Quark gain is raised to ^1.05.'
                else if (challengeCompletions('a', 18) == 4) return 'Quark gain is raised to ^1.04.'
                else if (challengeCompletions('a', 18) == 3) return 'Quark gain is raised to ^1.03.'
                else if (challengeCompletions('a', 18) == 2) return 'Quark gain is raised to ^1.02.'
                else if (challengeCompletions('a', 18) == 1) return 'Quark gain is raised to ^1.01.'
                else return "Challenge not yet completed."},
            canComplete: function() {if (player.a.atomchallenge18completions.gte(4)) return player.q.points.gte(1e48)
                else if (challengeCompletions('a', 18) == 3) return player.q.points.gte(1e42)
                else if (challengeCompletions('a', 18) == 2) return player.q.points.gte(1e36)
                else if (challengeCompletions('a', 18) == 1) return player.q.points.gte(1e30)
                else return player.q.points.gte(1e24)
            },
            completionLimit: 5,
            countsAs: [11, 14],
            onEnter() {return player.a.atomchallenge11 = new Decimal(0), player.a.atomchallenge14 = new Decimal(0)},
            onExit() {return player.a.atomchallenge11 = new Decimal(1), player.a.atomchallenge14 = new Decimal(1)},
            unlocked() {return hasMilestone('a', 6)}
        },

        19: {
            name() {if (challengeCompletions('a', 19) == 5) return "Atom Challenge 9<br>Resourceful<br> (5 / 5)"
                else if (challengeCompletions('a', 19) == 4) return "Atom Challenge 9<br>Resourceful<br> (4 / 5)"
                else if (challengeCompletions('a', 19) == 3) return "Atom Challenge 9<br>Resourceful<br> (3 / 5)"
                else if (challengeCompletions('a', 19) == 2) return "Atom Challenge 9<br>Resourceful<br> (2 / 5)"
                else if (challengeCompletions('a', 19) == 1) return "Atom Challenge 9<br>Resourceful<br> (1 / 5)"
                else return "Atom Challenge 9<br>Resourceful<br> (0 / 5)"
            },
            challengeDescription: "You only have one Quark and Electron.",
            goalDescription() {if (player.a.atomchallenge19completions.gte(4)) return "1.00e23 Power"
                else if (challengeCompletions('a', 19) == 3) return "1.00e18 Power"
                else if (challengeCompletions('a', 19) == 2) return "1.00e15 Power"
                else if (challengeCompletions('a', 19) == 1) return "1.00e13 Power"
                else return "1.00e11 Power"},
            rewardDescription() {if (challengeCompletions('a', 19) == 5) return 'Electron gain is raised to ^1.0666.'
                else if (challengeCompletions('a', 19) == 4) return 'Electron gain is raised to ^1.0533.'
                else if (challengeCompletions('a', 19) == 3) return 'Electron gain is raised to ^1.04.'
                else if (challengeCompletions('a', 19) == 2) return 'Electron gain is raised to ^1.0266.'
                else if (challengeCompletions('a', 19) == 1) return 'Electron gain is raised to ^1.0133.'
                else return "Challenge not yet completed."},
            canComplete: function() {if (player.a.atomchallenge19completions.gte(4)) return player.points.gte(1e23)
                else if (challengeCompletions('a', 19) == 3) return player.points.gte(1e18)
                else if (challengeCompletions('a', 19) == 2) return player.points.gte(1e15)
                else if (challengeCompletions('a', 19) == 1) return player.points.gte(1e13)
                else return player.points.gte(1e11)
            },
            completionLimit: 5,
            onEnter() {return player.q.points = new Decimal(1), player.e.points = new Decimal(1)},
            unlocked() {return hasMilestone('a', 6)}
        },

        20: {
            name() {if (challengeCompletions('a', 20) == 5) return "Atom Challenge 10<br>The Void<br> (5 / 5)"
                else if (challengeCompletions('a', 20) == 4) return "Atom Challenge 10<br>The Void<br> (4 / 5)"
                else if (challengeCompletions('a', 20) == 3) return "Atom Challenge 10<br>The Void<br> (3 / 5)"
                else if (challengeCompletions('a', 20) == 2) return "Atom Challenge 10<br>The Void<br> (2 / 5)"
                else if (challengeCompletions('a', 20) == 1) return "Atom Challenge 10<br>The Void<br> (1 / 5)"
                else return "Atom Challenge 10<br>The Void<br> (0 / 5)"
            },
            challengeDescription: "All Atom Challenges at once.",
            goalDescription() {if (player.a.atomchallenge20completions.gte(4)) return "1.75e12 Power"
                else if (challengeCompletions('a', 20) == 3) return "7.50e11 Power"
                else if (challengeCompletions('a', 20) == 2) return "2.50e11 Power"
                else if (challengeCompletions('a', 20) == 1) return "1.00e11 Power"
                else return "4.50e10 Power"},
            rewardDescription() {if (challengeCompletions('a', 20) == 5) return '3.0x multiplier to ALL Quark Sub-Resources multipliers (including Tertiary)'
                else if (challengeCompletions('a', 20) == 4) return '2.45x multiplier to ALL Quark Sub-Resources multipliers (including Tertiary)'
                else if (challengeCompletions('a', 20) == 3) return '2.0x multiplier to ALL Quark Sub-Resources multipliers (including Tertiary)'
                else if (challengeCompletions('a', 20) == 2) return '1.6x multiplier to ALL Quark Sub-Resources multipliers (including Tertiary)'
                else if (challengeCompletions('a', 20) == 1) return '1.3x multiplier to ALL Quark Sub-Resources multipliers (including Tertiary)'
                else return "Challenge not yet completed."},
            canComplete: function() {if (player.a.atomchallenge20completions.gte(4)) return player.points.gte(1.75e12)
                else if (challengeCompletions('a', 20) == 3) return player.points.gte(7.5e11)
                else if (challengeCompletions('a', 20) == 2) return player.points.gte(2.5e11)
                else if (challengeCompletions('a', 20) == 1) return player.points.gte(1e11)
                else return player.points.gte(4.5e10)
            },
            completionLimit: 5,
            countsAs: [11, 12, 13, 14, 17, 19],
            onEnter() {return player.a.atomchallenge11 = new Decimal(0), player.a.atomchallenge14 = new Decimal(0), player.a.atomchallenge17divisor = new Decimal(1), player.q.points = new Decimal(1), player.e.points = new Decimal(1)},
            onExit() {return player.a.atomchallenge11 = new Decimal(1), player.a.atomchallenge14 = new Decimal(1), player.a.atomchallenge17divisor = new Decimal(1)},
            unlocked() {return hasMilestone('a', 12)}
        },
    }
})
