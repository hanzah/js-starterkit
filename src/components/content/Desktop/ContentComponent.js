import React, {PropTypes, Component} from 'react';
import styles from './ContentComponent.scss';

const { object } = PropTypes

class Content extends Component {
    render() {
        return (
             <div className={styles.mc_content}>
             {this.props.content}
             </div>
        );
    }
}

export default Content;

Content.propTypes = {
 children: object,
 content: object
}