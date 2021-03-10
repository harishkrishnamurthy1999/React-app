import React from 'react';
import './Logo.css';

import Burgerlogo from '../../../../assets/2 burger-logo.png.png';

const logo = (props) => (
    <div className='Logo' style={{height:props.height}}>
        <img src={Burgerlogo}/>
    </div>
);

export default logo;