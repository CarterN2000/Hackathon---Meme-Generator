const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({message: 'Index Route'});
});

router.post("/", (req, res) =>  {
	console.log(req.body)
	res.status(200).json({message: "people create route"})
});

router.get("/:id", (req, res) => {
	res.status(200).json({message: "people show route: " + req.params.id })
});

router.delete("/:id", (req, res) => {
	res.status(200).json({message: "people delete route: " + req.params.id })
});

router.put("/:id", (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "people update route: " + req.params.id })
});

module.exports = router;