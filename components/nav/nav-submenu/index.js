export default function SubMenu({ sub_menu, id }) {
  const renderSubMenu = () => {
    return (sub_menu).map((sub_menu, sub_menu_key) => (
      <>
        <li class="list-group-item">
          <i class="fas fa-chevron-right"></i>
          <span>{sub_menu.name}</span>
        </li>
      </>
    ))
  }

  return <div class="collapse" id={id}>
    <div class="card card-sub-menu-one card-body">
      <div class="sub-menu-one py-2 shadow collapse-inner rounded">
        <ul class="list-group">
          { renderSubMenu() }
        </ul>
      </div>
    </div>
  </div>
}