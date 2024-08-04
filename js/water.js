addLayer("wa", {
    name: "water", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Wa", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    branches: true,
  //  passiveGeneration() {
  //      if (hasUpgrade('c', 15)) return 100
  //      else return 0},
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        chara: new Decimal(0),
        potamogeton: new Decimal(0),
        myriophyllum_spicatum: new Decimal(0),
        utricularia_purpurea: new Decimal(0),
        hydrilla_verticillate: new Decimal(0),
        egeria_densa: new Decimal(0),
        elodea_canadensis: new Decimal(0),
        ceratophyllum_demersum: new Decimal(0)

    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text",
            function() { if (hasUpgrade('wa', 23)) return 'You passively generate Chara at a rate of 10%, Potamogeton at a rate of 8%, Myriophyllum Spicatum at a rate of 7%, and Utricularia Purpurea & Hydrilla Verticillate & Egeria Densa & Elodea Canadensis & Ceratophyllum Demersum at a rate of 5% of its own current amount per second. You cannot generate more of any underwater plant than ur total Water. Chara boosts power and Water gain based on log5(Chara^10). Potamogeton boosts Dirt and Water gain based on log6(Potamogeton^9). Myriophyllum Spicatum boosts Grass Blade and Water gain based on log7(MS^8). Utricularia Purpurea boosts Moss and Water gain based on log8(UP^7). Hydrilla Verticillate boosts Flower and Water gain by log9(HV^6). Egeria Densa boosts Seed and Water gain by log10(ED^5). Elodea Canadensis boosts Sand and Water gain by log11(EC^4). Ceratophyllum Demersum boosts Wood and Water gain by log12(CD^3).'
            else if (hasUpgrade('wa', 22)) return 'You passively generate Chara at a rate of 10%, Potamogeton at a rate of 8%, Myriophyllum Spicatum at a rate of 7%, and Utricularia Purpurea & Hydrilla Verticillate & Egeria Densa & Elodea Canadensis at a rate of 5% of its own current amount per second. You cannot generate more Chara, Potamogeton, Myriophyllum Spicatum, Utricularia Purpurea, Hydrilla Verticillate, Egeria Densa and Elodea Canadensis than ur total Water. Chara boosts power and Water gain based on log5(Chara^10). Potamogeton boosts Dirt and Water gain based on log6(Potamogeton^9). Myriophyllum Spicatum boosts Grass Blade and Water gain based on log7(MS^8). Utricularia Purpurea boosts Moss and Water gain based on log8(UP^7). Hydrilla Verticillate boosts Flower and Water gain by log9(HV^6). Egeria Densa boosts Seed and Water gain by log10(ED^5). Elodea Canadensis boosts Sand and Water gain by log11(EC^4).'
            else if (hasUpgrade('wa', 21)) return 'You passively generate Chara at a rate of 10%, Potamogeton at a rate of 8%, Myriophyllum Spicatum at a rate of 7%, and Utricularia Purpurea & Hydrilla Verticillate & Egeria Densa at a rate of 5% of its own current amount per second. You cannot generate more Chara, Potamogeton, Myriophyllum Spicatum, Utricularia Purpurea, Hydrilla Verticillate and Egeria Densa than ur total Water. Chara boosts power and Water gain based on log5(Chara^10). Potamogeton boosts Dirt and Water gain based on log6(Potamogeton^9). Myriophyllum Spicatum boosts Grass Blade and Water gain based on log7(MS^8). Utricularia Purpurea boosts Moss and Water gain based on log8(UP^7). Hydrilla Verticillate boosts Flower and Water gain by log9(HV^6). Egeria Densa boosts Seed and Water gain by log10(ED^5).'
            else if (hasUpgrade('wa', 15)) return 'You passively generate Chara at a rate of 10%, Potamogeton at a rate of 8%, Myriophyllum Spicatum at a rate of 7%, and Utricularia Purpurea & Hydrilla Verticillate at a rate of 5% of its own current amount per second. You cannot generate more Chara, Potamogeton, Myriophyllum Spicatum, Utricularia Purpurea and Hydrilla Verticillate than ur total Water. Chara boosts power and Water gain based on log5(Chara^10). Potamogeton boosts Dirt and Water gain based on log6(Potamogeton^9). Myriophyllum Spicatum boosts Grass Blade and Water gain based on log7(MS^8). Utricularia Purpurea boosts Moss and Water gain based on log8(UP^7). Hydrilla Verticillate boosts Flower and Water gain by log9(HV^6).'
            else if (hasUpgrade('wa', 14)) return 'You passively generate Chara at a rate of 10%, Potamogeton at a rate of 8%, Myriophyllum Spicatum at a rate of 7%, and Utricularia Purpurea at a rate of 5% of its own current amount per second. You cannot generate more Chara, Potamogeton, Myriophyllum Spicatum and Utricularia Purpurea than ur total Water. Chara boosts power and Water gain based on log5(Chara^10). Potamogeton boosts Dirt and Water gain based on log6(Potamogeton^9). Myriophyllum Spicatum boosts Grass Blade and Water gain based on log7(MS^8). Utricularia Purpurea boosts Moss and Water gain based on log8(UP^7).'
            else if (hasUpgrade('wa', 13)) return 'You passively generate Chara at a rate of 10%, Potamogeton at a rate of 8%, and Myriophyllum Spicatum at a rate of 7% of its own current amount per second. You cannot generate more Chara, Potamogeton, and Myriophyllum Spicatum than ur total Water. Chara boosts power and Water gain based on log5(Chara^10). Potamogeton boosts Dirt and Water gain based on log6(Potamogeton^9). Myriophyllum Spicatum boosts Grass Blade and Water gain based on log7(MS^8).'
            else if (hasUpgrade('wa', 12)) return 'You passively generate Chara at a rate of 10%, and Potamogeton at a rate of 8% of its own current amount per second. You cannot generate more Chara and Potamogeton than ur total Water. Chara boosts power and Water gain based on log5(Chara^10). Potamogeton boosts Dirt and Water gain based on log6(Potamogeton^9).'
            else if (hasUpgrade('wa', 11)) return 'You passively generate Chara at a rate of 10% of its own current amount per second. You cannot generate more Chara than ur total Water. Chara boosts power and Water gain based on log5(Chara^10).'
            else return "" },
            { "color": "gray", "font-size": "12px" }],
        () => (hasUpgrade('wa', 11)) ? "blank" : "",
        ["display-text",
            function() { if (hasUpgrade('wa', 11)) return 'You have ' + format(player.wa.chara) + ' Chara, which is boosting power and Water gain by ' + format(player.wa.chara.plus(1).pow(10).log(5).plus(1)) + 'x'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { if (hasUpgrade('wa', 12)) return 'You have ' + format(player.wa.potamogeton) + ' Potamogeton, which is boosting Dirt and Water gain by ' + format(player.wa.potamogeton.plus(1).pow(9).log(6).plus(1)) + 'x'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { if (hasUpgrade('wa', 13)) return 'You have ' + format(player.wa.myriophyllum_spicatum) + ' Myriophyllum Spicatum, which is boosting Grass Blade and Water gain by ' + format(player.wa.myriophyllum_spicatum.plus(1).pow(8).log(7).plus(1)) + 'x'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { if (hasUpgrade('wa', 14)) return 'You have ' + format(player.wa.utricularia_purpurea) + ' Utricularia Purpurea, which is boosting Moss and Water gain by ' + format(player.wa.utricularia_purpurea.plus(1).pow(7).log(8).plus(1)) + 'x'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { if (hasUpgrade('wa', 15)) return 'You have ' + format(player.wa.hydrilla_verticillate) + ' Hydrilla Verticillate, which is boosting Flower and Water gain by ' + format(player.wa.hydrilla_verticillate.plus(1).pow(6).log(9).plus(1)) + 'x'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { if (hasUpgrade('wa', 21)) return 'You have ' + format(player.wa.egeria_densa) + ' Egeria Densa, which is boosting Seed and Water gain by ' + format(player.wa.egeria_densa.plus(1).pow(5).log(10).plus(1)) + 'x'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { if (hasUpgrade('wa', 22)) return 'You have ' + format(player.wa.elodea_canadensis) + ' Elodea Canadensis, which is boosting Sand and Water gain by ' + format(player.wa.elodea_canadensis.plus(1).pow(4).log(11).plus(1)) + 'x'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        ["display-text",
            function() { if (hasUpgrade('wa', 23)) return 'You have ' + format(player.wa.ceratophyllum_demersum) + ' Ceratophyllum Demersum, which is boosting Wood and Water gain by ' + format(player.wa.ceratophyllum_demersum.plus(1).pow(3).log(12).plus(1)) + 'x'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        "blank",
        ["display-text",
            function() { if (hasUpgrade('wa', 11)) return 'You have ' + format(player.wa.total) + ' total Water'
            else return "" },
            { "color": "white", "font-size": "15px" }],
        ["blank", "5px"],
        "upgrades",
    ],
    onPrestige() {return player.upgtree.upgrades = []},
    color: "#006FFF",
    requires: new Decimal(1e22), //Can be a function that takes requirement increases into account
    resource: "Water", // Name of prestige currency
    baseResource: "Moss", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.48, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('wa', 11)) player.wa.chara = player.wa.chara.plus(player.wa.chara.div(200))
        if (hasUpgrade('wa', 12)) player.wa.potamogeton = player.wa.potamogeton.plus(player.wa.potamogeton.div(250))
        if (hasUpgrade('wa', 13)) player.wa.myriophyllum_spicatum = player.wa.myriophyllum_spicatum.plus(player.wa.myriophyllum_spicatum.div(285.6))
        if (hasUpgrade('wa', 14)) player.wa.utricularia_purpurea = player.wa.utricularia_purpurea.plus(player.wa.utricularia_purpurea.div(400))
        if (hasUpgrade('wa', 15)) player.wa.hydrilla_verticillate = player.wa.hydrilla_verticillate.plus(player.wa.hydrilla_verticillate.div(400))
        if (hasUpgrade('wa', 21)) player.wa.egeria_densa = player.wa.egeria_densa.plus(player.wa.egeria_densa.div(400))
        if (hasUpgrade('wa', 22)) player.wa.elodea_canadensis = player.wa.elodea_canadensis.plus(player.wa.elodea_canadensis.div(400))
        if (hasUpgrade('wa', 23)) player.wa.ceratophyllum_demersum = player.wa.ceratophyllum_demersum.plus(player.wa.ceratophyllum_demersum.div(400))
        if (hasUpgrade('wa', 22)) player.wa.chara = player.wa.chara.plus(player.wa.points.div(2000))
        if (hasUpgrade('wa', 22)) player.wa.potamogeton = player.wa.potamogeton.plus(player.wa.points.div(2000))
        if (hasUpgrade('wa', 22)) player.wa.myriophyllum_spicatum = player.wa.myriophyllum_spicatum.plus(player.wa.points.div(2000))
        if (hasUpgrade('wa', 22)) player.wa.utricularia_purpurea = player.wa.utricularia_purpurea.plus(player.wa.points.div(2000))
        if (hasUpgrade('wa', 22)) player.wa.hydrilla_verticillate = player.wa.hydrilla_verticillate.plus(player.wa.points.div(2000))
        if (hasUpgrade('wa', 22)) player.wa.egeria_densa = player.wa.egeria_densa.plus(player.wa.points.div(2000))
        if (hasUpgrade('wa', 22)) player.wa.elodea_canadensis = player.wa.elodea_canadensis.plus(player.wa.points.div(2000))
        if (hasUpgrade('wa', 23)) player.wa.ceratophyllum_demersum = player.wa.ceratophyllum_demersum.plus(player.wa.points.div(2000))
        if (player.wa.chara.gte(player.wa.total)) player.wa.chara = player.wa.total
        if (player.wa.potamogeton.gte(player.wa.total)) player.wa.potamogeton = player.wa.total
        if (player.wa.myriophyllum_spicatum.gte(player.wa.total)) player.wa.myriophyllum_spicatum = player.wa.total
        if (player.wa.utricularia_purpurea.gte(player.wa.total)) player.wa.utricularia_purpurea = player.wa.total
        if (player.wa.hydrilla_verticillate.gte(player.wa.total)) player.wa.hydrilla_verticillate = player.wa.total
        if (player.wa.egeria_densa.gte(player.wa.total)) player.wa.egeria_densa = player.wa.total
        if (player.wa.elodea_canadensis.gte(player.wa.total)) player.wa.elodea_canadensis = player.wa.total
        if (player.wa.ceratophyllum_demersum.gte(player.wa.total)) player.wa.ceratophyllum_demersum = player.wa.total
        if (hasUpgrade('wa', 11)) mult = mult.times(player.wa.chara.plus(1).pow(10).log(5).plus(1))
        if (hasUpgrade('wa', 12)) mult = mult.times(player.wa.potamogeton.plus(1).pow(9).log(6).plus(1))
        if (hasUpgrade('wa', 13)) mult = mult.times(player.wa.myriophyllum_spicatum.plus(1).pow(8).log(7).plus(1))
        if (hasUpgrade('wa', 14)) mult = mult.times(player.wa.utricularia_purpurea.plus(1).pow(7).log(8).plus(1))
        if (hasUpgrade('wa', 15)) mult = mult.times(player.wa.hydrilla_verticillate.plus(1).pow(6).log(9).plus(1))
        if (hasUpgrade('wa', 21)) mult = mult.times(player.wa.egeria_densa.plus(1).pow(5).log(10).plus(1))
        if (hasUpgrade('wa', 22)) mult = mult.times(player.wa.elodea_canadensis.plus(1).pow(4).log(11).plus(1))
        if (hasUpgrade('wa', 23)) mult = mult.times(player.wa.ceratophyllum_demersum.plus(1).pow(3).log(12).plus(1))
        if (getBuyableAmount('w', 18).gte(1)) mult = mult.times(buyableEffect('w', 18))
        mult = mult.times(Decimal.pow(2, player.sa.sandplanetslevels).times(player.sa.sandplanets.plus(1).log10().plus(1)))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for Water", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ['sa', 'm', 'g', 's'],
    layerShown(){return player.wa.total.gte(1) || hasMilestone('sa', 2)},
 //   doReset(resettingLayer) {
 //       if (layers[resettingLayer].row > layers[this.layer].row) {
 //           savedUpgrades = []
 //           if (hasUpgrade('c', 15) && ['c', 's', 'm', 'f', 'o', 'a', 'v', 'sm', 'sdw', 'ss'].includes(resettingLayer)) {
//              if (hasUpgrade(this.layer, 11)) {savedUpgrades.push(11)}
 //               if (hasUpgrade(this.layer, 12)) {savedUpgrades.push(12)}
  //              if (hasUpgrade(this.layer, 13)) {savedUpgrades.push(13)}
   //             if (hasUpgrade(this.layer, 14)) {savedUpgrades.push(14)}
    //            if (hasUpgrade(this.layer, 15)) {savedUpgrades.push(15)}
    //            if (hasUpgrade(this.layer, 16)) {savedUpgrades.push(16)}
 //               if (hasUpgrade(this.layer, 17)) {savedUpgrades.push(17)}
 //               if (hasUpgrade(this.layer, 18)) {savedUpgrades.push(18)}
 //               if (hasUpgrade(this.layer, 19)) {savedUpgrades.push(19)}
 //               if (hasUpgrade(this.layer, 21)) {savedUpgrades.push(21)}
 //           }
//         layerDataReset(this.layer, [])
//            player[this.layer].upgrades = savedUpgrades
//        }
//    },
    upgrades: {
        11: {
            fullDisplay() {return "<h3>need</h3><br>\n\
            Start generating Chara, +0.01 base Chara. Dirt is now automatically refined and costs nothing.<br>\n\
            <br>\n\
            Cost: 1 Water & 1.00e15 Grass Blades"},
            onPurchase() {player.wa.chara = player.wa.chara.plus(0.01)},
            canAfford() {return player.g.points.gte(1e15) && player.wa.points.gte(1)},
            pay() {player.g.points = player.g.points.minus(1e15), player.wa.points = player.wa.points.minus(1)}
        },
        12: {
            fullDisplay() {return "<h3>you</h3><br>\n\
            Start generating Potamogeton, +0.001 base Potamogeton. You keep Moss milestones and upgrades. Crops 1-7 are now auto,instant and cost nothing.<br>\n\
            <br>\n\
            Cost: 12 Water & 1.00e40 Dirt & 1.00e30 Grass Blades"},
            onPurchase() {player.wa.potamogeton = player.wa.potamogeton.plus(0.001)},
            canAfford() {return player.d.points.gte(1e40) && player.g.points.gte(1e30) && player.wa.points.gte(12)},
            pay() {player.g.points = player.g.points.minus(1e30), player.wa.points = player.wa.points.minus(12), player.d.points = player.d.points.minus(1e40)},
            unlocked() {return hasUpgrade('wa', 11)}
        },
        13: {
            fullDisplay() {return "<h3>bit</h3><br>\n\
            Start generating Myriophyllum Spicatum, +0.0001 base Myriophyllum Spicatum. You keep Flower milestones.<br>\n\
            <br>\n\
            Cost: 2,500 Water & 1.00e60 Dirt & 1.00e40 Grass Blades"},
            onPurchase() {player.wa.myriophyllum_spicatum = player.wa.myriophyllum_spicatum.plus(0.0001)},
            canAfford() {return player.d.points.gte(1e60) && player.g.points.gte(1e40) && player.wa.points.gte(2500)},
            pay() {player.g.points = player.g.points.minus(1e40), player.wa.points = player.wa.points.minus(2500), player.d.points = player.d.points.minus(1e60)},
            unlocked() {return hasUpgrade('wa', 12)}
        },
        14: {
            fullDisplay() {return "<h3>a</h3><br>\n\
            Start generating Utricularia Purpurea, +0.0001 base Utricularia Purpurea. You keep Seed milestones, all Crops are now auto,instant and cost nothing.<br>\n\
            <br>\n\
            Cost: 1,000,000 Water & 1.00e70 Dirt & 1.00e50 Grass Blades & 1.00e33 Seeds"},
            onPurchase() {player.wa.utricularia_purpurea = player.wa.utricularia_purpurea.plus(0.0001)},
            canAfford() {return player.d.points.gte(1e70) && player.g.points.gte(1e50) && player.s.points.gte(1e33) && player.wa.points.gte(1000000)},
            pay() {player.g.points = player.g.points.minus(1e50), player.wa.points = player.wa.points.minus(1000000), player.d.points = player.d.points.minus(1e70), player.s.points = player.s.points.minus(1e33)},
            unlocked() {return hasUpgrade('wa', 13)}
        },
        15: {
            fullDisplay() {return "<h3>help</h3><br>\n\
            Start generating Hydrilla Verticillate, +0.0001 base Hydrilla Verticillate. Trees are now auto, buy max, and cost nothing.<br>\n\
            <br>\n\
            Cost: 5.00e10 Water"},
            onPurchase() {player.wa.hydrilla_verticillate = player.wa.hydrilla_verticillate.plus(0.0001)},
            canAfford() {return player.wa.points.gte(5e10)},
            pay() {player.wa.points = player.wa.points.minus(5e10)},
            unlocked() {return hasUpgrade('wa', 14)}
        },
        21: {
            fullDisplay() {return "<h3>do</h3><br>\n\
            Start generating Egeria Densa, +0.0001 base Egeria Densa. All Fruits are now auto.<br>\n\
            <br>\n\
            Cost: 1.00e14 Water<br>\n\
            <br>\n\
            Requirement: 100 Beaches"},
            onPurchase() {player.wa.egeria_densa = player.wa.egeria_densa.plus(0.0001)},
            canAfford() {return player.wa.points.gte(1e14) && player.sa.beaches.gte(100)},
            pay() {player.wa.points = player.wa.points.minus(1e14)},
            unlocked() {return hasUpgrade('wa', 15)}
        },
        22: {
            fullDisplay() {return "<h3>of</h3><br>\n\
            Start generating Elodea Canadensis, +0.0001 base Elodea Canadensis. You now also gain 1% of each underwater plant based on current Water. Upgrade tree upgrades 1-8 are now auto bought.<br>\n\
            <br>\n\
            Cost: 1.00e30 Water"},
            onPurchase() {player.wa.elodea_canadensis = player.wa.elodea_canadensis.plus(0.0001)},
            canAfford() {return player.wa.points.gte(1e30)},
            pay() {player.wa.points = player.wa.points.minus(1e30)},
            unlocked() {return hasUpgrade('wa', 21)}
        },
        23: {
            fullDisplay() {return "<h3>do you need a bit of help?</h3><br>\n\
            Start generating Ceratophyllum Demersum. Mourn the Rocks more.<br>\n\
            <br>\n\
            Cost: 1.00e50 Water"},
            onPurchase() {player.wa.ceratophyllum_demersum = player.wa.ceratophyllum_demersum.plus(0.0001)},
            canAfford() {return player.wa.points.gte(1e50)},
            pay() {player.wa.points = player.wa.points.minus(1e50)},
            unlocked() {return hasUpgrade('wa', 22) && player.sa.sandplanetslevels.gte(4)}
        },
        24: {
            fullDisplay() { if (hasUpgrade('wa', 24)) return "<h3>Nemesis</h3><br>\n\
            Get fooled, idiot.<br>\n\
            <br>\n\
            Cost: Nemesis"
            else return "<h3>sisemeN</h3><br>\n\
            Save the rocks.<br>\n\
            <br>\n\
            Cost: 1.00e56 Water & 1.00e105 Grass Blades"},
            onPurchase() {player.points = new Decimal(0), player.d.points = new Decimal(0), player.g.points = new Decimal(0), player.r.points = new Decimal(0), player.m.points = new Decimal(0), player.f.points = new Decimal(0), player.s.points = new Decimal(0), player.t.points = new Decimal(0), player.d.upgrades = [], player.d.refineddirt = new Decimal(0), player.d.refineddirtcurrency = new Decimal(0), player.d.upgradeonesoftcap = new Decimal(1500), player.d.upgradeonesoftcapr = new Decimal(0), player.d.upgradeonesoftcapincrease = new Decimal(1500), player.d.upgradeonesoftcapcurrentincrease = new Decimal(0), player.d.refineddirtcost = new Decimal(1e28), player.g.plantedgrass = new Decimal(1), player.g.upgradeonesoftcapr = new Decimal(0), player.g.upgradeonesoftcap = new Decimal(1500), player.m.mossspread = new Decimal(1), player.m.upgradesixsoftcap = new Decimal(100), player.m.upgradesixsoftcapr = new Decimal(0), player.f.redflowers = new Decimal(1), player.f.orangeflowers = new Decimal(1), player.f.yellowflowers = new Decimal(1), player.f.greenflowers = new Decimal(1), player.f.cyanflowers = new Decimal(1), player.f.blueflowers = new Decimal(1), player.f.magentaflowers = new Decimal(1), player.f.purpleflowers = new Decimal(1), player.s.farmedwheat = new Decimal(0), player.s.farmedwheatcost = new Decimal(1), player.s.farmedcarrots = new Decimal(0), player.s.farmedcarrotscost = new Decimal(10), player.s.farmedpotatoes = new Decimal(0), player.s.farmedpotatoescost = new Decimal(25), player.s.farmedbeetroot = new Decimal(0), player.s.farmedbeetrootcost = new Decimal(100), player.s.farmedsugarcane = new Decimal(0), player.s.farmedsugarcanecost = new Decimal(250), player.s.farmedcorn = new Decimal(0), player.s.farmedcorncost = new Decimal(1000), player.s.farmedrice = new Decimal(0), player.s.farmedricecost = new Decimal(2000), player.s.farmedendive = new Decimal(0), player.s.farmedendivecost = new Decimal(10000), player.s.farmedstrawberry = new Decimal(0), player.s.farmedstrawberrycost = new Decimal(25000), player.s.farmedmushroom = new Decimal(0), player.s.farmedmushroomcost = new Decimal(1e9), player.s.farmedwheatmultiplier = new Decimal(1), player.s.farmedcarrotsmultiplier = new Decimal(1), player.s.farmedpotatoesmultiplier = new Decimal(1), player.s.farmedbeetrootmultiplier = new Decimal(1), player.s.farmedsugarcanemultiplier = new Decimal(1), player.s.farmedcornmultiplier = new Decimal(1), player.s.farmedricemultiplier = new Decimal(1), player.s.farmedendivemultiplier = new Decimal(1), player.s.farmedstrawberrymultiplier = new Decimal(1), player.s.farmedmushroommultiplier = new Decimal(1), player.t.disposabletrees = new Decimal(0), player.t.apples = new Decimal(0), player.t.pears = new Decimal(0), player.t.bananas = new Decimal(0), player.t.oranges = new Decimal(0), player.t.cherries = new Decimal(0), player.t.total = new Decimal(0), player.t.treesize = new Decimal(1), player.t.treebranches = new Decimal(1), player.t.treeroots = new Decimal(1), player.r.upgrades = [], player.d.achievementmulti = new Decimal(1.085), player.d.rockmultiplier = new Decimal(1.185), player.d.oldupgradesixmulti = new Decimal(1.0625), player.d.upgradesixmulti = new Decimal(1.0625), player.d.oldupgradefourmulti = new Decimal(1.175), player.d.upgradefourmulti = new Decimal(1.175), player.g.upgrades = [], player.m.upgrades = [], player.m.milestones = [], player.g.milestones = [], player.m.total = new Decimal(0), player.g.total = new Decimal(0) },
            canAfford() {return player.wa.points.gte(1e56) && player.g.points.gte(1e105)},
            pay() {player.wa.points = player.wa.points.minus(1e56)},
            unlocked() {return hasUpgrade('wa', 23) && player.sa.sandplanetslevels.gte(4)}
        },
        25: {
            fullDisplay() {return "<h3>kill her</h3><br>\n\
            Mourn Grass, Moss, Flowers, and Seeds once, and the Upgrade Tree twice.<br>\n\
            <br>\n\
            Cost: 1.00e79 Dirt"},
            onPurchase() {},
            canAfford() {return player.d.points.gte(1e79)},
            pay() {player.d.points = player.d.points.minus(1e79)},
            unlocked() {return player.nu.destroyedgalaxies.gte(1)}
        },
    },
    clickables: {
    },
    bars: {
    },
    buyables: {
    },
    milestones: {
    }
})

//have it be limited, until a break upgrade is bought, where it can now grow infinitely exponentially out into the world