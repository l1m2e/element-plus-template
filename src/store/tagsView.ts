export const useTagsViewStore = defineStore('tagsView', () => {
  const tagsList = ref(['111'])
  return {
    /** 标签列表 */
    tagsList,
  }
})
