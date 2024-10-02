const cuteAdjectives = ["Sweet", "Fluffy", "Soft", "Lovely", "Adorable", "Cuddly"];
const cuteAnimals = ["Kitten", "Panda", "Bunny", "Puppy", "Koala"];
const cuteSuffixes = ["Lover", "Dreamer", "Hugger", "Twirl", "Sprinkle"];

const mythicAdjectives = ["Fierce", "Mystic", "Ancient", "Divine", "Eternal"];
const mythicCreatures = ["Dragon", "Phoenix", "Griffin", "Unicorn", "Chimera"];
const mythicSuffixes = ["Slayer", "Conqueror", "Guardian", "Warden", "Sorcerer"];

let uniqueUsernames = new Set();  // Set to store unique usernames

// Helper function to get random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a username based on theme
function generateUsername(theme) {
    let adjective, creature, suffix = "";
    let username = "";

    if (theme === "cute") {
        adjective = getRandomElement(cuteAdjectives);
        creature = getRandomElement(cuteAnimals);
        suffix = getRandomElement(cuteSuffixes);
    } else if (theme === "mythic") {
        adjective = getRandomElement(mythicAdjectives);
        creature = getRandomElement(mythicCreatures);
        suffix = getRandomElement(mythicSuffixes);
    }

    const includePrefix = document.querySelector('#prefix-checkbox').checked;
    const includeSuffix = document.querySelector('#suffix-checkbox').checked;
    const includeNumber = document.querySelector('#number-checkbox').checked;

    // Build the username with prefix, suffix, and numbers
    if (includePrefix) {
        username += adjective;
    }
    username += creature;

    if (includeSuffix) {
        username += suffix;
    }

    if (includeNumber) {
        username += Math.floor(Math.random() * 100);  // Append a random number
    }

    return username;
}

// Function to generate a unique username
function generateUniqueUsername(theme) {
    let newUsername;
    do {
        newUsername = generateUsername(theme);
    } while (uniqueUsernames.has(newUsername));  // Ensure the username is unique
    uniqueUsernames.add(newUsername);  // Add the new unique username to the set
    return newUsername;
}

// Event listeners for button clicks
document.querySelector('#generate-btn').addEventListener('click', () => {
    const theme = document.querySelector('#theme-select').value;
    document.querySelector('#result').textContent = generateUsername(theme);
});

document.querySelector('#generate-unique-btn').addEventListener('click', () => {
    const theme = document.querySelector('#theme-select').value;
    document.querySelector('#uniqueResult').textContent = generateUniqueUsername(theme);
});
