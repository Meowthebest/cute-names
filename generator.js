// Example data inspired by the list you provided
const fantasyNames = ["Tojra", "Zyene", "Fyaz", "Jotra", "Gyez"];
const techNames = ["Quxat", "Hovryul", "Tekaw", "Fuxahz", "Nnavat"];
const mysticalNames = ["Clyonqa", "Vavrew", "Drowa", "Ociw", "Jyuxr"];
const suffixes = ["x", "qa", "s", "on", "ax"];
let uniqueUsernames = new Set();  // Set to store unique usernames

// Function to get a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a name based on filters
function generateName(theme) {
    let baseName;
    switch (theme) {
        case "fantasy":
            baseName = getRandomElement(fantasyNames);
            break;
        case "tech":
            baseName = getRandomElement(techNames);
            break;
        case "mystical":
            baseName = getRandomElement(mysticalNames);
            break;
        default:
            // Create a random name from syllables if no specific theme
            baseName = generateRandomSyllables();
    }

    const includePrefix = document.querySelector('#prefix-checkbox').checked;
    const includeSuffix = document.querySelector('#suffix-checkbox').checked;
    const includeNumber = document.querySelector('#number-checkbox').checked;

    let username = baseName;

    // Prefix and Suffix Logic
    if (includePrefix) {
        username = getRandomElement(fantasyNames).slice(0, 3) + username;
    }
    if (includeSuffix) {
        username += getRandomElement(suffixes);
    }
    if (includeNumber) {
        username += Math.floor(Math.random() * 100);  // Append a random number
    }

    return username;
}

// Function to generate a random syllable-based name (for "None" filter)
function generateRandomSyllables() {
    const syllables = ["Fi", "To", "Ra", "Jo", "Za", "Ki", "Lo", "Nu"];
    let name = "";
    for (let i = 0; i < 3; i++) {
        name += getRandomElement(syllables);
    }
    return name;
}

// Event listener for generating username
document.querySelector('#generate-btn').addEventListener('click', () => {
    const theme = document.querySelector('#category-select').value;
    const generatedName = generateName(theme);
    document.querySelector('#result').textContent = generatedName;
});
