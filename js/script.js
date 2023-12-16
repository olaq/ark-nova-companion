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

function clearStateButton() {
    document.getElementById('confirmDialog').style.display = 'block';
}

document.getElementById('confirmYes').addEventListener('click', function() {
    clearState();
    document.getElementById('confirmDialog').style.display = 'none';
});

document.getElementById('confirmNo').addEventListener('click', function() {
    document.getElementById('confirmDialog').style.display = 'none';
});

function clearState() {
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


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  }

