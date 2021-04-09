import LogoColor from '../logo/color';
import Menu from './nav-menu';
import NavBlock from './nav-block';
import { connect } from 'react-redux';

const Nav = ({ data_nav }) => {

  const renderNav = () => {
    return data_nav.map(item => (
      <>
        <NavBlock text={item.title} />
        { Menu({ nav: item.nav}) }
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

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(Nav)