<script lang="ts" setup>
const { themes, currentTheme } = useTheme() // 切换主题 只需要一行代码
</script>

<template>
  <div p="x-200px y-100px" flex justify-between text-start>
    <!-- 操作区 -->
    <el-card>
      <div flex items-center pb-24px>
        <div>黑暗模式支持：</div>
        <div h-40px w-40px flex items-center justify-center rounded-full bg-gray-1 dark:bg-dark @click="toggleDark()">
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
    </el-card>

    <!-- 展示区 -->
    <el-card>
      <div w-400px pb-24px>
        展示区
      </div>
      <el-button type="primary">
        按钮
      </el-button>
    </el-card>
  </div>
</template>
