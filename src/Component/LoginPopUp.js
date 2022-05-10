import React, {useState} from 'react';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from './AI-log.svg';
import s from './LoginPopUp.module.scss';

const LoginPopUp = (props) => {

    let closeClickPopUp = () => {
        props.setTrigger(false);
    }

    let userName = React.createRef();
    let passwordName = React.createRef();

    let onAreaChange = () => {
        let user = userName.current.value;
        let pass = passwordName.current.value;
        props.updateAreaLogin(user, pass);
    }

    let logIn = () => {
        if (props.store.userName === 'Anna' && props.store.password === '8') {
            props.setTrigger(false);
        } else {
            if (props.store.userName != 'Anna' && props.store.password === '8') {
                return alert('Не правильно введено имя пользователя')
            } else {
                if (props.store.userName === 'Anna' && props.store.password != '8') {
                    return alert('Не правильно введен пароль')
                } else {
                    return alert('Не правильно введено имя пользователя и пароль')
                }
            }
        }
    }

    return (props.trigger) ? (
        <div className={s.PopUp}>
            <div className={s.Popup_inner}>
                <div>
                    <IconButton className={s.Exit} aria-label="close" onClick={closeClickPopUp}>
                        <CloseIcon/>
                    </IconButton>
                    <img className={s.Img} align="left" src={logo}/>
                </div>
                <h2 className={s.H}>Модуль эксперт <div className={s.Ivan}>Иван ML-001</div></h2>
                <div className={s.Basic}>
                    <div className={s.Input}>
                        <TextField inputRef={userName} onChange={onAreaChange}
                                   className={s.Pole} id="outlined-basic" label="Имя пользователя" variant="outlined"/>
                    </div>
                    <div className={s.Input}>
                        <TextField inputRef={passwordName} onChange={onAreaChange}
                                   className={s.Pole} id="outlined-basic" label="Пароль" variant="outlined"/>
                    </div>
                    <div>
                        <Button className={s.FontButton} variant="contained" color="primary"
                                onClick={ logIn }>Вход</Button>
                    </div>
                    <div className={s.Button_Reg}>
                        <Button className={s.FontButtonReg} width='12em' variant="text">Забыли пароль?</Button>
                        &#183;
                        <Button className={s.FontButtonReg} variant="text">Зарегистрироваться</Button>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default LoginPopUp;