const {ethers} = require('ethers')
require('dotenv').config()
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.API_KEY}`)

const address ='0x00b0718d8147D27222959e9fE01296b9761C9460'

const main = async ()=>{
   const balance = await provider.getBalance(address)
   console.log(`\nETH Balance of ${address} ---> ${ethers.utils.formatEther(balance)} ETH \n`)
}


main()
