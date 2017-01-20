import React, {PropTypes} from 'react';
import SimDetailsHeader from './SimDetailsHeader';
import SimStatusDiagram from './SimStatusDiagram';
import SimDetailsInfo from './SimDetailsInfo';
import ChangeStatus from './ChangeStatus';
import Tabs from './Tabs';
import CurrentContext from 'utils/currentContext';
import ImageSelector from 'utils/imageSelector';

import styles from './SimDetails.scss';

const pending = ImageSelector(CurrentContext.theme, 'pending.png');

const {object} = PropTypes

class SimDetails extends React.Component{

  constructor(props){
    super(props);

    this.state ={
      showChangeStatus : false
    }
  }

  onInSesssionClick = () =>{
      this.setState({showChangeStatus : !this.showChangeStatus });
  }

  render() {
    const sim = this.props.sim;
  return (
    <div>
      <SimDetailsHeader sim={sim}/>
      <div>
        <div className={styles.pending_changes}>
          <div className={styles.pending_img}>
            <img src={pending} alt="pending"/>
          </div>
          <div className={styles.pending_text}>
            <div>
              <span>There are some pending changes for this SIM, initiated by John Smith,
                starting on 14.2.2017.</span>
              <span>See History below for details.</span>
            </div>
          </div>
        </div>
        <div className={styles.main_wrap}>
        {this.state.showChangeStatus ? <ChangeStatus sim={sim}/> : ''}
          <div className={styles.sim_status_diagram}><SimStatusDiagram onInSesssionClick={this.onInSesssionClick } sim={sim}/></div>
          <div className={styles.sim_details_info}><SimDetailsInfo sim={sim}/></div>
        </div>
      </div>
      <Tabs/>
    </div>
  );
  }
}

SimDetails.propTypes = {
  sim: object
}

export default SimDetails;
