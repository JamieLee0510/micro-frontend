// Counter.js
import React, { useEffect, useState } from "react";

function Counter({ globalCount, globalChangeCount }) {
    const [count, setCount] = useState(globalCount);

    useEffect(() => {
        setCount(globalCount);
    }, [globalCount]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => globalChangeCount(1)}>Click me</button>
        </div>
    );
}

export default Counter;
