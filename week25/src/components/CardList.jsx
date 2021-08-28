import React from "react";
import Card from './Card';

class CardList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Card
                    title="Зимние ботинки"
                    price={99}
                    description="Такие только у нас"
                    imgLink="https://img.corsocomo.com/image/cache/data/w/402-LM2P1P/402-LM2P1P%20(3)-1000x1000.jpg"
                    addedToCart={0}
                />
                <Card
                    title="Пляжные тапки"
                    price={23}
                    description="Надеюсь, пригодятся"
                // imgLink="https://shop/slippers.jpg"
                />
                <Card
                    title="Праздничные туфли"
                    price={85}
                    description="Теперь и в черном цвете"
                    imgLink="https://cdn.api.kari.com/f/W7119018_001.jpg"
                />
            </React.Fragment>
        );
    }
}

export default CardList;