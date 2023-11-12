<template>
  <div class="main-banner">
    <h1><strong>喵立翰</strong>Miao Li-Han</h1>
    <div class="banner-slogan">
      <strong>喵的未來</strong>
      <strong>人的希望</strong>
    </div>
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

  h1 {
    position: absolute;
    width: 40%;
    top: 67%;
    left: 32%;
    z-index: 3;
    font-size: 48px;
    font-family: "Gaegu", sans-serif;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: $primary-default;
    text-align: center;

    strong {
      display: inline-block;
      font-size: 30px;
      font-family: "Noto Serif TC", serif;
      margin-right: 4%;
    }
  }
  .banner-slogan {
    position: absolute;
    width: 100%;
    top: 51%;
    z-index: 3;
    font-size: 82px;
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
