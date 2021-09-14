import React from "react";
import styles from './styles.module.scss';

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
            <div className={styles.container}>
                <div className={styles.comments_container}>
                    {
                        comments.map(comment => {
                            return <div className={styles.message}>{comment}</div>
                        })
                    }
                </div>

                <div className={styles.textarea_container}>
                    <textarea
                        className={styles.textarea}
                        value={term}
                        onChange={this.handleChange} />
                    <button className={styles.button} onClick={() => this.handleClick(term)}>Send</button>
                </div>
            </div>
        )
    }

}