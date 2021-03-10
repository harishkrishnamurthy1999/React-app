import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../../components/Layout/Navigation/Toolbar/Toolbar'
import SideDrawer from  '../../components/Layout/Navigation/NavigationItems/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
     <Toolbar />
     <SideDrawer />
    <main className='Content'>
        {props.children}
    </main>
    </Aux>  
);
export default layout;