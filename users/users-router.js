const router = require('express').Router()
const bcrypt = require('bcryptjs')
const Users = require('./users-model.js')

router.get('/', auth, (req, res) => {
  Users.find()
    .then(users => {
      console.log(users)
      res.json(users)
    })
    .catch(err => res.send(err))
});


function auth(req, res, next) {
	const {username, password} = req.headers
	console.log(username)
	Users.findBy({ username })
	    .first()
	    .then(user => {
	      if (user && bcrypt.compareSync(password, user.password)) {
	      	console.log("auth success!")
	        next()
	      } else {
          console.log('auth failed :(')
	        res.status(401).json({ message: 'Invalid Credentials' })
	      }
	    })
	    .catch(error => {
	      res.status(500).json(error)
	    })
}
module.exports = router