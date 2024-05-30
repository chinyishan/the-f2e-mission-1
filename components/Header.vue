<template>
  <header class="header">
    <h1 class="header__title">喵立翰Miao Li-Han，喵的未來，人的希望</h1>
    <div class="header__ear">
      <img src="@/assets/images/nav-bg-vc1.png" alt="" />
    </div>
    <nav class="header__nav" :class="{ openClose: openClose }">
      <h2 class="header__logo">Miao</h2>
      <div class="header__hamburger">
        <div class="menu cross menu--1">
          <label>
            <input type="checkbox" @click="isOpenClose" />
            <svg
              width="70"
              height="70"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="30" />
              <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
              <path class="line--2" d="M0 50h70" />
              <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
            </svg>
          </label>
        </div>
      </div>
      <div class="header__group" :class="{ listShow: listShow }">
        <ul class="header__list">
          <li class="header__item">
            <NuxtLink to="javascript:void(0)" @click="goAnchor('advocate')"
              >候選人主張</NuxtLink
            >
          </li>
          <li class="header__item">
            <NuxtLink to="javascript:void(0)" @click="goAnchor('news')"
              >最新活動</NuxtLink
            >
          </li>
          <li class="header__item">
            <NuxtLink to="javascript:void(0)" @click="goAnchor('policy')"
              >政策議題</NuxtLink
            >
          </li>
          <li class="header__item">
            <NuxtLink to="javascript:void(0)" @click="goAnchor('donate')"
              >小額捐款</NuxtLink
            >
          </li>
          <li class="header__item">
            <NuxtLink to="javascript:void(0)" @click="goAnchor('suggest')"
              >服務信箱</NuxtLink
            >
          </li>
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
    </nav>
  </header>
</template>

<script setup>
const openClose = ref(false);
const listShow = ref(false);

const isOpenClose = () => {
  openClose.value = !openClose.value;
  listShow.value = !listShow.value;
};

const goAnchor = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
