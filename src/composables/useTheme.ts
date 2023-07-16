/** 主题列表 需要手动维护 */
const themes = [
  { name: '默认主题', value: 'default' },
  { name: '红色主题', value: 'red' },
  { name: '黄色主题', value: 'yellow' },
] as const

type Themes = typeof themes[number]['value']
interface UseThemeRes {
  /** 主题列表 */
  themes: typeof themes
  /** 当前主题 */
  currentTheme: Ref<Themes>
}

/**
 * 使用主题
 * @param theme 切换的主题名称 传递后会立即切换主题
 * @returns 返回主题`名称列表`和`当前主题`
 */
export function useTheme(theme?: Themes): UseThemeRes {
  theme && useToggleTheme(theme)

  const currentTheme = ref<Themes>((document.documentElement.getAttribute('theme')) as Themes || 'default')

  watch(currentTheme, val => useToggleTheme(val))

  return {
    themes,
    currentTheme,
  }
}

/**
 * 切换主题
 * @param theme 切换的主题名称 传递后会立即切换主题
 */
export function useToggleTheme(theme: Themes) {
  localStorage.setItem('theme', theme)
  document.documentElement.setAttribute('theme', theme)
}
