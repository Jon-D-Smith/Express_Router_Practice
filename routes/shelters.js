const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("all Shelters")
})

router.post('/', (req, res) => {
    res.send("creating Shelter")
})

router.get('/:id', (req, res) => {
    res.send("One Shelter")
})

router.get('/:id/edit', (req, res) => {
    res.send("editing a Shelter")
})

module.exports = router;