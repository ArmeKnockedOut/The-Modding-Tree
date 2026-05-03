addLayer("e", {
    name: "electrons", 
    symbol: "E",
    position: 0,
    branches: true,
    milestonePopups() {if (hasMilestone('a', 4)) return false
        else return true
    },
    onPrestige() {return player.e.charge = new Decimal(0), player.e.charge2 = new Decimal(0), player.e.charge3 = new Decimal(0), player.e.charge4 = new Decimal(0), player.e.charge5 = new Decimal(0), player.e.charge6 = new Decimal(0), player.e.charge7 = new Decimal(0), player.e.charge8 = new Decimal(0), player.e.charge9 = new Decimal(0), player.e.charge10 = new Decimal(0)},
    passiveGeneration() {
        if (hasMilestone('a', 3) && player.a.passiveElectronGen == true) return 1
        else if (hasMilestone('a', 0) && player.a.passiveElectronGen == true) return 0.1
        else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        charge: new Decimal(0),
        charge2: new Decimal(0),
        charge3: new Decimal(0),
        charge4: new Decimal(0),
        charge5: new Decimal(0),
        charge6: new Decimal(0),
        charge7: new Decimal(0),
        charge8: new Decimal(0),
        charge9: new Decimal(0),
        charge10: new Decimal(0),
        chargemultiplier: new Decimal(1),
        charge2multiplier: new Decimal(1),
        charge3multiplier: new Decimal(1),
        charge4multiplier: new Decimal(1),
        charge4multiplier2: new Decimal(1),
        charge5multiplier: new Decimal(1),
        charge5multiplier2: new Decimal(1),
        charge6multiplier: new Decimal(1),
        charge6multiplier2: new Decimal(1),
        charge7multiplier: new Decimal(1),
        charge7multiplier2: new Decimal(1),
        charge8multiplier: new Decimal(1),
        charge8multiplier2: new Decimal(1),
        charge9multiplier: new Decimal(1),
        charge9multiplier2: new Decimal(1),
        charge10multiplier: new Decimal(1),
        charge10multiplier2: new Decimal(1),
        ac17allchargesmultiplier: new Decimal(1),
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        "blank",
        ["display-text",
            function() { if (hasUpgrade('q', 41)) return 'You have ' +  '<h2 style="color: #1a85ff">' + format(player.e.charge) + '</h2>' + ' Charge, which is multiplying the primary-colored Quarks power gain addition and Quark multiplier effects, and Neutron multiplier by ' + '<h3 style="color: #1a85ff">' + format(player.e.chargemultiplier) + '</h3>' +'x'
                else return 'You have ' +  '<h2 style="color: #1a85ff">' + format(player.e.charge) + '</h2>' + ' Charge, which is multiplying the colored Quarks power gain addition and Quark multiplier effects, and Neutron multiplier by ' + '<h3 style="color: #1a85ff">' + format(player.e.chargemultiplier) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 0)) return 'You have ' +  '<h2 style="color: #278afa">' + format(player.e.charge2) + '</h2>' + ' Charge 2, which is multiplying Electron and Charge gain by ' + '<h3 style="color: #278afa">' + format(player.e.charge2multiplier) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 1)) return 'You have ' +  '<h2 style="color: #3994fc">' + format(player.e.charge3) + '</h2>' + ' Charge 3, which is multiplying Quark and previous Charges gains by ' + '<h3 style="color: #3994fc">' + format(player.e.charge3multiplier) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 2)) return 'You have ' +  '<h2 style="color: #4a9bf8">' + format(player.e.charge4) + '</h2>' + ' Charge 4, which is multiplying previous Charges gains by ' + '<h3 style="color: #4a9bf8">' + format(player.e.charge4multiplier) + '</h3>' +'x, and its own gain by ' + '<h3 style="color: #4a9bf8">' + format(player.e.charge4multiplier2) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 3)) return 'You have ' +  '<h2 style="color: #5aa6fc">' + format(player.e.charge5) + '</h2>' + ' Charge 5, which is multiplying previous Charges gains by ' + '<h3 style="color: #5aa6fc">' + format(player.e.charge5multiplier) + '</h3>' +'x, and power gain by ' + '<h3 style="color: #5aa6fc">' + format(player.e.charge5multiplier2) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() { if (player.a.atomchallenge11completions.gte(1) && hasMilestone('e', 4)) return 'You have ' +  '<h2 style="color: #70adf3">' + format(player.e.charge6) + '</h2>' + ' Charge 6, which is multiplying previous Charges gains by ' + '<h3 style="color: #70adf3">' + format(player.e.charge6multiplier) + '</h3>' +'x, and Cyan Quark non-Charge effects by ' + '<h3 style="color: #70adf3">' + format(player.e.charge6multiplier2) + '</h3>' +'x'
                else if (hasMilestone('e', 4)) return 'You have ' +  '<h2 style="color: #70adf3">' + format(player.e.charge6) + '</h2>' + ' Charge 6, which is multiplying previous Charges gains by ' + '<h3 style="color: #70adf3">' + format(player.e.charge6multiplier) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (player.a.atomchallenge11completions.gte(2) && hasMilestone('e', 5)) return 'You have ' +  '<h2 style="color: #80b8f7">' + format(player.e.charge7) + '</h2>' + ' Charge 7, which is multiplying previous Charges gains by ' + '<h3 style="color: #80b8f7">' + format(player.e.charge7multiplier) + '</h3>' +'x, and Magenta Quark non-Charge effects by ' + '<h3 style="color: #80b8f7">' + format(player.e.charge7multiplier2) + '</h3>' +'x'
                else if (hasMilestone('e', 5)) return 'You have ' +  '<h2 style="color: #80b8f7">' + format(player.e.charge7) + '</h2>' + ' Charge 7, which is multiplying previous Charges gains by ' + '<h3 style="color: #80b8f7">' + format(player.e.charge7multiplier) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (player.a.atomchallenge11completions.gte(3) && hasMilestone('e', 6)) return 'You have ' +  '<h2 style="color: #94c1f5">' + format(player.e.charge8) + '</h2>' + ' Charge 8, which is multiplying previous Charges gains by ' + '<h3 style="color: #94c1f5">' + format(player.e.charge8multiplier) + '</h3>' +'x, and Yellow Quark non-Charge effects by ' + '<h3 style="color: #94c1f5">' + format(player.e.charge8multiplier2) + '</h3>' +'x'
                else if (hasMilestone('e', 6)) return 'You have ' +  '<h2 style="color: #94c1f5">' + format(player.e.charge8) + '</h2>' + ' Charge 8, which is multiplying previous Charges gains by ' + '<h3 style="color: #94c1f5">' + format(player.e.charge8multiplier) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (player.a.atomchallenge11completions.gte(4) && hasMilestone('e', 7)) return 'You have ' +  '<h2 style="color: #abd2ff">' + format(player.e.charge9) + '</h2>' + ' Charge 9, which is multiplying previous Charges gains by ' + '<h3 style="color: #abd2ff">' + format(player.e.charge9multiplier) + '</h3>' +'x, and the Proton effect by ' + '<h3 style="color: #abd2ff">' + format(player.e.charge9multiplier2) + '</h3>' +'x'
                else if (hasMilestone('e', 7)) return 'You have ' +  '<h2 style="color: #abd2ff">' + format(player.e.charge9) + '</h2>' + ' Charge 9, which is multiplying previous Charges gains by ' + '<h3 style="color: #abd2ff">' + format(player.e.charge9multiplier) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (player.a.atomchallenge11completions.gte(5) && hasMilestone('e', 8)) return 'You have ' +  '<h2 style="color: #bad6f7">' + format(player.e.charge10) + '</h2>' + ' Charge 10, which is multiplying previous Charges gains by ' + '<h3 style="color: #bad6f7">' + format(player.e.charge10multiplier) + '</h3>' +'x, and the Secondary Proton effect by ' + '<h3 style="color: #bad6f7">' + format(player.e.charge10multiplier2) + '</h3>' +'x'
                else if (hasMilestone('e', 8)) return 'You have ' +  '<h2 style="color: #bad6f7">' + format(player.e.charge10) + '</h2>' + ' Charge 10, which is multiplying previous Charges gains by ' + '<h3 style="color: #bad6f7">' + format(player.e.charge10multiplier) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        "blank",
        "milestones"
    ],
    color: "#1a85ff",
    requires: new Decimal(2.5e8), 
    resource: "Electrons", 
    baseResource: "power", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.676756, 
    gainMult() { 
        mult = new Decimal(1)
        if (hasMilestone('e', 0)) mult = mult.times(player.e.charge2multiplier)
        player.e.charge = player.e.charge.plus(player.e.points.div(20).times(player.e.charge2multiplier).times(player.e.charge3multiplier).times(player.e.charge4multiplier).times(player.e.charge5multiplier).times(player.q.cyanquarkschargemultiplier).times(player.e.charge6multiplier).times(player.e.charge7multiplier).times(player.e.charge8multiplier).times(player.e.charge9multiplier).times(player.e.charge10multiplier).times(player.a.atomchallenge11).times(upgradeEffect('a', 29)).times(upgradeEffect('a', 30)).times(player.e.ac17allchargesmultiplier).times(upgradeEffect('a', 42)))
        if (hasMilestone('e', 0)) player.e.charge2 = player.e.charge2.plus(player.e.points.div(20).times(player.e.charge3multiplier).times(player.e.charge4multiplier).times(player.e.charge5multiplier).times(player.e.charge6multiplier).times(player.q.magentaquarkschargemultiplier).times(player.e.charge7multiplier).times(player.e.charge8multiplier).times(player.e.charge9multiplier).times(player.e.charge10multiplier).times(player.a.atomchallenge11).times(upgradeEffect('a', 29)).times(upgradeEffect('a', 30)).times(player.e.ac17allchargesmultiplier).times(upgradeEffect('a', 42)))
        if (hasMilestone('e', 1)) player.e.charge3 = player.e.charge3.plus(player.e.points.div(20).times(player.e.charge4multiplier).times(player.e.charge5multiplier).times(player.e.charge6multiplier).times(player.q.yellowquarkschargemultiplier).times(player.e.charge7multiplier).times(player.e.charge8multiplier).times(player.e.charge9multiplier).times(player.e.charge10multiplier).times(player.a.atomchallenge11).times(upgradeEffect('a', 29)).times(upgradeEffect('a', 30)).times(player.e.ac17allchargesmultiplier).times(upgradeEffect('a', 42)))
        if (hasMilestone('e', 2)) player.e.charge4 = player.e.charge4.plus(player.e.points.div(20).times(player.e.charge4.plus(1).log10().div(2).plus(1)).times(player.e.charge5multiplier).times(player.e.charge6multiplier).times(player.e.charge7multiplier).times(player.e.charge8multiplier).times(player.e.charge9multiplier).times(player.e.charge10multiplier).times(player.a.atomchallenge11).times(upgradeEffect('a', 29)).times(upgradeEffect('a', 30)).times(player.e.ac17allchargesmultiplier).times(upgradeEffect('a', 42)))
        if (hasMilestone('e', 3)) player.e.charge5 = player.e.charge5.plus(player.e.points.div(20).times(player.e.charge6multiplier).times(player.e.charge7multiplier).times(player.e.charge8multiplier).times(player.e.charge9multiplier).times(player.e.charge10multiplier).times(player.a.atomchallenge11).times(upgradeEffect('a', 29)).times(upgradeEffect('a', 30)).times(player.e.ac17allchargesmultiplier).times(upgradeEffect('a', 42)))
        if (hasMilestone('e', 4)) player.e.charge6 = player.e.charge6.plus(player.e.points.div(20).times(player.e.charge7multiplier).times(player.e.charge8multiplier).times(player.e.charge9multiplier).times(player.e.charge10multiplier).times(player.a.atomchallenge11).times(upgradeEffect('a', 29)).times(upgradeEffect('a', 30)).times(player.e.ac17allchargesmultiplier).times(upgradeEffect('a', 42)))
        if (hasMilestone('e', 5)) player.e.charge7 = player.e.charge7.plus(player.e.points.div(20).times(player.e.charge8multiplier).times(player.e.charge9multiplier).times(player.e.charge10multiplier).times(player.a.atomchallenge11).times(upgradeEffect('a', 29)).times(upgradeEffect('a', 30)).times(player.e.ac17allchargesmultiplier).times(upgradeEffect('a', 42)))
        if (hasMilestone('e', 6)) player.e.charge8 = player.e.charge8.plus(player.e.points.div(20).times(player.e.charge9multiplier).times(player.e.charge10multiplier).times(player.a.atomchallenge11).times(upgradeEffect('a', 29)).times(upgradeEffect('a', 30)).times(player.e.ac17allchargesmultiplier).times(upgradeEffect('a', 42)))
        if (hasMilestone('e', 7)) player.e.charge9 = player.e.charge9.plus(player.e.points.div(20).times(player.e.charge10multiplier).times(player.a.atomchallenge11).times(upgradeEffect('a', 29)).times(upgradeEffect('a', 30)).times(player.e.ac17allchargesmultiplier).times(upgradeEffect('a', 42)))
        if (hasMilestone('e', 8)) player.e.charge10 = player.e.charge10.plus(player.e.points.div(20).times(player.a.atomchallenge11).times(upgradeEffect('a', 29)).times(upgradeEffect('a', 30)).times(player.e.ac17allchargesmultiplier).times(upgradeEffect('a', 42)))
        if (player.q.cyanquarks.gte(1) && hasUpgrade('q', 41)) mult = mult.times(player.q.cyanquarkselectronmultiplier)
        if (player.q.magentaquarks.gte(1) && hasUpgrade('q', 42)) mult = mult.times(player.q.magentaquarkselectronmultiplier)
        if (player.q.yellowquarks.gte(1) && hasUpgrade('q', 43)) mult = mult.times(player.q.yellowquarkselectronmultiplier)
        if (hasAchievement('ach', 26)) mult = mult.times(1.25)
        if (hasUpgrade('a', 13)) mult = mult.times(softcap((upgradeEffect('a', 13)), new Decimal(10), 0.4))
        if (hasUpgrade('a', 18)) mult = mult.times(upgradeEffect('a', 18))
        if (hasUpgrade('a', 21)) mult = mult.times(upgradeEffect('a', 21))
        if (hasUpgrade('a', 33)) mult = mult.times(upgradeEffect('a', 33))
        if (hasChallenge('a', 16)) mult = mult.times(new Decimal.pow(player.a.atomchallenge16multiplier, player.a.actualtotalatomchallengecompletions))
        player.e.chargemultiplier = player.e.charge.plus(1).log10().div(10).plus(1)
        player.e.charge2multiplier = player.e.charge2.plus(1).log10().plus(1)
        player.e.charge3multiplier = player.e.charge3.plus(1).log10().plus(1)
        player.e.charge4multiplier = player.e.charge4.plus(1).log10().plus(1)
        player.e.charge5multiplier = player.e.charge5.plus(1).log10().plus(1)
        player.e.charge6multiplier = player.e.charge6.plus(1).log10().plus(1)
        player.e.charge7multiplier = player.e.charge7.plus(1).log10().plus(1)
        player.e.charge8multiplier = player.e.charge8.plus(1).log10().plus(1)
        player.e.charge9multiplier = player.e.charge9.plus(1).log10().plus(1)
        player.e.charge10multiplier = player.e.charge10.plus(1).log10().plus(1)
        player.e.charge4multiplier2 = player.e.charge4.plus(1).log10().div(2).plus(1)
        player.e.charge5multiplier2 = player.e.charge5.plus(1).log10().div(8).plus(1)
        player.e.charge6multiplier2 = player.e.charge6.plus(1).log10().div(20).plus(1)
        player.e.charge7multiplier2 = player.e.charge7.plus(1).log10().div(20).plus(1)
        player.e.charge8multiplier2 = player.e.charge8.plus(1).log10().div(20).plus(1)
        player.e.charge9multiplier2 = player.e.charge9.plus(1).log10().div(250).plus(1)
        player.e.charge10multiplier2 = player.e.charge10.plus(1).log10().div(90).plus(1)
        if (challengeCompletions('a', 17) == 5) player.e.ac17allchargesmultiplier = player.e.ac17allchargesmultiplier.plus(5000000)
        if (challengeCompletions('a', 17) == 4) player.e.ac17allchargesmultiplier = player.e.ac17allchargesmultiplier.plus(100000)
        if (challengeCompletions('a', 17) == 3) player.e.ac17allchargesmultiplier = player.e.ac17allchargesmultiplier.plus(1500)
        if (challengeCompletions('a', 17) == 2) player.e.ac17allchargesmultiplier = player.e.ac17allchargesmultiplier.plus(20)
        if (challengeCompletions('a', 17) == 1) player.e.ac17allchargesmultiplier = player.e.ac17allchargesmultiplier.plus(0.25)

        if (hasUpgrade('a', 45)) mult = mult.times(15)

        if (hasChallenge('a', 19)) mult = mult.pow(player.a.ac19electronexp)
        if (inChallenge('a', 19)) mult = mult.times(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "e", description: "E: Reset for Electrons", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasAchievement('ach', 21))},
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
    //upgrades: {
      //  11: {
        //    title: "Getting help",
          //  description: "Get more dirt cleaned based on the amount of dirt washers.",
           // cost: new Decimal(3),
          // effect() {
          //      return player[this.layer].points.add(1).pow(0.5)
          //  },
          //  effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
      //  },      
  // },
  milestones: {
    0: {
        requirementDescription: "100 Electrons",
        effectDescription: "Begin Generating Charge 2, also based on your Electron amount",
        done() { return player.e.points.gte(100) }
    },

    1: {
        requirementDescription: "1,000 Electrons",
        effectDescription: "Begin Generating Charge 3, also based on your Electron amount",
        done() { return player.e.points.gte(1000) }
    },

    2: {
        requirementDescription: "10,000 Electrons",
        effectDescription: "Begin Generating Charge 4, also based on your Electron amount",
        done() { return player.e.points.gte(10000) }
    },

    3: {
        requirementDescription: "100,000 Electrons",
        effectDescription: "Begin Generating Charge 5, also based on your Electron amount",
        done() { return player.e.points.gte(100000) }
    },

    4: {
        requirementDescription: "1,000,000 Electrons",
        effectDescription: "Begin Generating Charge 6, also based on your Electron amount",
        done() { return player.e.points.gte(1000000) }
    },

    5: {
        requirementDescription: "10,000,000 Electrons",
        effectDescription: "Begin Generating Charge 7, also based on your Electron amount",
        done() { return player.e.points.gte(10000000) }
    },

    6: {
        requirementDescription: "100,000,000 Electrons",
        effectDescription: "Begin Generating Charge 8, also based on your Electron amount",
        done() { return player.e.points.gte(100000000) }
    },

    7: {
        requirementDescription: "1.00e9 Electrons",
        effectDescription: "Begin Generating Charge 9, also based on your Electron amount",
        done() { return player.e.points.gte(1e9) }
    },

    8: {
        requirementDescription: "1.00e10 Electrons",
        effectDescription: "Begin Generating Charge 10, also based on your Electron amount",
        done() { return player.e.points.gte(1e10) }
    }
}   
})
