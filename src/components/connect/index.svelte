<script lang="ts">
  import { isConnect, myAddress, myBalance, myTokenId } from '@/stores/index'
  import { ethereum, addChain, requestAccount, getAddress } from '@/chain/index'
  import { balanceOf, myNFT } from '@/contract'

  function changed() {
    ethereum.on('accountsChanged', async () => {
      await getMyChainData()
      await getMyTokenData()
    })
  }

  async function connect() {
    if (ethereum === undefined) {
      alert('There is no Metamask. Please install Metamask.')
      return false
    }
    await addChain()
    await requestAccount()
    await getMyChainData()
    await getMyTokenData()
    changed()
    $isConnect = true
  }

  async function getMyChainData() {
    $myAddress = await getAddress()
  }

  async function getMyTokenData() {
    $myBalance = await balanceOf($myAddress)

    if ($myBalance != 0) {
      $myTokenId = await myNFT($myAddress)
    } else {
      $myTokenId = null
    }
  }
</script>

<div class="button" on:click="{connect}">Wallet Connect (버튼임)</div>

<style lang="scss">
  .button {
    display: flex;
    margin: 10px;
    padding: 10px;
    font-weight: bold;
    background-color: antiquewhite;
    cursor: pointer;
  }
</style>
