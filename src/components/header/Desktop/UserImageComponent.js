import React, { Component } from 'react';
import styles from './HeaderComponent.scss';
class UserImage extends Component {
    render() {
        return (
            <div className={styles.user_image_position}>
                <img
                    className={styles.user_image}
                    src="https://lh3.googleusercontent.com/CwlZEQdJqBGj3PlZXQPq6dsiVwD6eWMy4DgYBU-uFi30UEa5wOWFWJ1PfnEweULhVlmZgPLvijca6A=w1366-h768-rw-no" />
            </div>
        );
    }
}
export default UserImage;