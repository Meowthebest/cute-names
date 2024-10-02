// List of cute names categorized by theme (same as before)
const cuteNames = {
    fruit: [
        "BerryBoo", "CherryPop", "KiwiMew", "PeachyKiss", "LemonPie", "BlueberryBabe", 
        "SweetGrape", "MelonPuff", "CitrusStar", "MangoMochi", "StrawberryFizz", "WatermelonWish", 
        "PineappleTwirl", "AppleSugar", "PearCharm", "PlumPetal", "LycheeDream", "OrangeTangerine", 
        "CoconutSprout", "BananaBliss"
    ],
    cat: [
        "KittyWhiskers", "PurrfectMeow", "SnowPaws", "CuddleMittens", "FluffyPurr", "NekoNaps", 
        "Meowberry", "WhiskerTwitch", "PurrMewMew", "TuxedoKitty", "MidnightMeow", "PurrPrincess", 
        "CalicoCutie", "TabbyDream", "KittenLove", "CheshireMew", "MoonlightPaws", "FuzzyTail", 
        "SiameseWhiskers", "MewMallow"
    ],
    anime: [
        "SakuraBlossom", "KawaiiChan", "MochiMew", "OtakuHeart", "ChibiDreamer", "TsundereStar", 
        "SenpaiLuv", "YumeHime", "KitsuneCharm", "NekoShoujo", "AmaiLoli", "AnimeGaze", 
        "KiraShine", "BakaSparkle", "UsagiDream", "RamenRanger", "DangoPrincess", "AkariMoon", 
        "KawaiiPikachu", "AstroShoujo"
    ],
    league: [
        "LuxLight", "AhriFoxFire", "JinxSpark", "EzrealTwinkle", "YasuoWhirlwind", "RivenBlade", 
        "KatarinaClaw", "PoppyLulu", "ZoeStardust", "MissFortuneCharm", "JannaBreeze", "NamiWave", 
        "SorakaWish", "YoneBlade", "TeemoMushroom", "AsheFrost", "KayleWings", "SeraphineSong", 
        "BardMelody", "LeonaSunlight"
    ],
    genshin: [
        "VentiBreeze", "KleeSparkle", "DilucFlame", "ChildeWave", "LumineLight", "PaimonGuide", 
        "XiaoShadow", "HuTaoSpirit", "JeanWind", "GanyuSnow", "KeqingLightning", "NoelleShield", 
        "SucrosePotion", "FischlRaven", "DionaClaw", "MonaWater", "NingguangStar", "XianglingFlame", 
        "BarbaraWave", "AyakaSnowflake"
    ],
    sanrio: [
        "HelloKittyKiss", "MyMelodyDream", "CinnamorollCloud", "PompompurinFluff", "KuromiTwinkle", 
        "KeroppiHop", "LittleTwinStars", "TuxedoSamChill", "ChococatMeow", "GudetamaYawn", 
        "PochaccoJoy", "KikiLalaDream", "KirimiFish", "MimmyKitty", "UsahanaBloom", "CinnamoFluff", 
        "LalaStarshine", "KuromiQueen", "KeroppiSplash", "PurinPaw"
    ],
    miscellaneous: [
        "BubbleGumPop", "CupcakeWhirl", "SugarNoodle", "StarryDreamer", "GlitterBunny", 
        "CandyFlossCloud", "MarshmallowMew", "RainbowSprinkle", "FairyTaleWish", "BunnyHopStar", 
        "SleepyPuff", "MilkTeaMochi", "CottonCandyKiss", "MochiMoon", "JellyBeanGiggles", 
        "ButtonBunny", "CinnamonCloud", "DreamyBubbles", "SparkleHoney", "TwinkleBerry"
    ],
    clean: [
        "Berry", "Cherry", "Kiwi", "Peach", "Lemon", "Blueberry", "Grape", "Melon", "Citrus", "Mango",
        "Strawberry", "Watermelon", "Pineapple", "Apple", "Pear", "Plum", "Lychee", "Orange", "Coconut", "Banana",
        "Kitty", "Whiskers", "Snow", "Cuddle", "Fluffy", "Neko", "Meow", "Whisker", "Moonlight", "Tail",
        "Sakura", "Kawaii", "Mochi", "Heart", "Dreamer", "Star", "Senpai", "Yume", "Kitsune", "Amai",
        "Lux", "Ahri", "Jinx", "Ezreal", "Yasuo", "Riven", "Katarina", "Poppy", "Zoe", "MissFortune",
        "Venti", "Klee", "Diluc", "Childe", "Lumine", "Xiao", "Jean", "Ganyu", "Keqing", "Noelle",
        "HelloKitty", "MyMelody", "Cinnamoroll", "Pompompurin", "Kuromi", "Keroppi", "LittleTwinStars",
        "Bubble", "Cupcake", "Sugar", "Starry", "Glitter", "Marshmallow", "Rainbow", "Fairy", "Bunny",
        "Sleepy", "Milk", "Cotton", "Jelly", "Button", "Cinnamon", "Dreamy", "Sparkle"
    ]
};

// Prefix and Suffix list for mixing
const prefixes = [
    "Sugar", "Fuzzy", "Moon", "Star", "Cuddle", "Mochi", "Dream", "Fluffy", "Glitter", "Panda"
];
const suffixes = [
    "Bunny", "Paws", "Tail", "Whiskers", "Pop", "Sprout", "Berry", "Mew", "Shine", "Mochi"
];

// Recently generated names history to avoid repetitions
const recentNames = new Set();
const MAX_HISTORY = 5;  // Maximum recent names to remember

// Function to get a random element from an array, excluding recent names
function getRandomElement(arr) {
    let filteredArr = arr.filter(name => !recentNames.has(name));
    
    // If filtered array is empty, reset the recent names
    if (filteredArr.length === 0) {
        recentNames.clear();
        filteredArr = arr;
    }

    const randomElement = filteredArr[Math.floor(Math.random() * filteredArr.length)];
    
    // Add the new name to the recent names and ensure we don't exceed max history
    recentNames.add(randomElement);
    if (recentNames.size > MAX_HISTORY) {
        recentNames.delete([...recentNames][0]);  // Remove the oldest entry
    }
    
    return randomElement;
}

// Function to generate a cute username based on a selected category
function generateCuteName(theme, cleanOnly = false) {
    let baseName = getRandomElement(cuteNames[theme]);

    // Generate prefix and suffix only if not clean
    if (!cleanOnly && theme !== 'clean') {
        const includePrefix = document.querySelector('#prefix-checkbox').checked;
        const includeSuffix = document.querySelector('#suffix-checkbox').checked;

        if (includePrefix) {
            baseName = getRandomElement(prefixes) + baseName;
        }
        if (includeSuffix) {
            baseName += getRandomElement(suffixes);
        }
    }

    return baseName;
}

// Function to copy the generated name to the clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert(`Copied: ${text}`);
}

// Event listener for generating username
document.querySelector('#generate-btn').addEventListener('click', () => {
    const theme = document.querySelector('#category-select').value;
    const cleanOnly = theme === 'clean'; // Automatically set clean if clean theme is chosen
    const generatedName = generateCuteName(theme, cleanOnly);
    
    document.querySelector('#result').textContent = generatedName;
});

// Event listener for copying the generated username when clicked
document.querySelector('#result').addEventListener('click', function() {
    const generatedName = document.querySelector('#result').textContent;
    if (generatedName) {
        copyToClipboard(generatedName);
    }
});
