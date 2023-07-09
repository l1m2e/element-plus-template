<script lang="ts" setup>

</script>

<template>
  <!-- 内容 -->
  <div class="content">
    <router-view v-slot="{ Component }">
      <Transition
        enter-active-class="animated animated-duration-150ms animated-fade-in"
        leave-active-class="animated animated-duration-150ms animated-fade-out"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style scoped>

</style>
