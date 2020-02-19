const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
   if (req.session) {
      req.session.destroy(error => {
         if (error) {
            res.status(500).json({ message: 'Error at log out' })
         } else {
            res.status(200).json({ message: 'Log out successful' })
         }
      })
   } else {
      res.status(200).end({ message: 'Log out successful' })
   }
})

module.exports = router