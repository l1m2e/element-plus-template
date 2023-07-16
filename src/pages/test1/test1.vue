<script lang="ts" setup>
defineOptions({
  name: 'Test1',
})
const test1 = ref('')
</script>

<template>
  <el-card>
    <h1>测试1</h1>
    <el-input v-model="test1" placeholder="输入一些文字测试是否会被缓存" />
  </el-card>
</template>
