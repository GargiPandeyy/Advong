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
