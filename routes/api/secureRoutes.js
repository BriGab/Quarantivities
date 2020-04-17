const express = require('express');
const router = express.Router();
const passport = require('../../config/passport');
const profileController = require ("../../controllers/profileController")

//matches with /api/profile/home
router.route('/home')
  .all(passport.authenticate('jwt'))
  .post(profileController.create) //Creates the activity post and stores the ID in that user's array
  .get(profileController.mostLikes) //Pulls the top liked activities

//matches with /api/profile/act
router.route('/act')
  .all(passport.authenticate('jwt'))  
  .get(profileController.findAll) //This will grab all of the users activities they've added themselves

module.exports = router;


