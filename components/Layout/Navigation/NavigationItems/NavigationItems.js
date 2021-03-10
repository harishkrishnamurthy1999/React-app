import React from 'react';
import './Navigationitems.css';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';



const naviagtionItems = (props) => (
    <ul className='NavigationItems'>
       <NavigationItem link='/' active>Burger Builder</NavigationItem>
       <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
);

export default naviagtionItems;