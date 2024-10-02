const adjectives = ["Sweet", "Fluffy", "Soft", "Lovely", "Charming", "Adorable", "Cuddly"];
const animals = ["Kitten", "Panda", "Bunny", "Puppy", "Fawn", "Koala", "Hedgehog"];
const suffixes = ["Lover", "Dreamer", "Hugger", "Dancer", "Twirl", "Blossom", "Sprinkle"];
let uniqueUsernames = new Set();  // Set to store unique usernames

// Function to generate a cute username
function generateCuteUsername() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return randomAdjective + randomAnimal + randomSuffix;
}

// Function to generate a unique username
function generateUniqueUsername() {
    let newUsername;
    do {
        newUsername = generateCuteUsername();
    } while (uniqueUsernames.has(newUsername));  // Ensure the username is unique
    uniqueUsernames.add(newUsername);  // Add the new unique username to the set
    return newUsername;
}

// Event listeners for button clicks
document.querySelector('#generate-btn').addEventListener('click', () => {
    document.querySelector('#result').textContent = generateCuteUsername();
});

document.querySelector('#generate-unique-btn').addEventListener('click', () => {
    document.querySelector('#uniqueResult').textContent = generateUniqueUsername();
});
