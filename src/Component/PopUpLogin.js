import React from 'react';
import s from './PopUpLogin.module.css';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from './AI-log.svg';



function PopUpLogin(props) {

    return (props.trigger) ? (
        <div className={s.PopUp}>
            <div className={s.Popup_inner}>
                <div>
                    <IconButton className={s.Exit} aria-label="close" onClick={() => props.setTrigger(false)}>
                        <CloseIcon/>
                    </IconButton>
                    <img className={s.Img} align="left" src={logo}/>
                </div>
                <h2 className={s.H}>Модуль эксперт <div className={s.Ivan}>Иван ML-001</div></h2>
                <div className={s.Basic}>
                    <div className={s.Input}>
                        <TextField className={s.Pole} id="outlined-basic" label="Имя пользователя" variant="outlined"
                                   value={props.store.userName}/>
                    </div>
                    <div className={s.Input}>
                        <TextField className={s.Pole} id="outlined-basic" label="Пароль" variant="outlined"
                                   value={props.store.password}/>
                    </div>
                    <div>
                        <Button className={s.FontButton} variant="contained" color="primary">Вход</Button>
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


export default PopUpLogin;