const {ethers} = require('ethers')
require('dotenv').config()

console.log(process.env)
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.API_KEY}`)

const main = async ()=>{
   const balance = await provider.getBalance('0x00b0718d8147D27222959e9fE01296b9761C9460')
   console.log(balance)
}


main()
