const router = require('express').Router()

const {getAllNtfs,createNtf,getSingle,updateNtf,deleteNtf} = require('../controller/nftCtrl')


router.route('/').get(getAllNtfs).post(createNtf)
router.route('/:id' ).get(getSingle).patch(updateNtf).delete(deleteNtf)


module.exports = router