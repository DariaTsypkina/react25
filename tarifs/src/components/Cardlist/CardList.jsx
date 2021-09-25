import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.scss';

// const tarifs = [
//     {
//         price: 300,
//         speed: 10,
//         colorClass: 'blue'
//     },
//     {
//         price: 450,
//         speed: 50,
//         colorClass: 'green'
//     },
//     {
//         price: 550,
//         speed: 100,
//         colorClass: 'red'
//     },
//     {
//         price: 1000,
//         speed: 200,
//         colorClass: 'black'
//     }
// ];

export default class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInCart: 0
        }
        this.child = React.createRef();
    }


    addToCart = () => {
        this.setState({
            itemsInCart: this.state.itemsInCart + 1
        });
    }

    clean = () => {
        this.setState({ itemsInCart: 0 });
        this.child.current.clean();
    }

    render() {
        return (
            <React.Fragment>
                <p>В корзине {this.state.itemsInCart}</p>
                <button onClick={this.clean}>clean cart</button>
                <div className={styles.cardList}>
                    {
                        this.props.items.map(item =>
                            <Card
                                key={item.price}
                                price={item.price}
                                speed={item.speed}
                                color={item.colorClass}
                                addToCart={this.addToCart}
                                ref={this.child}
                            />
                        )
                    }
                </div>
            </React.Fragment>
        );
    }
}