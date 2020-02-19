const router = require('express').Router()
const auth = require('./auth-model')
const bcrypt = require('bcryptjs')

const loginRouter = require('../auth/login-router.js')
const logoutRouter = require('../auth/logout-router.js')

router.use('/login', loginRouter)
router.use('/logout', logoutRouter)

router.post('/', (req, res) => {
  const newUser = req.body

  if(newUser.username && newUser.password){
    const hash = bcrypt.hashSync(newUser.password, 8)
    newUser.password = hash

    auth.addUser(newUser)
      .then(user=> {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }else{
    res.status(400).json({message: "missing username and password"})
  }
})

module.exports = router
