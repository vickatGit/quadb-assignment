const express=require('express')
const router=express.Router()
const {getTickers}=require('../controller/wazirx_controller')

router.route('/tickers').get(getTickers)

module.exports = router