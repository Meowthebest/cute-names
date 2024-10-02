// List of cute names categorized by theme
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
    ]
};

// Prefix and Suffix list for mixing
const prefixes = [
    "Sugar", "Fuzzy", "Moon", "Star", "Cuddle", "Mochi", "Dream", "Fluffy", "Glitter", "Panda"
];
const suffixes = [
    "Bunny", "Paws", "Tail", "Whiskers", "Pop", "Sprout", "Berry", "Mew", "Shine", "Mochi"
];

// Function to get a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a cute username based on a selected category
function generateCuteName(theme, cleanOnly = false) {
    let baseName = cleanOnly ? getRandomElement(cuteNames[theme]) : getRandomElement(cuteNames[theme]);

    // Generate prefix and suffix only if not clean
    if (!cleanOnly) {
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

// Event listener for generating username
document.querySelector('#generate-btn').addEventListener('click', () => {
    const theme = document.querySelector('#category-select').value;
    const cleanOnly = document.querySelector('#clean-checkbox').checked; // New checkbox for clean names
    const generatedName = generateCuteName(theme, cleanOnly);
    
    document.querySelector('#result').textContent = generatedName;
});
