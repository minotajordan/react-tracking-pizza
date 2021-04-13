import LogoColor from '../logo/color';
import Menu from './nav-menu';
import NavBlock from './nav-block';
import { connect } from 'react-redux';
import { selectMenu } from '../../redux/actions/navAction'

const Nav = ({ data_nav, selectMenu }) => {

  const HandleSelectMenu = (menu_id, id) => {
    console.log('HandleSelectMenu', id);
    selectMenu({ menu_id, id });
  }

  const renderNav = () => {
    return data_nav && data_nav.map((item, k) => (
      <>
        <NavBlock text={item.title} key={k}/>
        { Menu({ nav: item.nav, menu_id: item.id, HandleSelectMenu: HandleSelectMenu}) }
      </>
    ))
  }

  return <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <LogoColor />
    {renderNav()}
  </ul>
}

const mapStateToProps = (state) => ({
  data_nav: state.nav.data_nav
})

const mapDispatchToProps = dispatch => ({
  selectMenu: (string) => dispatch(selectMenu(string))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav)