function gameObject() {
    const gameObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "Desagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        }
    }

    return gameObject
}
//Assignment begins here:
const gameObj = gameObject()

// This function takes in an argument of a player's name and returns the number of points scored for that player
function numPointsScored(playerName) {
    for (const homeGamePlayer in gameObj["home"]["players"]) {
        if (homeGamePlayer == playerName) {
            return gameObj["home"]["players"][homeGamePlayer]["points"]
        }
    }
    for (const awayGamePlayer in gameObj["away"]["players"]) {
        if (awayGamePlayer === playerName) {
            return gameObj["away"]["players"][awayGamePlayer]["points"]
        }
    }
    return `${playerName} does not exist`
}


console.log(numPointsScored('Ben Gordon')) // Away team player
console.log(numPointsScored("Jerald Nyaga")) // No such player
console.log(numPointsScored("Alan Anderson")) // Home team player



// This function takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName) {
    for (const homeGamePlayer in gameObj["home"]["players"]) {
        if (homeGamePlayer === playerName) {
            return gameObj["home"]["players"][homeGamePlayer]["shoe"]
        }
    }
    for (const awayGamePlayer in gameObj["away"]["players"]) {
        if (awayGamePlayer === playerName) {
            return gameObj["away"]["players"][awayGamePlayer]["shoe"]
        }
    }
    return `${playerName} does not exist`
}

console.log(shoeSize('Ben Gordon')) // Away team player shoe size
console.log(shoeSize("Jerald Nyaga")) // No such player
console.log(shoeSize("Alan Anderson")) // Home team player shoesize

// This function takes in an argument of the team name and returns an array of that teams colors
function teamColors(teamName) {
    const homeTeam = gameObj["home"]["teamName"]
    const awayTeam = gameObj["away"]["teamName"]

    if (homeTeam === teamName) {
        return gameObj["home"]["colors"]
    }

    else if (awayTeam === teamName) {
        return gameObj["away"]["colors"]
    }
    else {
        return `${teamName} does not exist`
    }
}
console.log("The team colors are:", teamColors("Brooklyn Nets")) // Home team colors
console.log(teamColors("Charlotte Hornets")) // Away Team colors
console.log(teamColors("Manchester United")) // Invalid team Name colors

// This function operates on the game object to return an array of the team names
function teamNames() {
    let teamNames = []

    teamNames.push(gameObj["home"]["teamName"])
    teamNames.push(gameObj["away"]["teamName"])

    return teamNames
}

console.log(teamNames()) // The team names in our game

// This function takes in an argument of a team name and returns an array of the jersey numbers for that team
function playerNumbers(teamName) {
    let jerseyNumbers = []

    if (gameObj["home"]["teamName"] === teamName) {
        for (const homePlayer in gameObj["home"]["players"]) {
            jerseyNumbers.push(gameObj["home"]["players"][homePlayer]["number"])
        }
        return jerseyNumbers
    }

    else if (gameObj["away"]["teamName"] === teamName) {
        for (const awayPlayer in gameObj["away"]["players"]) {
            jerseyNumbers.push(gameObj["away"]["players"][awayPlayer]["number"])
        }
        return jerseyNumbers
    }
    else {
        return `${teamName} does not exist`
    }
}

console.log(playerNumbers("Brooklyn Nets")) // Home team players jersey numbers
console.log(playerNumbers("Charlotte Hornets")) // Away Team players jersey numbers
console.log(playerNumbers("Manchester United")) // invalid team players numbers

// This function takes in an argument of a player's name and returns an object of that player's stats
function playerStats(playerName) {
    for (const homeGamePlayer in gameObj["home"]["players"]) {
        if (homeGamePlayer === playerName) {
            return gameObj["home"]["players"][homeGamePlayer]
        }
    }
    for (const awayGamePlayer in gameObj["away"]["players"]) {
        if (awayGamePlayer === playerName) {
            return gameObj["away"]["players"][awayGamePlayer]
        }
    }
    return `${playerName} does not exist`
}
console.log(playerStats('Brendan Haywood')) // Away team player stats
console.log(playerStats("Jerald Nyaga")) // No such player
console.log(playerStats("Brook Lopez")) // Home team player stats


// This function return the number of rebounds associated with the player that has the largest shoe size
function bigShoeRebounds() {
    let bigFootSize = 0
    let bigFootPlayerName = ''

    for (const homeGamePlayer in gameObj["home"]["players"]) {
        if (parseInt(shoeSize(homeGamePlayer)) > bigFootSize) {
            bigFootPlayerName = homeGamePlayer
            bigFootSize = parseInt(shoeSize(homeGamePlayer))
        }
    }
    for (const awayGamePlayer in gameObj["away"]["players"]) {
        if (parseInt(shoeSize(awayGamePlayer)) > bigFootSize) {
            bigFootPlayerName = awayGamePlayer
            bigFootSize = parseInt(shoeSize(awayGamePlayer))
        }
    }
    const rebounds = playerStats(bigFootPlayerName)["rebounds"]
    return `The name of the player with biggest foot size is: ${bigFootPlayerName}.\nTheir shoe size is ${bigFootSize} and their rebouds are: ${rebounds}`
}
console.log(bigShoeRebounds())

// This function returns the name of the player with the most points scored
function mostPointsScored() {
    let pointsScored = 0
    let scoreMaster = ''

    for (const homeGamePlayer in gameObj["home"]["players"]) {
        if (parseInt(numPointsScored(homeGamePlayer)) > pointsScored) {
            scoreMaster = homeGamePlayer
            pointsScored = parseInt(numPointsScored(homeGamePlayer))
        }
    }
    for (const awayGamePlayer in gameObj["away"]["players"]) {
        if (parseInt(numPointsScored(awayGamePlayer)) > pointsScored) {
            scoreMaster = awayGamePlayer
            pointsScored = parseInt(numPointsScored(awayGamePlayer))
        }
    }
    return `The name of the player with most points scored is ${scoreMaster}\nTheir total points is ${pointsScored}`
}
console.log(mostPointsScored())

// This function returns the team with the most points scored
function winningTeam() {
    let homeTeamPoints = 0
    let awayTeamPoints = 0

    for (const homeGamePlayer in gameObj["home"]["players"]) {
        const playerPoints = parseInt(numPointsScored(homeGamePlayer))
        homeTeamPoints += playerPoints
    }
    for (const awayGamePlayer in gameObj["away"]["players"]) {
        const playerPoints = parseInt(numPointsScored(awayGamePlayer))
        awayTeamPoints += playerPoints
    }
    if (homeTeamPoints > awayTeamPoints) {
        return `${gameObj["home"]["teamName"]} had the most points\nThe points were ${homeTeamPoints}`
    }
    else if (homeTeamPoints < awayTeamPoints) {
        return `${gameObj["away"]["teamName"]} had the most points\nThe points were ${awayTeamPoints}`
    }
    else {
        return `${gameObj["away"]["teamName"]} and ${gameObj["home"]["teamName"]} had the same number of points\nThe points were ${awayTeamPoints}`
    }
}

console.log(winningTeam())

// This function returns the name of the player with the Longest Name
function playerWithLongestName() {
    let playerLongName = ''

    for (const homeGamePlayer in gameObj["home"]["players"]) {
        if (homeGamePlayer.replace(/\s+/g, "").length > playerLongName.length) {
            playerLongName = homeGamePlayer
        }
    }
    for (const awayGamePlayer in gameObj["away"]["players"]) {
        if (awayGamePlayer.length > playerLongName.length) {
            playerLongName = awayGamePlayer
        }
    }
    return playerLongName
}

console.log(playerWithLongestName())

// This function returns true if the player with the longest name had the most steals.
function doesLongNameStealATon() {
    let verdict = true
    const longNamePlayer = playerWithLongestName()
    for (const homeGamePlayer in gameObj["home"]["players"]) {
        if (parseInt(playerStats(homeGamePlayer)["steals"]) > parseInt(playerStats(longNamePlayer)["steals"])) {
            verdict = false
            return verdict
        }
    }
    for (const awayGamePlayer in gameObj["away"]["players"]) {
        if (parseInt(playerStats(awayGamePlayer)["steals"]) > parseInt(playerStats(longNamePlayer)["steals"])) {
            verdict = false
            return verdict
        }
    }
    return verdict
}
console.log(doesLongNameStealATon())