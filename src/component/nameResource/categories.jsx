
  
 const data= {Health: [
    {
      webLabel: "Alcohol-free",
      apiParameter: "alcohol-free",
      definition: "No alcohol used or contained"
    },
    {
      webLabel: "Immune-Supportive",
      apiParameter: "immuno-supportive",
      definition: "Recipes which fit a science-based approach to eating to strengthen the immune system"
    },
    {
      webLabel: "Celery-free",
      apiParameter: "celery-free",
      definition: "Does not contain celery or derivatives"
    },
    {
      webLabel: "Crustcean-free",
      apiParameter: "crustacean-free",
      definition: "Does not contain crustaceans (shrimp, lobster etc.) or derivatives"
    },
    {
      webLabel: "Dairy",
      apiParameter: "dairy-free",
      definition: "No dairy; no *lactose*"
    },
    {
      webLabel: "Dietary Approaches to Stop Hypertension",
      apiParameter: "DASH",
      definition: ""
    },
    {
      webLabel: "Eggs",
      apiParameter: "egg-free",
      definition: "No eggs or products containing eggs"
    },
    {
      webLabel: "Fish",
      apiParameter: "fish-free",
      definition: "No fish or fish derivatives"
    },
    {
      webLabel: "FODMAP free",
      apiParameter: "fodmap-free",
      definition: "Does not contain FODMAP foods"
    },
    {
      webLabel: "Gluten",
      apiParameter: "gluten-free",
      definition: "No ingredients containing gluten"
    },
    {
      webLabel: "Keto",
      apiParameter: "keto-friendly",
      definition: "Maximum 7 grams of net carbs per serving"
    },
    {
      webLabel: "Kidney friendly",
      apiParameter: "kidney-friendly",
      definition: "Per serving – phosphorus less than 250 mg AND potassium less than 500 mg AND sodium less than 500 mg"
    },
    {
      webLabel: "Kosher",
      apiParameter: "kosher",
      definition: "Contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves"
    },
    {
      webLabel: "Low potassium",
      apiParameter: "low-potassium",
      definition: "Less than 150mg per serving"
    },
    {
      webLabel: "Lupine-free",
      apiParameter: "lupine-free",
      definition: "Does not contain lupine or derivatives"
    },
    {
      webLabel: "Mediterranean",
      apiParameter: "Mediterranean",
      definition: ""
    },
    {
      webLabel: "Mustard-free",
      apiParameter: "mustard-free",
      definition: "Does not contain mustard or derivatives"
    },
    {
      webLabel: "Low-fat-abs",
      apiParameter: "low-fat-abs",
      definition: "Less than 3g of fat per serving"
    },
    {
      webLabel: "No oil added",
      apiParameter: "No-oil-added",
      definition: "No oil added except to what is contained in the basic ingredients"
    },
    {
      webLabel: "No-sugar",
      apiParameter: "low-sugar",
      definition: "No simple sugars – glucose, dextrose, galactose, fructose, sucrose, lactose, maltose"
    },
    {
      webLabel: "Paleo",
      apiParameter: "paleo",
      definition: "Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils"
    },
    {
      webLabel: "Peanuts",
      apiParameter: "peanut-free",
      definition: "No peanuts or products containing peanuts"
    },
    {
      webLabel: "Pescatarian",
      apiParameter: "pecatarian",
      definition: "Does not contain meat or meat based products, can contain dairy and fish"
    },
    {
      webLabel: "Pork-free",
      apiParameter: "pork-free",
      definition: "Does not contain pork or derivatives"
    },
    {
      webLabel: "Red meat-free",
      apiParameter: "red-meat-free",
      definition: "Does not contain beef, lamb, pork, duck, goose, game, horse, and other types of red meat or products containing red meat."
    },
    {
      webLabel: "Sesame-free",
      apiParameter: "sesame-free",
      definition: "Does not contain sesame seed or derivatives"
    },
    {
      webLabel: "Shellfish",
      apiParameter: "shellfish-free",
      definition: "No shellfish or shellfish derivatives"
    },
    {
      webLabel: "Soy",
      apiParameter: "soy-free",
      definition: "No soy or products containing soy"
    },
    {
      webLabel: "Sugar-conscious",
      apiParameter: "sugar-conscious",
      definition: "Less than 4g of sugar per serving"
    },
    {
      webLabel: "Tree Nuts",
      apiParameter: "tree-nut-free",
      definition: "No tree nuts or products containing tree nuts"
    },
    {
      webLabel: "Vegan",
      apiParameter: "vegan",
      definition: "No meat, poultry, fish, dairy, eggs or honey"
    },
    {
      webLabel: "Vegetarian",
      apiParameter: "vegetarian",
      definition: "No meat, poultry, or fish"
    },
    {
      webLabel: "Wheat-free",
      apiParameter: "wheat-free",
      definition: "No wheat, can have gluten though"
    }
  ],
  Diet: [
    {
      webLabel: "Balanced",
      apiParameter: "balanced",
      definition: "Protein/Fat/Carb values in 15/35/50 ratio"
    },
    {
      webLabel: "High-Fiber",
      apiParameter: "high-fiber",
      definition: "More than 5g fiber per serving"
    },
    {
      webLabel: "High-Protein",
      apiParameter: "high-protein",
      definition: "More than 50% of total calories from proteins"
    },
    {
      webLabel: "Low-Carb",
      apiParameter: "low-carb",
      definition: "Less than 20% of total calories from carbs"
    },
    {
      webLabel: "Low-Fat",
      apiParameter: "low-fat",
      definition: "Less than 15% of total calories from fat"
    },
    {
      webLabel: "Low-Sodium",
      apiParameter: "low-sodium",
      definition: "Less than 140mg Na per serving"
    }
  ],
  mealType: [
    {
      webLabel: "Breakfast",
      apiParameter: "Breakfast",
      definition: ""
    },
    {
      webLabel: "Lunch",
      apiParameter: "Lunch",
      definition: ""
    },
    {
      webLabel: "Dinner",
      apiParameter: "Dinner",
      definition: ""
    },
    {
      webLabel: "Snack",
      apiParameter: "Snack",
      definition: ""
    },
    {
      webLabel: "Teatime",
      apiParameter: "Teatime",
      definition: ""
    }
  ],
  dishType: [
    {
      webLabel: "Alcohol-cocktail",
      apiParameter: "Alcohol-cocktail",
      definition: ""
    },
    {
      webLabel: "Biscuits and cookies",
      apiParameter: "Biscuits and cookies",
      definition: ""
    },
    {
      webLabel: "Bread",
      apiParameter: "Bread",
      definition: ""
    },
    {
      webLabel: "Cereals",
      apiParameter: "Cereals",
      definition: ""
    },
    {
      webLabel: "Condiments and sauces",
      apiParameter: "Condiments and sauces",
      definition: ""
    },
    {
      webLabel: "Drinks",
      apiParameter: "Drinks",
      definition: ""
    },
    {
      webLabel: "Desserts",
      apiParameter: "Desserts",
      definition: ""
    },
    {
      webLabel: "Egg",
      apiParameter: "Egg",
      definition: ""
    },
    {
      webLabel: "Main course",
      apiParameter: "Main course",
      definition: ""
    },
    {
      webLabel: "Omelet",
      apiParameter: "Omelet",
      definition: ""
    },
    {
      webLabel: "Pancake",
      apiParameter: "Pancake",
      definition: ""
    },
    {
      webLabel: "Preps",
      apiParameter: "Preps",
      definition: ""
    },
    {
      webLabel: "Preserve",
      apiParameter: "Preserve",
      definition: ""
    },
    {
      webLabel: "Salad",
      apiParameter: "Salad",
      definition: ""
    },
    {
      webLabel: "Sandwiches",
      apiParameter: "Sandwiches",
      definition: ""
    },
    {
      webLabel: "Soup",
      apiParameter: "Soup",
      definition: ""
    },
    {
      webLabel: "Starter",
      apiParameter: "Starter",
      definition: ""
    }
  ],
  cuisineType: [
    {
      webLabel: "American",
      apiParameter: "American",
      definition: ""
    },
    {
      webLabel: "Asian",
      apiParameter: "Asian",
      definition: ""
    },
    {
      webLabel: "British",
      apiParameter: "British",
      definition: ""
    },
    {
      webLabel: "Caribbean",
      apiParameter: "Caribbean",
      definition: ""
    },
    {
      webLabel: "Central Europe",
      apiParameter: "Central Europe",
      definition: ""
    },
    {
      webLabel: "Chinese",
      apiParameter: "Chinese",
      definition: ""
    },
    {
      webLabel: "Eastern Europe",
      apiParameter: "Eastern Europe",
      definition: ""
    },
    {
      webLabel: "French",
      apiParameter: "French",
      definition: ""
    },
    {
      webLabel: "Indian",
      apiParameter: "Indian",
      definition: ""
    },
    {
      webLabel: "Italian",
      apiParameter: "Italian",
      definition: ""
    },
    {
      webLabel: "Japanese",
      apiParameter: "Japanese",
      definition: ""
    },
    {
      webLabel: "Kosher",
      apiParameter: "Kosher",
      definition: ""
    },
    {
      webLabel: "Mediterranean",
      apiParameter: "Mediterranean",
      definition: ""
    },
    {
      webLabel: "Mexican",
      apiParameter: "Mexican",
      definition: ""
    },
    {
      webLabel: "Middle Eastern",
      apiParameter: "Middle Eastern",
      definition: ""
    },
    {
      webLabel: "Nordic",
      apiParameter: "Nordic",
      definition: ""
    },
    {
      webLabel: "South American",
      apiParameter: "South American",
      definition: ""
    },
    {
      webLabel: "South East Asian",
      apiParameter: "South East Asian",
      definition: ""
    }
  ]
};
export const FoodCategories = data

