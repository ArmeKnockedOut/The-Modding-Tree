addLayer("e", {
    name: "electrons", 
    symbol: "E",
    position: 0,
    branches: true,
    onPrestige() {return player.e.charge = new Decimal(0), player.e.charge2 = new Decimal(0), player.e.charge3 = new Decimal(0), player.e.charge4 = new Decimal(0), player.e.charge5 = new Decimal(0), player.e.charge6 = new Decimal(0), player.e.charge7 = new Decimal(0), player.e.charge8 = new Decimal(0), player.e.charge9 = new Decimal(0), player.e.charge10 = new Decimal(0)},
  //  passiveGeneration() {
   //     if (hasUpgrade('c', 15)) return 100
   //     else return 0},
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
        charge10: new Decimal(0)
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        "blank",
        ["display-text",
            function() { if (hasUpgrade('q', 41)) return 'You have ' +  '<h2 style="color: #1a85ff">' + format(player.e.charge) + '</h2>' + ' Charge, which is multiplying the primary-colored Quarks power gain addition effect, Proton, and Neutron multiplier by ' + '<h3 style="color: #1a85ff">' + format(player.e.charge.plus(1).log10().div(10).plus(1)) + '</h3>' +'x'
                else return 'You have ' +  '<h2 style="color: #1a85ff">' + format(player.e.charge) + '</h2>' + ' Charge, which is multiplying the colored Quarks power gain addition effect, Proton, and Neutron multiplier by ' + '<h3 style="color: #1a85ff">' + format(player.e.charge.plus(1).log10().div(10).plus(1)) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 0)) return 'You have ' +  '<h2 style="color: #278afa">' + format(player.e.charge2) + '</h2>' + ' Charge 2, which is multiplying Electron and Charge gain by ' + '<h3 style="color: #278afa">' + format(player.e.charge2.plus(1).log10().plus(1)) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 1)) return 'You have ' +  '<h2 style="color: #3994fc">' + format(player.e.charge3) + '</h2>' + ' Charge 3, which is multiplying Quark and previous Charges gains by ' + '<h3 style="color: #3994fc">' + format(player.e.charge3.plus(1).log10().plus(1)) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 2)) return 'You have ' +  '<h2 style="color: #4a9bf8">' + format(player.e.charge4) + '</h2>' + ' Charge 4, which is multiplying previous Charges gains by ' + '<h3 style="color: #4a9bf8">' + format(player.e.charge4.plus(1).log10().plus(1)) + '</h3>' +'x, and its own gain by ' + '<h3 style="color: #4a9bf8">' + format(player.e.charge4.plus(1).log10().div(2).plus(1)) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 3)) return 'You have ' +  '<h2 style="color: #5aa6fc">' + format(player.e.charge5) + '</h2>' + ' Charge 5, which is multiplying previous Charges gains by ' + '<h3 style="color: #5aa6fc">' + format(player.e.charge5.plus(1).log10().plus(1)) + '</h3>' +'x, and power gain by ' + '<h3 style="color: #5aa6fc">' + format(player.e.charge5.plus(1).log10().div(8).plus(1)) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 4)) return 'You have ' +  '<h2 style="color: #70adf3">' + format(player.e.charge6) + '</h2>' + ' Charge 6, which is multiplying previous Charges gains by ' + '<h3 style="color: #70adf3">' + format(player.e.charge6.plus(1).log10().plus(1)) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 5)) return 'You have ' +  '<h2 style="color: #80b8f7">' + format(player.e.charge7) + '</h2>' + ' Charge 7, which is multiplying previous Charges gains by ' + '<h3 style="color: #80b8f7">' + format(player.e.charge7.plus(1).log10().plus(1)) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 6)) return 'You have ' +  '<h2 style="color: #94c1f5">' + format(player.e.charge8) + '</h2>' + ' Charge 8, which is multiplying previous Charges gains by ' + '<h3 style="color: #94c1f5">' + format(player.e.charge8.plus(1).log10().plus(1)) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 7)) return 'You have ' +  '<h2 style="color: #abd2ff">' + format(player.e.charge9) + '</h2>' + ' Charge 9, which is multiplying previous Charges gains by ' + '<h3 style="color: #abd2ff">' + format(player.e.charge9.plus(1).log10().plus(1)) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        "blank",
        ["display-text",
            function() {if (hasMilestone('e', 8)) return 'You have ' +  '<h2 style="color: #bad6f7">' + format(player.e.charge10) + '</h2>' + ' Charge 10, which is multiplying previous Charges gains by ' + '<h3 style="color: #bad6f7">' + format(player.e.charge10.plus(1).log10().plus(1)) + '</h3>' +'x'},
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
        if (hasMilestone('e', 0)) mult = mult.times(player.e.charge2.plus(1).log10().plus(1))
        player.e.charge = player.e.charge.plus(player.e.points.div(20).times(player.e.charge2.plus(1).log10().plus(1)).times(player.e.charge3.plus(1).log10().plus(1)).times(player.e.charge4.plus(1).log10().plus(1)).times(player.e.charge5.plus(1).log10().plus(1)).times(player.q.cyanquarks.plus(1).log10().times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)).times(player.e.charge6.plus(1).log10().plus(1)).times(player.e.charge7.plus(1).log10().plus(1)).times(player.e.charge8.plus(1).log10().plus(1)).times(player.e.charge9.plus(1).log10().plus(1)).times(player.e.charge10.plus(1).log10().plus(1)))
        if (hasMilestone('e', 0)) player.e.charge2 = player.e.charge2.plus(player.e.points.div(20).times(player.e.charge3.plus(1).log10().plus(1)).times(player.e.charge4.plus(1).log10().plus(1)).times(player.e.charge5.plus(1).log10().plus(1)).times(player.e.charge6.plus(1).log10().plus(1)).times(player.q.magentaquarks.plus(1).log10().times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)).times(player.e.charge7.plus(1).log10().plus(1)).times(player.e.charge8.plus(1).log10().plus(1)).times(player.e.charge9.plus(1).log10().plus(1)).times(player.e.charge10.plus(1).log10().plus(1)))
        if (hasMilestone('e', 1)) player.e.charge3 = player.e.charge3.plus(player.e.points.div(20).times(player.e.charge4.plus(1).log10().plus(1)).times(player.e.charge5.plus(1).log10().plus(1)).times(player.e.charge6.plus(1).log10().plus(1)).times(player.q.yellowquarks.plus(1).log10().times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)).times(player.e.charge7.plus(1).log10().plus(1)).times(player.e.charge8.plus(1).log10().plus(1)).times(player.e.charge9.plus(1).log10().plus(1)).times(player.e.charge10.plus(1).log10().plus(1)))
        if (hasMilestone('e', 2)) player.e.charge4 = player.e.charge4.plus(player.e.points.div(20).times(player.e.charge4.plus(1).log10().div(2).plus(1)).times(player.e.charge5.plus(1).log10().plus(1)).times(player.e.charge6.plus(1).log10().plus(1)).times(player.e.charge7.plus(1).log10().plus(1)).times(player.e.charge8.plus(1).log10().plus(1)).times(player.e.charge9.plus(1).log10().plus(1)).times(player.e.charge10.plus(1).log10().plus(1)))
        if (hasMilestone('e', 3)) player.e.charge5 = player.e.charge5.plus(player.e.points.div(20).times(player.e.charge6.plus(1).log10().plus(1)).times(player.e.charge7.plus(1).log10().plus(1)).times(player.e.charge8.plus(1).log10().plus(1)).times(player.e.charge9.plus(1).log10().plus(1)).times(player.e.charge10.plus(1).log10().plus(1)))
        if (hasMilestone('e', 4)) player.e.charge6 = player.e.charge6.plus(player.e.points.div(20).times(player.e.charge7.plus(1).log10().plus(1)).times(player.e.charge8.plus(1).log10().plus(1)).times(player.e.charge9.plus(1).log10().plus(1)).times(player.e.charge10.plus(1).log10().plus(1)))
        if (hasMilestone('e', 5)) player.e.charge7 = player.e.charge7.plus(player.e.points.div(20).times(player.e.charge8.plus(1).log10().plus(1)).times(player.e.charge9.plus(1).log10().plus(1)).times(player.e.charge10.plus(1).log10().plus(1)))
        if (hasMilestone('e', 6)) player.e.charge8 = player.e.charge8.plus(player.e.points.div(20).times(player.e.charge9.plus(1).log10().plus(1)).times(player.e.charge10.plus(1).log10().plus(1)))
        if (hasMilestone('e', 7)) player.e.charge9 = player.e.charge9.plus(player.e.points.div(20).times(player.e.charge10.plus(1).log10().plus(1)))
        if (hasMilestone('e', 8)) player.e.charge10 = player.e.charge10.plus(player.e.points.div(20))
        if (player.q.cyanquarks.gte(1) && hasUpgrade('q', 41)) mult = mult.times(player.q.cyanquarks.plus(1).log10().div(4.5).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1))
        if (player.q.magentaquarks.gte(1) && hasUpgrade('q', 42)) mult = mult.times(player.q.magentaquarks.plus(1).log10().div(5.5).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1))
        if (player.q.yellowquarks.gte(1) && hasUpgrade('q', 43)) mult = mult.times(player.q.yellowquarks.plus(1).log10().div(6.5).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1))
        if (hasAchievement('ach', 26)) mult = mult.times(1.25)
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
