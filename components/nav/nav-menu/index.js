import SubMenu from "../nav-submenu";
import Link from "next/link";

const Menu = ({ nav, menu_id, HandleSelectMenu }) => {
  return nav.map((item, key) => (
    <>
      <Link href={item.rute ? item.rute : "#"}>
          <span
            key={key*9}
            onClick={() => HandleSelectMenu(menu_id, item.id)}
            className={`${item.selected ? 'select' : ''} denote`}
            data-bs-toggle="collapse"
            data-bs-target={`#nav${item.name}`}
            aria-controls={`nav${item.name}`}
            aria-expanded="false"
          >
            <i class={item.icon}></i>
            <span>{item.name}</span>
          </span>
      </Link>

      {SubMenu({ sub_menu: item.sub_menu, id: `nav${item.name}` })}
    </>
  ));
};

export default Menu;
