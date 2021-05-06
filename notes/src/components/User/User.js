export default function User(props) {
    let {name, surname, age, city,details} = props
    return (
        <div >
            <h2>{name}</h2>
            <p> {surname} - {age} - {city}</p>
            <button onClick={() => details(name)}>details</button>
        </div>
    )

}