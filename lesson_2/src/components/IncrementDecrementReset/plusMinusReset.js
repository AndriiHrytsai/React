import {useState} from 'react';
import './plusMinus.style.css'

export default function PlusMinus() {
    let [number, setNumber] = useState(0);
    const plus = () => {
        number++;
        setNumber(number);
    }
    const minus = () => {
        number--;
        setNumber(number);
    }
    const res = () => {
        number = 0;
        setNumber(number);
    }
    return (
        <div>
            <button className={'butt'} onClick={minus}>Minus</button>
            <button className={'butt'} onClick={plus}>Plus</button>
            <button className={'butt'} onClick={res}>Reset</button>
            <h4>***Now number is {number}***</h4>
        </div>
    );
}
