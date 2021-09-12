import React, { useState } from "react";
import SendButton from "./SendButton";
import styles from './styles.css'

const CommentForm = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="form-container">
            <form action="#"
                className="comments-form">
                <div>
                    <textarea
                        cols="30" rows="10"
                        placeholder="Type your comment"
                        value={value}
                        onChange={handleChange}></textarea>
                </div>
            </form >
            <SendButton />
        </div >
    )
}

export default CommentForm;