import React, { useState, useEffect } from "react"; // import hooks

const FunctionalComponent = () => {
    const [count, setCount] = useState(0); // create state and method

    // useEffect(() => { //Этот хук заменяет сразу несколько методов жизненного цикла
    //     console.log('Hello'); //его вызов зависит от передаваемых параметров
    // }, []);

    const handleCount = () => {
        setCount(currentCount => currentCount + 1);
    }

    useEffect(() => console.log(count));

    return (
        // <div>
        //     <p>count: {count}</p>
        //     <button onClick={() => setCount(count + 1)}>Click</button>
        // </div>
        <button type="button" onClick={handleCount}>{count}</button>
    );
};

export default FunctionalComponent;