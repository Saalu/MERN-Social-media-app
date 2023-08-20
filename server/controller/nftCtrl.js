const fs = require('fs')
const NFT = require('../model/nftModel')

const nfts = JSON.parse(fs.readFileSync(`${__dirname}/../nft-data/data/nft-simple.json`))

// GET METHOD ======================
exports.getAllNtfs =async (req,res) => {
    try {
       const nft = await NFT.find()
     
        res.status(201).json({
            status:'success',
            result: nft.length,
            data: nft
        })
        
    } catch (err) {
    res.status(500).json({msg:err.message})
    }
}
// GET SINGLE METHOD
exports.getSingle =  async (req,res) => {
    try {
       const nft = await NFT.findById(req.params.id)
     
        res.status(201).json({
            status:'success',
            // result: nft.length,
            data: nft
        })
        
    } catch (err) {
        res.status(500).json({status:'failed', msg:err.message})

    }}
// POST METHOD ======================
exports.createNtf = async(req,res) => {
   try {
    const newNFT = await NFT.create(req.body)
    // console.log(newNFT)
    res.status(201).json({
        status:'success',
        nft: newNFT
    })
    
} catch (err) {
res.status(500).json({msg:err.message})
}
}

// UPDATE METHOD
exports.updateNtf = async(req,res) => {   

    try {

        const nft = await NFT.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})
        
        res.json({
            status:'success',
            data:nft
        })
    } catch (err) {
res.status(500).json({status:'failed', msg:err.message})
        
    }

   }
// DELETE METHOD
exports.deleteNtf = async(req,res) => {   

    try {
         await NFT.findByIdAndDelete(req.params.id)
        res.json({
            status:'success',
            msg: 'Deleted nft',
        })
    } catch (err) {
res.status(500).json({status:'failed', msg:err.message})
        
    }}