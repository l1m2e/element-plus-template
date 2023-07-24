<script lang="ts" setup>
defineOptions({
  name: 'Index',
})
const { themes, currentTheme } = useTheme() // 切换主题 只需要一行代码
const { sidebarWidth, isCollapse } = storeToRefs(useAppStore())
function fn() {
  if (sidebarWidth)
    return 1
}
fn()
</script>

<template>
  <el-card class="m-auto mt-100px w-500px">
    <div class="flex items-center pb-24px">
      <div>黑暗模式支持：</div>
      <div
        class="h-40px w-40px flex items-center justify-center rounded-full bg-gray-1 dark:bg-dark"
        @click="useToggleDark()"
      >
        <div :class="isDark ? 'i-ri-moon-line' : 'i-ri-sun-line'" />
      </div>
    </div>
    <div pb-24px>
      选择您的主题
    </div>
    <el-radio-group v-model="currentTheme">
      <el-radio v-for="item in themes" :key="item.value" :label="item.value" size="large" border>
        {{ item.name }}
      </el-radio>
    </el-radio-group>

    <div py-24px>
      随心所欲使用图标和动画 鼠标移动到图标上试试
    </div>
    <el-row>
      <el-col :span="8">
        <div class="i-ri-vuejs-fill text-24px hover:(color-green animated animated-bounce)" />
      </el-col>
      <el-col :span="8">
        <div class="i-ri-t-box-fill text-24px hover:(color-blue animated animated-heart-beat)" />
      </el-col>
      <el-col :span="8">
        <div class="i-ri-reactjs-line text-24px hover:(animate-spin color-blue)" />
      </el-col>
    </el-row>
    <div mt-24px>
      <span>菜单宽度</span>
      <el-input-number v-model="sidebarWidth" class="ml-10px" :step="10" :min="200" :max="600" />
    </div>
    <div mt-24px>
      <span>菜单是否折叠</span>
      <el-switch v-model="isCollapse" class="ml-10px" />
    </div>
  </el-card>
</template>
