export const useAppStore = defineStore('useAppStore', () => {
  const sidebarWidth = ref(200)
  const isShowTagsNav = ref(true)
  const isCollapse = ref(false)

  return {
    /** 侧边栏宽度 */
    sidebarWidth,
    /** 是否折叠 */
    isCollapse,
    /** 是否展示多标签 */
    isShowTagsNav,
  }
})
