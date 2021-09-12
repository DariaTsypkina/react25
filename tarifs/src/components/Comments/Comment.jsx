import React from "react";

const Comment = (props) => {
    const { comment } = props;
    return (
        <div>{comment}</div>
    );
}

export default Comment;