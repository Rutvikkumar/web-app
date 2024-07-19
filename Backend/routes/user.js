const express = require("express");
const user = require("../controller/usercont.js");
const form = require("../controller/formcont.js");
const router = express.Router();



router.post('/register',user.signup);
router.post('/login',user.login);
router.post('/form',form.saveUserData);
router.get('/data',form.getData);


module.exports = router;


