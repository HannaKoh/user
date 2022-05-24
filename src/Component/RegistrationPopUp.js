import React from 'react';
import s from './RegistrationPopUp.module.scss';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from './AI-log.svg';



const RegistrationPopUp = (props) => {

    let closeClick = () => {
        props.setTrigger(false);
    }

    let userName = React.createRef();
    let lastName = React.createRef();
    let secondName = React.createRef();
    let usName = React.createRef();
    let passwordName = React.createRef();

    let addUser = () => {
        props.addUser();
        props.setTrigger(false);
    }

    let onAreaChange = () => {
        let last = lastName.current.value;
        let user = userName.current.value;
        let second = secondName.current.value;
        let us = usName.current.value;
        let pass = passwordName.current.value;
        props.updateAreaRegistration(last, user, second, us, pass);
    }

    return (props.trigger) ? (
        <div className={s.PopUp}>
            <div className={s.Popup_inner}>
                <div>
                    <IconButton className={s.Exit} aria-label="close" onClick={closeClick}>
                        <CloseIcon/>
                    </IconButton>
                    <img className={s.Img} align="left" src={logo}/>
                </div>
                <h2 className={s.H}>Создайте учетную запись</h2>
                <div className={s.Basic}>
                    <div className={s.Input}>
                        <TextField inputRef={lastName} onChange={onAreaChange}
                                   className={s.Pole} id="outlined-basic" label="Фамилия" variant="outlined"/>
                    </div>
                    <div className={s.Input}>
                        <TextField inputRef={userName} onChange={onAreaChange}
                                   className={s.Pole} id="outlined-basic" label="Имя" variant="outlined"/>
                    </div>
                    <div className={s.Input}>
                        <TextField inputRef={secondName} onChange={onAreaChange}
                                   className={s.Pole} id="outlined-basic" label="Отчество" variant="outlined"/>
                    </div>
                    <div className={s.Input}>
                        <TextField inputRef={usName} onChange={onAreaChange}
                                   className={s.Pole} id="outlined-basic" label="Имя пользователя" variant="outlined"/>
                    </div>
                    <div className={s.Input}>
                        <TextField inputRef={passwordName} onChange={onAreaChange}
                                   className={s.Pole} id="outlined-basic" label="Пароль" variant="outlined"/>
                    </div>
                    <div className={s.Input}>
                        <Button className={s.FontButton} variant="contained" color="primary"
                                onClick={ addUser }>Зарегистрироваться</Button>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}


export default RegistrationPopUp;