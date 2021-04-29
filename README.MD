[POST] REGISTER (/api/auth/register). 

  receive. 
{  
  username,  
  password,  
  email. 
}   

return {
  user_id,  
  username,  
  email   
}

[POST] LOGIN (/api/auth/login). 

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

[GET] All Recipes *restricted* (/api/recipes). 

return   
*
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
       updated_at. 
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
*
  
[GET] Recipe by ID *restricted* (api/recipes/:recipeId)   
return
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

[POST] Recipe *restricted* (/api/recipes)

receive 
{
    "recipe_name"
    "recipe_img"
    "source":
    "category": 
    "ingredients": 
    "instructions": 
}

returns
{
    "recipe_id":
    "recipe_name":
    "recipe_img": 
    "source": 
    "category": 
    "ingredients": 
    "instructions": 
    "created_at": 
}

[PUT] Recipe *restricted* (/api/recipes/:recipeId)
receive 

{
    "recipe_name":
    "recipe_img":
    "source":
    "category": 
    "ingredients": 
    "instructions": 
}

returns
{
    "recipe_name":
    "recipe_id":
    "recipe_img": 
    "source": 
    "category": 
    "ingredients": 
    "instructions": 
    "updated_at": 
}


[DELETE] Recipe *restricted* (/api/recipes/:recipeId)

returns
{
  "recipe_name"
  "recipe_id"
}
