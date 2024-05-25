<template>
  <transition name="modal">
    <div class="modalDialog PayDialog" v-show="showDialog">
      <div class="PayDialog__dialog">
        <div class="PayDialog__content">
          <div class="PayDialog__row">
            <div class="PayDialog__col"></div>
            <div class="PayDialog__col"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const showDialog = ref(false);
</script>

<style lang="scss"></style>
