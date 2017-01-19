import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import SimDetailsHeader from './SimDetailsHeader'

const mapDispatchToProps = (dispatch) => {
  return {
		onBackButtonClick: () => {
			return dispatch(goBack())
		}
  }
}

export default connect(null, mapDispatchToProps)(SimDetailsHeader)
