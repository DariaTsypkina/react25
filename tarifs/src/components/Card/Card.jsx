import React, { useState } from 'react';
import styles from './Card.module.scss';

export default function Card(props) {
    const [isSelected, toggleSelected] = useState(false);

    const handleSelect = () => {
        toggleSelected(!isSelected);
    }

    const price = props.price;

    const colorClass = (price === 300) ? styles.blue
        : (price === 450) ? styles.green
            : (price === 550) ? styles.red
                : styles.black;

    return (
        <div className={isSelected ? styles.selected : styles.card} onClick={handleSelect}>
            <div className={`${styles.card__titleContainer} ${colorClass}`}>
                <div className={styles.card__title}>Безлимитный {price}</div>
            </div>
            <div className={`${styles.priceContainer} ${colorClass}`}>руб <span className={styles.card__span}>{props.price}</span> /мес</div>
            <div className={styles.card__info}>до {props.speed} Мбит/сек</div>
            <div className={styles.card__footer}>Объем включенного трафика не ограничен</div>
        </div >
    );
}