import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { DefineComponent, PropType } from 'vue'
import type { MenuItem } from './interface.d'

export default defineComponent({
  name: 'RecursiveMenu',
  props: {
    menuList: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
  },
  emits: ['selectMenu'],
  setup(props, ctx) {
    // 渲染图标
    const renderIcon = (icon: string) => {
      const IconComp = (ElementPlusIconsVue as { [key: string]: DefineComponent })[icon]
      return (
        <el-icon>
          <IconComp />
        </el-icon>
      )
    }

    // 递归渲染菜单
    const renderMenu = (list: MenuItem[]) => {
      return list.map((item, index) => {
        // 如果没有子菜单，使用 el-menu-item 渲染菜单项
        if (!item.children) {
          return (
            <el-menu-item onClick={() => { ctx.emit('selectMenu', item) }} index={item.path}>
              {renderIcon(item.icon)}
              <span>{item.label}</span>
            </el-menu-item>
          )
        }

        // 有子菜单，使用 el-sub-menu 渲染子菜单
        const slots = {
          title: () => (
            <>
              {renderIcon(item.icon)}
              <span>{item.label}</span>
            </>
          ),
          default: () => renderMenu(item.children!),
        }
        return <el-sub-menu index={item.label + index} v-slots={slots} />
      })
    }

    return () => (
      <el-menu {...ctx.attrs}>
        {renderMenu(props.menuList)}
      </el-menu>
    )
  },
})
