
interface MenuItem {
  name: string,
  link: string
}

interface Menu {
  items: Array<MenuItem>
}

export default interface Header {
  icon: string,
  menus: Array<Menu>
}