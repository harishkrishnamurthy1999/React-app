import React from 'react'
import './SideDrawer.css';

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems';
import Aux from '../../../../../hoc/Aux';
import Backdrop from '../../../UI/Backdrop/Backdrop';


const SideDrawer = (props) => {
    return (
      <Aux>
           <Backdrop />

          <div className='SideDrawer'>   
           <Logo height='11%' />
           <nav>
             <NavigationItems />
           </nav>

        </div>
      </Aux>
       
    );
}

export default SideDrawer;