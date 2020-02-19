const express = require('express')
const router = express.Router()
const login = require('./login-model')
const bcrypt = require('bcryptjs')

router.post('/', (req, res) => {
   const user = req.body

   login.findUser(user.username)
      .then(item => {
         if (item && bcrypt.compareSync(user.password, item.password)) {
            req.session.user = item
            res.status(200).json({ message: `Welcome ${req.session.user.username}!` })
         } else {
            res.status(401).json({ message: 'Thou shalt not pass!' })
         }
      })
      .catch(err => {
         res.status(500).json(err)
      })
});

module.exports = router