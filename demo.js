// using userPreferences.js generate a prompt that matches the user preferences - Flexible Version and Strict Version

const { user1, user2 } = require('./userPreferences');
const { createFlexiblePrompt, createStrictPrompt } = require('./promptGenerators');
let prompt = '';



// Flexible Version
prompt = 'Write a recipe that fits the following preferences: ';
const prompt1 = createFlexiblePrompt(prompt, user1);
prompt = 'Write a recipe that fits the following preferences: ';
const prompt2 = createFlexiblePrompt(prompt, user2);

// Strict Version
const prompt3 = createStrictPrompt(user1);
const prompt4 = createStrictPrompt(user2);


console.clear();
console.log('\n***Prompt 1 - User 1: (Flexible Version)***');
console.log(prompt1);
console.log('\n***Prompt 2 - User 2: (Flexible Version)***');
console.log(prompt2);
console.log('\n***Prompt 3 - User 1: (Strict Version)***');
console.log(prompt3);
console.log('\n***Prompt 4 - User 2: (Strict Version)***');
console.log(prompt4);