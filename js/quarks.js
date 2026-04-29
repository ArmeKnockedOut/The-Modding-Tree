addLayer("q", {
    name: "quarks", 
    symbol: "Q",
    position: 1,
    branches: true,
    onPrestige() {return player.e.charge = new Decimal(0), player.e.charge2 = new Decimal(0), player.e.charge3 = new Decimal(0), player.e.charge4 = new Decimal(0), player.e.charge5 = new Decimal(0), player.e.charge6 = new Decimal(0), player.e.charge7 = new Decimal(0)},
  //  passiveGeneration() {
   //     if (hasUpgrade('c', 15)) return 100
   //     else return 0},
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        redquarks: new Decimal(0),
        greenquarks: new Decimal(0),
        bluequarks: new Decimal(0),
        protons: new Decimal(0),
        neutrons: new Decimal(0),
        cyanquarks: new Decimal(0),
        magentaquarks: new Decimal(0),
        yellowquarks: new Decimal(0),
        secondaryprotons: new Decimal(0)
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        "blank",
        ["display-text",
            function() { if (hasUpgrade('q', 31)) return 'You have ' +  '<h2 style="color: red">' + format(player.q.redquarks) + '</h2>' + ' Red Quarks, which are adding +' + '<h3 style="color: red">' + format(player.q.redquarks.plus(1).log2().div(10000).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).times(player.e.charge.plus(1).log10().div(10).plus(1))) + '</h3>' +' to power gain, multiplying power gain by ' + '<h3 style="color: red">' + format(player.q.redquarks.plus(1).log2().div(25).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).plus(1)) + '</h3>' +'x, and multiplying Quark gain by ' + '<h3 style="color: red">' + format(player.q.redquarks.plus(1).log2().div(20).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).plus(1)) + '</h3>' +'x'
                else if (hasUpgrade('q', 23)) return 'You have ' +  '<h2 style="color: red">' + format(player.q.redquarks) + '</h2>' + ' Red Quarks, which are adding +' + '<h3 style="color: red">' + format(player.q.redquarks.plus(1).log2().div(10000).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1))) + '</h3>' +' to power gain, and multiplying power gain by ' + '<h3 style="color: red">' + format(player.q.redquarks.plus(1).log2().div(25).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1)).plus(1)) + '</h3>' +'x'
                else return 'You have ' +  '<h2 style="color: red">' + format(player.q.redquarks) + '</h2>' + ' Red Quarks, which are adding +' + '<h3 style="color: red">' + format(player.q.redquarks.plus(1).log2().div(10000).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1))) + '</h3>' +' to power gain'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["clickable", 11],
        "blank",
        "blank",
        ["display-text",
            function() { if (hasUpgrade('q', 32)) return 'You have ' +  '<h2 style="color: green">' + format(player.q.greenquarks) + '</h2>' + ' Green Quarks, which are adding +' + '<h3 style="color: green">' + format(player.q.greenquarks.plus(1).log2().div(25000).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).times(player.e.charge.plus(1).log10().div(10).plus(1))) + '</h3>' + ' to power gain, multiplying power gain by ' + '<h3 style="color: green">' + format(player.q.greenquarks.plus(1).log2().div(10).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).plus(1)) + '</h3>' +'x, and multiplying Quark gain by ' + '<h3 style="color: green">' + format(player.q.greenquarks.plus(1).log2().div(20).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).plus(1)) + '</h3>' +'x'
                else if (hasUpgrade('q', 21)) return 'You have ' +  '<h2 style="color: green">' + format(player.q.greenquarks) + '</h2>' + ' Green Quarks, which are adding +' + '<h3 style="color: green">' + format(player.q.greenquarks.plus(1).log2().div(25000).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1))) + '</h3>' + ' to power gain, and multiplying power gain by ' + '<h3 style="color: green">' + format(player.q.greenquarks.plus(1).log2().div(10).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1)).plus(1)) + '</h3>' +'x'
                else return 'You have ' +  '<h2 style="color: green">' + format(player.q.greenquarks) + '</h2>' + ' Green Quarks, which are multiplying power gain by ' + '<h3 style="color: green">' + format(player.q.greenquarks.plus(1).log2().div(10).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1)).plus(1)) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["clickable", 12],
        "blank",
        "blank",
        ["display-text",
            function() { if (hasUpgrade('q', 24)) return 'You have ' +  '<h2 style="color: blue">' + format(player.q.bluequarks) + '</h2>' + ' Blue Quarks, which are adding +' + '<h3 style="color: blue">' + format(player.q.bluequarks.plus(1).log2().div(25000).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).times(player.e.charge.plus(1).log10().div(10).plus(1))) + '</h3>' + ' to power gain, multiplying power gain by ' + '<h3 style="color: blue">' + format(player.q.bluequarks.plus(1).log2().div(25).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).plus(1)) + '</h3>' +'x, and multiplying Quark gain by ' + '<h3 style="color: blue">' + format(player.q.bluequarks.plus(1).log2().div(8).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).plus(1)) + '</h3>' +'x'
                else if (hasUpgrade('q', 22)) return 'You have ' +  '<h2 style="color: blue">' + format(player.q.bluequarks) + '</h2>' + ' Blue Quarks, which are adding +' + '<h3 style="color: blue">' + format(player.q.bluequarks.plus(1).log2().div(25000).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1))) + '</h3>' + ' to power gain, and multiplying Quark gain by ' + '<h3 style="color: blue">' + format(player.q.bluequarks.plus(1).log2().div(8).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1)).plus(1)) + '</h3>' +'x'
               else return 'You have ' +  '<h2 style="color: blue">' + format(player.q.bluequarks) + '</h2>' + ' Blue Quarks, which are multiplying Quark gain by ' + '<h3 style="color: blue">' + format(player.q.bluequarks.plus(1).log2().div(8).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).plus(1)).plus(1)) + '</h3>' +'x'},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["clickable", 13],
        () => (hasAchievement('ach', 18)) ? "blank" : "",
        () => (hasAchievement('ach', 18)) ? "blank" : "",
        () => (hasAchievement('ach', 18)) ? "blank" : "",
        () => (hasAchievement('ach', 18)) ? "blank" : "",
        () => (hasAchievement('ach', 18)) ? "blank" : "",
        ["display-text",
            function() {if (hasUpgrade('q', 41)) return 'You have ' +  '<h2 style="color: #dd3838">' + format(player.q.protons) + '</h2>' + ' Protons, which are multiplying primary-colored Quark effects by ' + '<h3 style="color: #dd3838">' + format(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)) + '</h3>' + 'x'
                else if (hasAchievement('ach', 18)) return 'You have ' +  '<h2 style="color: #dd3838">' + format(player.q.protons) + '</h2>' + ' Protons, which are multiplying colored Quark effects by ' + '<h3 style="color: #dd3838">' + format(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)) + '</h3>' + 'x'
               else return ''},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["clickable", 14],
        () => (hasAchievement('ach', 18)) ? "blank" : "",
        () => (hasAchievement('ach', 18)) ? "blank" : "",
        ["display-text",
            function() { if (hasAchievement('ach', 18)) return 'You have ' +  '<h2 style="color: #a7866b">' + format(player.q.neutrons) + '</h2>' + ' Neutrons, which are multiplying Quark -> colored Quark conversion efficiency by ' + '<h3 style="color: #a7866b">' + format(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)) + '</h3>' + 'x'
               else return ''},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["clickable", 15],
        () => (hasUpgrade('q', 41)) ? "blank" : "",
        () => (hasUpgrade('q', 41)) ? "blank" : "",
        () => (hasUpgrade('q', 41)) ? "blank" : "",
        () => (hasUpgrade('q', 41)) ? "blank" : "",
        () => (hasUpgrade('q', 41)) ? "blank" : "",
        ["display-text",
            function() { if (hasUpgrade('q', 41)) return 'You have ' +  '<h2 style="color: cyan">' + format(player.q.cyanquarks) + '</h2>' + ' Cyan Quarks, which are multiplying Quark gain by ' + '<h3 style="color: cyan">' + format(player.q.cyanquarks.plus(1).log(10).div(9.3).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)) + '</h3>' + 'x, multiplying Electron gain by ' +  '<h3 style="color: cyan">' + format(player.q.cyanquarks.plus(1).log10().div(4.5).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)) + '</h3>' + 'x, and multiplying Charge gain by ' +  '<h3 style="color: cyan">' + format(player.q.cyanquarks.plus(1).log10().times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)) + '</h3>' + 'x'
               else return ''},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["clickable", 21],
        () => (hasUpgrade('q', 42)) ? "blank" : "",
        () => (hasUpgrade('q', 42)) ? "blank" : "",
        ["display-text",
            function() { if (hasUpgrade('q', 42)) return 'You have ' +  '<h2 style="color: magenta">' + format(player.q.magentaquarks) + '</h2>' + ' Magenta Quarks, which are multiplying Quark gain by ' + '<h3 style="color: magenta">' + format(player.q.magentaquarks.plus(1).log(10).div(10.5).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)) + '</h3>' + 'x, multiplying Electron gain by ' +  '<h3 style="color: magenta">' + format(player.q.magentaquarks.plus(1).log10().div(5.5).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)) + '</h3>' + 'x, and multiplying Charge 2 gain by ' +  '<h3 style="color: magenta">' + format(player.q.magentaquarks.plus(1).log10().times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)) + '</h3>' + 'x'
               else return ''},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["clickable", 22],
        () => (hasUpgrade('q', 43)) ? "blank" : "",
        () => (hasUpgrade('q', 43)) ? "blank" : "",
        ["display-text",
            function() { if (hasUpgrade('q', 43)) return 'You have ' +  '<h2 style="color: yellow">' + format(player.q.yellowquarks) + '</h2>' + ' Yellow Quarks, which are multiplying Quark gain by ' + '<h3 style="color: yellow">' + format(player.q.yellowquarks.plus(1).log(10).div(11.7).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)) + '</h3>' + 'x, multiplying Electron gain by ' +  '<h3 style="color: yellow">' + format(player.q.yellowquarks.plus(1).log10().div(6.5).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)) + '</h3>' + 'x, and multiplying Charge 3 gain by ' +  '<h3 style="color: yellow">' + format(player.q.yellowquarks.plus(1).log10().times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1)) + '</h3>' + 'x'
               else return ''},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["clickable", 23],
        () => (hasUpgrade('q', 44)) ? "blank" : "",
        () => (hasUpgrade('q', 44)) ? "blank" : "",
        () => (hasUpgrade('q', 44)) ? "blank" : "",
        () => (hasUpgrade('q', 44)) ? "blank" : "",
        () => (hasUpgrade('q', 44)) ? "blank" : "",
        ["display-text",
            function() {if (hasUpgrade('q', 44)) return 'You have ' +  '<h2 style="color: orange">' + format(player.q.secondaryprotons) + '</h2>' + ' Secondary Protons, which are multiplying secondary-colored Quark effects by ' + '<h3 style="color: orange">' + format(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)) + '</h3>' + 'x'
               else return ''},
            { "color": "white", "font-size": "16px" }],
        ["blank", "10px"],
        ["clickable", 24],
        "blank",
        "blank",
        "blank",
        "upgrades"
    ],
    color: "#ff471a",
    requires: new Decimal(0.0025), 
    resource: "Quarks", 
    baseResource: "power", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.7, 
    gainMult() { 
        mult = new Decimal(1)
        if (hasAchievement('ach', 25)) player.q.redquarks = player.q.redquarks.plus(player.q.points.div(20).div(1000).times(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)))
        if (hasAchievement('ach', 25)) player.q.greenquarks = player.q.greenquarks.plus(player.q.points.div(20).div(1000).times(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)))
        if (hasAchievement('ach', 25)) player.q.bluequarks = player.q.bluequarks.plus(player.q.points.div(20).div(1000).times(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)))
        mult = mult.times(player.q.bluequarks.plus(1).log2().div(8).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).plus(1))
        if (hasUpgrade('q', 13)) mult = mult.times(upgradeEffect('q', 13))
        if (hasUpgrade('q', 14)) mult = mult.times(upgradeEffect('q', 14))
        if (hasUpgrade('q', 31) && player.q.redquarks.gte(1)) mult = mult.times(player.q.redquarks.plus(1).log2().div(20).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).plus(1))
        if (hasUpgrade('q', 33) && player.q.greenquarks.gte(1)) mult = mult.times(player.q.greenquarks.plus(1).log2().div(20).times(player.q.protons.plus(1).log10().div(4).times(upgradeEffect('q', 33)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1)).plus(1))
        if (hasMilestone('e', 1)) mult = mult.times(player.e.charge3.plus(1).log10().plus(1))
        if (hasUpgrade('q', 41) && player.q.cyanquarks.gte(1)) mult = mult.times(player.q.cyanquarks.plus(1).log10().div(9.3).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1))
        if (hasUpgrade('q', 42) && player.q.magentaquarks.gte(1)) mult = mult.times(player.q.magentaquarks.plus(1).log10().div(10.5).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1))
        if (hasUpgrade('q', 43) && player.q.yellowquarks.gte(1)) mult = mult.times(player.q.yellowquarks.plus(1).log10().div(11.7).times(player.q.secondaryprotons.plus(1).log10().div(4.25).plus(1)).plus(1))
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "q", description: "Q: Reset for Quarks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
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
    clickables: {
        11: {
            display() {return "Convert Quarks into Red Quarks"},
            canClick() {return player.q.points.gte(1)},
            onClick() {if (hasAchievement('ach', 22)) return player.q.redquarks = player.q.redquarks.plus(player.q.points.times(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).plus(1))), player.q.points = player.q.points.minus(player.q.points.div(2))
                else return player.q.redquarks = player.q.redquarks.plus(player.q.points.times(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1))), player.q.points = player.q.points.minus(player.q.points)},
            style: {
                'background-color'() {if (player.q.points.gte(1)) return "red"},
            }
        },
        12: {
            display() {return "Convert Quarks into Green Quarks"},
            canClick() {return player.q.points.gte(1)},
            onClick() {if (hasAchievement('ach', 22)) return player.q.greenquarks = player.q.greenquarks.plus(player.q.points.times(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).plus(1))), player.q.points = player.q.points.minus(player.q.points.div(2))
              else return player.q.greenquarks = player.q.greenquarks.plus(player.q.points.times(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1))), player.q.points = player.q.points.minus(player.q.points)},
            style: {
                'background-color'() {if (player.q.points.gte(1)) return "green"},
            }
        },
        13: {
            display() {return "Convert Quarks into Blue Quarks"},
            canClick() {return player.q.points.gte(1)},
            onClick() { if (hasAchievement('ach', 22)) return player.q.bluequarks = player.q.bluequarks.plus(player.q.points.times(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).plus(1))), player.q.points = player.q.points.minus(player.q.points.div(2))
              else return player.q.bluequarks = player.q.bluequarks.plus(player.q.points.times(player.q.neutrons.plus(1).log10().div(2.67).times(upgradeEffect('q', 34)).times(player.e.charge.plus(1).log10().div(10).plus(1)).plus(1))), player.q.points = player.q.points.minus(player.q.points)},
            style: {
                'background-color'() {if (player.q.points.gte(1)) return "blue"},
            }
        },
        14: {
            display() {if (hasUpgrade('q', 41)) return "Convert half your primary-colored Quarks into Protons"
               else return "Convert half your colored Quarks into Protons"},
            canClick() {return player.q.redquarks.gte(2) && player.q.greenquarks.gte(2) && player.q.bluequarks.gte(2)},
            onClick() {return player.q.protons = player.q.protons.plus(player.q.redquarks.plus(player.q.greenquarks.plus(player.q.bluequarks)).div(6)), player.q.redquarks = player.q.redquarks.minus(player.q.redquarks.div(2)), player.q.greenquarks = player.q.greenquarks.minus(player.q.greenquarks.div(2)), player.q.bluequarks = player.q.bluequarks.minus(player.q.bluequarks.div(2))},
            style: {
                'background-color'() {if (player.q.redquarks.gte(2) && player.q.greenquarks.gte(2) && player.q.bluequarks.gte(2)) return "#dd3838"},
            },
            unlocked() {return (hasAchievement('ach', 18))}
        },
        15: {
            display() {if (hasUpgrade('q', 41)) return "Convert half your primary-colored Quarks into Neutrons"
               else return "Convert half your colored Quarks into Neutrons"},
            canClick() {return player.q.redquarks.gte(2) && player.q.greenquarks.gte(2) && player.q.bluequarks.gte(2)},
            onClick() {return player.q.neutrons = player.q.neutrons.plus(player.q.redquarks.plus(player.q.greenquarks.plus(player.q.bluequarks)).div(6)), player.q.redquarks = player.q.redquarks.minus(player.q.redquarks.div(2)), player.q.greenquarks = player.q.greenquarks.minus(player.q.greenquarks.div(2)), player.q.bluequarks = player.q.bluequarks.minus(player.q.bluequarks.div(2))},
            style: {
                'background-color'() {if (player.q.redquarks.gte(2) && player.q.greenquarks.gte(2) && player.q.bluequarks.gte(2)) return "#a7866b"},
            },
            unlocked() {return (hasAchievement('ach', 18))}
        },
        21: {
            display() {return "Convert your Quarks into Cyan Quarks"},
            canClick() {return player.q.points.gte(1e20)},
            onClick() {return player.q.cyanquarks = player.q.cyanquarks.plus(player.q.points.div(1e20).times(player.q.neutrons.plus(1).log10().div(2.67).plus(1))), player.q.points = player.q.points.minus(player.q.points.div(2))},
            style: {
                'background-color'() {if (player.q.points.gte(1e20)) return "cyan"},
            },
            unlocked() {return (hasUpgrade('q', 41))}
        },
        22: {
            display() {return "Convert your Quarks into Magenta Quarks"},
            canClick() {return player.q.points.gte(1e20)},
            onClick() {return player.q.magentaquarks = player.q.magentaquarks.plus(player.q.points.div(1e20).times(player.q.neutrons.plus(1).log10().div(2.67).plus(1))), player.q.points = player.q.points.minus(player.q.points.div(2))},
            style: {
                'background-color'() {if (player.q.points.gte(1e20)) return "magenta"},
            },
            unlocked() {return (hasUpgrade('q', 42))}
        },
        23: {
            display() {return "Convert your Quarks into Yellow Quarks"},
            canClick() {return player.q.points.gte(1e20)},
            onClick() {return player.q.yellowquarks = player.q.yellowquarks.plus(player.q.points.div(1e20).times(player.q.neutrons.plus(1).log10().div(2.67).plus(1))), player.q.points = player.q.points.minus(player.q.points.div(2))},
            style: {
                'background-color'() {if (player.q.points.gte(1e20)) return "yellow"},
            },
            unlocked() {return (hasUpgrade('q', 43))}
        },
        24: {
            display() {return "Convert half your secondary-colored Quarks into Secondary Protons"},
            canClick() {return player.q.cyanquarks.gte(2) && player.q.magentaquarks.gte(2) && player.q.yellowquarks.gte(2)},
            onClick() {return player.q.secondaryprotons = player.q.secondaryprotons.plus(player.q.cyanquarks.plus(player.q.magentaquarks.plus(player.q.yellowquarks)).div(6)), player.q.cyanquarks = player.q.cyanquarks.minus(player.q.cyanquarks.div(2)), player.q.magentaquarks = player.q.magentaquarks.minus(player.q.magentaquarks.div(2)), player.q.yellowquarks = player.q.yellowquarks.minus(player.q.yellowquarks.div(2))},
            style: {
                'background-color'() {if (player.q.cyanquarks.gte(2) && player.q.magentaquarks.gte(2) && player.q.yellowquarks.gte(2)) return "orange"},
            },
            unlocked() {return (hasUpgrade('q', 44))}
        },
    },
    upgrades: {
      11: {
        title: "Understanding",
        description: "Power gain is multiplied based on your Quarks",
        cost: new Decimal(50),
        effect() {
        return player.q.points.add(1).pow(0.2)
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      },

      12: {
        title: "Hope",
        description: "Power gain is multiplied based on your power",
        cost: new Decimal(100),
        effect() {
        return player.points.times(500).add(1).pow(0.17)
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      },

      13: {
        title: "Trust",
        description: "Quark gain is multiplied based on your power",
        cost: new Decimal(300),
        effect() {
        return player.points.times(75).add(1).pow(0.1)
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      },

      14: {
        title: "Teamwork",
        description: "Quark gain is multiplied based on your Quarks",
        cost: new Decimal(550),
        effect() {
        return player.q.points.add(1).pow(0.05)
      },
      effectDisplay() { return format((upgradeEffect(this.layer, this.id)))+"x" },
      },

      21: {
        title: "Green Replication",
        description: "Green Quarks also add to power gain with a slightly weakened formula.",
        cost: new Decimal(700),
        unlocked() {return hasUpgrade('q', 14)} 
      },

      22: {
        title: "Blue Replication",
        description: "Blue Quarks also add to power gain with a slightly weakened formula.",
        cost: new Decimal(700),
        unlocked() {return hasUpgrade('q', 14)}
      },

      23: {
        title: "Red Copy",
        description: "Red Quarks also multiply power gain with a slightly weakened formula.",
        cost: new Decimal(1000),
        unlocked() {return hasUpgrade('q', 21) && hasUpgrade('q', 22)}
      },

      24: {
        title: "Blue Copy",
        description: "Blue Quarks also multiply power gain with a slightly weakened formula.",
        cost: new Decimal(1000),
        unlocked() {return hasUpgrade('q', 21) && hasUpgrade('q', 22)}
      },

      31: {
        title: "Red Clone",
        description: "Red Quarks also multiply Quark gain with a slightly weakened formula.",
        cost: new Decimal(5000),
        unlocked() {return hasUpgrade('q', 23) && hasUpgrade('q', 24)}
      },

      32: {
        title: "Green Clone",
        description: "Green Quarks also multiply Quark gain with a slightly weakened formula.",
        cost: new Decimal(5000),
        unlocked() {return hasUpgrade('q', 23) && hasUpgrade('q', 24)}
      },

      33: {
        title: "i know if you looked for me i'd look you in the eye",
        description: "Quarks slightly boost the Proton multiplier.",
        cost: new Decimal(50000000),
        unlocked() {return hasAchievement('ach', 21)},
        effect() {
        if (hasUpgrade('q', 33)) return player.q.points.add(1).pow(0.01)
          else return 1
      },
      effectDisplay() { return format(player.q.points.add(1).pow(0.01))+"x" },
      },

      34: {
        title: "through it all",
        description: "Quarks slightly boost the Neutron multiplier.",
        cost: new Decimal(1e10),
        unlocked() {return hasUpgrade('q', 33)},
        effect() {
        if (hasUpgrade('q', 34)) return player.q.points.add(1).pow(0.019)
          else return 1
      },
      effectDisplay() { return format(player.q.points.add(1).pow(0.019))+"x" },
      },

      41: {
        title: "next to me, endlessly",
        description: "Unlock Cyan Quarks.",
        cost: new Decimal(1e21),
        unlocked() {return hasUpgrade('q', 34)},
      },

      42: {
        title: "don't you have everything?",
        description: "Unlock Magenta Quarks.",
        cost: new Decimal(1e22),
        unlocked() {return hasUpgrade('q', 41)},
      },

      43: {
        title: "still, it's not enough",
        description: "Unlock Yellow Quarks.",
        cost: new Decimal(1e23),
        unlocked() {return hasUpgrade('q', 42)},
      },

      44: {
        title: "i know now, i know it's not enough",
        description: "Unlock Secondary Protons.",
        cost: new Decimal(1e24),
        unlocked() {return hasUpgrade('q', 43)},
      }
    }
})
