import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.scss';

const tarifs = [
    {
        price: 300,
        speed: 10,
        colorClass: 'blue'
    },
    {
        price: 450,
        speed: 50,
        colorClass: 'green'
    },
    {
        price: 550,
        speed: 100,
        colorClass: 'red'
    },
    {
        price: 1000,
        speed: 200,
        colorClass: 'black'
    }
];

export default class CardList extends React.Component {
    render() {
        return (
            <div className={styles.cardList}>
                {
                    tarifs.map(tarif =>
                        <Card
                            key={tarif.price}
                            price={tarif.price}
                            speed={tarif.speed}
                            color={tarif.colorClass}
                        />
                    )
                }
            </div>
        );
    }
}