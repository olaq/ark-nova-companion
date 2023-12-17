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
    },
    marineWorldsExpansionEnabled: true
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

    updateIconsVisibility();
}

function toggleMarineWorlds() {
    gameState.marineWorldsExpansionEnabled = !gameState.marineWorldsExpansionEnabled;
    console.log('Marine Worlds Expansion Enabled: ' + gameState.marineWorldsExpansionEnabled);
    updateMarineWolrdsExpansionVisibility();
}

function updateMarineWolrdsExpansionVisibility() {
    if (gameState.marineWorldsExpansionEnabled) {
        document.querySelector('.marine-worlds-expansion').style.display = 'block';
        document.getElementById('expansionMarineWorldsButton').innerText = "Disable Marine Worlds";
    } else {
        document.querySelector('.marine-worlds-expansion').style.display = 'none';
        document.getElementById('expansionMarineWorldsButton').innerText = "Enable Marine Worlds";
    }
}

function updateIconsVisibility() {
    for (var iconType in gameState.gameIcons) {
        document.getElementById(iconType + 'Counter')
            .innerText = gameState.gameIcons[iconType];
    }
}

function loadState() {
    if (localStorage.getItem('gameState')) {
        gameState = JSON.parse(localStorage.getItem('gameState'));
    }
}

function saveState() {
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

// Load game state from local storage when the window is loaded
window.addEventListener('load', function () {
    loadState();
    updateIconsVisibility();
    updateMarineWolrdsExpansionVisibility();
});

// Save game state to local storage when the window is closed
window.addEventListener('beforeunload', function () {
    saveState();
});

// Save game state to local storage every 5 seconds
setInterval(function () {
    saveState();
}, 5000);


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', { scope: './'})
        .then((registration) => {
            console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
            console.log('Service Worker registration failed:', error);
        });
}
