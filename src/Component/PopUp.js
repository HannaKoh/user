import React from 'react';
import s from './PopUp.module.css';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from './AI-log.svg';


function PopUp(props) {
    return (props.trigger) ? (
        <div className={s.PopUp}>
            <div className={s.Popup_inner}>
                <div>
                    <IconButton className={s.Exit} aria-label="close" onClick={() => props.setTrigger(false)}>
                        <CloseIcon/>
                    </IconButton>
                    <img className={s.Img} align="left" src={logo}/>
                </div>
                    <h2 className={s.H}>Создайте учетную запись</h2>
                <div className={s.Basic}>
                    <div className={s.Input}>
                        <TextField className={s.Pole} id="outlined-basic" label="Имя" variant="outlined"/>
                    </div>
                    <div className={s.Input}>
                        <TextField className={s.Pole} id="outlined-basic" label="Имя" variant="outlined"/>
                    </div>
                    <div className={s.Input}>
                        <TextField className={s.Pole} id="outlined-basic" label="Отчество" variant="outlined"/>
                    </div>
                    <div className={s.Input}>
                        <TextField className={s.Pole} id="outlined-basic" label="Имя пользователя" variant="outlined"/>
                    </div>
                    <div className={s.Input}>
                        <TextField className={s.Pole} id="outlined-basic" label="Пароль" variant="outlined"/>
                    </div>
                    <div>
                        <Button className={s.FontButton} variant="contained" color="primary">Зарегистрироваться</Button>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}


export default PopUp;