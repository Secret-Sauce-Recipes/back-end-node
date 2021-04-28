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
       recipe_id,
       user_id,
       recipe_img,
       source,
       category,
       ingredients,
       instructions,
       created_at,
       updated_at
    },
    {
       recipe_id,
       user_id,
       recipe_img,
       source,
       category,
       ingredients,
       instructions,
       created_at,
       updated_at
    }
]

[GET] Recipe by ID *restricted* (api/recipes/recipeId)
 {
   recipe_id,
   user_id,
   recipe_img,
   source,
   category,
   ingredients,
   instructions,
   created_at,
   updated_at
 }