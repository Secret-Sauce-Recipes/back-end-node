const { findById } = require('./recipes-model');
const { AWS_SECRET, AWS_BUCKET_NAME, AWS_ID } = require('../secrets');
const multer = require('multer');
const AWS = require('aws-sdk');
const { nanoid } = require('nanoid');
const db = require('../data/dbConfig');

const S3 = new AWS.S3({
  accessKeyId: AWS_ID,
  secretAccessKey: AWS_SECRET,
});

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, '');
  },
});

const uploadFile = multer({ storage }).single('recipe_img');

const fileFormatting = async (req, res, next) => {
  if (req.file) {
    let myFile = req.file.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${nanoid()}.${fileType}`,
      Body: req.file.buffer,
    };

    S3.upload(params, (err, data) => {
      if (err) {
        next(err);
      }
      req.body.recipe_img = data.Location;
      next();
    });
  } else {
    next();
  }
};

const uniqueRecipeName = async (req, res, next) => {
  const recipe_name = req.body.recipe_name;
  const isRecipe = await db('recipes').where({ recipe_name }).first();
  console.log(isRecipe);

  if (!isRecipe) {
    next();
  } else {
    res.status(400).json({ message: 'Recipe name taken.' });
  }
};

const uniqueUserPermissions = async (req, res, next) => {
  const recipe_id = parseInt(req.params.recipeId);
  const decodedUserId = req.decodedJwt.user_id;

  const recipe = await findById(decodedUserId, recipe_id);

  if (!recipe) {
    return res.status(401).json({ message: `This resource does not exist for user` });
  } else {
    next();
  }
};

module.exports = {
  uniqueUserPermissions,
  uploadFile,
  fileFormatting,
  uniqueRecipeName,
};
