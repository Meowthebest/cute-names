// Function to generate a name with optional prefix, suffix, and numbers
function generateName(theme) {
    // Get the base cute name from the selected theme
    let baseName = generateCuteName(theme);  // Using generateCuteName from cuteNames.js

    // Get checkbox states
    const includePrefix = document.querySelector('#prefix-checkbox').checked;
    const includeSuffix = document.querySelector('#suffix-checkbox').checked;
    const includeNumber = document.querySelector('#number-checkbox').checked;

    // Example random prefixes and suffixes that make sense
    const prefixes = ["Sweet", "Fluffy", "Tiny", "Kawaii", "Lovely"];
    const suffixes = ["Chan", "Mochi", "Mew", "Star", "Bunny"];

    // Build the username
    let username = baseName;

    // Add prefix if selected
    if (includePrefix) {
        const randomPrefix = getRandomElement(prefixes);
        username = randomPrefix + username;  // Add the prefix before the base name
    }

    // Add suffix if selected
    if (includeSuffix) {
        const randomSuffix = getRandomElement(suffixes);
        username += randomSuffix;  // Add the suffix after the base name
    }

    // Add random number if selected
    if (includeNumber) {
        const randomNumber = Math.floor(Math.random() * 100);  // Append a random number (0-99)
        username += randomNumber;
    }

    return username;
}

// Event listener for generating the username
document.querySelector('#generate-btn').addEventListener('click', () => {
    // Get the selected theme from the dropdown
    const theme = document.querySelector('#category-select').value;

    // Generate the name using the selected theme and options
    const generatedName = generateName(theme);
    
    // Display the generated name or show an error message if something goes wrong
    if (generatedName) {
        document.querySelector('#result').textContent = generatedName;
    } else {
        document.querySelector('#result').textContent = "Error generating name. Please try again.";
    }
});
