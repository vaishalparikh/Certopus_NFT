const CONTRACT_ADDRESS = "0xb150E78250255692Ded698a8247BA94D73464C10"
const META_DATA_URL = "ipfs://bafyreibywj2f43ckqgazle35eklgy7vh7jbybnpi5hv3pkf36qhg5figwe/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });