import React from "react";
import logo from './ai.svg';
import s from "./Start.module.css";
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";
import PopUpRegistration from "./PopUpRegistration";
import { useState } from 'react';
import PopUpLogin from "./PopUpLogin";

const Start = (props) => {

    const [buttonPopupRegistration, setButtonPopupRegistration] = useState(false);
    const [buttonPopupLogin, setButtonPopupLogin] = useState(false);

    return (
        <div>

            <img className={s.Img} align="left" src={logo}/>
            <div className={s.startPage}>
                <div>
                    <h1 className={s.ML}>Модуль эксперт
                        <div className={s.Ivan}>Иван ML-001
                        </div>
                    </h1>
                </div>
                <div className={s.Registration}>
                    <h2 align="left">Помогайте обучать искусственный
                        <div>интелект!</div>
                    </h2>
                    {/*<NavLink to='/registration' className={s.navLink}>*/}
                    {/*    <Button className={s.Button} variant="contained" color="primary" >Зарегистрируйтесь</Button>*/}
                    {/*</NavLink>*/}
                    <Button className={s.Button} variant="contained"
                            onClick={() => setButtonPopupRegistration(true) }>Зарегистрируйтесь</Button>
                </div>
                <div>
                    <h3 align="left">Уже зарегистрированы?</h3>
                    {/*<NavLink to='/login' className={s.navLink}>*/}
                    {/*    <Button className={s.Button} variant="outlined" color="primary" href='/login'>Войти</Button>*/}
                    {/*</NavLink>*/}
                    <Button className={s.Button} variant="outlined" color="primary"
                            onClick={() => setButtonPopupLogin(true) }>Войти</Button>
                </div>
                <PopUpRegistration trigger={buttonPopupRegistration} setTrigger={setButtonPopupRegistration} store={props.store.registrationPage}>
                </PopUpRegistration>
                <PopUpLogin trigger={buttonPopupLogin} setTrigger={setButtonPopupLogin} store={props.store.loginPage}>
                </PopUpLogin>
            </div>
        </div>
    )
}

export default Start;