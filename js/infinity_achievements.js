addLayer("infach", {
    name: "infinity_achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "IA", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    startData() { return {
        points: new Decimal(0),
        achievementmulti: new Decimal(1.333),
    }},
    tabFormat: [
        ["display-text",
            function() { return 'Every Infinity Achievement gives a ' + format(player.infach.achievementmulti, 3) + 'x multiplicative boost to power gain.'},
            { "color": "gray", "font-size": "15px" }],
        "blank",
        ["display-text",
            function() { return 'Your Infinity Achievements multiply power gain by ' + format(tmp.infach.effect) + 'x'},
            { "color": "white", "font-size": "16.5px" }],
        "blank",
        "achievements",
    ],
    effect(){
        return Decimal.pow(player.infach.achievementmulti, player[this.layer].achievements.length)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
    color: "#195ef3", // Can be a function that takes requirement increases into account
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have // Prestige currency exponent
    row: "none", // Row the layer is in on the tree (0 is the first row)
    tooltip: "Achievements",
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    layerShown(){return true},
    achievements: {
        11: {
            name: "this new bottle cap sucks",
            tooltip: "Infinity for the first time.",
            done() {return player.i.infinities.gte(1)},
            style() {
                if (hasAchievement('infach', 11)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 11)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        12: {
            name: "so like... e308,000?",
            tooltip: "Reach 1.00e3 Infinity Power.",
            done() {return player.i.infinitypower.gte(1e3)},
            style() {
                if (hasAchievement('infach', 12)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 12)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        13: {
            name: "these new bottle caps suck",
            tooltip: "Infinity for the second time.",
            done() {return player.i.infinities.gte(2)},
            style() {
                if (hasAchievement('infach', 13)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 13)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        14: {
            name: "the end is never the end is never the end is never the end is never the",
            tooltip: "Reach 10 Infinities.",
            done() {return player.i.infinities.gte(10)},
            style() {
                if (hasAchievement('infach', 14)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 14)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        15: {
            name: "omg you get the infinities and points too omg",
            tooltip: "Get your first Infinity Challenge Completion.",
            done() {return player.i.totalinfinitychallengecompletions.gte(1)},
            style() {
                if (hasAchievement('infach', 15)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 15)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        16: {
            name: "duos are better anyway...",
            tooltip: "Get Atom Milestone 12 without ever having Tertiary Protons in your current Infinity. Reward: You keep Atom Milestone 12.",
            done() {return hasMilestone('a', 11) && player.i.besttertiaryprotons.lte(0)},
            style() {
                if (hasAchievement('infach', 16)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 16)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        17: {
            name: "the flash ain't got nothin' on me",
            tooltip: "Reach Infinity in under 5 minutes.",
            done() {return player.q.points.gte(1.79e308) && player.i.timesinceinfinityreset.lt(300) && player.i.total.gte(1)},
            style() {
                if (hasAchievement('infach', 17)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 17)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        18: {
            name: "gotta double check, just to make sure",
            tooltip: "Get your second Infinity Challenge Completion.",
            done() {return player.i.totalinfinitychallengecompletions.gte(2)},
            style() {
                if (hasAchievement('infach', 18)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 18)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        21: {
            name: "oh that? it's actually very usef-",
            tooltip: "Reach Infinity without any Atom Challenge 10 Completions.",
            done() {return player.q.points.gte(1.79e308) && player.a.atomchallenge20completions.lte(0)},
            style() {
                if (hasAchievement('infach', 21)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 21)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        22: {
            name: "oh those? they're actually... pretty useless",
            tooltip: "Reach Infinity without ever getting any Molecules in your current Infinity.",
            done() {return player.q.points.gte(1.79e308) && player.m.total.lte(0)},
            style() {
                if (hasAchievement('infach', 22)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 22)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        23: {
            name: "flash^2 wouldn't win against ME in a race...",
            tooltip: "Reach Infinity in under 30 seconds.",
            done() {return player.q.points.gte(1.79e308) && player.i.timesinceinfinityreset.lt(30) && player.i.total.gte(1)},
            style() {
                if (hasAchievement('infach', 23)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 23)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        24: {
            name: "i just LOVEE my two cents 😎",
            tooltip: "Reach 111 Infinities.",
            done() {return player.i.infinities.gte(111)},
            style() {
                if (hasAchievement('infach', 24)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 24)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        25: {
            name: "what's beyond infinity?",
            tooltip: "Infinity in under 5 seconds.",
            done() {return player.i.bestinfinitytime.lt(5)},
            style() {
                if (hasAchievement('infach', 25)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 25)) return {
                    'color': '#d4d4d4'
                }
            },
        },
        28: {
            name: "step on a crack, break your infinity's back!",
            tooltip: "Break Infinity.",
            done() {return player.infinity_broken == true},
            style() {
                if (hasAchievement('infach', 28)) return {
                //'background-color': '#3575ff',
                'background': 'linear-gradient(-15deg, #0d1cee 0%, #0daeee 100%)',
                "background-origin": "border-box"}
            },
            textStyle() {
                if (hasAchievement('infach', 28)) return {
                    'color': '#d4d4d4'
                }
            },
        },
    }
})