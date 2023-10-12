import { useState } from "react";

function FirstGoal() {
    const [counter, setCounter ] = useState(0);
    function incrementCounter() {
        setCounter(counter + 1);
    };
    return (
    <>
    <h4>Teach React in a hightly-understandable way</h4>
    <p> I want to ensure that you get the most out of this book and you learn all about React!</p>
    <p>{counter}</p>
    <button onClick={incrementCounter}>Increment</button>
    </>
    );
}

export default FirstGoal;