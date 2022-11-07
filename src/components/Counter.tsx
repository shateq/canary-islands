import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
    const [clicks1, setClicks1] = createSignal(0);
    const [clicks2, setClicks2] = createSignal(0)

    const value = () => clicks1() * clicks2()
    return (
        <div>
            <button class="increment" onClick={() => setClicks1(clicks1() + 1)}>
                Clicks: {clicks1}
            </button>

            <button class="increment" onClick={() => setClicks2(clicks2() - 1)}>
                Clicks: {clicks2}
            </button>

            <button onClick={() => {setClicks1(0); setClicks2(0)}}>Reset</button>

            <h3>Value: {value}</h3>
        </div>

    );
}
