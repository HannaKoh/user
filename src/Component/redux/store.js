
let store = {
    registrationPage: {
        lastName: 'Кохановская',
        firstName: 'Анна',
        secondName: 'Вагифовна',
        userName: 'HannaKoh',
        password: 2
    },
    loginPage: {
        userName: 'HannaKoh',
        password: 2
    },
    users: [
        {id: 1, lastName: 'Кохановская', firstName: 'Анна', secondName: 'Вагифовна', userName: 'HannaKoh', password: 2},
        {id: 2, lastName: 'Акаткин', firstName: 'Николай', secondName: 'Вагифовна', userName: 'AkatkinN', password: 1}
    ]
}

export const addUser = () => {
    debugger;
    let newUser = {
        id: 3,
        lastName: store.registrationPage.lastName,
        firstName: store.registrationPage.firstName,
        secondName: store.registrationPage.secondName,
        userName: store.registrationPage.userName,
        password: store.registrationPage.password
    };
    store.users.push(newUser);
    updateAreaRegistration('','','','','');
}

export const updateAreaRegistration = (lastText, firstText, secondText, userText, passwordText) => {
    store.registrationPage.lastName = lastText;
    store.registrationPage.firstName = firstText;
    store.registrationPage.secondName = secondText;
    store.registrationPage.userName = userText;
    store.registrationPage.password = passwordText;
}

export const updateAreaLogin = (userText, passwordText) => {
    store.loginPage.userName = userText;
    store.loginPage.password = passwordText;
}

export default store;