import {useState, useEffect} from 'react'
import {getUsers} from '../../services/services'
import User from "../user/User";

export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])
    let userInfo = users.filter(value => value.id < 5);
    return (
        <div>
            {
                userInfo.map(value =>
                    <User
                        key={value.id}
                        {...value}
                    />)
            }
        </div>
    )
}