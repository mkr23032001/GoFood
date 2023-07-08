const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
router.post("/createuser",
body('Email').isEmail(),
body('name').isLength({ min: 5 }),
  body('password, incorrect password').isLength({ min: 5 }),
function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

        const newUser = new User({
            name: "Mohon Das",
            password: "123456",
            email: "shyamdas12@hotmail.com",
            location: "QWerty home"
        })
        newUser.save(function(e){
            if(e)
                res.send(e);
            else
                res.send('data added');
        });
});

module.exports = router;