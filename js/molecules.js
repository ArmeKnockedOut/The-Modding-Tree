addLayer("m", {
    name: "molecules", 
    symbol: "M",
    position: 1,
    branches: true,
    onPrestige() {if (hasMilestone('i', 4)) return player.a.points = player.a.points
        else return player.a.points = new Decimal(0)},
 //   passiveGeneration() {
  //      if (hasUpgrade('q', 14)) return 1
  //      else return 0},
    autoPrestige() {if (hasMilestone('i', 15) && player.tog.autobuyMolecules) return true
        else return false
    },
    resetsNothing() {if (hasMilestone('i', 16)) return true
        else return false
    },
    automate() {if (hasMilestone('i', 17) && player.tog.autobuyMoleculeBuyables) buyBuyable('m', 11), buyBuyable('m', 12), buyBuyable('m', 13), buyBuyable('m', 14), buyBuyable('m', 21)},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
        moleculeextraatomchallenges: new Decimal(0),
        moleculeprotonmultiplier: new Decimal(1),
        moleculeprotonmultiplyby: new Decimal(1.25),
        diatomicenergy: new Decimal(0),
        polyatomicenergy: new Decimal(0),
        monoatomicenergy: new Decimal(0),
        diatomicmultiplier: new Decimal(1),
        polyatomicmultiplier: new Decimal(1),
        monoatomicmultiplier: new Decimal(1),
        diatomicenergygen: new Decimal(0),
        polyatomicenergygen: new Decimal(0),
        monoatomicenergygen: new Decimal(0),
        diatomicenergygenpow: new Decimal(1.5),
        polyatomicenergygenpow: new Decimal(1.5),
        monoatomicenergygenpow: new Decimal(1.5),
        moleculeextraatomchallengesgiven: new Decimal(5)
    }},
   // update(diff) {if (inChallenge('a', 17)) player.a.atomchallenge17divisor *= Math.pow(5, 1 / 20)},
    tabFormat: [
        //"main-display",
        //"blank",
        ["display-text",
            function() {return 'You have <h2><span style=\"color: #526668; text-shadow: 0px 0px 10px #526668; font-family: Lucida Console\">' + format(player.m.points, 0) + '</span></h2> Molecules, which are providing <h2><span style=\"color: #526668; text-shadow: 0px 0px 10px #526668; font-family: Lucida Console\">' + format(player.m.moleculeextraatomchallenges, 0) + '</span></h2> Extra Total Atom Challenge Completions, and multiplying the Proton multiplier by <h3><span style=\"color: #526668; text-shadow: 0px 0px 10px #526668; font-family: Lucida Console\">' + format(player.m.moleculeprotonmultiplier, 2) + '</span></h3>x'},
            { "color": "#dfdfdf", "font-size": "16px" }],
        "blank",
        "prestige-button",
        "resource-display",
        "blank",
        ["display-text",
            function() {return 'You have <h2 style="color: #526668">' + format(player.m.diatomicenergy) + '</h2> Diatomic Energy, which is multiplying power gain by <h3 style="color: #526668">' + format(player.m.diatomicmultiplier) + '</h3>x'},
            { "color": "#dfdfdf", "font-size": "16px" }],
        ["display-text",
            function() {return 'You have <h2 style="color: #526668">' + format(player.m.polyatomicenergy) + '</h2> Polyatomic Energy, which is multiplying Quark gain by <h3 style="color: #526668">' + format(player.m.polyatomicmultiplier) + '</h3>x'},
            { "color": "#dfdfdf", "font-size": "16px" }],
        ["display-text",
            function() {return 'You have <h2 style="color: #526668">' + format(player.m.monoatomicenergy) + '</h2> Monoatomic Energy, which is multiplying Electron gain by <h3 style="color: #526668">' + format(player.m.monoatomicmultiplier) + '</h3>x'},
            { "color": "#dfdfdf", "font-size": "16px" }],
        "blank",
        "blank",
        "upgrades",
        "blank",
        "buyables"
    ],
    update(diff) {
        player.m.moleculeextraatomchallenges = player.m.points.times(player.m.moleculeextraatomchallengesgiven)
        player.m.moleculeprotonmultiplier = Math.pow(player.m.moleculeprotonmultiplyby, player.m.points)
        player.m.diatomicenergygen = player.m.points.pow(3).times(diff).times(player.m.diatomicenergy.plus(1).log(20).times(player.m.diatomicenergy.plus(1).log(10).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16))
        player.m.diatomicenergy = player.m.diatomicenergy.plus(player.m.diatomicenergygen)
        player.m.polyatomicenergygen = player.m.points.pow(3).times(diff).times(player.m.polyatomicenergy.plus(1).log(15).times(player.m.polyatomicenergy.plus(1).log(7.5).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16))
        player.m.polyatomicenergy = player.m.polyatomicenergy.plus(player.m.polyatomicenergygen)
        player.m.monoatomicenergygen = player.m.points.pow(3).times(diff).times(player.m.monoatomicenergy.plus(1).log(17).times(player.m.monoatomicenergy.plus(1).log(8.5).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16))
        player.m.monoatomicenergy = player.m.monoatomicenergy.plus(player.m.monoatomicenergygen)
        player.m.diatomicmultiplier = player.m.diatomicenergy.plus(1).log(15).times(player.m.points.plus(1)).times(buyableEffect('m', 11)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).plus(1)
        player.m.polyatomicmultiplier = player.m.polyatomicenergy.plus(1).log(20).times(player.m.points.plus(1)).times(buyableEffect('m', 11)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).plus(1)
        player.m.monoatomicmultiplier = player.m.monoatomicenergy.plus(1).log(17).times(player.m.points.plus(1)).times(buyableEffect('m', 11)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).plus(1)
        if (hasUpgrade('m', 12)) player.m.moleculeextraatomchallengesgiven = new Decimal(8)

        if (hasUpgrade('m', 11)) player.m.moleculeprotonmultiplyby = new Decimal(1.33)
    },
    color: "#526668",
    requires: new Decimal(1e72), 
    resource: "Molecules", 
    baseResource: "Atoms", 
    baseAmount() {return player.a.points}, 
    type: "static", 
    exponent: 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821, 
    gainMult() { 
        mult = new Decimal(1)
        //player.m.moleculeextraatomchallenges = player.m.points.times(player.m.moleculeextraatomchallengesgiven)
        //player.m.moleculeprotonmultiplier = Math.pow(player.m.moleculeprotonmultiplyby, player.m.points)
       // player.m.diatomicenergygen = player.m.points.pow(3).div(20).times(player.m.diatomicenergy.plus(1).log(20).times(player.m.diatomicenergy.plus(1).log(10).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16))
       // player.m.diatomicenergy = player.m.diatomicenergy.plus(player.m.diatomicenergygen)
       // player.m.polyatomicenergygen = player.m.points.pow(3).div(20).times(player.m.polyatomicenergy.plus(1).log(15).times(player.m.polyatomicenergy.plus(1).log(7.5).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16))
       // player.m.polyatomicenergy = player.m.polyatomicenergy.plus(player.m.polyatomicenergygen)
       // player.m.monoatomicenergygen = player.m.points.pow(3).div(20).times(player.m.monoatomicenergy.plus(1).log(17).times(player.m.monoatomicenergy.plus(1).log(8.5).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16))
       // player.m.monoatomicenergy = player.m.monoatomicenergy.plus(player.m.monoatomicenergygen)
       // player.m.diatomicmultiplier = player.m.diatomicenergy.plus(1).log(15).times(player.m.points.plus(1)).times(buyableEffect('m', 11)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).plus(1)
       // player.m.polyatomicmultiplier = player.m.polyatomicenergy.plus(1).log(20).times(player.m.points.plus(1)).times(buyableEffect('m', 11)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).plus(1)
       // player.m.monoatomicmultiplier = player.m.monoatomicenergy.plus(1).log(17).times(player.m.points.plus(1)).times(buyableEffect('m', 11)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).plus(1)
       // if (hasUpgrade('m', 12)) player.m.moleculeextraatomchallengesgiven = new Decimal(8)

      //  if (hasUpgrade('m', 11)) player.m.moleculeprotonmultiplyby = new Decimal(1.33)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1,
    hotkeys: [
        {key: "m", description: "M: Reset for Molecules", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['a'],
    layerShown(){return (hasAchievement('ach', 48) || player.i.total.gte(1))},
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
            fullDisplay() {return "<h3>those words don't do you justice</h3><br>\n\
                Molecule Proton boost base 1.25x -> 1.33x<br><br>\n\
                Costs:\n\
                3 Molecules,<br>1.00e10 Diatomic, Polyatomic and Monoatomic Energy"
            },
            canAfford() {return player.m.points.gte(3) && player.m.diatomicenergy.gte(1e10) && player.m.polyatomicenergy.gte(1e10) && player.m.monoatomicenergy.gte(1e10)},
            pay() {player.m.points = player.m.points.minus(3), player.m.diatomicenergy = player.m.diatomicenergy.minus(1e10), player.m.polyatomicenergy = player.m.polyatomicenergy.minus(1e10), player.m.monoatomicenergy = player.m.monoatomicenergy.minus(1e10)},
        },
        12: {
            fullDisplay() {return "<h3>it's your own advice</h3><br>\n\
                Each Molecule gives 5 -> 8 Extra Total Challenge Completions<br><br>\n\
                Costs:\n\
                5 Molecules,<br>1.00e15 Diatomic, Polyatomic and Monoatomic Energy"
            },
            canAfford() {return player.m.points.gte(5) && player.m.diatomicenergy.gte(1e15) && player.m.polyatomicenergy.gte(1e15) && player.m.monoatomicenergy.gte(1e15)},
            pay() {player.m.points = player.m.points.minus(5), player.m.diatomicenergy = player.m.diatomicenergy.minus(1e15), player.m.polyatomicenergy = player.m.polyatomicenergy.minus(1e15), player.m.monoatomicenergy = player.m.monoatomicenergy.minus(1e15)},
            unlocked() {return hasUpgrade('m', 11)}
        },
     //   21: {
     //       fullDisplay() {return "<h3>it hasn't been the same lately</h3><br>\n\
     //           Every Atom Challenge completed gives a 1.5x -> 1.66x multiplicative boost to power gain.<br><br>\n\
     //           Costs:\n\
    // //           500,000 Diatomic, Polyatomic and Monoatomic Energy"
     //       },
     //       canAfford() {return player.m.diatomicenergy.gte(500000) && player.m.polyatomicenergy.gte(500000) && player.m.monoatomicenergy.gte(500000)},
    //        pay() {player.m.diatomicenergy = player.m.diatomicenergy.minus(500000), player.m.polyatomicenergy = player.m.polyatomicenergy.minus(500000), player.m.monoatomicenergy = player.m.monoatomicenergy.minus(500000)},
    //    },
    //    22: {
    //        fullDisplay() {return "<h3>take your own advice</h3><br>\n\
    //            Every Atom Challenge completed gives a 1.25x -> 1.4x multiplicative boost to Quark gain.<br><br>\n\
     //           Costs:\n\
      //          500,000 Diatomic, Polyatomic and Monoatomic Energy"
      //      },
      //      canAfford() {return player.m.diatomicenergy.gte(500000) && player.m.polyatomicenergy.gte(500000) && player.m.monoatomicenergy.gte(500000)},
      //      pay() {player.m.diatomicenergy = player.m.diatomicenergy.minus(500000), player.m.polyatomicenergy = player.m.polyatomicenergy.minus(500000), player.m.monoatomicenergy = player.m.monoatomicenergy.minus(500000)},
      //  },
    },
    milestones: {
    },
    challenges: {
    },
    clickables: {
    },
    buyables: {
        11: {
            cost(x) {
            let cost = Decimal.pow(10, x.plus(2))
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.pow(3, x)
                return eff;
            },
            title: "3x Energy Effects",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/100\n\
            Currently: " + format(data.effect, 2) + "x"
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost())
                player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost())
                player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 100,
            unlocked() {return true}   
        },
        12: {
            cost(x) {
            let cost = Decimal.pow(2, x.plus(6.64386))
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.pow(1.5, x)
                return eff;
            },
            title: "1.5x Energy Gains",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/100\n\
            Currently: " + format(data.effect, 2) + "x"
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost())
                player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost())
                player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 100,
            unlocked() {return true}   
        },
        13: {
            cost(x) {
            let cost = Decimal.pow(1e5, x.plus(1))
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = new Decimal(0.2).times(x).plus(1)
                return eff;
            },
            title: "All Proton Multipliers +20%",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/45\n\
            Currently: " + format(data.effect, 2) + "x"
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost())
                player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost())
                player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 45,
            unlocked() {return true}   
        },
        14: {
            cost(x) {
            let cost = Decimal.pow(1e8, x.plus(1))
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = new Decimal(4).times(x)
                return eff;
            },
            title: "+4 Extra Total Atom Challenge Completions",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/75\n\
            Currently: +" + format(data.effect, 0) + ""
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost())
                player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost())
                player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 75,
            unlocked() {return true}   
        },
        21: {
            cost(x) {
            let cost = Decimal.pow(1e12, x.plus(1))
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.pow(5, x)
                return eff;
            },
            title: "5x Energy Effects & Gains",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/25\n\
            Currently: " + format(data.effect, 0) + "x"
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost())
                player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost())
                player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 25,
            unlocked() {return true}   
        },
    }
})
