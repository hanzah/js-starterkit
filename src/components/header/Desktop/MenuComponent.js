import React, { Component } from 'react';
import styles from './HeaderComponent.scss';

class Menu extends Component {
   render() {
       return (
           <div className={styles.menu}>
               <div className={styles.hamburger}>
                   <span></span>
               </div>
           </div>
       );
   }
}

export default Menu;