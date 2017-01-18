import MainLayout from './MainLayout'
import { connect } from 'react-redux'
import * as Selectors from 'redux/selectors'

const mapStateToProps = (state) => {
  return {
    showMenu: Selectors.getMenuToggleStatus(state)
  }
}

export default connect(mapStateToProps)(MainLayout)
