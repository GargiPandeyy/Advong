const SONGS_DATABASE = [
    {
        id: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        difficulty: "easy",
        blanksCount: 2,
        lyrics: [
            { text: "I've been tryna call" },
            { text: "I've been on my own for long enough" },
            { text: "Maybe you can show me how to", blank: true, correctAnswer: "love", options: ["love", "feel", "dance", "move"] },
            { text: "maybe" },
            { text: "I'm going through", blank: true, correctAnswer: "withdrawals", options: ["withdrawals", "emotions", "changes", "circles"] }
        ]
    },
    {
        id: 2,
        title: "Levitating",
        artist: "Dua Lipa",
        difficulty: "easy",
        blanksCount: 2,
        lyrics: [
            { text: "If you wanna run away with me" },
            { text: "I know a", blank: true, correctAnswer: "galaxy", options: ["galaxy", "paradise", "highway", "hideaway"] },
            { text: "And I can take you for a ride" },
            { text: "I had a", blank: true, correctAnswer: "premonition", options: ["premonition", "celebration", "conversation", "situation"] }
        ]
    },
    {
        id: 3,
        title: "Sunflower",
        artist: "Post Malone & Swae Lee",
        difficulty: "easy",
        blanksCount: 1,
        lyrics: [
            { text: "Needless to say, I keep her in check" },
            { text: "She was a bad-bad, nevertheless" },
            { text: "Callin' it quits now, baby, I'm a", blank: true, correctAnswer: "wreck", options: ["wreck", "mess", "lost", "gone"] }
        ]
    },
    {
        id: 4,
        title: "New Rules",
        artist: "Dua Lipa",
        difficulty: "easy",
        blanksCount: 2,
        lyrics: [
            { text: "One, don't pick up the", blank: true, correctAnswer: "phone", options: ["phone", "call", "text", "message"] },
            { text: "You know he's only calling 'cause he's drunk and alone" },
            { text: "Two, don't let him in" },
            { text: "You'll have to kick him out", blank: true, correctAnswer: "again", options: ["again", "tonight", "away", "forever"] }
        ]
    },
    {
        id: 5,
        title: "As It Was",
        artist: "Harry Styles",
        difficulty: "medium",
        blanksCount: 4,
        lyrics: [
            { text: "Holding me back, gravity's holding me", blank: true, correctAnswer: "back", options: ["back", "down", "close", "tight"] },
            { text: "I want you to hold out the palm of your", blank: true, correctAnswer: "hand", options: ["hand", "heart", "love", "life"] },
            { text: "Why don't we leave it at that?" },
            { text: "Nothing to say, when everything gets in the", blank: true, correctAnswer: "way", options: ["way", "past", "end", "dark"] },
            { text: "Seems you cannot be", blank: true, correctAnswer: "replaced", options: ["replaced", "embraced", "erased", "disgraced"] }
        ]
    },
    {
        id: 6,
        title: "Sorry",
        artist: "Justin Bieber",
        difficulty: "medium",
        blanksCount: 3,
        lyrics: [
            { text: "You gotta go and get", blank: true, correctAnswer: "angry", options: ["angry", "lonely", "crazy", "sorry"] },
            { text: "at all of my honesty" },
            { text: "You know I try but I don't do too", blank: true, correctAnswer: "well", options: ["well", "good", "much", "bad"] },
            { text: "with apologies" },
            { text: "I hope I don't run out of", blank: true, correctAnswer: "time", options: ["time", "luck", "words", "chances"] }
        ]
    },
    {
        id: 7,
        title: "Alone",
        artist: "Alan Walker",
        difficulty: "medium",
        blanksCount: 4,
        lyrics: [
            { text: "Lost in your mind" },
            { text: "I wanna know" },
            { text: "Am I losing my mind" },
            { text: "Never let me go" },
            { text: "If this night is not forever" },
            { text: "At least we are together" },
            { text: "I know I'm not", blank: true, correctAnswer: "alone", options: ["alone", "unknown", "gone", "stone"] },
            { text: "I know I'm not alone" },
            { text: "Anywhere, whenever" },
            { text: "Apart, but still together" },
            { text: "I know I'm not", blank: true, correctAnswer: "alone", options: ["alone", "unknown", "gone", "stone"] },
            { text: "I know I'm not alone" },
            { text: "I know I'm not alone" },
            { text: "I know I'm not alone" },
            { text: "Unconscious mind" },
            { text: "I'm wide", blank: true, correctAnswer: "awake", options: ["awake", "alive", "aware", "above"] },
            { text: "Wanna feel one last time" },
            { text: "Take my pain away" },
            { text: "If this night is not forever" },
            { text: "At least we are together" },
            { text: "I know I'm not", blank: true, correctAnswer: "alone", options: ["alone", "unknown", "gone", "stone"] },
            { text: "I know I'm not alone" },
            { text: "Anywhere, whenever" },
            { text: "Apart, but still together" },
            { text: "I know I'm not", blank: true, correctAnswer: "alone", options: ["alone", "unknown", "gone", "stone"] },
            { text: "I know I'm not alone" }
        ]
    },
    {
        id: 8,
        title: "I Don't Care",
        artist: "Ed Sheeran & Justin Bieber",
        difficulty: "medium",
        blanksCount: 5,
        lyrics: [
            { text: "I'm at a", blank: true, correctAnswer: "party", options: ["party", "gathering", "function", "venue"] },
            { text: "I don't wanna be here" },
            { text: "They're all around me" },
            { text: "In my", blank: true, correctAnswer: "peripheral", options: ["peripheral", "personal", "visible", "general"] },
            { text: "But I don't care as long as you're", blank: true, correctAnswer: "here", options: ["here", "near", "clear", "dear"] },
            { text: "I don't ever", blank: true, correctAnswer: "wanna", options: ["wanna", "gonna", "needta", "hafta"] },
            { text: "leave this", blank: true, correctAnswer: "conversation", options: ["conversation", "celebration", "situation", "location"] }
        ]
    },
    {
        id: 9,
        title: "Starboy",
        artist: "The Weeknd ft. Daft Punk",
        difficulty: "hard",
        blanksCount: 6,
        lyrics: [
            { text: "I'm tryna put you in the worst", blank: true, correctAnswer: "mood", options: ["mood", "place", "state", "vibe"] },
            { text: "ah" },
            { text: "P1 cleaner than your church", blank: true, correctAnswer: "shoes", options: ["shoes", "pews", "views", "news"] },
            { text: "ah" },
            { text: "Milli point two just to hurt", blank: true, correctAnswer: "you", options: ["you", "them", "her", "him"] },
            { text: "ah" },
            { text: "All red", blank: true, correctAnswer: "Lamb", options: ["Lamb", "Benz", "Wraith", "Ghost"] },
            { text: "just to", blank: true, correctAnswer: "tease", options: ["tease", "please", "ease", "seize"] },
            { text: "you, ah" },
            { text: "None of these toys on", blank: true, correctAnswer: "lease", options: ["lease", "peace", "fleece", "cease"] }
        ]
    },
    {
        id: 10,
        title: "Night Changes",
        artist: "One Direction",
        difficulty: "hard",
        blanksCount: 5,
        lyrics: [
            { text: "Going out tonight, changes into something", blank: true, correctAnswer: "red", options: ["red", "blue", "new", "true"] },
            { text: "Her mother doesn't like that kind of", blank: true, correctAnswer: "dress", options: ["dress", "mess", "stress", "guess"] },
            { text: "Everything she never had, she's showing", blank: true, correctAnswer: "off", options: ["off", "up", "out", "away"] },
            { text: "Driving too fast, moon is breaking through her", blank: true, correctAnswer: "hair", options: ["hair", "stare", "care", "air"] },
            { text: "She's heading for something that she won't", blank: true, correctAnswer: "forget", options: ["forget", "regret", "reset", "upset"] }
        ]
    },
    {
        id: 11,
        title: "Rockstar",
        artist: "Post Malone ft. 21 Savage",
        difficulty: "hard",
        blanksCount: 7,
        lyrics: [
            { text: "I've been living like a", blank: true, correctAnswer: "rockstar", options: ["rockstar", "popstar", "superstar", "moviestar"] },
            { text: "Hit a lotta limestones, had to change the", blank: true, correctAnswer: "locks", options: ["locks", "clocks", "stocks", "blocks"] },
            { text: "now" },
            { text: "Livin' like a rockstar, I'm livin' like a", blank: true, correctAnswer: "rockstar", options: ["rockstar", "popstar", "rapper", "baller"] },
            { text: "Sweeter than a Pop-Tart, you know you are", blank: true, correctAnswer: "not", options: ["not", "hot", "what", "top"] },
            { text: "hard" },
            { text: "Living life fast, hope I don't", blank: true, correctAnswer: "crash", options: ["crash", "dash", "flash", "smash"] },
            { text: "Pull up in a new", blank: true, correctAnswer: "foreign", options: ["foreign", "morgan", "jordan", "organs"] },
            { text: "Got a couple", blank: true, correctAnswer: "shooters", options: ["shooters", "boosters", "roosters", "looters"] }
        ]
    },
    {
        id: 12,
        title: "Alone",
        artist: "Marshmello",
        difficulty: "hard",
        blanksCount: 6,
        lyrics: [
            { text: "I'm so", blank: true, correctAnswer: "alone", options: ["alone", "unknown", "gone", "stone"] },
            { text: "Nothing feels like", blank: true, correctAnswer: "home", options: ["home", "rome", "dome", "roam"] },
            { text: "I'm so alone" },
            { text: "Try to find my way back", blank: true, correctAnswer: "home", options: ["home", "rome", "dome", "roam"] },
            { text: "to you" },
            { text: "I'm so alone, nothing feels like", blank: true, correctAnswer: "home", options: ["home", "rome", "dome", "roam"] },
            { text: "I'm so", blank: true, correctAnswer: "alone", options: ["alone", "unknown", "gone", "stone"] },
            { text: "Try to find my way back", blank: true, correctAnswer: "home", options: ["home", "rome", "dome", "roam"] },
            { text: "to you" }
        ]
    },
    {
        id: 13,
        title: "Taki Taki",
        artist: "DJ Snake ft. Selena Gomez, Ozuna, Cardi B",
        difficulty: "easy",
        blanksCount: 2,
        lyrics: [
            { text: "Wo-oh, oh-oh" },
            { text: "Báilame como si fuera la última", blank: true, correctAnswer: "vez", options: ["vez", "luz", "voz", "mes"] },
            { text: "Y enséñame ese pasito que no", blank: true, correctAnswer: "sé", options: ["sé", "ves", "des", "mes"] }
        ]
    },
    {
        id: 14,
        title: "Shape of You",
        artist: "Ed Sheeran",
        difficulty: "easy",
        blanksCount: 2,
        lyrics: [
            { text: "The club isn't the best place to find a", blank: true, correctAnswer: "lover", options: ["lover", "dancer", "stranger", "singer"] },
            { text: "So the bar is where I go" },
            { text: "Me and my friends at the table doing", blank: true, correctAnswer: "shots", options: ["shots", "drinks", "talks", "games"] }
        ]
    },
    {
        id: 15,
        title: "Peaches",
        artist: "Justin Bieber ft. Daniel Caesar, Giveon",
        difficulty: "medium",
        blanksCount: 4,
        lyrics: [
            { text: "I got my", blank: true, correctAnswer: "peaches", options: ["peaches", "beaches", "reasons", "features"] },
            { text: "out in Georgia" },
            { text: "I get my weed from", blank: true, correctAnswer: "California", options: ["California", "Arizona", "Carolina", "Mongolia"] },
            { text: "That's that", blank: true, correctAnswer: "shit", options: ["shit", "hit", "bit", "kit"] },
            { text: "I don't get", blank: true, correctAnswer: "worried", options: ["worried", "hurried", "married", "carried"] }
        ]
    }
];

function getSongsForMode(mode) {
    const songCount = mode;
    const selectedSongs = [];
    
    let easyCount, mediumCount, hardCount;
    
    if (mode === 5) {
        easyCount = 2;
        mediumCount = 2;
        hardCount = 1;
    } else if (mode === 7) {
        easyCount = 2;
        mediumCount = 3;
        hardCount = 2;
    } else if (mode === 9) {
        easyCount = 2;
        mediumCount = 3;
        hardCount = 4;
    }
    
    const easySongs = SONGS_DATABASE.filter(song => song.difficulty === 'easy');
    const mediumSongs = SONGS_DATABASE.filter(song => song.difficulty === 'medium');
    const hardSongs = SONGS_DATABASE.filter(song => song.difficulty === 'hard');
    
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };
    
    const availableEasy = Math.min(easyCount, easySongs.length);
    const availableMedium = Math.min(mediumCount, mediumSongs.length);
    const availableHard = Math.min(hardCount, hardSongs.length);
    
    selectedSongs.push(...shuffleArray(easySongs).slice(0, availableEasy));
    selectedSongs.push(...shuffleArray(mediumSongs).slice(0, availableMedium));
    selectedSongs.push(...shuffleArray(hardSongs).slice(0, availableHard));
    
    console.log(`Selected ${selectedSongs.length} songs (${availableEasy} easy, ${availableMedium} medium, ${availableHard} hard)`);
    
    return shuffleArray(selectedSongs);
}
