addLayer("ach", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Ach", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    startData() { return {
        oldachievementmulti: new Decimal(1.085),
    }},
    tabFormat: [
        ["display-text",
            function() { return 'Every achievement gives a ' + format(player.d.achievementmulti, 3) + 'x multiplicative boost to power gain.'},
            { "color": "gray", "font-size": "15px" }],
        "blank",
        ["display-text",
            function() { return 'Your achievements multiply power gain by ' + format(tmp.ach.effect) + 'x'},
            { "color": "white", "font-size": "16.5px" }],
        "blank",
        "achievements"
    ],
    effect(){
        return Decimal.pow(player.d.achievementmulti, player[this.layer].achievements.length)
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
        if (hasUpgrade('d', 101)) player.d.achievementmulti = player.ach.oldachievementmulti.plus(0.115)
        if (hasUpgrade('d', 111)) player.d.achievementmulti = player.ach.oldachievementmulti.plus(0.215)
        if (hasUpgrade('d', 121)) player.d.achievementmulti = player.ach.oldachievementmulti.plus(0.315)
        if (hasUpgrade('d', 131)) player.d.achievementmulti = player.ach.oldachievementmulti.plus(0.415)
        if (hasUpgrade('d', 141)) player.d.achievementmulti = player.ach.oldachievementmulti.plus(0.515)
        return mult
    },
    layerShown(){return true},
    achievements: {
        11: {
            name: "i'm a loser again D:",
            tooltip: "Perform your first Dirt reset.",
            done() {return player.d.points.gte(1)},
            image() {if (hasAchievement('ach', 11)) return "imalosers.png"
            else return "imalosersincomplete.png"}
             
        },
        12: {
            name: "but now I'm cool and you can't touch me!!",
            tooltip: "Obtain 100 power.",
            done() {return player.points.gte(100)},
            image() {if (hasAchievement('ach', 12)) return "imcooler.png"
            else return "imcoolerincomplete.png"}
        },
        13: {
            name: "professional gardener",
            tooltip: "Perform your first Grass reset.",
            done() {return player.g.points.gte(1)},
            image() {if (hasAchievement('ach', 13)) return "professionalgardener.png"
            else return "professionalgardenerincomplete.png"}
        },
        14: {
            name: "the first weed growing in the clearing",
            tooltip: "Plant any amount of grass for the first time.",
            done() {return player.g.plantedgrass.gte(2)},
            image() {if (hasAchievement('ach', 14)) return "theweed.png"
            else return "theweedincomplete.png"}
        },
        15: {
            name: "soon it'll be a mountain",
            tooltip: "Perform your first Rock reset.",
            done() {return player.r.points.gte(1)}
        },
        16: {
            name: "Jeff Bezos 2",
            tooltip: "Obtain 1.00e10 power.",
            done() {return player.points.gte(1e10)}
        },
        17: {
            name: "do you ever wonder why we're going DOWN the tree?",
            tooltip: "Perform a Row 3 reset. Reward: 1.1x power gain",
            done() {return player.m.total.gte(1)}
        },
        21: {
            name: "we are number one!!",
            tooltip: "Have at least one Moss, one Flower, and one Seed at once.",
            done() {return player.m.points.gte(1) && player.f.points.gte(1) && player.s.points.gte(1)}
        },
        22: {
            name: "thats alot of progress bars",
            tooltip: "Obtain 1,000 Seeds. Reward: 1.5x Flower & Seed gain",
            done() {return player.s.points.gte(1000)}
        },
        23: {
            name: "10 karat gold",
            tooltip: "Farm 10 Carrots. Reward: Unlock 3 more crops.",
            done() {return player.s.farmedcarrots.gte(10)}
        },
        24: {
            name: "you forgot to cook the rice",
            tooltip: "Have at least five of each crop except Wheat & Rice. Reward: You gain 1% of Colored Flowers per second, and every crop except for wheat takes 2x less time to farm.",
            done() {return player.s.farmedcarrots.gte(5) && player.s.farmedpotatoes.gte(5) && player.s.farmedbeetroot.gte(5) && player.s.farmedsugarcane.gte(5) && player.s.farmedcorn.gte(5) }
        },
        25: {
            name: "how does that work again?",
            tooltip: "Refine Dirt for the first time. Reward: Dirt Upgrade One Softcap Power 0.125 -> 0.15",
            done() {return player.d.refineddirt.gte(1) }
        },
        26: {
            name: "trees in a tree",
            tooltip: "Perform your first Tree reset.",
            done() {return player.t.total.gte(1) }
        },
        27: {
            name: "healthy",
            tooltip: "Obtain 250 of each Fruit. Reward: You gain 2x more power, Dirt, and Grass Blades.",
            done() {return player.t.apples.gte(250) && player.t.pears.gte(250) && player.t.bananas.gte(250) && player.t.oranges.gte(250) && player.t.cherries.gte(250)}
        },
    }
})