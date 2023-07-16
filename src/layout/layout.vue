<script lang="ts" setup>
import RecursiveMenu from './components/recursive-menu/recursive-menu'
import NavTags from './components/nav-tags/nav-tags.vue'
import type { TagsNav } from '~/store/tags-nav-store/interfact.d'

const { sidebarWidth, isShowTagsNav, isCollapse } = storeToRefs(useAppStore())

const dynamicSidebarWidth = computed(() => isCollapse.value ? '64px' : `${sidebarWidth.value}px`)

// 菜单列表可由后端返回
const menuList = [
  {
    path: '/index',
    name: 'Index',
    label: '首页',
    icon: 'House',
  },
  {
    label: '测试',
    icon: 'Filter',
    children: [
      {
        path: '/test1',
        name: 'Test1',
        label: '测试1',
        icon: 'Menu',
      },
      {
        path: '/test2',
        name: 'Test2',
        label: '测试2',
        icon: 'Menu',
      },
    ],
  },
]

const router = useRouter()
const { tagsList, pageCaches } = storeToRefs(useTagsNavStroe())

// 选中菜单
function selectMenu(val: TagsNav) {
  const tag = tagsList.value.find(item => item.name === val.name)

  // 不存在tag 则添加
  !tag && tagsList.value.push(val)

  router.push(val.path)
}
</script>

<template>
  <!-- 头部 -->
  <div class="fixed left-0 top-0 h-60px w-100vw bg-[var(--el-bg-color)]">
    头部
  </div>

  <!-- 侧边栏 -->
  <div
    class="fixed left-0 top-60px h-[calc(100vh-60px)] bg-[var(--el-bg-color)] transition-all duration-300 ease-linear"
    :style="{ width: dynamicSidebarWidth }"
  >
    <!-- 递归渲染菜单列表 -->
    <RecursiveMenu :menu-list="menuList" :collapse="isCollapse" :default-active="$route.path" @select-menu="selectMenu" />
  </div>

  <main
    class="min-h-100vh bg-[var(--el-bg-color-page)] pt-60px transition-all duration-300 ease-linear"
    :style="{ paddingLeft: dynamicSidebarWidth }"
  >
    <!-- 多标签栏 -->
    <NavTags v-if="isShowTagsNav" />
    <!-- 内容 -->
    <div class="p-10px">
      <router-view v-slot="{ Component, route }">
        <Transition
          enter-active-class="animated animated-duration-150ms animated-fade-in"
          leave-active-class="animated animated-duration-150ms animated-fade-out"
          mode="out-in"
        >
          <keep-alive :include="pageCaches">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </Transition>
      </router-view>
    </div>
  </main>
</template>

<style scoped>
:deep(.el-menu){
  border: 0px;
}
</style>
