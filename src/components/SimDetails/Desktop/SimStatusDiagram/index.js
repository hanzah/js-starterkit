import SimStatusDiagram from './SimStatusDiagram'
import { connect } from 'react-redux'
import { openSimStatusModal } from 'redux/sims/actions'

const mapDispatchToProps = (dispatch) => {
  return {
		onSimStatusModalOpen: () => {
			return dispatch(openSimStatusModal())
		}
  }
}

export default connect(null, mapDispatchToProps)(SimStatusDiagram)
