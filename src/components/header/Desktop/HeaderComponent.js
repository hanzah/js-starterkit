import React, { Component } from 'react';
import Menu from './MenuComponent';
import Title from './TitleComponent';
import SearchBar from './SearchBarComponent';
import UserImage from './UserImageComponent';
import UserMenu from './UserMenuComponent';
import MoreButton from './MoreButtonComponent';
import styles from './HeaderComponent.scss';

class Header extends Component {
   render() {
       return (
           <div className={styles.mc_header}>
               <div className={styles.upper_header}>
                   <Menu />
                   <Title />
                   <UserMenu />
                   <UserImage />
                   <SearchBar name='SIM' />
               </div>
               <div className={styles.lower_header}>
                   <span className={styles.chart_names}>inventory status</span>
                   <span className={styles.chart_names}>inventory by carrier</span>
                   <span className={styles.chart_names}>countries</span>
               </div>
               <MoreButton />
           </div>

       );
   }
}

export default Header;