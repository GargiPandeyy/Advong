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
        blanksCount: 5, // Corrected from 4
        lyrics: [
            { text: "Lost in your mind, I wanna know" },
            { text: "Am I losing my mind? Never let me go" },
            { text: "If this night is not forever, at least we are", blank: true, correctAnswer: "together", options: ["together", "forever", "better", "closer"] },
            { text: "I know I'm not", blank: true, correctAnswer: "alone", options: ["alone", "unknown", "gone", "stone"] },
            { text: "Anywhere, whenever, apart, but still together" },
            { text: "I know I'm not", blank: true, correctAnswer: "alone", options: ["alone", "unknown", "gone", "stone"] },
            { text: "Unconscious mind, I'm wide", blank: true, correctAnswer: "awake", options: ["awake", "alive", "aware", "above"] },
            { text: "Wanna feel one last time, take my pain", blank: true, correctAnswer: "away", options: ["away", "today", "okay", "astray"] },
        ]
    },
    {
        id: 8,
        title: "I Don't Care",
        artist: "Ed Sheeran & Justin Bieber",
        difficulty: "medium",
        blanksCount: 3, // Corrected
        lyrics: [
            { text: "'Cause I don't care as long as you just hold me", blank: true, correctAnswer: "near", options: ["near", "here", "dear", "clear"] },
            { text: "You can take me", blank: true, correctAnswer: "anywhere", options: ["anywhere", "somewhere", "everywhere", "nowhere"] },
            { text: "And you're making me feel like I'm loved by", blank: true, correctAnswer: "somebody", options: ["somebody", "anybody", "everybody", "nobody"] }
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
        blanksCount: 4, // Corrected
        lyrics: [
            { text: "Man, I feel just like a", blank: true, correctAnswer: "rockstar", options: ["rockstar", "popstar", "superstar", "moviestar"] },
            { text: "All my brothers got that gas" },
            { text: "And they always be smokin' like a", blank: true, correctAnswer: "Rasta", options: ["Rasta", "gangsta", "monster", "master"] },
            { text: "Switchin' my whip, came back in a", blank: true, correctAnswer: "fighter", options: ["fighter", "spider", "rider", "viper"] },
            { text: "I be in the kitchen, cookin' things up like a", blank: true, correctAnswer: "pastor", options: ["pastor", "master", "doctor", "baker"] }
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
        blanksCount: 3, // Corrected
        lyrics: [
            { text: "I got my", blank: true, correctAnswer: "peaches", options: ["peaches", "beaches", "reasons", "features"] },
            { text: "out in Georgia (oh, yeah, shit)" },
            { text: "I get my weed from", blank: true, correctAnswer: "California", options: ["California", "Arizona", "Carolina", "Mongolia"] },
            { text: "(that's that shit)" },
            { text: "I get my light right from the", blank: true, correctAnswer: "source", options: ["source", "course", "force", "horse"] },
            { text: "yeah (yeah, that's it)" }
        ]
    },
    {
        id: 16,
        title: "Circles",
        artist: "Post Malone",
        difficulty: "medium",
        blanksCount: 3,
        lyrics: [
            { text: "We couldn't turn around 'til we were upside", blank: true, correctAnswer: "down", options: ["down", "around", "found", "bound"] },
            { text: "I'll be the bad guy now, but know I ain't too", blank: true, correctAnswer: "proud", options: ["proud", "loud", "allowed", "crowd"] },
            { text: "I couldn't be there even when I", blank: true, correctAnswer: "tried", options: ["tried", "cried", "lied", "died"] }
        ]
    },
    {
        id: 17,
        title: "Memories",
        artist: "Maroon 5",
        difficulty: "easy",
        blanksCount: 2,
        lyrics: [
            { text: "Here's to the ones that we", blank: true, correctAnswer: "got", options: ["got", "lost", "loved", "know"] },
            { text: "Cheers to the wish you were here, but you're not" },
            { text: "'Cause the drinks bring back all the", blank: true, correctAnswer: "memories", options: ["memories", "enemies", "remedies", "centuries"] }
        ]
    },
    {
        id: 18,
        title: "Dynamite",
        artist: "BTS",
        difficulty: "medium",
        blanksCount: 4,
        lyrics: [
            { text: "'Cause I, I, I'm in the", blank: true, correctAnswer: "stars", options: ["stars", "bars", "cars", "mars"] },
            { text: "tonight" },
            { text: "So watch me bring the", blank: true, correctAnswer: "fire", options: ["fire", "wire", "higher", "liar"] },
            { text: "and set the night", blank: true, correctAnswer: "alight", options: ["alight", "alright", "upright", "delight"] },
            { text: "Shining through the city with a little funk and", blank: true, correctAnswer: "soul", options: ["soul", "goal", "roll", "bowl"] }
        ]
    },
    {
        id: 19,
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        difficulty: "easy",
        blanksCount: 1,
        lyrics: [
            { text: "Tastes like strawberries on a summer evening" },
            { text: "And it sounds just like a", blank: true, correctAnswer: "song", options: ["song", "dream", "breeze", "kiss"] },
            { text: "I want more berries and that summer feeling" }
        ]
    },
    {
        id: 20,
        title: "Good 4 U",
        artist: "Olivia Rodrigo",
        difficulty: "medium",
        blanksCount: 5,
        lyrics: [
            { text: "Well, good for you, I guess you moved", blank: true, correctAnswer: "on", options: ["on", "out", "up", "away"] },
            { text: "really easily" },
            { text: "You found a new", blank: true, correctAnswer: "girl", options: ["girl", "world", "pearl", "swirl"] },
            { text: "and it only took a couple", blank: true, correctAnswer: "weeks", options: ["weeks", "days", "months", "years"] },
            { text: "Remember when you said that you wanted to give me the", blank: true, correctAnswer: "world", options: ["world", "girl", "pearl", "swirl"] },
            { text: "And good for you, I guess that you've been working on", blank: true, correctAnswer: "yourself", options: ["yourself", "myself", "itself", "himself"] }
        ]
    },
    {
        id: 21,
        title: "Senorita",
        artist: "Shawn Mendes & Camila Cabello",
        difficulty: "hard",
        blanksCount: 6,
        lyrics: [
            { text: "I love it when you call me", blank: true, correctAnswer: "señorita", options: ["señorita", "my baby", "bonita", "chiquita"] },
            { text: "I wish I could pretend I didn't", blank: true, correctAnswer: "need", options: ["need", "feel", "want", "love"] },
            { text: "ya" },
            { text: "But every touch is ooh la la la" },
            { text: "It's true, la la", blank: true, correctAnswer: "la", options: ["la", "da", "na", "ma"] },
            { text: "Ooh, I should be", blank: true, correctAnswer: "running", options: ["running", "coming", "walking", "jumping"] },
            { text: "Ooh, you keep me", blank: true, correctAnswer: "coming", options: ["coming", "running", "humming", "drumming"] },
            { text: "for", blank: true, correctAnswer: "ya", options: ["ya", "me", "us", "her"] }
        ]
    },
    {
        id: 22,
        title: "Without Me",
        artist: "Halsey",
        difficulty: "hard",
        blanksCount: 7,
        lyrics: [
            { text: "Found you when your heart was", blank: true, correctAnswer: "broke", options: ["broke", "cold", "lost", "old"] },
            { text: "I filled your cup until it", blank: true, correctAnswer: "overflowed", options: ["overflowed", "exploded", "corroded", "unloaded"] },
            { text: "Took it so far to keep you", blank: true, correctAnswer: "close", options: ["close", "home", "whole", "known"] },
            { text: "I was afraid to leave you on your", blank: true, correctAnswer: "own", options: ["own", "phone", "zone", "bone"] },
            { text: "I said I'd catch you if you", blank: true, correctAnswer: "fall", options: ["fall", "call", "crawl", "stall"] },
            { text: "And if they laugh, then", blank: true, correctAnswer: "forget", options: ["forget", "regret", "upset", "outlet"] },
            { text: "'em all" },
            { text: "And then I got you off your", blank: true, correctAnswer: "knees", options: ["knees", "feet", "seat", "beat"] }
        ]
    },
    // --- NEW SONGS START HERE ---
    {
        id: 23,
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        difficulty: "easy",
        blanksCount: 2,
        lyrics: [
            { text: "This hit, that ice cold" },
            { text: "Michelle Pfeiffer, that white gold" },
            { text: "This one for them hood girls" },
            { text: "Them good girls, straight", blank: true, correctAnswer: "masterpieces", options: ["masterpieces", "celebrities", "fantasies", "melodies"] },
            { text: "Stylin', wilin', livin' it up in the city" },
            { text: "Don't believe me just", blank: true, correctAnswer: "watch", options: ["watch", "wait", "see", "try"] }
        ]
    },
    {
        id: 24,
        title: "Bohemian Rhapsody",
        artist: "Queen",
        difficulty: "medium",
        blanksCount: 4,
        lyrics: [
            { text: "Is this the real", blank: true, correctAnswer: "life", options: ["life", "deal", "dream", "thing"] },
            { text: "Is this just", blank: true, correctAnswer: "fantasy", options: ["fantasy", "fallacy", "memory", "tragedy"] },
            { text: "Caught in a", blank: true, correctAnswer: "landslide", options: ["landslide", "nightmare", "daydream", "story"] },
            { text: "No escape from", blank: true, correctAnswer: "reality", options: ["reality", "causality", "formality", "brutality"] }
        ]
    },
    {
        id: 25,
        title: "Lose Yourself",
        artist: "Eminem",
        difficulty: "hard",
        blanksCount: 4,
        lyrics: [
            { text: "His palms are sweaty, knees weak, arms are", blank: true, correctAnswer: "heavy", options: ["heavy", "ready", "shaky", "steady"] },
            { text: "There's vomit on his sweater already, mom's", blank: true, correctAnswer: "spaghetti", options: ["spaghetti", "lasagna", "macaroni", "fettuccine"] },
            { text: "He's nervous, but on the surface he looks calm and", blank: true, correctAnswer: "ready", options: ["ready", "heavy", "steady", "deadly"] },
            { text: "To drop bombs, but he keeps on", blank: true, correctAnswer: "forgettin'", options: ["forgettin'", "regrettin'", "sweatin'", "gettin'"] }
        ]
    },
    {
        id: 26,
        title: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
        difficulty: "easy",
        blanksCount: 2,
        lyrics: [
            { text: "I got this feeling inside my", blank: true, correctAnswer: "bones", options: ["bones", "veins", "shoes", "soul"] },
            { text: "It goes electric, wavy when I turn it on" },
            { text: "All through my city, all through my", blank: true, correctAnswer: "home", options: ["home", "zone", "phone", "roam"] },
            { text: "We're flying up, no ceiling, when we in our zone" }
        ]
    },
    {
        id: 27,
        title: "Rolling in the Deep",
        artist: "Adele",
        difficulty: "medium",
        blanksCount: 4,
        lyrics: [
            { text: "There's a fire starting in my", blank: true, correctAnswer: "heart", options: ["heart", "soul", "head", "veins"] },
            { text: "Reaching a fever pitch and it's bringin' me out the", blank: true, correctAnswer: "dark", options: ["dark", "park", "start", "mark"] },
            { text: "Finally, I can see you crystal", blank: true, correctAnswer: "clear", options: ["clear", "near", "here", "dear"] },
            { text: "Go 'head and sell me out and I'll lay your", blank: true, correctAnswer: "ship", options: ["ship", "shit", "grip", "cards"] },
            { text: "bare" }
        ]
    },
    {
        id: 28,
        title: "Bad Guy",
        artist: "Billie Eilish",
        difficulty: "medium",
        blanksCount: 3,
        lyrics: [
            { text: "White shirt now red, my bloody", blank: true, correctAnswer: "nose", options: ["nose", "rose", "clothes", "shows"] },
            { text: "Sleepin', you're on your tippy", blank: true, correctAnswer: "toes", options: ["toes", "pose", "rows", "goes"] },
            { text: "Creepin' around like no one", blank: true, correctAnswer: "knows", options: ["knows", "shows", "grows", "flows"] },
            { text: "Think you're so criminal" }
        ]
    },
    {
        id: 29,
        title: "Believer",
        artist: "Imagine Dragons",
        difficulty: "hard",
        blanksCount: 5,
        lyrics: [
            { text: "First things first, I'ma say all the words inside my", blank: true, correctAnswer: "head", options: ["head", "chest", "mind", "heart"] },
            { text: "I'm fired up and tired of the way that things have", blank: true, correctAnswer: "been", options: ["been", "gone", "seemed", "felt"] },
            { text: "oh-ooh" },
            { text: "The way that things have been, oh-ooh" },
            { text: "Second thing second, don't you tell me what you think that I can", blank: true, correctAnswer: "be", options: ["be", "do", "see", "say"] },
            { text: "I'm the one at the sail, I'm the master of my", blank: true, correctAnswer: "sea", options: ["sea", "ship", "fate", "crew"] },
            { text: "oh-ooh, the master of my sea, oh-ooh" },
            { text: "Pain! You made me a, you made me a believer,", blank: true, correctAnswer: "believer", options: ["believer", "survivor", "fighter", "winner"] }
        ]
    }
];

function getSongsForMode(mode) {
    // This function is well-written and requires no changes.
    // It will work perfectly with the expanded and corrected database.
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