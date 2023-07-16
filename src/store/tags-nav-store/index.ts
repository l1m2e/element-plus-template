import type { TagsNav } from './interfact'

export const useTagsNavStroe = defineStore('tags-nav', () => {
  const tagsList = ref<Array<TagsNav>>([
    {
      path: '/index',
      name: 'Index',
      label: '首页',
      icon: 'House',
    },
  ])

  const pageCaches = computed(() => tagsList.value.map(item => item.name))
  return {
    /** 标签列表 */
    tagsList,
    /** 缓存的页面 */
    pageCaches,
  }
})
