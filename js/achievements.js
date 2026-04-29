addLayer("ach", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    startData() { return {
        achievementmulti: new Decimal(1.067),
    }},
    tabFormat: [
        ["display-text",
            function() { return 'Every achievement gives a ' + format(player.ach.achievementmulti, 3) + 'x multiplicative boost to power gain.'},
            { "color": "gray", "font-size": "15px" }],
        "blank",
        ["display-text",
            function() { return 'Your achievements multiply power gain by ' + format(tmp.ach.effect) + 'x'},
            { "color": "white", "font-size": "16.5px" }],
        "blank",
        "achievements"
    ],
    effect(){
        return Decimal.pow(player.ach.achievementmulti, player[this.layer].achievements.length)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
    color: "#058400", // Can be a function that takes requirement increases into account
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have // Prestige currency exponent
    row: "side", // Row the layer is in on the tree (0 is the first row)
    tooltip: "Achievements",
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    layerShown(){return true},
    achievements: {
        11: {
            name: "Everything has to start somewhere.",
            tooltip: "Obtain your first Quark. Reward: Begin generating 0.0001 power per second.",
            done() {return player.q.points.gte(1)}
             
        },
        12: {
            name: "Dissociative Identity Disorder",
            tooltip: "Have at least one of each colored Quark.",
            done() {return player.q.redquarks.gte(1) && player.q.greenquarks.gte(1) && player.q.bluequarks.gte(1)}
             
        },
        13: {
            name: "Red Room",
            tooltip: "Have at least 25 Red Quarks.",
            done() {return player.q.redquarks.gte(25)}
             
        },
        14: {
            name: "Ego Trip",
            tooltip: "Have at least 25 Green Quarks.",
            done() {return player.q.greenquarks.gte(25)}
             
        },
        15: {
            name: "Mitosis",
            tooltip: "Have at least 25 Blue Quarks.",
            done() {return player.q.bluequarks.gte(25)}
             
        },
        16: {
            name: "Integer",
            tooltip: "Reach 1 power. Reward: Power gain is increased by 50% if you have more than 1 power.",
            done() {return player.points.gte(1)}
             
        },
        17: {
            name: "A dozen dozen dozens",
            tooltip: "Have at least 1,728 Quarks at once.",
            done() {return player.q.points.gte(1728)}
             
        },
        18: {
            name: "Only a few",
            tooltip: "Have a total of 10,000 colored Quarks. Reward: Unlocks Protons and Neutrons.",
            done() {return player.q.redquarks.plus(player.q.greenquarks).plus(player.q.bluequarks).gte(10000)}
             
        },
        21: {
            name: "UNLIMITED POWER!!!",
            tooltip: "Reach 10,000 power. Reward: Unlock Electrons",
            done() {return player.points.gte(10000)}
             
        },
        22: {
            name: "boom",
            tooltip: "Reach 1.00e11 Quarks. Reward: Converting Quarks now only takes away 50%, but it still adds as if you converted 100%.",
            done() {return player.q.points.gte(1e11)}
             
        },
        23: {
            name: "Negativity",
            tooltip: "Get your first electron.",
            done() {return player.e.points.gte(1)}
             
        },
        24: {
            name: "where's my 50% stronger galaxies upgrade :(",
            tooltip: "Reach 5.00e11 power.",
            done() {return player.points.gte(5e11)}
             
        },
        25: {
            name: "wait... that's not a thing...",
            tooltip: "Get a Cyan Quark. Reward: You passively gain 0.1% of each primary-colored Quark based on your Quarks per second, multiplied by the Neutron multiplier.",
            done() {return player.q.cyanquarks.gte(1)}
             
        },
        26: {
            name: "gayming 😎",
            tooltip: "Get at least one of each secondary Quark, Proton, And Neutron.",
            done() {return player.q.cyanquarks.gte(1) && player.q.magentaquarks.gte(1) && player.q.yellowquarks.gte(1) && player.q.secondaryprotons.gte(1) && player.q.secondaryneutrons.gte(1)}
             
        },
        27: {
            name: "27 is just a cool number. also the row/column num of this achievement lmao",
            tooltip: "Reach 1.00e27 Quarks.",
            done() {return player.q.points.gte(1e27)}
             
        },
    }
})