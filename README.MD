//[POST] REGISTER (/api/auth/register)

//receive
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

// [POST] LOGIN (/api/auth/login)

//receive
{
username,
password
}

return {
"message",
"user_id",
"username",
"token":
}
