var express = require('express');
const { createHistory ,getHistories, deleteHistories} = require('../controllers/historyController');
var router = express.Router();

/* GET home page. */
router.get('/',getHistories);
router.post('/', createHistory);
router.delete('/', deleteHistories);
router.delete('/:id',deleteHistories );



module.exports = router;