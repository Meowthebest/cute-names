List of cute names categorized by theme
const cuteNames = {
    fruit [
        BerryBoo, CherryPop, KiwiMew, PeachyKiss, LemonPie, BlueberryBabe, 
        SweetGrape, MelonPuff, CitrusStar, MangoMochi, StrawberryFizz, WatermelonWish, 
        PineappleTwirl, AppleSugar, PearCharm, PlumPetal, LycheeDream, OrangeTangerine, 
        CoconutSprout, BananaBliss
    ],
    cat [
        KittyWhiskers, PurrfectMeow, SnowPaws, CuddleMittens, FluffyPurr, NekoNaps, 
        Meowberry, WhiskerTwitch, PurrMewMew, TuxedoKitty, MidnightMeow, PurrPrincess, 
        CalicoCutie, TabbyDream, KittenLove, CheshireMew, MoonlightPaws, FuzzyTail, 
        SiameseWhiskers, MewMallow
    ],
    anime [
        SakuraBlossom, KawaiiChan, MochiMew, OtakuHeart, ChibiDreamer, TsundereStar, 
        SenpaiLuv, YumeHime, KitsuneCharm, NekoShoujo, AmaiLoli, AnimeGaze, 
        KiraShine, BakaSparkle, UsagiDream, RamenRanger, DangoPrincess, AkariMoon, 
        KawaiiPikachu, AstroShoujo
    ],
    league [
        LuxLight, AhriFoxFire, JinxSpark, EzrealTwinkle, YasuoWhirlwind, RivenBlade, 
        KatarinaClaw, PoppyLulu, ZoeStardust, MissFortuneCharm, JannaBreeze, NamiWave, 
        SorakaWish, YoneBlade, TeemoMushroom, AsheFrost, KayleWings, SeraphineSong, 
        BardMelody, LeonaSunlight
    ],
    genshin [
        VentiBreeze, KleeSparkle, DilucFlame, ChildeWave, LumineLight, PaimonGuide, 
        XiaoShadow, HuTaoSpirit, JeanWind, GanyuSnow, KeqingLightning, NoelleShield, 
        SucrosePotion, FischlRaven, DionaClaw, MonaWater, NingguangStar, XianglingFlame, 
        BarbaraWave, AyakaSnowflake
    ],
    sanrio [
        HelloKittyKiss, MyMelodyDream, CinnamorollCloud, PompompurinFluff, KuromiTwinkle, 
        KeroppiHop, LittleTwinStars, TuxedoSamChill, ChococatMeow, GudetamaYawn, 
        PochaccoJoy, KikiLalaDream, KirimiFish, MimmyKitty, UsahanaBloom, CinnamoFluff, 
        LalaStarshine, KuromiQueen, KeroppiSplash, PurinPaw
    ],
    miscellaneous [
        BubbleGumPop, CupcakeWhirl, SugarNoodle, StarryDreamer, GlitterBunny, 
        CandyFlossCloud, MarshmallowMew, RainbowSprinkle, FairyTaleWish, BunnyHopStar, 
        SleepyPuff, MilkTeaMochi, CottonCandyKiss, MochiMoon, JellyBeanGiggles, 
        ButtonBunny, CinnamonCloud, DreamyBubbles, SparkleHoney, TwinkleBerry
    ]
};

 Function to get a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random()  arr.length)];
}

 Function to generate a cute username based on a selected category
function generateCuteName(theme) {
    if (cuteNames[theme]) {
        return getRandomElement(cuteNames[theme]);
    } else {
        return Invalid category. Please choose a valid theme.;
    }
}

 Event listener for generating a cute name
document.querySelector('#generate-btn').addEventListener('click', () = {
    const theme = document.querySelector('#category-select').value;
    const generatedName = generateCuteName(theme);
    
     Display the generated name or an error if invalid
    if (generatedName) {
        document.querySelector('#result').textContent = generatedName;
    } else {
        document.querySelector('#result').textContent = Error generating name. Please try again.;
    }
});
