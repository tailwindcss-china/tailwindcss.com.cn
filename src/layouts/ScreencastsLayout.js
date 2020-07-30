import { importAll } from '@/utils/importAll'
import { collectPages } from '@/utils/collectPages'
import { SidebarLayout } from '@/layouts/SidebarLayout'

const pages = collectPages(
  importAll(require.context('../pages/screencasts/?meta=title,published', true, /\.mdx$/))
)

export function ScreencastsLayout(props) {
  return (
    <SidebarLayout
      base="screencasts"
      pages={pages}
      fallbackLink={{ href: '/screencasts/coming-soon' }}
      {...props}
    />
  )
}
