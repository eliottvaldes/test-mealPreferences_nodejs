// Function to generate prompts for fields that contains multiple values
const arrayPromt = (prompt, preferences) => {
    if (Object.keys(preferences).length === 0) return prompt;

    for (let [key, value] of Object.entries(preferences)) {
        if (value === "no-preference") continue;
        if (Array.isArray(value)) value = value.join(', ');
        prompt += `\n- ${key}: ${value}`;
    }
    return prompt;
}

// Function to generate prompts for fields that contains number values
const numberPromt = (prompt, preferences) => {
    if (Object.keys(preferences).length === 0) return prompt;
    for (let [key, value] of Object.entries(preferences)) {
        if (value === 0) continue;
        prompt += `\n- ${key}: ${value}`;
    }
    return prompt;
}

// Function to generate prompts for fields that contains ingredients
const ingredientsPrompt = (prompt, ingredients) => {
    if (ingredients.length === 0) return prompt;
    prompt += `\nUse only some of the following ingredients: `;
    prompt += `\n- ${ingredients.join(', ')}`;
    return prompt;

}


// Function to generate a full prompt that matches the user preferences - Flexible Version
const createFlexiblePrompt = (prompt, userPreferences) => {
    if (Object.keys(userPreferences).length === 0) return prompt;
    const { preferences, preparationTime, nutrition, kitchenForniture, ingredients } = userPreferences;

    prompt = arrayPromt(prompt, { ...preferences });
    prompt = numberPromt(prompt, { ...preparationTime });
    prompt = numberPromt(prompt, { ...nutrition });
    prompt = arrayPromt(prompt, { ...kitchenForniture });
    prompt = ingredientsPrompt(prompt, [...ingredients]);

    return prompt;
}


// Function to generate a full prompt that matches the user preferences - Strict Version
const createStrictPrompt = (userPreferences) => {
    const { preferences, preparationTime, nutrition, kitchenForniture, ingredients } = userPreferences;
    prompt = `Write a ${preferences.cuisine} ${preferences.mealTime} ${preferences.diet} ${preferences.mealType} recipe using ${ingredients} considering: `;
    prompt = numberPromt(prompt, { ...preparationTime });
    prompt = numberPromt(prompt, { ...nutrition });
    prompt = ingredientsPrompt(prompt, [...ingredients]);

    return prompt;
}


module.exports = {
    createFlexiblePrompt,
    createStrictPrompt
}