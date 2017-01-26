import ChangeStatus from './ChangeStatus'
import { connect } from 'react-redux'
import { reset } from 'redux-form';
import {
	closeSimStatusModal,
	toggleSimEditModal,
	simUpdate
} from 'redux/sims/actions'
import * as Selectors from 'redux/selectors'

const mapStateToProps = (state) => {
	return {
		confirmSimEditOpen: Selectors.getSimEditModalStatus(state)
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
		onSimStatusModalClose: () => {
			return dispatch(closeSimStatusModal())
		},
		onSimStatusChange: () => {
			return dispatch(toggleSimEditModal())
		},
		onSimEditSubmit: (id, status, scheduleData) => {
			dispatch(simUpdate(id, {status, scheduleData}))
			dispatch(toggleSimEditModal())
			return dispatch(closeSimStatusModal())
		},
		onSimEditCancel: () => {
			dispatch(reset('confirm-sim-edit'))
			return dispatch(toggleSimEditModal())
		}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChangeStatus)
