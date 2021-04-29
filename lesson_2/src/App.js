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
            <button onClick={delElement}>Delete next element</button><br/><br/>
            <PlusMinus/>

        </div>
    );
}

export default App;
