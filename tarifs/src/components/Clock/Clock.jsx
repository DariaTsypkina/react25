import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: this.props.date };
    }

    // запускается после того, как компонент отрендерился в DOM
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID); // сбрасываем таймер
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

Clock.defaultProps = {
    date: 111
};