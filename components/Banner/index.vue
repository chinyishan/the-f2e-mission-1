<template>
  <div class="main-banner">
    <div class="banner-name"><strong>喵立翰</strong>Miao Li-Han</div>
    <h1 class="banner-slogan">
      <strong>喵的未來</strong>
      <strong>人的希望</strong>
    </h1>
    <div class="banner-cat">
      <img src="@/assets/images/header-murr.png" alt="" />
    </div>
    <picture class="banner-bg">
      <source
        srcset="@/assets/images/heade-bg-web.png"
        media="(min-width: 768px)"
      />
      <img src="@/assets/images/heade-bg-mobile.png" alt="" />
    </picture>
  </div>
</template>
<style lang="scss">
.main-banner {
  position: relative;
  overflow: hidden;
  margin-bottom: 7vw;

  .banner-name {
    position: absolute;
    width: 40%;
    top: 67%;
    left: 32%;
    z-index: 3;
    font-size: calc(32px + 2vw);
    line-height: calc(32px + 2vw);
    font-family: "Gaegu", sans-serif;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: $primary-default;
    text-align: center;

    strong {
      display: inline-block;
      font-size: calc(32px + 0.8vw);
      line-height: calc(32px + 0.8vw);
      font-family: "Noto Serif TC", serif;
      font-weight: 700;
      margin-right: 4%;
    }
  }
  .banner-slogan {
    position: absolute;
    width: 100%;
    top: 51%;
    z-index: 3;
    font-size: calc(40px + 4.6vw);
    line-height: calc(40px + 4.6vw);
    font-family: "Noto Serif TC", serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: $primary-default;
    text-align: center;

    strong {
      display: inline-block;
      margin: 0 6%;
    }
  }
  .banner-cat {
    position: absolute;
    width: 45%;
    top: 9%;
    left: 35%;
    z-index: 2;
  }
  .banner-bg {
    width: 100%;
    height: auto;
  }
}
</style>
