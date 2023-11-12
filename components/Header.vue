<template>
  <header class="main-header">
    <nav class="nav-web">
      <div class="nav-group">
        <h2>Miao</h2>
        <ul class="nav-list">
          <li><NuxtLink class="list-page" to="/">候選人主張</NuxtLink></li>
          <li><NuxtLink class="list-page" to="/">最新活動</NuxtLink></li>
          <li><NuxtLink class="list-page" to="/">政策議題</NuxtLink></li>
          <li><NuxtLink class="list-page" to="/">小額捐款</NuxtLink></li>
          <li><NuxtLink class="list-page" to="/">服務信箱</NuxtLink></li>
          <li>
            <NuxtLink to="/"
              ><img src="@/assets/images/ic-fb.png" alt=""
            /></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"
              ><img src="@/assets/images/ic-ig.png" alt=""
            /></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"
              ><img src="@/assets/images/ic-yt.png" alt=""
            /></NuxtLink>
          </li>
        </ul>
      </div>
      <img class="nav-bg" src="@/assets/images/nav-bg.svg" alt="" />
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
  top: 0;
  z-index: 100;

  .nav-web {
    position: relative;
    width: min(1200px, 100%);
    padding-block: 1%;
    margin: 0 auto;
    z-index: 10;

    .nav-group {
      position: absolute;
      width: 90%;
      bottom: 30%;
      left: 50%;
      transform: translate(-50%, 0%);
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-family: "Gaegu", sans-serif;
        font-size: 36px;
        color: $primary-default;
      }
      .nav-list {
        display: flex;
        align-items: center;

        li {
          a {
            font-size: 16px;
            color: $primary-default;
            font-family: "Noto Sans TC", sans-serif;
            font-weight: 700;
            white-space: nowrap;

            &.list-page {
              white-space: nowrap;
              padding: 0 10px;
              display: block;
            }
            img {
              width: 100%;
            }
          }
        }
      }
    }
    .nav-bg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
