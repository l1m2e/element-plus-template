<script lang="ts" setup>
import type { TagsNav } from '~/store/tags-nav-store/interfact.d'

const { tagsList } = storeToRefs(useTagsNavStroe())
const route = useRoute()
const router = useRouter()

// 点击tag跳转路由
function selectTag(val: TagsNav) {
  router.push(val.path)
}

// 删除标签
function removeTag(val: TagsNav) {
  const index = tagsList.value.findIndex(item => item.name === val.name)
  const isLast = index === tagsList.value.length - 1

  isLast
    ? router.push(tagsList.value[index - 1].path)
    : router.push(tagsList.value[index + 1].path)

  tagsList.value.splice(index, 1)
}
</script>

<template>
  <div class="h-35px w-100% flex items-center justify-between bg-[var(--el-bg-color)] px-30px">
    <div class="h-100% flex flex-1">
      <div
        v-for="item in tagsList" :key="item.name" class="relative h-100% flex cursor-pointer items-center px-15px"
        :class="route.name === item.name && 'bg-[var(--el-color-primary-light-9)]'"
        @click="selectTag(item)"
      >
        <el-icon size="14">
          <component :is="item.icon" />
        </el-icon>
        <span class="ml-5px text-14px"> {{ item.label }}</span>
        <div v-if="item.label !== '首页'" class="ml-10px rounded-full p-2px hover:(bg-[var(--el-color-primary)] text-white)" @click.stop="removeTag(item)">
          <div class="i-ri-close-line text-12px" />
        </div>
        <div class="triangles" />
      </div>
    </div>

    <el-dropdown>
      <div class="i-ri-more-2-fill text-16px" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <div class="flex-center">
              <div class="i-ri-loop-right-line mr-5px text-14px" />
              <span>刷新</span>
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="flex-center">
              <div class="i-ri-close-line mr-5px text-16px" />
              <span>关闭其他</span>
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="flex-center">
              <div class="i-ri-arrow-left-line mr-5px text-16px" />
              <span>关闭左侧</span>
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="flex-center">
              <div class="i-ri-arrow-right-line mr-5px text-16px" />
              <span>关闭右侧</span>
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="flex-center">
              <div class="i-ri-close-line mr-5px text-16px" />
              <span>全部关闭</span>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped>
.triangles {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 15px 35px 0;
  border-color: transparent var(--el-bg-color) transparent transparent;
}
</style>
