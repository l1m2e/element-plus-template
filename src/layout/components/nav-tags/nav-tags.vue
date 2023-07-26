<script lang="ts" setup>
import type { TabPaneName, TabsPaneContext } from 'element-plus'

onMounted(() => {
  closeOther()
})

const { tagsList, checkedTag } = storeToRefs(useTagsNavStroe())
const router = useRouter()

// 点击tag跳转路由
function selectTag(val: TabsPaneContext) {
  const path = tagsList.value.find(item => item.name === val.props.name)?.path
  path && router.push(path)
}

// 删除标签
function removeTag(val: TabPaneName) {
  const index = tagsList.value.findIndex(item => item.name === val)
  const isLast = index === tagsList.value.length - 1

  if (isLast) {
    router.push(tagsList.value[index - 1].path)
    checkedTag.value = tagsList.value[index - 1].name
  }
  else {
    router.push(tagsList.value[index + 1].path)
    checkedTag.value = tagsList.value[index + 1].name
  }

  tagsList.value.splice(index, 1)
}

const dropdownList = reactive([
  {
    label: '刷新',
    icon: 'Refresh',
    action: refresh,
  },
  {
    label: '关闭其他',
    icon: 'Close',
    action: closeOther,
  },
  {
    label: '关闭左侧',
    icon: 'Back',
    action: closeLeft,
  },
  {
    label: '关闭右侧',
    icon: 'Right',
    action: closeRight,
  },
  {
    label: '全部关闭',
    icon: 'Close',
    action: closeAll,
  },
])

function refresh() {
  location.reload()
}

function closeOther() {
  tagsList.value = tagsList.value.filter(item => item.name === 'Index' || item.name === checkedTag.value)
}

function closeLeft() {
  const index = tagsList.value.findIndex(item => item.name === checkedTag.value)
  if (index > -1) {
    tagsList.value = tagsList.value.filter((v, i) => {
      return v.name === tagsList.value[index].name || i > index || v.name === 'Index'
    })
  }
}

function closeRight() {
  const index = tagsList.value.findIndex(item => item.name === checkedTag.value)
  tagsList.value = tagsList.value.splice(0, index + 1)
}

function closeAll() {
  tagsList.value = tagsList.value.filter(item => item.name === 'Index')
  const item = tagsList.value.find(item => item.name === 'Index')
  item?.path && router.push(item.path)
  if (item?.name)
    checkedTag.value = item.name
}
</script>

<template>
  <div class="h-35px w-100% flex items-center justify-between bg-[var(--el-bg-color)]">
    <el-tabs v-model="checkedTag" type="card" class="w-[calc(100%-60px)]" @tab-click="selectTag" @tab-remove="removeTag">
      <el-tab-pane
        v-for="item in tagsList" :key="item.name" :label="item.label" :name="item.name"
        :closable="item.label !== '首页'"
      >
        <template #label>
          <div class="flex-center">
            <el-icon size="14" class="mr-4px">
              <component :is="item.icon" />
            </el-icon>
            {{ item.label }}
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>

    <el-dropdown>
      <div class="i-ri-more-2-fill w-40px text-16px" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in dropdownList" :key="item.label" @click="item.action">
            <el-icon class="mr-4px">
              <component :is="item.icon" />
            </el-icon>
            {{ item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="scss">
// 创建内圆角
@mixin innerRounded($color) {
  &::before {
    content: '';
    --uno: block absolute left--8px bottom-0 w-8px h-8px;
    background: radial-gradient(circle at 0% 0%, transparent 8px, var($color) 8px);
  }

  &::after {
    content: '';
    --uno: block absolute right--8px bottom-0 w-8px h-8px;
    background: radial-gradient(circle at 100% 0%, transparent 8px, var($color) 8px);
  }
}

:deep(.el-tabs) {
  --el-tabs-header-height: 35px;

  .el-tabs__header,
  .el-tabs__nav {
    --uno: m-0 border-none;
  }

  .el-tabs__item {
    --uno: border-none rounded-t-5px relative first:ml-8px;

    &:hover {
      z-index: 10;
      background-color: var(--el-color-info-light-8);
      @include innerRounded(--el-color-info-light-8)
    }
  }

  .is-active {
    background-color: var(--el-color-primary-light-9);
  }

  .el-tabs__item.is-active {
    @include innerRounded(--el-color-primary-light-9)
  }

  .el-tabs__nav-next,
  .el-tabs__nav-prev {
    --uno: flex-center h35px;
  }

}
</style>
