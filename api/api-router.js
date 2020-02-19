const router = require('express').Router()

const usersRouter = require('../users/users-router.js')

const authRouter = require('../auth/auth-router.js')

router.use('/auth', authRouter)
router.use('/users', usersRouter)


router.get('/', (req, res) => {
  res.json({ api: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him - David Brinkley" })
})

module.exports = router
