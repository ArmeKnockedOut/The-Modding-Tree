addLayer("upgtree", {
    name: "upgradetree", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol() {if (player.nu.utdeactivated == 1 && player.nu.annihilatednemesis.lte(0)) return "X"
        else return "U"}, // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1,
//    startData() { return {
//    }},
    automate() {if (hasUpgrade('wa', 22)) buyUpgrade('upgtree', 11), buyUpgrade('upgtree', 12), buyUpgrade('upgtree', 13), buyUpgrade('upgtree', 14), buyUpgrade('upgtree', 15), buyUpgrade('upgtree', 16), buyUpgrade('upgtree', 17), buyUpgrade('upgtree', 18)},
    tabFormat: [
        ["display-text",
            function() { return 'Power up your world using upgrades provided by #!{$&!'},
            { "color": "White", "font-size": "20px" }],
        "blank",
        ["upgrade-tree", [ [11],[12,13],[14,15,16],[17,18],[21],[22,23],[24] ] ]
    ],
    color() { if (player.nu.utdeactivated == 1 && player.nu.annihilatednemesis.lte(0)) return "#bf8f8f"
         else return "#0094FF"}, // Can be a function that takes requirement increases into account
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have // Prestige currency exponent
    row: "side", // Row the layer is in on the tree (0 is the first row)
    tooltip() { if (player.nu.utdeactivated == 1 && player.nu.annihilatednemesis.lte(0)) return "X"
        else return "Upgrade Tree"},
    deactivated() {return player.nu.utdeactivated == 1 && player.nu.annihilatednemesis.lte(0)},
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    layerShown(){return (hasAchievement('ach', 31))},
    upgrades: {
        11: {
            title: "you are not welcome here.",
            description: "The Rock Requirement is lower based on power.",
            currencyLocation() {return player},
            currencyInternalName: "points",
            currencyDisplayName: "power",
            cost: new Decimal(1e12),
            effect() {
              return player.points.add(1).pow(0.02)
          },
          effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "turn back.",
            description: "You gain more Seeds based on power.",
            currencyLocation() {return player.g},
            currencyInternalName: "points",
            currencyDisplayName: "Grass Blades",
            cost: new Decimal(1e6),
            branches: ['upgtree', 11],
            unlocked() {return (hasUpgrade('upgtree', 11))},
            effect() {
              return player.points.add(1).pow(0.02165)
          },
          effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "please.",
            description: "Crop farm times are shorter based on log2 of log10 of Seeds.",
            currencyLocation() {return player.d},
            currencyInternalName: "points",
            currencyDisplayName: "Dirt",
            cost: new Decimal(1e20),
            branches: ['upgtree', 11],
            unlocked() {return (hasUpgrade('upgtree', 11))},
            effect() {
              return player.s.points.plus(1).log10().plus(1).log2().plus(1)
          },
          effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        14: {
            fullDisplay() {return '<h3>i cannot stop you myself</h3><br>\n\
            The Tree Requirement is lower based on Seeds.<br>\n\
            Currently: ' + format(upgradeEffect(this.layer, this.id)) +'x<br>\n\
            <br>\n\
            Requirement: 5 Refined Dirt'},
            canAfford() {return player.d.refineddirtcurrency.gte(5)},
            pay() {},
            branches: ['upgtree', 12],
            unlocked() {return (hasUpgrade('upgtree', 12))},
            effect() {
              return player.s.points.add(1).pow(0.018)
            },
        },
        15: {
            title: "she'll @~~,#,/&^3 us if we cant stop you",
            description: "The Tree Requirement is lower based on power.",
            currencyLocation() {return player},
            currencyInternalName: "points",
            currencyDisplayName: "power",
            cost: new Decimal(1e40),
            branches: ['upgtree', 12, 'upgtree', 13],
            unlocked() {return (hasUpgrade('upgtree', 12)) || (hasUpgrade('upgtree', 13))},
            effect() {
              return player.points.add(1).pow(0.00467)
          },
          effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        16: {
            title: "then at your weakest she'll get rid of you herself.",
            description: "The Tree Requirement is lower based on Moss.",
            currencyLocation() {return player.m},
            currencyInternalName: "points",
            currencyDisplayName: "Moss",
            cost: new Decimal(2e9),
            branches: ['upgtree', 13],
            unlocked() {return (hasUpgrade('upgtree', 13))},
            effect() {
              return player.m.points.add(1).pow(0.03)
          },
          effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        17: {
            title: "its for everyones good.",
            description: "You gain more Flowers based on power.",
            currencyLocation() {return player.d},
            currencyInternalName: "points",
            currencyDisplayName: "Dirt",
            cost: new Decimal(1e42),
            branches: ['upgtree', 15],
            unlocked() {return (hasUpgrade('upgtree', 15))},
            effect() {
              return player.points.add(1).pow(0.01265)
          },
          effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        18: {
            title: "please.",
            description: "You gain more Flowers based on Flowers.",
            currencyLocation() {return player.s},
            currencyInternalName: "points",
            currencyDisplayName: "Seeds",
            cost: new Decimal(1e16),
            branches: ['upgtree', 15],
            unlocked() {return (hasUpgrade('upgtree', 15))},
            effect() {
              return player.f.points.add(1).pow(0.01465)
          },
          effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "i... sigh- need a helping hand?",
            description: "You gain more Dirt based on Flowers.",
            currencyLocation() {return player.d},
            currencyInternalName: "points",
            currencyDisplayName: "Dirt",
            cost: new Decimal(1e97),
            branches: ['upgtree', 17, 'upgtree', 18],
            unlocked() {return hasUpgrade('upgtree', 17) && hasUpgrade('wa', 24)},
            effect() {
              return player.f.points.add(1).pow(0.07365)
          },
          effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "i'm not happy doing this.",
            description: "You gain more power based on Flowers.",
            currencyLocation() {return player.d},
            currencyInternalName: "points",
            currencyDisplayName: "Dirt",
            cost: new Decimal(1e103),
            branches: ['upgtree', 21],
            unlocked() {return hasUpgrade('upgtree', 21) && hasUpgrade('wa', 24)},
            effect() {
                return player.f.points.add(1).pow(0.14365)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        23: {
            title: "please repay the favor when she @~~,#,/&^3",
            description: "You gain more Dirt based on Seeds.",
            currencyLocation() {return player.d},
            currencyInternalName: "points",
            currencyDisplayName: "Dirt",
            cost: new Decimal(1e117),
            branches: ['upgtree', 21],
            unlocked() {return hasUpgrade('upgtree', 21) && hasUpgrade('wa', 24)},
            effect() {
                return player.s.points.add(1).pow(0.06365)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        24: {
            title: "im sorry goddess.",
            description: "Gain access to Nemesis's Universe.",
            currencyLocation() {return player.d},
            currencyInternalName: "points",
            currencyDisplayName: "Dirt",
            cost: new Decimal(1e123),
            branches: ['upgtree', 22, 'upgtree', 23],
            onPurchase() {player.nu.isunlocked = new Decimal(1), player.nu.utdeactivated = new Decimal(1), player.points = new Decimal(0), player.d.points = new Decimal(0), player.g.points = new Decimal(0), player.r.points = new Decimal(0), player.m.points = new Decimal(0), player.f.points = new Decimal(0), player.s.points = new Decimal(0), player.t.points = new Decimal(0), player.d.upgrades = [], player.d.refineddirt = new Decimal(0), player.d.refineddirtcurrency = new Decimal(0), player.d.upgradeonesoftcap = new Decimal(1500), player.d.upgradeonesoftcapr = new Decimal(0), player.d.upgradeonesoftcapincrease = new Decimal(1500), player.d.upgradeonesoftcapcurrentincrease = new Decimal(0), player.d.refineddirtcost = new Decimal(1e28), player.g.plantedgrass = new Decimal(1), player.g.upgradeonesoftcapr = new Decimal(0), player.g.upgradeonesoftcap = new Decimal(1500), player.m.mossspread = new Decimal(1), player.m.upgradesixsoftcap = new Decimal(100), player.m.upgradesixsoftcapr = new Decimal(0), player.f.redflowers = new Decimal(1), player.f.orangeflowers = new Decimal(1), player.f.yellowflowers = new Decimal(1), player.f.greenflowers = new Decimal(1), player.f.cyanflowers = new Decimal(1), player.f.blueflowers = new Decimal(1), player.f.magentaflowers = new Decimal(1), player.f.purpleflowers = new Decimal(1), player.s.farmedwheat = new Decimal(0), player.s.farmedwheatcost = new Decimal(1), player.s.farmedcarrots = new Decimal(0), player.s.farmedcarrotscost = new Decimal(10), player.s.farmedpotatoes = new Decimal(0), player.s.farmedpotatoescost = new Decimal(25), player.s.farmedbeetroot = new Decimal(0), player.s.farmedbeetrootcost = new Decimal(100), player.s.farmedsugarcane = new Decimal(0), player.s.farmedsugarcanecost = new Decimal(250), player.s.farmedcorn = new Decimal(0), player.s.farmedcorncost = new Decimal(1000), player.s.farmedrice = new Decimal(0), player.s.farmedricecost = new Decimal(2000), player.s.farmedendive = new Decimal(0), player.s.farmedendivecost = new Decimal(10000), player.s.farmedstrawberry = new Decimal(0), player.s.farmedstrawberrycost = new Decimal(25000), player.s.farmedmushroom = new Decimal(0), player.s.farmedmushroomcost = new Decimal(1e9), player.s.farmedwheatmultiplier = new Decimal(1), player.s.farmedcarrotsmultiplier = new Decimal(1), player.s.farmedpotatoesmultiplier = new Decimal(1), player.s.farmedbeetrootmultiplier = new Decimal(1), player.s.farmedsugarcanemultiplier = new Decimal(1), player.s.farmedcornmultiplier = new Decimal(1), player.s.farmedricemultiplier = new Decimal(1), player.s.farmedendivemultiplier = new Decimal(1), player.s.farmedstrawberrymultiplier = new Decimal(1), player.s.farmedmushroommultiplier = new Decimal(1), player.t.disposabletrees = new Decimal(0), player.t.apples = new Decimal(0), player.t.pears = new Decimal(0), player.t.bananas = new Decimal(0), player.t.oranges = new Decimal(0), player.t.cherries = new Decimal(0), player.t.total = new Decimal(0), player.t.treesize = new Decimal(1), player.t.treebranches = new Decimal(1), player.t.treeroots = new Decimal(1), player.r.upgrades = [], player.d.achievementmulti = new Decimal(1.085), player.d.rockmultiplier = new Decimal(1.185), player.d.oldupgradesixmulti = new Decimal(1.0625), player.d.upgradesixmulti = new Decimal(1.0625), player.d.oldupgradefourmulti = new Decimal(1.175), player.d.upgradefourmulti = new Decimal(1.175), player.g.upgrades = [], player.m.upgrades = [], player.m.milestones = [], player.g.milestones = [], player.m.total = new Decimal(0), player.g.total = new Decimal(0). player.upgtree.upgrades = [] },
            unlocked() {return hasUpgrade('upgtree', 23) && hasUpgrade('wa', 24) && player.nu.annihilatednemesis.lte(0)},
        },
    }
})