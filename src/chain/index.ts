import { ethers } from 'ethers'

export const ethereum: any | undefined = (window as any).ethereum
export let provider: any
export let signer: any

if (ethereum !== undefined) {
  provider = new ethers.providers.Web3Provider(ethereum)
  signer = provider.getSigner()
}

export async function getAddress() {
  const address = await signer.getAddress()
  return address
}

export async function requestAccount() {
  await ethereum.request({ method: 'eth_requestAccounts' })
}

export function changed(func: any) {
  ethereum.on('accountsChanged', async () => {
    await func()
  })
}

export async function addChain() {
  await ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: '0x4bd',
        chainName: 'Popcateum',
        nativeCurrency: {
          name: 'Popcat',
          symbol: 'POP',
          decimals: 18
        },
        rpcUrls: ['https://dataseed.popcateum.org'],
        blockExplorerUrls: ['https://explorer.popcateum.org']
      }
    ]
  })
}