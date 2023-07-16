export interface MenuItem{
  /** 路由路径 */
  path?: string,
  /** 路由唯一标识 */
  name?: string,
  /** 菜单名称 */
  label: string,
  /** 菜单图标 */
  icon: string,
  /** 子菜单 */
  children?: MenuItem[]
};

