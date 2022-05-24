import React, {useState} from 'react';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from './AI-log.svg';
import s from './LoginPopUp.module.scss';
import {Checkbox, FormControlLabel} from "@mui/material";


const LoginPopUp = (props) => {

    const [enabled, setEnabled] = useState("false");

    let closeClickPopUp = () => {
        props.setTrigger(false);
        setEnabled(true);
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
            setEnabled(true);
        } else {
            if (props.store.userName !== 'Anna' && props.store.password === '8') {
                return alert('Не правильно введено имя пользователя')
            } else {
                if (props.store.userName === 'Anna' && props.store.password !== '8') {
                    return setEnabled(false);
                } else {

                    return alert('Не правильно введено имя пользователя и пароль')
                }
            }
        }
    }

    let TextFieldEr = () => {
        return (<TextField
            inputRef={passwordName} onChange={onAreaChange} type={"password"}
            className={s.Pole}
            error
            id="outlined-error-helper-text"
            label="Пароль"
            defaultValue=""
            helperText='Неверный пароль. Повторите попытку или нажмите на ссылку "Забыли пароль?", чтобы сбросить его.'
            autoFocus
        />);
    }


    let PasswordText = () => {
        return (
            <TextField inputRef={passwordName} onChange={onAreaChange} type={"password"}
                       className={s.Pole} id="outlined-basic" label="Пароль" variant="outlined">
            </TextField>
        );
    }

    function Password(props) {
        if (props.passwordIsTrueOrFalse) {
            return <PasswordText/>;
        }
        return <TextFieldEr/>;
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
                    <div>
                        <Password passwordIsTrueOrFalse={enabled}/>
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox/>} label="Запомнить пароль"/>
                    </div>
                    <div className={s.Input}>
                        <div>
                            <Button className={s.FontButton} variant="contained" color="primary"
                                    onClick={logIn}>Вход</Button>
                        </div>
                        <div className={s.Button_Reg}>
                            <Button className={s.FontButtonReg} width='12em' variant="text">Забыли пароль?</Button>
                            &#183;
                            <Button className={s.FontButtonReg} variant="text">Зарегистрироваться</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default LoginPopUp;