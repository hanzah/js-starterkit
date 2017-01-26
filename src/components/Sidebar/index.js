import Desktop from './Desktop/SidebarComponent'
import { connect } from 'react-redux'
import * as Selectors from 'redux/selectors'

const mapStateToProps = (state) => {
  return {
    showMenu: Selectors.getMenuToggleStatus(state)
  }
}

export const DesktopSidebarComponent = connect(mapStateToProps)(Desktop)
