const express = require('express');
const router = express.Router();
// const passport = require('../../config/passport');
const profileController = require ("../../controllers/profileController")

//Let's say the route below is very sensitive and we want only authorized users to have access

//Displays information tailored according to the logged in user
// router.get('/', passport.authenticate('jwt'), (req, res, next) => {
//   //We'll just send back the user details and the token
//   res.json({
//     message : 'You made it to the secure route',
//     user : req.user,
//     token : req.query.secret_token
//   })
// });

//matches with /api/profile/home
router.route('/home')
  // .all(passport.authenticate('jwt'))
  .get(profileController.findAll)
  .post(profileController.create)
  .get(profileController.mostLikes)


module.exports = router;


