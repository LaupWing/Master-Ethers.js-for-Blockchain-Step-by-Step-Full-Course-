const { ethers } = require('ethers')
require('dotenv').config()
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${process.env.API_KEY}`)


const account1 = '0xE080F0171A791aA9e3aE2cE292c056505366BD06'
const account2 = '0x00b0718d8147D27222959e9fE01296b9761C9460'
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const main = async () => {
   // Show account 1 balance before transfer
   const senderBalanceBefore = await provider.getBalance(account1)
   const receiverBalanceBefore = await provider.getBalance(account2)
   // Show account 2 balance before transfer
   
   console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
   console.log(`\nReceiver balance before: ${ethers.utils.formatEther(receiverBalanceBefore)}\n`)
   
   console.log('Sending ether')
   
   const tx = await wallet.sendTransaction({
      to: account2,
      value: ethers.utils.parseEther('0.025')
   })
   
   // Wait for transaction to be mined
   await tx.wait()
   console.log(tx)

   // Show account 1 balance after transfer
   // Show account 2 balance after transfer

   const senderBalanceAfter = await provider.getBalance(account1)
   const receiverBalanceAfter = await provider.getBalance(account2)
   
   console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
   console.log(`\nReceiver balance after: ${ethers.utils.formatEther(receiverBalanceAfter)}\n`)
}

main()