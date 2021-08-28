import React from 'react';

// class Card extends React.Component {
//     render() {
//         //здесь мы берем конкретные свойства, которые будут задаваться при вызове этого компонента
//         const { title, price, description, imgLink } = this.props;
//         return (
//             <div className="card">
//                 <div className="card-body">
//                     <img src={imgLink} alt={title} />
//                     <h4 className="card-title">{title}</h4>
//                     <p className="card-text">{description}</p>
//                 </div>
//                 <div className="card-footer">
//                     <span className="card-price">${price}</span>
//                     <button className="card-add">Заказать</button>
//                 </div>
//             </div>
//         );
//     }
// }

// можно через функцию. получает данные в одном объекте (props) в качестве параметра и возвращает реакт-элемент 
// const Card = (props) => {
//     return (
//         <div className="card">
//             <div className="card-body">
//                 <img src={props.imgLink} alt={props.title} />
//                 <h4 className="card-title">{props.title}</h4>
//                 <p className="card-text">{props.description}</p>
//             </div>
//             <div className="card-footer">
//                 <span className="card-price">${props.price}</span>
//                 <button className="card-add">Заказать</button>
//             </div>
//         </div>
//     );
// }

import AddToCartButton from './AddToCartButton';
import AddToCartForm from './AddToCardFrom';

export default class Card extends React.Component {
    render() {
        const { title, price, description, imgLink, addedToCart } = this.props;
        // let actionItem;
        // if (addedToCart) {
        //     actionItem = <AddToCartForm addedToCart={addedToCart} />;
        // } else {
        //     actionItem = <AddToCartButton />;
        // }
        return (
            <div className="card">
                <div className="card-body">
                    {imgLink &&
                        <img src={imgLink} alt={title} width={200} />
                    }
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <span className="card-price">${price}</span>
                    {addedToCart
                        ? <AddToCartForm addedToCart={addedToCart} />
                        : <AddToCartButton />
                    }
                    {/* через тернарный оператор */}
                </div>
            </div>
        );
    }
}