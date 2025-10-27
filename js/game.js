const gameState = {
    currentMode: null,
    songs: [],
    currentSongIndex: 0,
    currentBlankIndex: 0,
    score: 0,
    hintsRemaining: 2,
    skipsRemaining: 1,
    hintsUsed: 0,
    skipsUsed: 0,
    correctAnswers: 0,
    totalBlanks: 0,
    hintUsedOnCurrentBlank: false,
    unlockedModes: null
};
const settings = {
    soundEnabled: true,
    musicEnabled: true
};

function initGame() {
    loadProgress();
    loadSettings();
}
function loadProgress() {
    const savedProgress = localStorage.getItem('advong_progress');
    
    if (savedProgress) {
        gameState.unlockedModes = JSON.parse(savedProgress);
    } else {
        gameState.unlockedModes = {
            mode5: true,
            mode7: false,
            mode9: false
        };
        saveProgress();
    }
}

function saveProgress() {
    localStorage.setItem('advong_progress', JSON.stringify(gameState.unlockedModes));
}

function loadSettings() {
    const savedSettings = localStorage.getItem('advong_settings');
    
    if (savedSettings) {
        const loaded = JSON.parse(savedSettings);
        settings.soundEnabled = loaded.soundEnabled;
        settings.musicEnabled = loaded.musicEnabled;
    }
}

function saveSettings() {
    localStorage.setItem('advong_settings', JSON.stringify(settings));
}
