import React from "react";

export default class Example extends React.Component {
    constructor(props) {
        // Вызов конструктора
        // Родительский класс React.Component
        super(props);
        // super нужно обязательно использовать в случаях, когда наш класс расширяет поведение другого класса, который имеет конструктор

        // Процесс инициализации
        this.state = {
            date: new Date(),
            clickedStatus: false,
            list: []
        };
    }

    // Mounting (монтирование), вызывается один раз в ЖЦ сразц после монтирования компонентат в DOM
    componentDidMount() {
        console.log('Component did mount!');
        this.getList(); // обращаемся к методу getList, где идет запрос к API
    }

    getList = () => {
        // API request, внутреняя функция компонента
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
            .then(response => response.json())
            .then(data => this.setState({ list: data }));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.list !== nextState.list;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update!');
    }

    // componentWillUnmount (размонтирование)

    render() {
        return <h1>Hello World!</h1>
    }
}