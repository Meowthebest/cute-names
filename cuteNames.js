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
        "Sleepy", "Milk", "Cotton", "Jelly", "Button", "Cinnamon", "Dreamy", "Sparkle", "Blossom", "Flora", 
        "Petal", "Rose", "Lily", "Tulip", "Sunshine", "Lavender", "Clover", "Ivy", "Breeze", "Sky", "Cloud", 
        "Starshine", "Moonbeam", "Galaxy", "Nova", "Starlight", "Glow", "Dawn", "Angel", "Sweetie", "Joy", 
        "Happy", "Honey", "Maple", "Peanut", "Buttercup", "Snowflake", "Twinkle", "Panda", "Bear", "Cub", 
        "Fox", "Wolf", "Lion", "Tiger", "Bumble", "Puff", "Frost", "Bliss", "Magic", "Wish", "Misty", 
        "Whisper", "Shimmer", "Crystal", "Ocean", "Wave", "Shell", "Pearl", "Luna", "Sunny", "Glory", 
        "Starfish", "Coral", "River", "Leaf", "Fern", "Tide", "Autumn", "Aurora", "Winter", "Echo", 
        "Mystic", "Celeste", "Opal", "Jewel", "Serenity", "Sapphire", "Raine", "Feather", "Ash", "Ember", 
        "Flare", "Nova", "Blitz", "Cascade", "Silver", "Dust", "Poppy", "Blush", "Twirl", "Velvet", 
        "Harmony", "Fawn", "Butterfly", "Daisy", "Petunia", "Hazel", "Clara", "Violet", "Meadow", 
        "Pine", "Glacier", "Sprout", "Fable", "Meadow", "Rosebud", "Snowdrop", "Pebble", "Icicle", "Brisk", 
        "Rainy", "Shady", "Sunray", "Snowbell", "Cloudy", "Windy", "Moonshadow", "Sunkiss", "Petite", "Glint", 
        "Moonmist", "Ivory", "Frosty", "Pixie", "Wisteria", "Iris", "Briar", "Lace", "Topaz", "Mint", 
        "Jade", "Flare", "Vesper", "Solstice", "Dew", "Petra", "Harbor", "Basil", "Cedar", "Flicker", 
        "Plume", "Ripple", "Cinder", "Faye", "Swan", "Pinecone", "Mauve", "Bliss", "Twilight", "Aspen", 
        "Lyric", "Caspian", "Dewdrop", "Sable", "Violet", "Dream", "Wander", "Dove", "Whimsy", "Lilac", 
        "Coral", "Sunny", "Shadow", "Moonlit", "Windsong", "Zephyr", "Seabreeze", "Glimmer", "Frostbite", 
        "Eclipse", "Storm", "Crimson", "Carmine", "Rouge", "Starfall", "Lullaby", "Delight", "Dandelion", 
        "Sunray", "Bramble", "Vine", "Spritz", "Brisk", "Sprinkle", "Mimosa", "Wren", "Canary", "Pansy", 
        "Orchid", "Dahlia", "Blissful", "Lively", "Opal", "Zephyr", "Nimbus", "Aurora", "Eden", "Fawn", 
        "Flicker", "Sonnet", "Talon", "Willow", "Velvet", "Whisper", "Sparrow", "Wisteria", "Flick", 
        "Spritz", "Opal", "Serene", "Lark", "Whimsy", "Aurora", "Nimbus", "Serene", "Breeze", "Mirth", 
        "Tranquil", "Verdant", "Sierra", "Echo", "Wisp", "Seraph", "Tundra", "Celestial", "Tempest", 
        "Cypress", "Astra", "Reverie", "Daydream", "Twilight", "Breeze", "Serenity", "Glade", "Aurora", 
        "Cascade", "Sylvan", "Valley", "Meadow", "Clover", "Ember", "Poppy", "Coral", "Dove", "Winter", 
        "Raven", "Ivy", "Jade", "Pine", "Aspen", "Willow", "Frost", "Feather", "Briar", "Pearl", "Lace", 
        "Starry", "Rosewood", "Moss", "Lotus", "Fawn", "Lilac", "Haze", "Velvet", "Flurry", "Thistle", 
        "Opaline", "Luster", "Shimmer", "Carmine", "Citrine", "Nettle", "Mistral", "Rivulet", "Drift", 
        "Aether", "Frostbite", "Blush", "Amethyst", "Topaz", "Teal", "Aqua", "Harbor", "Willow", 
        "Mist", "Wave", "Drift", "Pebble", "Basil", "Zephyr"
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
let recentNames = new Set();

// Function to get a random element from an array, excluding recent names
function getRandomElement(arr) {
    let filteredArr = arr.filter(name => !recentNames.has(name));
    
    // If filtered array is empty, reset the recent names
    if (filteredArr.length === 0) {
        recentNames.clear();
        filteredArr = arr;
    }

    const randomElement = filteredArr[Math.floor(Math.random() * filteredArr.length)];
    
    // Add the new name to the recent names set
    recentNames.add(randomElement);
    
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

// Function to generate multiple cute names at once
function generateMultipleCuteNames(theme, cleanOnly = false, count = 1) {
    recentNames.clear();  // Clear the recent names set before generating new names
    const generatedNames = [];
    
    for (let i = 0; i < count; i++) {
        generatedNames.push(generateCuteName(theme, cleanOnly));
    }

    return generatedNames;
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
    const count = parseInt(document.querySelector('#count-select').value);  // Get the number of names to generate

    const generatedNames = generateMultipleCuteNames(theme, cleanOnly, count);

    // Clear and display each name in a separate box
    const resultContainer = document.querySelector('#result');
    resultContainer.innerHTML = '';  // Clear previous results

    generatedNames.forEach(name => {
        const nameBox = document.createElement('div');
        nameBox.classList.add('name-box');
        nameBox.textContent = name;
        nameBox.addEventListener('click', () => copyToClipboard(name));  // Add copy functionality
        resultContainer.appendChild(nameBox);
    });
});

