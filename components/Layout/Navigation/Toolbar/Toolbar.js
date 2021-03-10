import React from 'react';
import Aux from '../../../../hoc/Aux';
import './Toolbar.css';

import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <Aux>
        <div className='Toolbar'>
        <div>MENU</div>
        <Logo  height='80%' />
        <nav className='DesktopOnly'>
            <NavigationItems />
        </nav>
        </div>
        
    </Aux>
);

export default toolbar;