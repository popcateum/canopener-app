import { ethers } from 'ethers'
import { signer } from '@/chain/index'
import CanopenerABI from '@/abi/Canopener.json'
import MintV1ABI from '@/abi/MintV1.json'

const nftCA = '0x6C7739C6bFf4f51174484a7fe74Ad04B7d14fd76'
const mintCA = '0x897b40f448b870e0720bd1a92c7E20eD81CD7DAd'

const nftContract = new ethers.Contract(nftCA, CanopenerABI, signer)
const mintContract = new ethers.Contract(mintCA, MintV1ABI, signer)

export async function mint() {
  const tx = await mintContract.mint()
  await tx.wait()
}

export async function whitelist(myAddress: string) {
  const isWhitelist = await mintContract.whiteList(myAddress)
  return isWhitelist
}

export async function isMint() {
  const isWhitelist = await mintContract.isMint()
  return isWhitelist
}

export async function myNFT(myAddress: string) {
  const myTokenId = await nftContract.tokenOfOwnerByIndex(myAddress, 0)
  return myTokenId
}

export async function balanceOf(myAddress: string) {
  const balance = await nftContract.balanceOf(myAddress)
  return balance
}
