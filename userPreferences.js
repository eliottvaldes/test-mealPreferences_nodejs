// example of user preferences
const user1 = {
    preferences: {
        mealTime: 'breakfast',
        cuisine: 'american',
        diet: ['balanced', 'low-carb', 'free-gluten'],
        mealType: 'main course',
    },
    preparationTime: {
        maxReadyTime: 80,
    },
    nutrition: {
        maxCalories: 500
    },
    kitchenForniture: {
        kitchenResources: ['oven'],
    },
    ingredients: ['eggs', 'bacon', 'milk', 'cheese'],
}

const user2 = {
    preferences: {
        mealTime: 'dinner',
        cuisine: 'italian',
        diet: 'low-carb',
        mealType: 'main course',
    },
    preparationTime: {
        maxPrepTime: 60
    },
    nutrition: {
        maxCalories: 500,
        maxFat: 20,
    },
    kitchenForniture: {
        kitchenResources: ['oven', 'microwave', 'blender', 'food processor'],
    },
    ingredients: ['eggs', 'bacon', 'milk', 'cheese'],
}


module.exports = {
    user1,
    user2
};