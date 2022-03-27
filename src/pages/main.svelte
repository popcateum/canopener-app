<script lang="ts">
  import Connect from '@/components/connect/index.svelte'
  import Wallet from '@/components/wallet/index.svelte'
  import Mint from '@/components/mint/index.svelte'
</script>

<div class="wrap">
  <div class="title">
    <img class="img" src="/img/1.png" alt="title1" />
    <img class="img" src="/img/2.png" alt="title2" />
  </div>
  <Connect />
  <Wallet />
  <Mint />
  <div class="content">
    Can Opener NFT는 팝캣티움 리서치 1편에 영감을 받아 만들어졌습니다.
    <br />
    캔오프너는 팝캣티움 공식 Discord에서 프라이빗 채팅 채널 참여권으로 사용됩니다.
    <br />
    지금 캔오프너를 획득하고 팝캣티움 디스코드에 참여하세요!
    <br />
    지금은 2,931,996블록 기준 팝캣티움 사용 흔적이 있는 지갑만 민팅이 가능합니다.
  </div>
  <div class="link">
    <div class="list">
      팝캣티움 디스코드: <a href="https://discord.gg/SjWPG4FGta" target="_blank">접속하기</a>
    </div>
    <div class="list">
      팝캣티움 리서치 1편: <a
        href="https://medium.com/@cat_baker/1%ED%8E%B8-%EC%A0%84%EC%86%A1%EB%B6%88%EA%B0%80%EB%8A%A5-nft-%EB%B9%84%ED%83%88%EB%A6%AD-%EB%B6%80%ED%85%8C%EB%A6%B0-%EC%83%9D%EA%B0%81-%EB%94%B0%EB%9D%BC%EC%9E%A1%EA%B8%B0-8aa8fd3821c"
        target="_blank">접속하기</a
      >
    </div>
  </div>
  <div class="content">
    <div class="images">
      <img src="/img/popcateum.png" alt="popcateum" />
      <div>Produced by <br /> popcateum</div>
    </div>
    <div class="images">
      <img src="/img/popdog.png" alt="popdog" />
      <div>Artwork by <br /> 블록체인개잡부</div>
    </div>
  </div>
</div>

<style lang="scss">
  .wrap {
    max-width: 1280px;
    margin: 0px auto;
  }
  .title {
    display: flex;
  }
  .img {
    width: 50%;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  .link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  .images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    img {
      width: 100%;
    }
  }
</style>
