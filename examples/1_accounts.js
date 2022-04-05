const {ethers} = require('ethers')

const provider = new ethers.providers.JsonRpcProvider(`https://${process.env.API_KEY}@eth2-beacon-mainnet.infura.io`)