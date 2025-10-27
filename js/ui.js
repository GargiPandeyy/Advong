function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

function renderMainMenu() {
    const modeBtns = document.querySelectorAll('.mode-btn');
    
    modeBtns.forEach(btn => {
        const mode = parseInt(btn.dataset.mode);
        let isUnlocked = false;
        
        if (mode === 5) {
            isUnlocked = gameState.unlockedModes.mode5;
        } else if (mode === 7) {
            isUnlocked = gameState.unlockedModes.mode7;
        } else if (mode === 9) {
            isUnlocked = gameState.unlockedModes.mode9;
        }
        
        btn.dataset.unlocked = isUnlocked;
        
        if (isUnlocked) {
            btn.classList.remove('locked');
        } else {
            btn.classList.add('locked');
        }
    });
}

function renderGameScreen() {
    const song = getCurrentSong();
    const progress = getProgress();
    
    document.getElementById('score-value').textContent = gameState.score;
    document.getElementById('progress-text').textContent = 
        `Song ${progress.currentSong} of ${progress.totalSongs}`;
    document.getElementById('progress-fill').style.width = `${progress.percentage}%`;
    
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('song-artist').textContent = `by ${song.artist}`;
    
    renderLyrics();
    
    document.getElementById('hints-remaining').textContent = gameState.hintsRemaining;
    document.getElementById('skips-remaining').textContent = gameState.skipsRemaining;
    
    const hintBtn = document.getElementById('hint-btn');
    const skipBtn = document.getElementById('skip-btn');
    
    hintBtn.disabled = gameState.hintsRemaining <= 0;
    skipBtn.disabled = gameState.skipsRemaining <= 0;
}

function renderLyrics() {
    const song = getCurrentSong();
    const lyricsContainer = document.getElementById('lyrics-container');
    lyricsContainer.innerHTML = '';
    
    const blanks = song.lyrics.filter(line => line.blank);
    const currentBlank = blanks[gameState.currentBlankIndex];
    
    const lyricsDiv = document.createElement('div');
    
    song.lyrics.forEach((line, index) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'lyrics-line';
        
        if (line.blank) {
            const blankIndex = blanks.indexOf(line);
            
            if (blankIndex < gameState.currentBlankIndex) {
                lineDiv.innerHTML = `<span class="lyric-blank filled correct">${line.correctAnswer}</span>`;
            } else if (blankIndex === gameState.currentBlankIndex) {
                lineDiv.innerHTML = `<span class="lyric-blank">___</span>`;
            } else {
                lineDiv.innerHTML = `<span class="lyric-blank">___</span>`;
            }
        } else {
            lineDiv.textContent = line.text;
        }
        
        lyricsDiv.appendChild(lineDiv);
    });
    
    lyricsContainer.appendChild(lyricsDiv);
    
    if (currentBlank) {
        renderChoices(currentBlank);
    } else if (gameState.currentBlankIndex >= blanks.length && gameState.currentSongIndex < gameState.songs.length - 1) {
        setTimeout(() => {
            nextSong();
            renderGameScreen();
        }, 1000);
    }
}

function renderChoices(blank) {
    const lyricsContainer = document.getElementById('lyrics-container');
    
    const choicesDiv = document.createElement('div');
    choicesDiv.className = 'choices-container';
    choicesDiv.id = 'choices-container';
    
    blank.options.forEach((option, index) => {
        const choiceBtn = document.createElement('button');
        choiceBtn.className = 'choice-btn';
        choiceBtn.textContent = option;
        choiceBtn.dataset.answer = option;
        choiceBtn.dataset.index = index;
        
        choiceBtn.addEventListener('click', handleChoiceClick);
        
        choicesDiv.appendChild(choiceBtn);
    });
    
    lyricsContainer.appendChild(choicesDiv);
}

function handleChoiceClick(event) {
    const selectedAnswer = event.target.dataset.answer;
    const allChoices = document.querySelectorAll('.choice-btn');
    
    allChoices.forEach(btn => btn.disabled = true);
    
    playSound('click');
    
    const isCorrect = checkAnswer(selectedAnswer);
    
    if (isCorrect) {
        event.target.classList.add('correct');
        playSound('correct');
        
        setTimeout(() => {
            renderGameScreen();
        }, 800);
    } else {
        event.target.classList.add('incorrect');
        playSound('incorrect');
        
        allChoices.forEach(btn => {
            if (btn.dataset.answer === getCurrentBlank().correctAnswer) {
                btn.classList.add('correct');
            }
        });
        
        setTimeout(() => {
            allChoices.forEach(btn => {
                btn.classList.remove('incorrect', 'correct');
                btn.disabled = false;
            });
        }, 1500);
    }
}

function handleHintClick() {
    const hint = useHint();
    
    if (!hint) {
        return;
    }
    
    playSound('hint');
    
    renderGameScreen();
    
    if (hint.type === 'firstLetter') {
        showFirstLetterHint(hint.correctAnswer);
    } else if (hint.type === 'removeWrong') {
        removeWrongAnswer(hint.correctAnswer, hint.options);
    }
}

function showFirstLetterHint(correctAnswer) {
    const firstLetter = correctAnswer.charAt(0).toUpperCase();
    
    const hintMessage = document.createElement('div');
    hintMessage.className = 'hint-message';
    hintMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #9b59b6, #e91e63);
        padding: 30px 50px;
        border-radius: 20px;
        font-size: 2rem;
        font-weight: bold;
        color: white;
        z-index: 9999;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        animation: fadeIn 0.3s ease;
    `;
    hintMessage.textContent = `First Letter: ${firstLetter}`;
    
    document.body.appendChild(hintMessage);
    
    setTimeout(() => {
        hintMessage.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => hintMessage.remove(), 300);
    }, 2000);
}

function removeWrongAnswer(correctAnswer, options) {
    const choicesContainer = document.getElementById('choices-container');
    const choiceBtns = choicesContainer.querySelectorAll('.choice-btn');
    
    const wrongAnswers = [];
    choiceBtns.forEach(btn => {
        if (btn.dataset.answer !== correctAnswer) {
            wrongAnswers.push(btn);
        }
    });
    
    if (wrongAnswers.length > 0) {
        const randomWrong = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
        randomWrong.classList.add('hidden-hint');
        randomWrong.disabled = true;
    }
}

function handleSkipClick() {
    if (!confirm('Are you sure you want to skip this song? (-100 points)')) {
        return;
    }
    
    const skipped = skipSong();
    
    if (skipped) {
        playSound('skip');
        renderGameScreen();
    }
}

function renderVictoryScreen(stats) {
    document.getElementById('final-score').textContent = stats.score;
    document.getElementById('accuracy').textContent = `${stats.accuracy}%`;
    document.getElementById('hints-used').textContent = stats.hintsUsed;
    document.getElementById('skips-used').textContent = stats.skipsUsed;
    
    const unlockMessage = document.getElementById('unlock-message');
    if (stats.modeUnlocked) {
        unlockMessage.classList.remove('hidden');
        unlockMessage.querySelector('p').textContent = 
            `🔓 ${stats.modeUnlocked} Song Mode Unlocked!`;
    } else {
        unlockMessage.classList.add('hidden');
    }
    
    showScreen('victory-screen');
}

const originalEndGame = endGame;
window.endGame = function() {
    const stats = originalEndGame();
    renderVictoryScreen(stats);
    playSound('victory');
    return stats;
};

document.addEventListener('DOMContentLoaded', () => {
    initGame();
    renderMainMenu();
    
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = parseInt(btn.dataset.mode);
            const unlocked = btn.dataset.unlocked === 'true';
            
            if (unlocked) {
                playSound('start');
                startGame(mode);
                showScreen('game-screen');
                renderGameScreen();
            } else {
                playSound('locked');
                alert('🔒 Complete previous modes to unlock!');
            }
        });
    });
    
    document.getElementById('settings-btn').addEventListener('click', () => {
        playSound('click');
        document.getElementById('settings-modal').classList.remove('hidden');
        
        document.getElementById('sound-toggle').checked = settings.soundEnabled;
        document.getElementById('music-toggle').checked = settings.musicEnabled;
    });
    
    document.getElementById('how-to-play-btn').addEventListener('click', () => {
        playSound('click');
        document.getElementById('how-to-play-modal').classList.remove('hidden');
    });
    
    document.getElementById('hint-btn').addEventListener('click', handleHintClick);
    
    document.getElementById('skip-btn').addEventListener('click', handleSkipClick);
    
    document.getElementById('quit-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to quit? Progress will be lost!')) {
            playSound('click');
            showScreen('main-menu');
            renderMainMenu();
        }
    });
    
    document.getElementById('play-again-btn').addEventListener('click', () => {
        playSound('click');
        startGame(gameState.currentMode);
        showScreen('game-screen');
        renderGameScreen();
    });
    
    document.getElementById('back-to-menu-btn').addEventListener('click', () => {
        playSound('click');
        showScreen('main-menu');
        renderMainMenu();
    });
    
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            playSound('click');
            btn.closest('.modal').classList.add('hidden');
        });
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                playSound('click');
                modal.classList.add('hidden');
            }
        });
    });
    
    document.getElementById('sound-toggle').addEventListener('change', (e) => {
        settings.soundEnabled = e.target.checked;
        saveSettings();
    });
    
    document.getElementById('music-toggle').addEventListener('change', (e) => {
        settings.musicEnabled = e.target.checked;
        saveSettings();
    });
    
    document.getElementById('reset-progress-btn').addEventListener('click', () => {
        if (resetAllProgress()) {
            document.getElementById('settings-modal').classList.add('hidden');
            renderMainMenu();
            alert('Progress has been reset!');
        }
    });
    
    document.addEventListener('keydown', (e) => {
        const gameScreen = document.getElementById('game-screen');
        if (!gameScreen.classList.contains('active')) return;
        
        const action = handleKeyboardInput(e.key);
        
        if (action) {
            e.preventDefault();
            
            if (action.action === 'selectChoice') {
                const choices = document.querySelectorAll('.choice-btn');
                if (choices[action.index] && !choices[action.index].disabled) {
                    choices[action.index].click();
                }
            } else if (action.action === 'useHint') {
                document.getElementById('hint-btn').click();
            } else if (action.action === 'skipSong') {
                document.getElementById('skip-btn').click();
            }
        }
    });
});
