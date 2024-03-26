import { useEffect } from "react";
import Counter from "./components/Counter";

export default function Root(props) {
    const { globalState, modifyCount } = props;

    useEffect(() => {
        console.log(globalState);
    }, [globalState]);

    return (
        <section>
            {props.name} is mounted!
            <Counter
                globalCount={globalState.count}
                globalChangeCount={modifyCount}
            />
        </section>
    );
}
