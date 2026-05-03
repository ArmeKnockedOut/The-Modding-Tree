addLayer("ach", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    startData() { return {
        points: new Decimal(0),
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
            tooltip: "Get your first Electron. Reward: Achievement Multiplier 1.067x->1.15x.",
            done() {return player.e.points.gte(1)},
            onComplete() {return player.ach.achievementmulti = new Decimal(1.15)}
             
        },
        24: {
            name: "where's my 50% stronger galaxies upgrade :(",
            tooltip: "Reach 5.00e11 power. Reward: You gain 50% more power.",
            done() {return player.points.gte(5e11)}
             
        },
        25: {
            name: "wait... that's not a thing...",
            tooltip: "Get a Cyan Quark. Reward: You passively gain 0.1% of each primary-colored Quark based on your Quarks per second, multiplied by the Neutron multipliers.",
            done() {return player.q.cyanquarks.gte(1)}
             
        },
        26: {
            name: "gayming 😎",
            tooltip: "Get at least one of each secondary Quark, Proton, And Neutron. Reward: You gain 25% more Quarks and Electrons.",
            done() {return player.q.cyanquarks.gte(1) && player.q.magentaquarks.gte(1) && player.q.yellowquarks.gte(1) && player.q.secondaryprotons.gte(1) && player.q.secondaryneutrons.gte(1)}
             
        },
        27: {
            name: "27 is just a cool number. also the row/column num of this achievement lmao",
            tooltip: "Reach 1.00e27 Quarks.",
            done() {return player.q.points.gte(1e27)}
             
        },
        28: {
            name: "that's one fat baby",
            tooltip: "Get your first Atom.",
            done() {return player.a.points.gte(1)}
             
        },
        31: {
            name: "honestly too easy",
            tooltip: "Get your first Atom Challenge 1 Completion.",
            done() {return hasChallenge('a', 11)}
             
        },
        32: {
            name: "give me a REAL challenge...",
            tooltip: "Get your first Atom Challenge 2 Completion.",
            done() {return hasChallenge('a', 12)}
             
        },
        33: {
            name: "you're holding back, come on...",
            tooltip: "Get your first Atom Challenge 3 Completion.",
            done() {return hasChallenge('a', 13)}
             
        },
        34: {
            name: "light work, no reaction",
            tooltip: "Get your second Atom Challenge 1 Completion.",
            done() {return challengeCompletions('a', 11) == 2}
             
        },
        35: {
            name: "a toddler could do this",
            tooltip: "Get your second Atom Challenge 2 Completion.",
            done() {return challengeCompletions('a', 12) == 2}
             
        },
        36: {
            name: "the wall of time",
            tooltip: "Get your second Atom Challenge 3 Completion. Reward: 4x Quark gain until 1.00e70 Quarks.",
            done() {return challengeCompletions('a', 13) == 2}
             
        },
        37: {
            name: "Atom^2",
            tooltip: "Reach 1.00e60 Quarks.",
            done() {return player.q.points.gte(1e60)}
             
        },
        38: {
            name: "guys the achievement before me is an odd one out",
            tooltip: "Reach 15 Total Atom Challenge Completions. Reward: Achievement Multiplier 1.15x->1.175x.",
            done() {return player.a.totalatomchallengecompletions.gte(15)},
            onComplete() {return player.ach.achievementmulti = new Decimal(1.175)}
        },
        41: {
            name: "uncharted territory",
            tooltip: "Get your first Tertiary Proton.",
            done() {return player.q.tertiaryprotons.gte(1)},
        },
        42: {
            name: "not more than my two cents 😎",
            tooltip: "Reach 1.11e111 Quarks.",
            done() {return player.q.points.gte(1.11e111)},
        },
        43: {
            name: "the answer to everything",
            tooltip: "Reach 42 Total Atom Challenge Completions. Reward: Unlock Tertiary Neutrons, and more Atom Upgrades.",
            done() {return player.a.totalatomchallengecompletions.gte(42)},
        },
        44: {
            name: "how many energy drinks did you get dude...",
            tooltip: "Have at least 1.00e100 of every Charge.",
            done() {return player.e.charge10.gte(1e100)},
        },
        45: {
            name: "thanks",
            tooltip: "Reach a 2.5x Tertiary Proton multiplier.",
            done() {return player.q.tertiaryprotonmultiplier.gte(2.5)},
        },
        46: {
            name: "we love inside knowledge",
            tooltip: "Reach +136,136 power gain addition from Red Quarks.",
            done() {return player.q.redquarkspoweraddition.gte(136136)},
        },
        47: {
            name: "i don't need ener-... zzzzz",
            tooltip: "Reach 9.99e99 Quarks in Atom Challenge 1.",
            done() {return inChallenge('a', 11) && player.q.points.gte(9.99e99)},
        },
        48: {
            name: "in which order did i do them in again?",
            tooltip: "Get all 50 Atom Challenge Completions.",
            done() {return player.a.totalatomchallengecompletions.gte(50)},
        },
    }
})