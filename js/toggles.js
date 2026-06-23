addLayer("tog", {
    name: "togglesss", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    startData() { return {
        points: new Decimal(0),
        autobuyQuarkUpg: false,
        passiveQuarkGen: false,
        passiveElectronGen: false,
        autobuyAtomUpg: false,
        passiveAtomGen: false,
        keepElectronMilestones: false,
        autoInfinity: false,
        autoCompleteAtomChallenges: false,
        autobuyMolecules: false,
        autobuyMoleculeBuyables: false,
        autobuyMoleculeBuyables2: false,
        passiveDNAGen: false,
        passiveAMGen: false,
    }},
    color: "#dadada", // Can be a function that takes requirement increases into account
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have // Prestige currency exponent
    row: "none", // Row the layer is in on the tree (0 is the first row)
    tooltip: "Toggles",
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    layerShown(){return true},
})