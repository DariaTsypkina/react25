import React from 'react';
import styles from './Card.module.scss';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClick = (e) => {
        this.setState({ speed: e.target.dataset.speed });
        this.props.addToCart();
    }

    clean = (e) => {
        this.setState({ speed: '' });
    }

    render() {
        const { price, speed } = this.props;
        return (
            <div className={styles.card}>
                <div className={styles.card__titleContainer}>
                    <div className={styles.card__title}>Безлимитный {price}</div>
                </div>
                <div className={styles.priceContainer}>руб <span className={styles.card__span}>{price}</span> /мес</div>
                <div className={styles.card__info}>до {speed} Мбит/сек</div>
                {/* <button onClick={this.onClick.bind(this)}>Add to cart</button> */}
                <button
                    onClick={this.onClick}
                    data-speed={speed}
                >Add to cart</button>
                {
                    this.state.speed &&
                    <p>Вы положили в корзину тариф со скоростью {speed} Мбит/сек</p>
                }
            </div >
        )
    }
}

// export default function Card(props) {
//     const [isSelected, toggleSelected] = useState(false);

//     const handleSelect = () => {
//         toggleSelected(!isSelected);
//     }

//     const price = props.price;

//     const colorClass = (price === 300) ? styles.blue
//         : (price === 450) ? styles.green
//             : (price === 550) ? styles.red
//                 : styles.black;

//     const onClick = (price) => {

//     }

//     return (
//         <div className={isSelected ? styles.selected : styles.card} onClick={handleSelect}>
//             <div className={`${styles.card__titleContainer} ${colorClass}`}>
//                 <div className={styles.card__title}>Безлимитный {price}</div>
//             </div>
//             <div className={`${styles.priceContainer} ${colorClass}`}>руб <span className={styles.card__span}>{props.price}</span> /мес</div>
//             <div className={styles.card__info}>до {props.speed} Мбит/сек</div>
//             <div className={styles.card__footer}>Объем включенного трафика не ограничен</div>
//             <button>Add</button>
//         </div >
//     );
// }
