<script lang="ts" setup>
const router = useRouter()

function login() {
  router.push('/index')
  api.login({ password: '123', username: '12' })
}
</script>

<template>
  <div h-100vh w-100vw flex items-center justify-center>
    <el-button type="primary" size="large" @click="login">
      试试看
    </el-button>
  </div>
</template>

<style scoped lang="scss">

</style>
