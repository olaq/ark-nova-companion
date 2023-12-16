var gameState = {
    gameIcons: {
        africa: 0,
        europe: 0,
        asia: 0,
        americas: 0,
        australia: 0,
        birds: 0,
        predators: 0,
        herbivores: 0,
        reptiles: 0,
        primates: 0,
        aquatic: 0,
        bears: 0,
        petting: 0,
        research: 0,
        rock: 0,
        water: 0
    }
};

function addIcon(iconType) {
    gameState.gameIcons[iconType]++;
    document.getElementById(iconType + 'Counter')
        .innerText = gameState.gameIcons[iconType];
}

function removeIcon(iconType) {
    if (gameState.gameIcons[iconType] > 0) {
        gameState.gameIcons[iconType]--;
        document.getElementById(iconType + 'Counter')
            .innerText = gameState.gameIcons[iconType];
    }
}

function clearState() {
    // localStorage.removeItem('gameState');

    gameState.gameIcons = {
        africa: 0,
        europe: 0,
        asia: 0,
        americas: 0,
        australia: 0,
        birds: 0,
        predators: 0,
        herbivores: 0,
        reptiles: 0,
        primates: 0,
        aquatic: 0,
        bears: 0,
        petting: 0,
        research: 0,
        rock: 0,
        water: 0
    };

    for (var iconType in gameState.gameIcons) {
        document.getElementById(iconType + 'Counter')
            .innerText = gameState.gameIcons[iconType];
    }
}

// Load game state from local storage
if (localStorage.getItem('gameState')) {
    gameState = JSON.parse(localStorage.getItem('gameState'));
}



// Save game state to local storage every 5 seconds
setInterval(function () {
    localStorage.setItem('gameState', JSON.stringify(gameState));
}, 5000);



