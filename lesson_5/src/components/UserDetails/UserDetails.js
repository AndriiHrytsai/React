import {useEffect, useState} from "react";
import {getUserID} from "../../services/Api";
import UsersDetailsComponents from "./UsersDetailsComponents";

export default function UserDetails({item}) {
    let {match: {params: {id}}} = item
    let [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        getUserID(id).then(value => setUserInfo({...value.data.data}))
    }, [id])
    return (
        <div>
            {
                userInfo && <div>
                    <UsersDetailsComponents
                        userInfo={userInfo}
                    />
                </div>
            }
        </div>
    )
}