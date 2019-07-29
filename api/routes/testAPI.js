import WordNet from "node-wordnet"

var express = require("express");
var router = express.Router();

let wordnet = new WordNet();
router.get("/", function(req, res, next) {
    res.send("API is working properly");
	wordnet.validForms(activeWord, console.log, function(res) {
        forms = result.gloss;
        return forms;
	});
});

module.exports = router;