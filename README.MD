[POST] REGISTER (/api/auth/register)

  receive
{
  username,
  password,
  email
}

return {
  user_id,
  username,
  email
}

[POST] LOGIN (/api/auth/login)

  receive
{
  username,
  password
}

return {
  message,
  user_id,
  username,
  token:
}

[GET] All Recipes *restricted* (/api/recipes)

return 
[
    {
        "recipe_id": 1,
        "user_id": 1,
        "recipe_img": "https://www.seriouseats.com/recipes/assets_c/2015/05/20150511-scrambled-eggs-vicky-wasik-11-thumb-1500xauto-423059.jpg",
        "source": "Mom",
        "category": "Breakfast",
        "ingredients": "1 Large Egg, 1 teaspoon salt, 1 teaspoon pepper, 1 tablespoon butter, 1 teaspoon truffle oil",
        "instructions": "1. Heat pan and apply butter, 2. Pour egg mixture in pan over melted butter, 3. Cook until desired consistency, 4. Serve with truffle oil",
        "created_at": "2021-04-28T02:40:25.016Z",
        "updated_at": "2021-04-28T02:40:25.016Z"
    },
    {
        "recipe_id": 2,
        "user_id": 1,
        "recipe_img": "https://www.tasteofhome.com/wp-content/uploads/2019/02/Cast-Iron-Skillet-Steak_EXPS_CIMZ19_235746_B01_15_10b-2.jpg",
        "source": "Gordon Ramsey",
        "category": "Steak",
        "ingredients": "1 rib-eye steak, 1 tablespoon butter, 1 tablespoon oil, 1 teaspoon salt, 1 teaspoon pepper",
        "instructions": "1. Heat on high heat pan and apply oil, 2. Sear rib-eye on both sides for 45 seconds, 3. Keep flipping until medium rare, 4. Let rest and serve.",
        "created_at": "2021-04-28T02:40:25.016Z",
        "updated_at": "2021-04-28T02:40:25.016Z"
    }
]

[GET] Recipe by ID *restricted* (api/recipes/recipeId)

{
    "recipe_id": 1,
    "user_id": 1,
    "recipe_img": "https://www.seriouseats.com/recipes/assets_c/2015/05/20150511-scrambled-eggs-vicky-wasik-11-thumb-1500xauto-423059.jpg",
    "source": "Mom",
    "category": "Breakfast",
    "ingredients": "1 Large Egg, 1 teaspoon salt, 1 teaspoon pepper, 1 tablespoon butter, 1 teaspoon truffle oil",
    "instructions": "1. Heat pan and apply butter, 2. Pour egg mixture in pan over melted butter, 3. Cook until desired consistency, 4. Serve with truffle oil",
    "created_at": "2021-04-28T02:40:25.016Z",
    "updated_at": "2021-04-28T02:40:25.016Z"
}