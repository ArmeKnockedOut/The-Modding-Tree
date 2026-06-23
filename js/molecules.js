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
    canBuyMax() {return hasMilestone('i', 21)},
    autoPrestige() {if (hasMilestone('i', 15) && player.tog.autobuyMolecules) return true
        else return false
    },
    resetsNothing() {if (hasMilestone('i', 16)) return true
        else return false
    },
    automate() {if (hasMilestone('i', 17) && player.tog.autobuyMoleculeBuyables) for (let i = 0; i < 100; i++) {
            buyBuyable('m', 11)
            buyBuyable('m', 12)
            buyBuyable('m', 13)
            buyBuyable('m', 14)
        }
        if (hasMilestone('am', 0) && player.tog.autobuyMoleculeBuyables2) for (let i = 0; i < 10; i++) {
            buyBuyable('m', 21)
            buyBuyable('m', 22)
            buyBuyable('m', 23)
            buyBuyable('m', 24)
        }
    },
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
        diatomicenergygenpow: new Decimal(1.5),
        polyatomicenergygenpow: new Decimal(1.5),
        monoatomicenergygenpow: new Decimal(1.5),
        moleculeextraatomchallengesgiven: new Decimal(5),
        moleculebuyable2mult: new Decimal(1.5)
    }},
   // update(diff) {if (inChallenge('a', 17)) player.a.atomchallenge17divisor *= Math.pow(5, 1 / 20)},
    tabFormat: [
        //"main-display",
        //"blank",
        ["display-text",
            function() {if (hasUpgrade('w', 18)) return 'You have <h2><span style=\"color: #526668; text-shadow: 0px 0px 10px #526668; font-family: Lucida Console\">' + format(player.m.points, 0) + '</span></h2> Molecules, which are providing <h2><span style=\"color: #526668; text-shadow: 0px 0px 10px #526668; font-family: Lucida Console\">' + format(player.m.moleculeextraatomchallenges, 0) + '</span></h2> Extra Total Atom Challenge Completions, and multiplying the Primary and Secondary Proton multipliers by <h3><span style=\"color: #526668; text-shadow: 0px 0px 10px #526668; font-family: Lucida Console\">' + format(player.m.moleculeprotonmultiplier, 2) + '</span></h3>x'
                else return 'You have <h2><span style=\"color: #526668; text-shadow: 0px 0px 10px #526668; font-family: Lucida Console\">' + format(player.m.points, 0) + '</span></h2> Molecules, which are providing <h2><span style=\"color: #526668; text-shadow: 0px 0px 10px #526668; font-family: Lucida Console\">' + format(player.m.moleculeextraatomchallenges, 0) + '</span></h2> Extra Total Atom Challenge Completions, and multiplying the Proton multiplier by <h3><span style=\"color: #526668; text-shadow: 0px 0px 10px #526668; font-family: Lucida Console\">' + format(player.m.moleculeprotonmultiplier, 2) + '</span></h3>x'},
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
        ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14]]],
        ["row", [["upgrade", 15], ["upgrade", 16], ["upgrade", 17], ["upgrade", 18]]],
        "blank",
        "buyables"
    ],
    update(diff) {
        player.m.moleculeextraatomchallenges = player.m.points.times(player.m.moleculeextraatomchallengesgiven)
        player.m.moleculeprotonmultiplier = Decimal.pow(player.m.moleculeprotonmultiplyby, player.m.points)
        let DiatomicEnergyGen = player.m.points.pow(getBuyableAmount('m', 22).plus(3)).times(diff).times(player.m.diatomicenergy.plus(1).log(20).times(player.m.diatomicenergy.plus(1).log(10).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).times(upgradeEffect('w', 21))
        if (hasUpgrade('i', 53)) DiatomicEnergyGen = new Decimal((getBuyableAmount('m', 22).plus(3)).pow(player.m.points).times(diff).times(player.m.diatomicenergy.plus(1).log(20).times(player.m.diatomicenergy.plus(1).log(10).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).times(upgradeEffect('w', 21)))
        if (player.d.boost4active == 1) DiatomicEnergyGen = DiatomicEnergyGen.times(player.d.boost4mult)
        player.m.diatomicenergy = player.m.diatomicenergy.plus(DiatomicEnergyGen)
        let PolyatomicEnergyGen = player.m.points.pow(getBuyableAmount('m', 22).plus(3)).times(diff).times(player.m.polyatomicenergy.plus(1).log(15).times(player.m.polyatomicenergy.plus(1).log(7.5).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).times(upgradeEffect('w', 21))
        if (hasUpgrade('i', 53)) PolyatomicEnergyGen = new Decimal((getBuyableAmount('m', 22).plus(3)).pow(player.m.points).times(diff).times(player.m.polyatomicenergy.plus(1).log(15).times(player.m.polyatomicenergy.plus(1).log(7.5).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).times(upgradeEffect('w', 21)))
        if (player.d.boost4active == 1) PolyatomicEnergyGen = PolyatomicEnergyGen.times(player.d.boost4mult)
        player.m.polyatomicenergy = player.m.polyatomicenergy.plus(PolyatomicEnergyGen)
        let MonoatomicEnergyGen = player.m.points.pow(getBuyableAmount('m', 22).plus(3)).times(diff).times(player.m.monoatomicenergy.plus(1).log(17).times(player.m.monoatomicenergy.plus(1).log(8.5).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).times(upgradeEffect('w', 21))
        if (hasUpgrade('i', 53)) MonoatomicEnergyGen = new Decimal((getBuyableAmount('m', 22).plus(3)).pow(player.m.points).times(diff).times(player.m.monoatomicenergy.plus(1).log(17).times(player.m.monoatomicenergy.plus(1).log(8.5).plus(1)).plus(1)).times(buyableEffect('m', 12)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).times(upgradeEffect('w', 21)))
        if (player.d.boost4active == 1) MonoatomicEnergyGen = MonoatomicEnergyGen.times(player.d.boost4mult)
        player.m.monoatomicenergy = player.m.monoatomicenergy.plus(MonoatomicEnergyGen)
        player.m.diatomicmultiplier = player.m.diatomicenergy.plus(1).log(15).times(player.m.points.plus(1)).times(buyableEffect('m', 11)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).plus(1)
        player.m.polyatomicmultiplier = player.m.polyatomicenergy.plus(1).log(20).times(player.m.points.plus(1)).times(buyableEffect('m', 11)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).plus(1)
        player.m.monoatomicmultiplier = player.m.monoatomicenergy.plus(1).log(17).times(player.m.points.plus(1)).times(buyableEffect('m', 11)).times(buyableEffect('m', 21)).times(upgradeEffect('i', 16)).plus(1)
        if (hasUpgrade('m', 12)) player.m.moleculeextraatomchallengesgiven = new Decimal(8)
        if (hasUpgrade('m', 14)) player.m.moleculeextraatomchallengesgiven = new Decimal(10)
        if (hasUpgrade('m', 16)) player.m.moleculeextraatomchallengesgiven = new Decimal(13)

        if (hasUpgrade('m', 11)) player.m.moleculeprotonmultiplyby = new Decimal(1.33)
        if (hasUpgrade('m', 13)) player.m.moleculeprotonmultiplyby = new Decimal(1.5)
        if (hasUpgrade('m', 15)) player.m.moleculeprotonmultiplyby = new Decimal(2)
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
        if (hasUpgrade('w', 15)) mult = mult.div(upgradeEffect('w', 15))
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
            fullDisplay() {return "<h3>01</h3><br>\n\
                Molecule Proton boost base 1.25x -> 1.33x<br><br>\n\
                Costs:\n\
                3 Molecules,<br>1.00e10 Diatomic, Polyatomic and Monoatomic Energy"
            },
            canAfford() {return player.m.points.gte(3) && player.m.diatomicenergy.gte(1e10) && player.m.polyatomicenergy.gte(1e10) && player.m.monoatomicenergy.gte(1e10)},
            pay() {player.m.points = player.m.points.minus(3), player.m.diatomicenergy = player.m.diatomicenergy.minus(1e10), player.m.polyatomicenergy = player.m.polyatomicenergy.minus(1e10), player.m.monoatomicenergy = player.m.monoatomicenergy.minus(1e10)},
        },
        12: {
            fullDisplay() {return "<h3>02</h3><br>\n\
                Each Molecule gives 5 -> 8 Extra Total Challenge Completions<br><br>\n\
                Costs:\n\
                5 Molecules,<br>1.00e15 Diatomic, Polyatomic and Monoatomic Energy"
            },
            canAfford() {return player.m.points.gte(5) && player.m.diatomicenergy.gte(1e15) && player.m.polyatomicenergy.gte(1e15) && player.m.monoatomicenergy.gte(1e15)},
            pay() {player.m.points = player.m.points.minus(5), player.m.diatomicenergy = player.m.diatomicenergy.minus(1e15), player.m.polyatomicenergy = player.m.polyatomicenergy.minus(1e15), player.m.monoatomicenergy = player.m.monoatomicenergy.minus(1e15)},
            unlocked() {return hasUpgrade('m', 11)}
        },
        13: {
            fullDisplay() {return "<h3>03</h3><br>\n\
                Molecule Proton boost base 1.33x -> 1.5x<br><br>\n\
                Costs:\n\
                6 Molecules,<br>1.00e20 Diatomic, Polyatomic and Monoatomic Energy"
            },
            canAfford() {return player.m.points.gte(6) && player.m.diatomicenergy.gte(1e20) && player.m.polyatomicenergy.gte(1e20) && player.m.monoatomicenergy.gte(1e20)},
            pay() {player.m.points = player.m.points.minus(6), player.m.diatomicenergy = player.m.diatomicenergy.minus(1e20), player.m.polyatomicenergy = player.m.polyatomicenergy.minus(1e20), player.m.monoatomicenergy = player.m.monoatomicenergy.minus(1e20)},
            unlocked() {return player.i.infinitychallenge13completions.gte(1) && hasUpgrade('m', 11)}
        },
        14: {
            fullDisplay() {return "<h3>04</h3><br>\n\
                Each Molecule gives 8 -> 10 Extra Total Challenge Completions<br><br>\n\
                Costs:\n\
                7 Molecules,<br>1.00e22 Diatomic, Polyatomic and Monoatomic Energy"
            },
            canAfford() {return player.m.points.gte(7) && player.m.diatomicenergy.gte(1e22) && player.m.polyatomicenergy.gte(1e22) && player.m.monoatomicenergy.gte(1e22)},
            pay() {player.m.points = player.m.points.minus(7), player.m.diatomicenergy = player.m.diatomicenergy.minus(1e22), player.m.polyatomicenergy = player.m.polyatomicenergy.minus(1e22), player.m.monoatomicenergy = player.m.monoatomicenergy.minus(1e22)},
            unlocked() {return player.i.infinitychallenge13completions.gte(1) && hasUpgrade('m', 12)}
        },
        15: {
            fullDisplay() {return "<h3>05</h3><br>\n\
                Molecule Proton boost base 1.5x -> 2x<br><br>\n\
                Costs:\n\
                25 Molecules,<br>1.00e168 Diatomic, Polyatomic and Monoatomic Energy"
            },
            canAfford() {return player.m.points.gte(25) && player.m.diatomicenergy.gte(1e168) && player.m.polyatomicenergy.gte(1e168) && player.m.monoatomicenergy.gte(1e168)},
            pay() {player.m.points = player.m.points.minus(20), player.m.diatomicenergy = player.m.diatomicenergy.minus(1e168), player.m.polyatomicenergy = player.m.polyatomicenergy.minus(1e168), player.m.monoatomicenergy = player.m.monoatomicenergy.minus(1e168)},
            unlocked() {return player.i.infinitychallenge13completions.gte(2) && hasUpgrade('m', 13)}
        },
        16: {
            fullDisplay() {return "<h3>06</h3><br>\n\
                Each Molecule gives 10 -> 13 Extra Total Challenge Completions<br><br>\n\
                Costs:\n\
                48 Molecules,<br>1.00e190 Diatomic, Polyatomic and Monoatomic Energy"
            },
            canAfford() {return player.m.points.gte(48) && player.m.diatomicenergy.gte(1e190) && player.m.polyatomicenergy.gte(1e190) && player.m.monoatomicenergy.gte(1e190)},
            pay() {player.m.points = player.m.points.minus(48), player.m.diatomicenergy = player.m.diatomicenergy.minus(1e190), player.m.polyatomicenergy = player.m.polyatomicenergy.minus(1e190), player.m.monoatomicenergy = player.m.monoatomicenergy.minus(1e190)},
            unlocked() {return player.i.infinitychallenge13completions.gte(2) && hasUpgrade('m', 14)}
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
                if (x.gte(0) && hasUpgrade('w', 34)) eff = Decimal.pow(3.3, x)
                return eff;
            },
            title() {if (hasUpgrade('w', 34)) return "3.3x Energy Effects"
                else return "3x Energy Effects"
            },
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/100\n\
            Currently: " + format(data.effect, 2) + "x"
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                if (hasMilestone('i', 17)) return setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                else return player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost()), player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost()), player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost()), setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
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
                if (x.gte(0)) eff = Decimal.pow(player.m.moleculebuyable2mult, x)
                return eff;
            },
            title() {return format(player.m.moleculebuyable2mult, 2) + 'x Energy Gains'},
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/500\n\
            Currently: " + format(data.effect, 2) + "x"
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                if (hasMilestone('i', 17)) return setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                else return player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost()), player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost()), player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost()), setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {},
            purchaseLimit: 500,
            unlocked() {return true}   
        },
        13: {
            cost(x) {
            let cost = Decimal.pow(1e5, x.plus(1))
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = new Decimal(0.2).times(x).plus(1)
                if (x.gte(0) && hasUpgrade('w', 31)) eff = Decimal.pow(1.2, x)
                return eff;
            },
            title() {if (hasUpgrade('w', 31)) return "1.2x All Proton Multipliers"
                else return "All Proton Multipliers +20%"},
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/45\n\
            Currently: " + format(data.effect, 2) + "x"
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                if (hasMilestone('i', 17)) return setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                else return player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost()), player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost()), player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost()), setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
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
                if (hasMilestone('i', 17)) return setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                else return player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost()), player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost()), player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost()), setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
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
                if (x.gte(0) && hasUpgrade('w', 38)) eff = Decimal.pow(10, x)
                return eff;
            },
            title() {if (hasUpgrade('w', 38)) return "10x Energy Effects & Gains"
                else return "5x Energy Effects & Gains"
            },
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/25\n\
            Currently: " + format(data.effect, 0) + "x"
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                if (hasMilestone('am', 0)) return setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                else return player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost()), player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost()), player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost()), setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 25,
            unlocked() {return true}   
        },
        22: {
            cost(x) {
            let cost = Decimal.pow(1e20, x.plus(1))
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = x.plus(3)
                return eff;
            },
            title: "+ ^1 Energy Gain From Molecules",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/5\n\
            Currently: ^" + format(data.effect, 0)
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                if (hasMilestone('am', 0)) return setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                else return player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost()), player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost()), player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost()), setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 5,
            unlocked() {return true}   
        },
        23: {
            cost(x) {
            let cost = Decimal.pow(15, x.plus(21.257))
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = Decimal.pow(1.725, x)
                return eff;
            },
            title: "1.725x Atom Gain",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/75\n\
            Currently: " + format(data.effect, 2) + "x"
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                if (hasMilestone('am', 0)) return setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                else return player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost()), player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost()), player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost()), setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 75,
            unlocked() {return true}   
        },
        24: {
            cost(x) {
            let cost = Decimal.pow(1e7, x.plus(4))
            return cost.floor()},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let eff = {}
                if (x.gte(0)) eff = x.div(100).plus(1)
                return eff;
            },
            title: "+ ^0.01 Quark Gain",
            display() {
             let data = tmp[this.layer].buyables[this.id]
            return "Cost: " + format(data.cost) + " Diatomic, Polyatomic and Monoatomic Energy\n\
            Amount: " + player[this.layer].buyables[this.id] + "/8\n\
            Currently: ^" + format(data.effect, 2)
            },
            canAfford() { return player[this.layer].diatomicenergy.gte(this.cost()) && player[this.layer].polyatomicenergy.gte(this.cost()) && player[this.layer].monoatomicenergy.gte(this.cost())},
            buy() {
                if (hasMilestone('am', 0)) return setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                else return player[this.layer].diatomicenergy = player[this.layer].diatomicenergy.sub(this.cost()), player[this.layer].polyatomicenergy = player[this.layer].polyatomicenergy.sub(this.cost()), player[this.layer].monoatomicenergy = player[this.layer].monoatomicenergy.sub(this.cost()), setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 8,
            unlocked() {return true}   
        },
    }
})
