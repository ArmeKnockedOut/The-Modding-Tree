addLayer("nu", {
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2,
    startData() { return {
        isunlocked: new Decimal(0),
        utdeactivated: new Decimal(0),
        timer: new Decimal(0),
        timermax: new Decimal(0),
        destroyedplanets: new Decimal(0),
        destroyedstars: new Decimal(0),
        destroyedgalaxies: new Decimal(0),
        destroyedgalaxyclusters: new Decimal(0),
        pride: new Decimal(0),
        fsdeactivated: new Decimal(0),
        annihilatednemesis: new Decimal(0)
    }},
    tabFormat: [
        ["display-text",
            function() { if (player.nu.destroyedgalaxyclusters.gte(1)) return 'Nemesis has <h2 style="color: red">0</h2> power'
                else if (player.nu.destroyedgalaxies.gte(1)) return 'Nemesis has <h2 style="color: red">1.00e103</h2> power'
                else if (player.nu.destroyedstars.gte(1)) return 'Nemesis has <h2 style="color: red">1.79e148</h2> power'
                else if (player.nu.destroyedplanets.gte(1)) return 'Nemesis has <h2 style="color: red">1.79e236</h2> power'
                else return 'Nemesis has <h2 style="color: red">1.79e308</h2> power'},
            { "color": "White", "font-size": "20px", }],
        ["blank", "50px"],
        ["display-text",
            function() { if (player.nu.annihilatednemesis.gte(1)) return ''
                else if (player.nu.timer.gte(76)) return 'and i hate you so much for it.'
                else if (player.nu.timer.gte(73)) return 'youll destroy everything for your own benefit.'
                else if (player.nu.timer.gte(71)) return 'or helped you...'
                else if (player.nu.timer.gte(69)) return 'even if they did nothing to you...'
                else if (player.nu.timer.gte(66)) return 'i know youll destroy others too.'
                else if (player.nu.timer.gte(63)) return 'i know youll keep striving for more.'
                else if (player.nu.timer.gte(60)) return 'and dont say you only did this because of my threat to you.'
                else if (player.nu.timer.gte(57)) return 'now youre proud of yourself. proud of destroying my lifes work.'
                else if (player.nu.timer.gte(53)) return 'i shouldnt have trusted them, shouldve ended you myself right as u went farther than supposed to'
                else if (player.nu.timer.gte(50.1)) return 'sooooooooooooooo much.'
                else if (player.nu.timer.gte(50.05)) return 'sooooooooooooooo much'
                else if (player.nu.timer.gte(50)) return 'sooooooooooooooo muc'
                else if (player.nu.timer.gte(49.95)) return 'sooooooooooooooo mu'
                else if (player.nu.timer.gte(49.9)) return 'sooooooooooooooo m'
                else if (player.nu.timer.gte(49.85)) return 'sooooooooooooooo '
                else if (player.nu.timer.gte(49.8)) return 'sooooooooooooooo'
                else if (player.nu.timer.gte(49.75)) return 'soooooooooooooo'
                else if (player.nu.timer.gte(49.7)) return 'sooooooooooooo'
                else if (player.nu.timer.gte(49.65)) return 'soooooooooooo'
                else if (player.nu.timer.gte(49.6)) return 'sooooooooooo'
                else if (player.nu.timer.gte(49.55)) return 'soooooooooo'
                else if (player.nu.timer.gte(49.5)) return 'sooooooooo'
                else if (player.nu.timer.gte(49.45)) return 'soooooooo'
                else if (player.nu.timer.gte(49.4)) return 'sooooooo'
                else if (player.nu.timer.gte(49.35)) return 'soooooo'
                else if (player.nu.timer.gte(49.3)) return 'sooooo'
                else if (player.nu.timer.gte(49.25)) return 'soooo'
                else if (player.nu.timer.gte(49.2)) return 'soooo'
                else if (player.nu.timer.gte(49.15)) return 'sooo'
                else if (player.nu.timer.gte(49.1)) return 'soo'
                else if (player.nu.timer.gte(49.05)) return 'so'
                else if (player.nu.timer.gte(49)) return 's'
                else if (player.nu.timer.gte(46.45)) return 'i hate you'
                else if (player.nu.timer.gte(46.4)) return 'i hate yo'
                else if (player.nu.timer.gte(46.35)) return 'i hate y'
                else if (player.nu.timer.gte(46.3)) return 'i hate '
                else if (player.nu.timer.gte(46.25)) return 'i hate'
                else if (player.nu.timer.gte(46.2)) return 'i hat'
                else if (player.nu.timer.gte(46.15)) return 'i ha'
                else if (player.nu.timer.gte(46.1)) return 'i h'
                else if (player.nu.timer.gte(46.05)) return 'i '
                else if (player.nu.timer.gte(46)) return 'i'
                else if (player.nu.timer.gte(43.05)) return '...'
                else if (player.nu.timer.gte(42.95)) return 'LETS SEE HOW FAR YOULL GET WITHOUT THOSE'
                else if (player.nu.timer.gte(40.05)) return 'I WONT LET YOU DESTROY MY LIFES WORK'
                else if (player.nu.timer.gte(39.95)) return 'theres no going back now. and the worst part is you dont even want to.'
                else if (player.nu.timer.gte(37)) return 'if you werent so selfish and sticked to your commanded rules this wouldnt have happened.'
                else if (player.nu.timer.gte(35)) return 'sure, im trying to get rid of alot of your power, but thats all your fault.'
                else if (player.nu.timer.gte(32)) return 'and NOW YOU break into MY universe, and start destroying it all for your own benefit?'
                else if (player.nu.timer.gte(29)) return 'but you just keep striving for more anyway.'
                else if (player.nu.timer.gte(27)) return 'you were also commanded a limit.'
                else if (player.nu.timer.gte(24)) return 'we all stop at some point and theres harmony in the universe.'
                else if (player.nu.timer.gte(22)) return 'always striving for more power.'
                else if (player.nu.timer.gte(20.05)) return 'you PEST...'
                else if (player.nu.timer.gte(19.95)) return 'just stop.'
                else if (player.nu.timer.gte(15.5)) return 'of course they want to help the person whos not threatening annihilation more than the person that is.'
                else if (player.nu.timer.gte(13)) return 'i see theyre more inclined to help DESPITE my warnings.'
                else if (player.nu.timer.gte(10)) return 'That little brat..'
                else if (player.nu.timer.gte(7)) return '...'
                else if (player.nu.timer.gte(4)) return 'HOW are you here'
                else if (player.nu.timer.gte(2)) return 'Why are you here.'
                else if (player.nu.timer.gte(0.05)) return 'What.'
        else return ""},
            { "color": "White", "font-size": "20px"}],
            ["blank", "25px"],
            ["clickable", 15],
            ["blank", "25px"],
        ["display-text",
            function() { if (player.nu.destroyedgalaxyclusters.gte(1)) return 'Galaxy Clusters:<br>\n\
            0'
                else return 'Galaxy Clusters:<br>\n\
             2.58e9'},
            { "color": "White", "font-size": "25px", "font-family": "Monospace" }],
        ["blank", "15px"],
        ["clickable", 14],
        ["blank", "85px"],
        ["display-text",
            function() { if (player.nu.destroyedgalaxies.gte(1)) return 'Galaxies:<br>\n\
            0'
                else return 'Galaxies:<br>\n\
             2.03e12'},
            { "color": "White", "font-size": "25px", "font-family": "Monospace" }],
        ["blank", "15px"],
        ["clickable", 13],
        ["blank", "85px"],
        [ "row", [
        ["display-text", function() { if (player.nu.destroyedstars.gte(1)) return 'Stars:<br>\n\
        0'
            else return 'Stars:<br>\n\
        5.76e23'}, { "color": "White", "font-size": "25px", "font-family": "Monospace" }], ["blank", ["200px"]], ["display-text", function() {if (player.nu.destroyedplanets.gte(1)) return 'Planets:<br>\n\
        0'
            else return 'Planets:<br>\n\
        1.21e27'}, { "color": "White", "font-size": "25px", "font-family": "Monospace" }],
    ]],
    ["blank", "15px"],
    [ "row", [
        ["clickable", 12], ["blank", ["195px"]], ["clickable", 11]
    ]],
    ],
    color() {if (player.nu.annihilatednemesis.gte(1)) return "#913939"
        else return "#D82222"}, // Can be a function that takes requirement increases into account
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have // Prestige currency exponent
    row: "side", // Row the layer is in on the tree (0 is the first row)
    tooltip: "Nemesis's Universe",
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        player.nu.timer = player.nu.timer.plus(0.05)
        if (player.nu.timer.gte(player.nu.timermax)) player.nu.timer = player.nu.timermax
        return mult
    },
    layerShown(){return player.nu.isunlocked.gte(1)},
    upgrades: {
    },
    clickables: {
        11: {
            display() {return '<h2>Destroy</h2> Requirement: 1.00e72 power'},
            canClick() {return player.points.gte(1e72) && player.nu.destroyedplanets.lte(0)},
            onClick() {return player.nu.destroyedplanets = new Decimal(1), player.nu.timermax = new Decimal(20), player.nu.pride = new Decimal(1)}
        },
        12: {
            display() {if (player.nu.destroyedplanets.gte(1)) return '<h2>Destroy</h2> Requirement: 1.00e87 power'
        else return '<h2>Destroy</h2> Requirement: ???'},
            canClick() {return player.points.gte(1e87) && player.nu.destroyedstars.lte(0) && player.nu.destroyedplanets.gte(1)},
            onClick() {return player.nu.destroyedstars = new Decimal(1), player.nu.timermax = new Decimal(40), player.nu.pride = new Decimal(2)}
        },
        13: {
            display() {if (player.nu.destroyedstars.gte(1)) return '<h2>Destroy</h2> Requirement: 1.00e98 power'
            else return '<h2>Destroy</h2> Requirement: ???'},
            canClick() {return player.points.gte(1e98) && player.nu.destroyedgalaxies.lte(0) && player.nu.destroyedstars.gte(1)},
            onClick() {return player.nu.fsdeactivated = new Decimal(1), player.nu.destroyedgalaxies = new Decimal(1), player.nu.timermax = new Decimal(43), player.nu.pride = new Decimal(3), player.points = new Decimal(0), player.d.points = new Decimal(0), player.g.points = new Decimal(0), player.r.points = new Decimal(0), player.m.points = new Decimal(0), player.f.points = new Decimal(0), player.s.points = new Decimal(0), player.t.points = new Decimal(0), player.d.upgrades = [], player.d.refineddirt = new Decimal(0), player.d.refineddirtcurrency = new Decimal(0), player.d.upgradeonesoftcap = new Decimal(1500), player.d.upgradeonesoftcapr = new Decimal(0), player.d.upgradeonesoftcapincrease = new Decimal(1500), player.d.upgradeonesoftcapcurrentincrease = new Decimal(0), player.d.refineddirtcost = new Decimal(1e28), player.g.plantedgrass = new Decimal(1), player.g.upgradeonesoftcapr = new Decimal(0), player.g.upgradeonesoftcap = new Decimal(1500), player.m.mossspread = new Decimal(1), player.m.upgradesixsoftcap = new Decimal(100), player.m.upgradesixsoftcapr = new Decimal(0), player.f.redflowers = new Decimal(1), player.f.orangeflowers = new Decimal(1), player.f.yellowflowers = new Decimal(1), player.f.greenflowers = new Decimal(1), player.f.cyanflowers = new Decimal(1), player.f.blueflowers = new Decimal(1), player.f.magentaflowers = new Decimal(1), player.f.purpleflowers = new Decimal(1), player.s.farmedwheat = new Decimal(0), player.s.farmedwheatcost = new Decimal(1), player.s.farmedcarrots = new Decimal(0), player.s.farmedcarrotscost = new Decimal(10), player.s.farmedpotatoes = new Decimal(0), player.s.farmedpotatoescost = new Decimal(25), player.s.farmedbeetroot = new Decimal(0), player.s.farmedbeetrootcost = new Decimal(100), player.s.farmedsugarcane = new Decimal(0), player.s.farmedsugarcanecost = new Decimal(250), player.s.farmedcorn = new Decimal(0), player.s.farmedcorncost = new Decimal(1000), player.s.farmedrice = new Decimal(0), player.s.farmedricecost = new Decimal(2000), player.s.farmedendive = new Decimal(0), player.s.farmedendivecost = new Decimal(10000), player.s.farmedstrawberry = new Decimal(0), player.s.farmedstrawberrycost = new Decimal(25000), player.s.farmedmushroom = new Decimal(0), player.s.farmedmushroomcost = new Decimal(1e9), player.s.farmedwheatexponent = new Decimal(1), player.s.farmedcarrotsmultiplier = new Decimal(1), player.s.farmedpotatoesmultiplier = new Decimal(1), player.s.farmedbeetrootmultiplier = new Decimal(1), player.s.farmedsugarcanemultiplier = new Decimal(1), player.s.farmedcornmultiplier = new Decimal(1), player.s.farmedricemultiplier = new Decimal(1), player.s.farmedendivemultiplier = new Decimal(1), player.s.farmedstrawberrymultiplier = new Decimal(1), player.s.farmedmushroommultiplier = new Decimal(1), player.t.disposabletrees = new Decimal(0), player.t.apples = new Decimal(0), player.t.pears = new Decimal(0), player.t.bananas = new Decimal(0), player.t.oranges = new Decimal(0), player.t.cherries = new Decimal(0), player.t.total = new Decimal(0), player.t.treesize = new Decimal(1), player.t.treebranches = new Decimal(1), player.t.treeroots = new Decimal(1), player.r.upgrades = [], player.d.achievementmulti = new Decimal(1.085), player.d.rockmultiplier = new Decimal(1.185), player.d.oldupgradesixmulti = new Decimal(1.0625), player.d.upgradesixmulti = new Decimal(1.0625), player.d.oldupgradefourmulti = new Decimal(1.175), player.d.upgradefourmulti = new Decimal(1.175), player.g.upgrades = [], player.m.upgrades = [], player.m.milestones = [], player.g.milestones = [], player.m.total = new Decimal(0), player.g.total = new Decimal(0). player.upgtree.upgrades = [], player.f.total = new Decimal(0), player.f.milestones = [], player.s.total = new Decimal(0), player.s.milestones = [] },
        },
        14: {
            display() {if (player.nu.destroyedgalaxies.gte(1)) return '<h2>Destroy</h2> Requirement: 1.00e103 power'
        else return '<h2>Destroy</h2> Requirement: ???'},
            canClick() {return player.points.gte(1e103) && player.nu.destroyedgalaxyclusters.lte(0) && player.nu.destroyedgalaxies.gte(1)},
            onClick() {return player.nu.destroyedgalaxyclusters = new Decimal(1), player.nu.timermax = new Decimal(80), player.nu.pride = new Decimal(4)}
        },
        15: {
            display() {if (player.nu.annihilatednemesis.gte(1)) return '<h2>Nemesis Annihilated. END OF GAME!!!</h2>'
                else return '<h2>Annihilate Nemesis</h2>'},
            canClick() {return player.nu.annihilatednemesis.lte(0)},
            onClick() {return player.nu.utdeactivated = new Decimal(0), player.nu.fsdeactivated = new Decimal(0), player.nu.annihilatednemesis = new Decimal(1), player.nu.pride = new Decimal(5), player.points = new Decimal(0), player.d.points = new Decimal(0), player.g.points = new Decimal(0), player.r.points = new Decimal(0), player.m.points = new Decimal(0), player.f.points = new Decimal(0), player.s.points = new Decimal(0), player.t.points = new Decimal(0), player.d.upgrades = [], player.d.refineddirt = new Decimal(0), player.d.refineddirtcurrency = new Decimal(0), player.d.upgradeonesoftcap = new Decimal(1500), player.d.upgradeonesoftcapr = new Decimal(0), player.d.upgradeonesoftcapincrease = new Decimal(1500), player.d.upgradeonesoftcapcurrentincrease = new Decimal(0), player.d.refineddirtcost = new Decimal(1e28), player.g.plantedgrass = new Decimal(1), player.g.upgradeonesoftcapr = new Decimal(0), player.g.upgradeonesoftcap = new Decimal(1500), player.m.mossspread = new Decimal(1), player.m.upgradesixsoftcap = new Decimal(100), player.m.upgradesixsoftcapr = new Decimal(0), player.f.redflowers = new Decimal(1), player.f.orangeflowers = new Decimal(1), player.f.yellowflowers = new Decimal(1), player.f.greenflowers = new Decimal(1), player.f.cyanflowers = new Decimal(1), player.f.blueflowers = new Decimal(1), player.f.magentaflowers = new Decimal(1), player.f.purpleflowers = new Decimal(1), player.s.farmedwheat = new Decimal(0), player.s.farmedwheatcost = new Decimal(1), player.s.farmedcarrots = new Decimal(0), player.s.farmedcarrotscost = new Decimal(10), player.s.farmedpotatoes = new Decimal(0), player.s.farmedpotatoescost = new Decimal(25), player.s.farmedbeetroot = new Decimal(0), player.s.farmedbeetrootcost = new Decimal(100), player.s.farmedsugarcane = new Decimal(0), player.s.farmedsugarcanecost = new Decimal(250), player.s.farmedcorn = new Decimal(0), player.s.farmedcorncost = new Decimal(1000), player.s.farmedrice = new Decimal(0), player.s.farmedricecost = new Decimal(2000), player.s.farmedendive = new Decimal(0), player.s.farmedendivecost = new Decimal(10000), player.s.farmedstrawberry = new Decimal(0), player.s.farmedstrawberrycost = new Decimal(25000), player.s.farmedmushroom = new Decimal(0), player.s.farmedmushroomcost = new Decimal(1e9), player.s.farmedwheatexponent = new Decimal(1), player.s.farmedcarrotsmultiplier = new Decimal(1), player.s.farmedpotatoesmultiplier = new Decimal(1), player.s.farmedbeetrootmultiplier = new Decimal(1), player.s.farmedsugarcanemultiplier = new Decimal(1), player.s.farmedcornmultiplier = new Decimal(1), player.s.farmedricemultiplier = new Decimal(1), player.s.farmedendivemultiplier = new Decimal(1), player.s.farmedstrawberrymultiplier = new Decimal(1), player.s.farmedmushroommultiplier = new Decimal(1), player.t.disposabletrees = new Decimal(0), player.t.apples = new Decimal(0), player.t.pears = new Decimal(0), player.t.bananas = new Decimal(0), player.t.oranges = new Decimal(0), player.t.cherries = new Decimal(0), player.t.total = new Decimal(0), player.t.treesize = new Decimal(1), player.t.treebranches = new Decimal(1), player.t.treeroots = new Decimal(1), player.r.upgrades = [], player.d.achievementmulti = new Decimal(1.085), player.d.rockmultiplier = new Decimal(1.185), player.d.oldupgradesixmulti = new Decimal(1.0625), player.d.upgradesixmulti = new Decimal(1.0625), player.d.oldupgradefourmulti = new Decimal(1.175), player.d.upgradefourmulti = new Decimal(1.175), player.g.upgrades = [], player.m.upgrades = [], player.m.milestones = [], player.g.milestones = [], player.m.total = new Decimal(0), player.g.total = new Decimal(0). player.upgtree.upgrades = [], player.f.total = new Decimal(0), player.f.milestones = [], player.s.total = new Decimal(0), player.s.milestones = []},
            unlocked() {return player.nu.timer.gte(79.95)}
        }
    }
})

//1e99