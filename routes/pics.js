var express = require('express');
var router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

const Pic = require("../config/models/pic");

router.get('/', function (req, res, next) {
    Pic.find().then(
        pics => { res.status(200).json({ pics }); })
        .catch(err => { res.status(500).json({ error: err }); });
});

router.post("/", upload.single('file'), (req, res) => {
    const pic = new Pic({
        tags: req.body.tags,
        name: req.file.originalname,
    });
    pic.save()
        .then(() => { res.status(201).json({}); })
        .catch(err => { res.status(500).json({ error: err }); });
});

module.exports = router;
