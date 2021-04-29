import "./car.style.css";

function Cars(props) {
    const {id,delCarry,producer, model, year, color}  = props
    return (
        <div className= {'aboutCar'}>
            <h2>{producer} - {model}</h2>
                <p>{year}</p>
                <p>{color}</p>
            <button onClick = {()=>{delCarry(id)}}>Delete</button>
        </div>
    );
}
export default Cars;