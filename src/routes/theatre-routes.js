var express = require('express');
let router = express.Router();
import Theatre from './logic/theatre';

router.put('/', function (req, res, next) {
  new Theatre().add(req,res,next);
});
router.get('/:id', function (req, res, next) {
  new Theatre().get(req,res,next);
});

module.exports = router;
