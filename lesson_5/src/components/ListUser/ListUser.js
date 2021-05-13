import {Link} from "react-router-dom";

export default function ListUser({item}) {
    let link = '/users';
    return (
        <div>
            {JSON.stringify(item)}
            <Link to={link}>
                <button>wretyy</button>
            </Link>
        </div>
    )
}