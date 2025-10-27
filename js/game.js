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
function startGame(mode) {
    gameState.currentMode = mode;
    gameState.songs = getSongsForMode(mode);
    gameState.currentSongIndex = 0;
    gameState.currentBlankIndex = 0;
    gameState.score = 0;
    gameState.hintsRemaining = 2;
    gameState.skipsRemaining = 1;
    gameState.hintsUsed = 0;
    gameState.skipsUsed = 0;
    gameState.correctAnswers = 0;
    gameState.hintUsedOnCurrentBlank = false;
    
    gameState.totalBlanks = gameState.songs.reduce((total, song) => {
        return total + song.lyrics.filter(line => line.blank).length;
    }, 0);
    
    loadSong(0);
}

function loadSong(songIndex) {
    gameState.currentSongIndex = songIndex;
    gameState.currentBlankIndex = 0;
    gameState.hintUsedOnCurrentBlank = false;
}

function checkAnswer(selectedAnswer) {
    const currentSong = gameState.songs[gameState.currentSongIndex];
    const blanks = currentSong.lyrics.filter(line => line.blank);
    const currentBlank = blanks[gameState.currentBlankIndex];
    
    const isCorrect = selectedAnswer === currentBlank.correctAnswer;
    
    if (isCorrect) {
        gameState.correctAnswers++;
        
        let points = 100;
        
        if (!gameState.hintUsedOnCurrentBlank) {
            points += 50;
        }
        
        gameState.score += points;
        
        gameState.currentBlankIndex++;
        gameState.hintUsedOnCurrentBlank = false;
        
        if (gameState.currentBlankIndex >= blanks.length) {
            setTimeout(() => {
                nextSong();
            }, 1000);
        }
        
        return true;
    } else {
        return false;
    }
}

function nextSong() {
    gameState.currentSongIndex++;
    
    if (gameState.currentSongIndex >= gameState.songs.length) {
        endGame();
    } else {
        loadSong(gameState.currentSongIndex);
    }
}
function useHint() {
    if (gameState.hintsRemaining <= 0) {
        return null;
    }
    
    gameState.hintsRemaining--;
    gameState.hintsUsed++;
    gameState.hintUsedOnCurrentBlank = true;
    
    gameState.score -= 25;
    
    const currentSong = gameState.songs[gameState.currentSongIndex];
    const blanks = currentSong.lyrics.filter(line => line.blank);
    const currentBlank = blanks[gameState.currentBlankIndex];
    
    const hintType = gameState.hintsUsed === 1 ? 'firstLetter' : 'removeWrong';
    
    return {
        type: hintType,
        correctAnswer: currentBlank.correctAnswer,
        options: currentBlank.options
    };
}

function skipSong() {
    if (gameState.skipsRemaining <= 0) {
        return false;
    }
    
    gameState.skipsRemaining--;
    gameState.skipsUsed++;
    
    gameState.score -= 100;
    
    nextSong();
    
    return true;
}

function endGame() {
    const modeUnlocked = checkModeUnlock();
    
    const finalStats = {
        score: gameState.score,
        accuracy: Math.round((gameState.correctAnswers / gameState.totalBlanks) * 100),
        hintsUsed: gameState.hintsUsed,
        skipsUsed: gameState.skipsUsed,
        modeUnlocked: modeUnlocked
    };
    
    return finalStats;
}

function checkModeUnlock() {
    let unlocked = null;
    
    if (gameState.currentMode === 5 && !gameState.unlockedModes.mode7) {
        gameState.unlockedModes.mode7 = true;
        unlocked = 7;
    } else if (gameState.currentMode === 7 && !gameState.unlockedModes.mode9) {
        gameState.unlockedModes.mode9 = true;
        unlocked = 9;
    }
    
    if (unlocked) {
        saveProgress();
    }
    
    return unlocked;
}

function getCurrentSong() {
    return gameState.songs[gameState.currentSongIndex];
}

function getCurrentBlank() {
    const song = getCurrentSong();
    const blanks = song.lyrics.filter(line => line.blank);
    return blanks[gameState.currentBlankIndex];
}

function getProgress() {
    return {
        currentSong: gameState.currentSongIndex + 1,
        totalSongs: gameState.songs.length,
        percentage: ((gameState.currentSongIndex + 1) / gameState.songs.length) * 100
    };
}

function resetAllProgress() {
    if (confirm('Are you sure you want to reset ALL progress? This cannot be undone!')) {
        gameState.unlockedModes = {
            mode5: true,
            mode7: false,
            mode9: false
        };
        saveProgress();
        return true;
    }
    return false;
}

function playSound(soundType) {
    if (!settings.soundEnabled) return;
}

function handleKeyboardInput(key) {
    if (key >= '1' && key <= '4') {
        const choiceIndex = parseInt(key) - 1;
        return { action: 'selectChoice', index: choiceIndex };
    }
    
    if (key.toLowerCase() === 'h') {
        return { action: 'useHint' };
    }
    
    if (key.toLowerCase() === 's') {
        return { action: 'skipSong' };
    }
    
    return null;
}
