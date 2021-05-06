export default function User(props) {
    let {name, surname, age, city, phone, details} = props
    return (
        <div>
            <h2>{name}</h2>
            <p>{phone}</p>
            <button onClick={() => details(name)}>details</button>
            <button>Edit</button>
        </div>
    )

}