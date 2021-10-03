// import React, { useState, useEffect } from "react"; // import hooks

// const FunctionalComponent = () => {
//     const [count, setCount] = useState(0); // create state and method

//     // useEffect(() => { //Этот хук заменяет сразу несколько методов жизненного цикла
//     //     console.log('Hello'); //его вызов зависит от передаваемых параметров
//     // }, []);

//     const handleCount = () => {
//         setCount(currentCount => currentCount + 1);
//     }

//     useEffect(() => console.log(count));

//     return (
//         // <div>
//         //     <p>count: {count}</p>
//         //     <button onClick={() => setCount(count + 1)}>Click</button>
//         // </div>
//         <button type="button" onClick={handleCount}>{count}</button>
//     );
// };
// export default FunctionalComponent;

// class PureComponent extends React.PureComponent {
//     state = {
//         item: {
//             count: 0
//         },
//         value: ''
//     }

//     handleClick = () => {
//         const item = this.state.item;
//         item.count = this.state.item.count++;
//         this.setState({ item });
//     }

//     handleChange = (e) => {
//         this.setState({ value: e.target.value })
//         console.log(this.state.value);
//     }

//     render() {
//         return <div>
//             <h2 onClick={this.handleClick}>{this.state.item.count}</h2>
//             <input type="text" value={this.state.value} readOnly></input>
//         </div>
//     }
// }

// onClick={() => this.setState(state => ({ count: state.count + 1 }))}

// function Input() {
//     const [value, setValue] = useState("");

//     const handleChange = (e) => {
//         setValue(handleValidation(e.target.value) ? e.target.value : e.target.placeholder = 'error');
//     }

//     const handleValidation = (value) => {
//         let inputIsValid = true;
//         if (value.length < 1) inputIsValid = false;
//     }

//     return (
//         <input type="text" onChange={handleChange} />
//     )
// }

// export default Input;

import React from 'react';
import { Formik, Field, Form } from 'formik';

const Basic = () => (
    <div>
        <h1>Sign Up</h1>
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                />
                <label htmlFor="password">Password</label>
                <Field id="password" name="password" placeholder="password" type="password" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
);

export default Basic;