[POST] REGISTER (/api/auth/register). 
---------------------

*receives*    

{  
  username,  
  password,  
  email  
}   

*returns*    
{   
  user_id,  
  username,  
  email   
}

[POST] LOGIN (/api/auth/login). 
---------------------

*receives*  

{  
  username,  
  password  
}

*returns*    
  
{  
  message,  
  user_id,  
  username,  
  token  
}   

[GET] All Recipes *restricted* (/api/recipes). 
---------------------

*returns*    

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
    },  
    ...    
]   

  
[GET] Recipe by ID *restricted* (api/recipes/:recipeId)   
---------------------

*returns*    
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
---------------------

*receives*  
 
{  
    "recipe_name"  
    "recipe_img"  
    "source":  
    "category":   
    "ingredients":   
    "instructions":  
}

*returns*    
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
---------------------

*receives*  

{  
    "recipe_name":  
    "recipe_img":  
    "source":  
    "category":   
    "ingredients":   
    "instructions":  
}

*returns*    
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
---------------------

*returns*    
{  
  "recipe_name"       
  "recipe_id"     
}
