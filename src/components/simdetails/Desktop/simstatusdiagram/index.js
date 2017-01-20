import SimStatusDiagram from './SimStatusDiagram'
import { connect } from 'react-redux'
import { toggleSimStatusModal } from 'redux/sims/actions'

const mapDispatchToProps = (dispatch) => {
  return {
		onSimStatusModalOpen: () => {
			return dispatch(toggleSimStatusModal())
		}
  }
}

export default connect(null, mapDispatchToProps)(SimStatusDiagram)
