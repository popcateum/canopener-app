<script lang="ts">
  import { isConnect, myAddress, myBalance, myTokenId } from '@/stores/index'
  import { mint, balanceOf, myNFT, whitelist, isMint } from '@/contract/index'

  async function minting() {
    const isWhitelist = await whitelist($myAddress)
    const isMinting = await isMint()
    if (isMinting === false) {
      alert('아직 민팅이 시작되지 않았습니다.')
      return
    }
    if (isWhitelist === false) {
      alert('이 지갑은 화이트리스트에 없습니다.')
      return
    }
    if ($myBalance > 0) {
      alert('캔오프너는 하나만 소유 가능합니다.')
      return
    }
    await mint()
    $myBalance = await balanceOf($myAddress)
    $myTokenId = await myNFT($myAddress)
    alert('minting success')
  }
</script>

<div class="mint">
  <div class="text">Canopener CA: 0x00000</div>
  <img class="img" src="/img/nft.png" alt="nft" />
  {#if $isConnect && whitelist}
    <div class="mint-button" on:click="{minting}">Mint!</div>
  {:else if $isConnect}
    <div class="mint-button">민팅 대상이 아닙니다</div>
  {:else}
    <div class="mint-button">지갑을 연결하세요 (버튼아님)</div>
  {/if}
</div>

<style lang="scss">
  .mint {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img {
    width: 30%;
  }

  .mint-button {
    margin: 10px;
    padding: 10px;
    background-color: antiquewhite;
    font-weight: bold;
    cursor: pointer;
  }
  .text {
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>
