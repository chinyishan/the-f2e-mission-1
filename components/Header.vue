<template>
  <header class="header">
    <h1 class="header__title">喵立翰Miao Li-Han，喵的未來，人的希望</h1>
    <nav class="header__nav">
      <h2 class="header__logo">Miao</h2>
      <div class="header__group">
        <ul class="header__list">
          <li class="header__item"><NuxtLink to="/">候選人主張</NuxtLink></li>
          <li class="header__item"><NuxtLink to="/">最新活動</NuxtLink></li>
          <li class="header__item"><NuxtLink to="/">政策議題</NuxtLink></li>
          <li class="header__item"><NuxtLink to="/">小額捐款</NuxtLink></li>
          <li class="header__item"><NuxtLink to="/">服務信箱</NuxtLink></li>
        </ul>
        <div class="header__links">
          <a href="#" target="_blank"
            ><img
              src="@/assets/images/ic-fb.png"
              alt="facebook"
              title="facebook"
          /></a>
          <a href="#" target="_blank"
            ><img
              src="@/assets/images/ic-ig.png"
              alt="instagram"
              title="instagram"
          /></a>
          <a href="#" target="_blank"
            ><img src="@/assets/images/ic-yt.png" alt="youtube" title="youtube"
          /></a>
        </div>
      </div>
      <div
        class="header__hamburger"
        @click="isOpenClose"
        :class="{ openClose: openClose }"
      >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </nav>
  </header>
</template>

<script scope>
const isOpenClose = ref(false);
const openClose = ref(false);
</script>
