export default function User(props) {
    let {name: {last, first}, images: {main}} = props
    return (
        <div>
            <p>{first} - {last}</p>
            <img src={main} alt=""/>
        </div>
    )
}