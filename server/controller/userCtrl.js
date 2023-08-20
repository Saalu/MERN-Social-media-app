// const sampleData = require('../nft-data/data/nft-simple.json')
const fs = require('fs')
const users = JSON.parse(fs.readFileSync(`${__dirname}/../nft-data/data/nft-users.json`))

const userCtrl = {
// GET METHOD
 getAll: (req,res) => {res.json({
    status:'success',
    results: users.length,
    data:{users}
})},
// GET SINGLE METHOD
 getSingleUser: (req,res) => {   
    const id = req.params.id * 1
    
    if(id > nfts.length){
        return res.status(404).json({
            status:'fail',
            message: 'Invalid ID'
        })
    }

    const nft = nfts.find(el => el.id ===id )
    res.json({
    status:'success',
    data:{nft}
})},
// POST METHOD
 createUser: (req,res) => {

    const newId = users[users.length - 1].id + 1;
    const newUser = Object.assign({id: newId}, req.body)

    users.push(newUser)

    fs.writeFile(`${__dirname}/../nft-data/data/nft-users.json`, JSON.stringify(users), err => {
        res.status(201).json({
            status:'success',
            user: newUser
        })
    })
    // res.send('POST NFTS')
},
// UPDATE METHOD
 updateUser: (req,res) => {   

    if( req.params.id * 1 > nfts.length){
        return res.status(404).json({
            status:'fail',
            message: 'Invalid ID'
        })
    }

    res.json({
    status:'success',
    data:"Updating nft"
})},
// DELETE METHOD
 deleteUser: (req,res) => {   

    if( req.params.id * 1 > nfts.length){
        return res.status(404).json({
            status:'fail',
            message: 'Invalid ID'
        })
    }

    res.status(404).json({
    status:'success',
    data:null
})}


}


module.exports = userCtrl