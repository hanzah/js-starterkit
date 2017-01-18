import Desktop from './desktop/Header';
import { connect } from 'react-redux'
import { toggleMenu } from 'redux/ui/actions'
import * as Selectors from 'redux/selectors'

const mapStateToProps = (state) => {
  return {
    showMenu: Selectors.getMenuToggleStatus(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		toggleMenu: () => {
			return dispatch(toggleMenu())
		}
  }
}

export const DesktopHeader = connect(mapStateToProps, mapDispatchToProps)(Desktop)
