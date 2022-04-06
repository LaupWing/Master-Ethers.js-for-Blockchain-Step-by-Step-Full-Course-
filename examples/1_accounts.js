const {ethers} = require('ethers')
require('dotenv').config()

console.log(process.env)
const provider = new ethers.providers.JsonRpcProvider(`https://${process.env.API_KEY}@eth2-beacon-mainnet.infura.io`)

console.log(provider)