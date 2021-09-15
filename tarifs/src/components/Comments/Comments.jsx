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
        if (localStorage.getItem('comments') !== null) {
            const restoredComments = JSON.parse(localStorage.getItem('comments'));
            this.setState({ comments: restoredComments });
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            term: e.target.value
        });
    }

    // setState - чтобы засунуть что-то в стейт
    handleClick = (newComment) => {
        if (newComment) {
            this.setState({
                ...this.state,
                comments: [{ comment: newComment }, ...this.state.comments],
                term: ''
            }, () => { localStorage.setItem('comments', JSON.stringify(this.state.comments)) }); // здесь будет отправка обновленного стейта в сторадж
        }
    }

    render() {
        const { term, comments } = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.comments_container}>
                    {
                        comments.map((commentObj, index) => {
                            return <div
                                key={(Math.random() * 1000).toFixed()}
                                className={index === 0 ? styles.message && styles.yellow : styles.message}>{commentObj.comment}</div>
                        })
                    }
                </div>

                <div className={styles.textarea_container}>
                    <textarea
                        className={styles.textarea}
                        value={term}
                        onChange={this.handleChange}
                        placeholder="Type your comment..." />
                    <button
                        className={styles.button}
                        onClick={() => this.handleClick(term)}>Send</button>
                </div>
            </div>
        )
    }
}