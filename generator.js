// Function to generate a name with optional prefix, suffix, and numbers
function generateName(theme) {
    let baseName = generateCuteName(theme);

    const includePrefix = document.querySelector('#prefix-checkbox').checked;
    const includeSuffix = document.querySelector('#suffix-checkbox').checked;
    const includeNumber = document.querySelector('#number-checkbox').checked;

    let username = baseName;

    // Example random prefixes and suffixes
    const prefixes = ["Super", "Mega", "Ultra", "Hyper", "Cute"];
    const suffixes = ["123", "Mew", "Chan", "Neko", "X"];

    // Prefix and Suffix Logic
    if (includePrefix) {
        username = getRandomElement(prefixes) + username;
    }
    if (includeSuffix) {
        username += getRandomElement(suffixes);
    }
    if (includeNumber) {
        username += Math.floor(Math.random() * 100);  // Append a random number
    }

    return username;
}

// Event listener for generating username
document.querySelector('#generate-btn').addEventListener('click', () => {
    const theme = document.querySelector('#category-select').value;
    const generatedName = generateName(theme);
    
    // Fallback check: If name is generated, display it; otherwise show error message
    if (generatedName) {
        document.querySelector('#result').textContent = generatedName;
    } else {
        document.querySelector('#result').textContent = "Error generating name. Please try again.";
    }
});
