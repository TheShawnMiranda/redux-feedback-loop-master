const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    res.sendStatus(200);
    let queryString = `INSERT INTO "feedback"("feeling", "understanding",
                      "support", "comments")VALUES($1, $2, $3, $4);`;
    let values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    pool.query(queryString, values)
    .catch((error) => {
        console.log(error);
    })
})

module.exports = router;