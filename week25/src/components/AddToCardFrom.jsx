import React from 'react';

function AddToCartForm(props) {
    return (
        <form>
            <button className="card-form__del">-</button>
            <input className="card-form__input" type="number" value={props.addedToCart} />
            <button className="card-form__add">+</button>
        </form>
    );
}

export default AddToCartForm;