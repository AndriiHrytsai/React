import './App.css';
import Cars from "./components/User/Car.main";
import {car} from './components/CarCarry/allCars';
import {useState} from 'react'
import PlusMinus from "./components/IncrementDecrementReset/plusMinusReset";

function App() {
    let [cary, setCary] = useState(car);
    const delCarry = (id) => {
        setCary(cary.filter(value => value.id !== id))
    }
    const delElement = () => {
        cary.pop();
        setCary([...cary]);
    }
    const delElementTwo = () => {
        cary.shift();
        setCary([...cary]);
    }
    return (
        <div>
            {
                cary.map((carry, index) =>
                    <Cars
                        key={index}
                        producer={carry.producer}
                        model={carry.model}
                        year={carry.year}
                        color={carry.color}
                        id={carry.id}
                        delCarry={delCarry}
                    />)
            }
            <br/>
            <button className={'delLastElem'} onClick={delElement}>Видалити останній елемент</button>
            <button className={'delLastElem'} onClick={delElementTwo}>Видалити перший елемент</button><br/><br/>
            <PlusMinus/>

        </div>
    );
}
export default App;
