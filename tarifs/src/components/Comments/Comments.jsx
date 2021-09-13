import React from "react";

export default class Comments extends React.Component {
    state = {
        term: '',
        comments: []
    }

    componentDidMount() {
        // проверяем, есть ли что-то в локал сторидже
        // если есть, то берем и сетаем в стейт
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            term: e.target.value
        });
    }


    // setState - чтобы засунуть что-то в стейт
    handleClick = (newComment) => {
        this.setState({
            ...this.state,
            comments: [newComment, ...this.state.comments],
            term: ''
        }, () => { }); // здесь будет отправка обновленного стейта в сторадж
    }

    render() {
        const { term, comments } = this.state;
        return (
            <div>
                <div>
                    {
                        comments.map(comment => {
                            return <p>{comment}</p>
                        })
                    }
                </div>

                <div>
                    <input value={term} onChange={this.handleChange} />
                    <button onClick={() => this.handleClick(term)}>Send</button>
                </div>
            </div>
        )
    }
}