import React from "react";

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

// export default class Button extends React.Component {
//     render() {
//         const theme = this.props.theme;
//         return (
//             <div className={theme.outer}>
//                 <div className={theme.inner}>
//                     <h3>Заголовок</h3>
//                 </div>
//             </div>
//         )
//     }
// }

export default class Button extends React.Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className={theme.outer}>
                <div className={theme.inner}>
                    <h3>Заголовок</h3>
                </div>
            </div>
        )
    }
}