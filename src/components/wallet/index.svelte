<script lang="ts">
  import { myAddress, myBalance, myTokenId } from '@/stores/index'
  import { balanceOf } from '@/contract/index'
</script>

<div class="info">
  My Address: {$myAddress}
</div>

{#if $myBalance != 0}
  <div class="info">My Can Opener: #{$myTokenId}</div>
{:else}
  <div class="info">My Can Opener: 캔오프너가 없습니다.</div>
{/if}

<div class="nft"></div>

<style lang="scss">
  .info {
    display: flex;
    margin: 10px;
    padding: 10px;
    font-weight: bold;
    border: 2px solid black;
    box-sizing: border-box;
  }
</style>
