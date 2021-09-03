import React from 'react';
import styles from './Card.module.scss';

export default class Card extends React.Component {
    render() {
        const { price, speed, upper, priceContainer, chosen } = this.props;
        return (
            <div className={price > 500 ? styles.card && chosen.card : styles.card}>
                <div className={styles.card__titleContainer && upper}>
                    <div className={styles.card__title}>Безлимитный {price}</div>
                </div>
                <div className={priceContainer}>руб <span className={styles.card__span}>{price}</span> /мес</div>
                <div className={styles.card__info}>до {speed} Мбит/сек</div>
                <div className={styles.card__footer}>Объем включенного трафика не ограничен</div>
            </div>
        )
    }
}