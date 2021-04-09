import SubMenu from '../nav-submenu';
import Link from 'next/link';

export default function Menu({ nav }) {
  const renderMenu = () => {
    return (nav).map((item, key) => (
      <>
        <Link href={ item.rute ? item.rute : '#'}>
          <span 
            key={key}
            className="denote"
            data-bs-toggle="collapse"
            data-bs-target={`#nav${item.name}`}
            aria-controls={`nav${item.name}`}
            aria-expanded="false"
          >
            <i class={item.icon}></i>
            <span>{item.name}</span>
          </span>
        </Link>
        { SubMenu({ sub_menu: item.sub_menu, id: `nav${item.name}` })}
      </>
    ))
  }

  return renderMenu()
}