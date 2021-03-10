import React from 'react';
import Aux from '../../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    
    const IngredientSummary =Object.keys(props.ingredients)
    .map(igKey =>{
    return (
    <li key={igKey}>
        <span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
    </li>
     );
    });

    return(
        <Aux>
        <p>A delicious Burger</p>
        <p>Harish burger shop</p>
        <ul>
        {IngredientSummary}
        </ul>
        <p>Continue to checkout?</p>
    <p><strong>Total Price :{props.price.toFixed(2)}</strong></p>

        <Button btnType='Success' clicked={props.PurchaseContinued}>CONTINUE</Button>
        <Button btnType='Danger' clicked={props.PurchaseCancelled}>CANCEL</Button>
        
    </Aux>
    
    );
    
};

export default orderSummary;