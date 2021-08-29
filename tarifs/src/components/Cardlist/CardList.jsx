import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.scss';
import CardBlack from '../Card/CardBlack.module.scss';
import CardBlue from '../Card/CardBlue.module.scss';
import CardRed from '../Card/CardRed.module.scss';
import CardGreen from '../Card/CardGreen.module.scss';
import ChosenCard from '../Card/ChosenCard.module.scss';

export default class CardList extends React.Component {
    render() {
        return (
            <div className={styles.cardList}>
                <Card
                    price="300"
                    speed="10"
                    upper={CardBlue.blue}
                    priceContainer={CardBlue.priceContainer}
                    chosen={false}
                />
                <Card
                    price="450"
                    speed="50"
                    upper={CardGreen.green}
                    priceContainer={CardGreen.priceContainer}
                    chosen={false}
                />
                <Card
                    price="550"
                    speed="100"
                    upper={CardRed.red}
                    priceContainer={CardRed.priceContainer}
                    chosen={ChosenCard}
                />
                <Card
                    price="1000"
                    speed="200"
                    upper={CardBlack.black}
                    priceContainer={CardBlack.priceContainer}
                    chosen={false}
                />
            </div>
        );
    }
}