import React from "react";
import styles from './button.css';
import * as classnames from 'classnames';

// export default class Button extends React.Component {
//     render() {
//         let className = 'button';
//         if (this.props.success) {
//             className += ' button__success';
//         }
//         return (
//             <button className={className}>
//                 Нажми меня
//             </button>
//         );
//     }
// }

export default class Button extends React.Component {
    render() {
        const className = classnames(
            'button',
            {
                ['button__success']: this.props.success,
            },
        );

        return (
            <button className={className}>
                Нажми меня
            </button>
        );
    }
}