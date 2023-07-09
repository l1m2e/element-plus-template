const themes = [
  { name: '默认主题', value: 'default' },
  { name: '红色主题', value: 'red' },
  { name: '黄色主题', value: 'yellow' },
] as const

type Themes = typeof themes[number]['value']

/**
 * 使用主题
 * @param theme 切换的主题名称
 * @returns 返回主题名称列表 和 当前主题
 */
export function useTheme(theme?: Themes | string) {
  theme && setTheme(theme)

  const currentTheme = ref<Themes | string>(document.documentElement.getAttribute('theme') || 'default')

  watch(currentTheme, val => setTheme(val))

  return {
    /** 主题列表 */
    themes,
    /** 当前主题 */
    currentTheme,
  }
}

/**
 * 设置主题
 * @param theme 主题名称
 */
function setTheme(theme: string) {
  localStorage.setItem('theme', theme)
  document.documentElement.setAttribute('theme', theme)
}
