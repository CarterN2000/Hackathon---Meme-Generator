const express = require('express');
const router = express.Router();

const memeCtrl = require('../controllers/memes');

router.get('/', memeCtrl.index);

router.post("/", memeCtrl.create);

router.get("/:id", memeCtrl.show);

router.delete("/:id", memeCtrl.delete);

router.put("/:id", memeCtrl.update);

module.exports = router;