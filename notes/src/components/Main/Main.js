import '../Main/main.style.css'
import {useEffect, useState} from 'react'
import User from "../User/User";

export default function Main() {
    let [name, setName] = useState('');
    let [surname, setSurname] = useState('');
    let [age, setAge] = useState('');
    let [city, setCity] = useState('');
    let [userInfo, setUserInfo] = useState([]);
    let [userDetail, setUserDetail] = useState('');
    let [item, setItem] = useState(JSON.parse(localStorage.getItem('item')));

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(item))
    })
    const addInfo = (ev) => {
        ev.preventDefault();
        setUserInfo([...userInfo, {name, surname, age, city}])
        console.log(userInfo)
    }
    const nameAdd = (ev) => {
        setName(name = ev.target.value)
    }
    const surnameAdd = (ev) => {
        setSurname(surname = ev.target.value)
    }
    const ageAdd = (ev) => {
        setAge(age = ev.target.value)
    }
    const cityAdd = (ev) => {
        setCity(city = ev.target.value)
    }

    const details = (name) => {
        let findUser = userDetail.find(value => value.name === name);
        console.log(findUser);
        setUserDetail(findUser);
    }

    return (
        <div className={'mainContainer'}>
            <div className={'formForm'}>
                <form className={'formContainer'}>
                    <input onChange={nameAdd} className={'inputContainer'} type="text"
                           placeholder={'Name'}
                    />
                    <input onChange={surnameAdd} className={'inputContainer'} type="text"
                           placeholder={'Surname'}
                    />
                    <input onChange={ageAdd} className={'inputContainer'} type="text"
                           placeholder={'Age'}
                    />
                    <input onChange={cityAdd} className={'inputContainer'} type="text"
                           placeholder={'City'}
                    />
                </form>
                <button onClick={addInfo} className={'addInput'}>Add</button>
            </div>

            <div className={'infoForm'}>
                {
                    userDetail ? (<h4>
                        name : {userDetail.name} <br/>
                        surname : {userDetail.surname}<br/>
                        age : {userDetail.age}<br/>
                        city : {userDetail.city}
                    </h4>) : (<h5>User is not defined</h5>)
                }

            </div>

            <div className={'infoUser'}>
                {
                    userInfo.map(value =>
                        <User
                            details = {details}
                            {...value}
                        />
                    )
                }
            </div>


        </div>
    );
}