addLayer("ach", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    startData() { return {
        oldachievementmulti: new Decimal(1.085),
        mourninglevel: new Decimal(0)
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
        if (player.sa.sandplanetslevels == 4 && hasUpgrade('g', 21)) player.ach.mourninglevel = new Decimal(1)
        if (player.sa.sandplanetslevels == 4 && hasUpgrade('wa', 23)) player.ach.mourninglevel = new Decimal(2)
        if (player.sa.sandplanetslevels == 4 && hasUpgrade('wa', 25)) player.ach.mourninglevel = new Decimal(8)
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
        31: {
            name: "further down into the depths of the ALMIGHTY... tree",
            tooltip: "Perform a Row 4 reset. Reward: Unlock the Upgrade Tree",
            done() {return player.sa.total.gte(1) || player.w.total.gte(1)}
        },
        32: {
            name: "like... im here too you know... :(",
            tooltip: "Refine Dirt without ever farming Carrots in this Row 4 run. Reward: 2x Dirt Gain",
            done() {return player.d.refineddirt.gte(1) && player.s.farmedcarrots.lte(0)}
        },
        33: {
            name: "you left your group behind. proud of yourself?",
            tooltip: "Refine Dirt without ever farming any crops this run. Reward: 2x Shorter Crop Farm Times",
            done() {return player.d.refineddirt.gte(1) && player.s.farmedwheat.lte(0) && player.s.farmedcarrots.lte(0) && player.s.farmedpotatoes.lte(0) && player.s.farmedbeetroot.lte(0) && player.s.farmedsugarcane.lte(0) && player.s.farmedcorn.lte(0) && player.s.farmedrice.lte(0) && player.s.farmedendive.lte(0) && player.s.farmedstrawberry.lte(0) && player.s.farmedmushroom.lte(0)}
        },
        34: {
            name: "refined^50",
            tooltip: "Obtain 50 Refined Dirt. Reward: You gain 100% of Seed gain every second.",
            done() {return player.d.refineddirtcurrency.gte(50)}
        },
        35: {
            name: "She",
            tooltip() {if (player.nu.annihilatednemesis.gte(1)) return "Anger Nemesis. Complication: All upgrades up to Row 3 are reset, and now cost more."
                else return "Anger Her. Complication: All upgrades up to Row 3 are reset, and now cost more."},
            done() {return player.sa.sandplanetslevels.gte(4)},
            onComplete() {player.points = new Decimal(0), player.d.points = new Decimal(0), player.g.points = new Decimal(0), player.r.points = new Decimal(0), player.m.points = new Decimal(0), player.f.points = new Decimal(0), player.s.points = new Decimal(0), player.t.points = new Decimal(0), player.d.upgrades = [], player.d.refineddirt = new Decimal(0), player.d.refineddirtcurrency = new Decimal(0), player.d.upgradeonesoftcap = new Decimal(1500), player.d.upgradeonesoftcapr = new Decimal(0), player.d.upgradeonesoftcapincrease = new Decimal(1500), player.d.upgradeonesoftcapcurrentincrease = new Decimal(0), player.d.refineddirtcost = new Decimal(1e28), player.g.plantedgrass = new Decimal(1), player.g.upgradeonesoftcapr = new Decimal(0), player.g.upgradeonesoftcap = new Decimal(1500), player.m.mossspread = new Decimal(1), player.m.upgradesixsoftcap = new Decimal(100), player.m.upgradesixsoftcapr = new Decimal(0), player.f.redflowers = new Decimal(1), player.f.orangeflowers = new Decimal(1), player.f.yellowflowers = new Decimal(1), player.f.greenflowers = new Decimal(1), player.f.cyanflowers = new Decimal(1), player.f.blueflowers = new Decimal(1), player.f.magentaflowers = new Decimal(1), player.f.purpleflowers = new Decimal(1), player.s.farmedwheat = new Decimal(0), player.s.farmedwheatcost = new Decimal(1), player.s.farmedcarrots = new Decimal(0), player.s.farmedcarrotscost = new Decimal(10), player.s.farmedpotatoes = new Decimal(0), player.s.farmedpotatoescost = new Decimal(25), player.s.farmedbeetroot = new Decimal(0), player.s.farmedbeetrootcost = new Decimal(100), player.s.farmedsugarcane = new Decimal(0), player.s.farmedsugarcanecost = new Decimal(250), player.s.farmedcorn = new Decimal(0), player.s.farmedcorncost = new Decimal(1000), player.s.farmedrice = new Decimal(0), player.s.farmedricecost = new Decimal(2000), player.s.farmedendive = new Decimal(0), player.s.farmedendivecost = new Decimal(10000), player.s.farmedstrawberry = new Decimal(0), player.s.farmedstrawberrycost = new Decimal(25000), player.s.farmedmushroom = new Decimal(0), player.s.farmedmushroomcost = new Decimal(1e9), player.s.farmedwheatmultiplier = new Decimal(1), player.s.farmedcarrotsmultiplier = new Decimal(1), player.s.farmedpotatoesmultiplier = new Decimal(1), player.s.farmedbeetrootmultiplier = new Decimal(1), player.s.farmedsugarcanemultiplier = new Decimal(1), player.s.farmedcornmultiplier = new Decimal(1), player.s.farmedricemultiplier = new Decimal(1), player.s.farmedendivemultiplier = new Decimal(1), player.s.farmedstrawberrymultiplier = new Decimal(1), player.s.farmedmushroommultiplier = new Decimal(1), player.t.disposabletrees = new Decimal(0), player.t.apples = new Decimal(0), player.t.pears = new Decimal(0), player.t.bananas = new Decimal(0), player.t.oranges = new Decimal(0), player.t.cherries = new Decimal(0), player.t.total = new Decimal(0), player.t.treesize = new Decimal(1), player.t.treebranches = new Decimal(1), player.t.treeroots = new Decimal(1), player.r.upgrades = [], player.d.achievementmulti = new Decimal(1.085), player.d.rockmultiplier = new Decimal(1.185), player.d.oldupgradesixmulti = new Decimal(1.0625), player.d.upgradesixmulti = new Decimal(1.0625), player.d.oldupgradefourmulti = new Decimal(1.175), player.d.upgradefourmulti = new Decimal(1.175), player.g.upgrades = [], player.m.upgrades = [] }
        },
        36: {
            name: "more powerful than the amount of atoms in the universe",
            tooltip: "Obtain 1.00e82 power.",
            done() {return player.points.gte(1e82)}
        },
        37: {
            name: "flowers blooming in antarctica",
            tooltip: "Obtain 1.00e50 Flowers.",
            done() {return player.f.points.gte(1e50)}
        },
        41: {
            name: "despite everything",
            tooltip: "Get all Refined Dirt upgrades.",
            done() {return hasUpgrade('d', 141) && hasUpgrade('d', 142) && hasUpgrade('d', 143) && hasUpgrade('d', 144) && hasUpgrade('d', 145)}
        },
        42: {
            name: "Nemesis",
            tooltip: "Annihilate Nemesis.",
            done() {return player.nu.annihilatednemesis.gte(1)}
        },
    }
})