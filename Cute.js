const adjectives = ["Sweet", "Fluffy", "Soft", "Lovely", "Charming", "Adorable", "Cuddly"];
const animals = ["Kitten", "Panda", "Bunny", "Puppy", "Fawn", "Koala", "Hedgehog"];
const suffixes = ["Lover", "Dreamer", "Hugger", "Dancer", "Twirl", "Blossom", "Sprinkle"];

function generateUsername() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return randomAdjective + randomAnimal + randomSuffix;
}

document.querySelector('#generate-btn').addEventListener('click', () => {
    document.querySelector('#result').textContent = generateUsername();
});
