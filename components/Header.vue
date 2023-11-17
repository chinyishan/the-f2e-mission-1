<template>
  <header class="main-header">
    <nav class="nav-web">
      <h2>Miao</h2>
      <div class="nav-group">
        <ul class="nav-list">
          <li><NuxtLink class="list-page" to="/">候選人主張</NuxtLink></li>
          <li><NuxtLink class="list-page" to="/">最新活動</NuxtLink></li>
          <li><NuxtLink class="list-page" to="/">政策議題</NuxtLink></li>
          <li><NuxtLink class="list-page" to="/">小額捐款</NuxtLink></li>
          <li><NuxtLink class="list-page" to="/">服務信箱</NuxtLink></li>
        </ul>
        <div class="nav-link">
          <a href="#" target="_blank"
            ><img src="@/assets/images/ic-fb.png" alt=""
          /></a>
          <a href="#" target="_blank"
            ><img src="@/assets/images/ic-ig.png" alt=""
          /></a>
          <a href="#" target="_blank"
            ><img src="@/assets/images/ic-yt.png" alt=""
          /></a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })
</script>

<style lang="scss" scoped>
.main-header {
  position: fixed;
  width: 100%;
  margin: 0 auto;
  top: 6%;
  z-index: 100;

  .nav-web {
    position: relative;
    width: min(1200px, 93%);
    height: 100%;
    padding: 1% 3%;
    margin: 0 auto;
    background-color: $white;
    border-radius: 50px;
    border: 2px solid $secondary-light;
    box-shadow: 6px 8px 0 0 $secondary-default;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      background-image: url("/assets/images/nav-bg-vc1.png");
      bottom: 99%;
      left: 3%;
      width: 7%;
      height: 40%;
      background-size: 100% auto;
      background-position: top center;
      background-repeat: no-repeat;
    }
    h2 {
      font-family: "Gaegu", sans-serif;
      font-size: 36px;
      color: $primary-default;
    }
    .nav-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 60%;
      .nav-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;

        li {
          padding: 3% 4%;
          a {
            font-size: 16px;
            color: $primary-default;
            font-family: "Noto Sans TC", sans-serif;
            font-weight: 700;
            white-space: nowrap;
          }
        }
      }
      .nav-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>
