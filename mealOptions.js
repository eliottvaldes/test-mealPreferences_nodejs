const mealOptions = {
    preferences: {
        mealTime: [
            'no-preference', 'breakfast', 'lunch', 'dinner', 'snack', 'teatime'
        ],
        cuisine: [
            'no-preference', 'african', 'chinese', 'japanese', 'korean', 'vietnamese',
            'thai', 'indian', 'british', 'irish', 'french', 'italian', 'mexican', 'spanish',
            'middle eastern', 'jewish', 'american', 'cajun', 'southern', 'greek', 'german', 'nordic'
        ],
        diet: [
            'no-preference', 'balanced', 'high-protein', 'high-fiber', 'low-fat',
            'low-carb', 'low-sodium', 'low-sugar'
        ],
        mealType: [
            'no-preference', 'main course', 'side dish', 'dessert', 'appetizer',
            'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'marinade', 'fingerfood',
            'snack', 'drink'
        ],
    },
    preparationTime: {
        minReadyTime: 0,
        maxReadyTime: 0,
        minCookTime: 0,
        maxCookTime: 0,
        minPrepTime: 0,
        maxPrepTime: 0,
        minTotalTime: 0,
        maxTotalTime: 0,
    },
    nutrition: {
        minCarbs: 0,
        maxCarbs: 0,
        minFat: 0,
        maxFat: 0,
        minProtein: 0,
        maxProtein: 0,
        minSugar: 0,
        maxSugar: 0,
        minCalories: 0,
        maxCalories: 0,
    },
    kitchenForniture: {
        kitchenResources: [
            'no-preference', 'oven', 'blender', 'microwave', 'toaster', 'grill', 'griddle',
            'fryer', 'pressure cooker', 'slow cooker', 'food processor', 'juicer', 'spiralizer', 'coffee maker',
            'waffle maker', 'ice cream maker', 'stand mixer', 'hand mixer', 'food dehydrator', 'food scale',
            'measuring cups', 'measuring spoons', 'thermometer', 'colander', 'strainer', 'spatula', 'whisk',
            'peeler', 'can opener', 'bottle opener', 'corkscrew', 'ladle', 'tongs', 'masher', 'grater', 'zester',
            'sieve', 'chopper', 'slicer', 'knife', 'cutting board'
        ]

    },
    ingredient: []
}


export default mealOptions;
