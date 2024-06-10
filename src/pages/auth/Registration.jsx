import AuthHeader from '../../components/AuthHeader';
import {Stack} from "@mui/joy";
import SubmitButton from "../../components/SubmitButton.jsx"
import InputField from "../../components/InputField.jsx";
import {useContext} from "react";
import Context from "../../Context.js";
import {useNavigate} from 'react-router-dom';

function Registration() {
    const {setUser, setDialog} = useContext(Context);
    const navigate = useNavigate();


    const logIn = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(Array.from(formData.entries()));
        console.log(formJson)

        const {firstname, lastname, email, password, birthday} = formJson;
        setUser({
            firstname,
            lastname,
            email,
            password,
            birthday,
            points: 0,
            coupons: []
        });

        setDialog(oldDialog => ({
            ...oldDialog,
            open: true,
            msg: "Du wurdest erfolgreich angemeldet.",
            color: "success"
        }));
        navigate('/')
    }

    return (
        <>
            <AuthHeader title="Account erstellen" text="Hast du schon einen Account? Hier anmelden."/>

            <form
                onSubmit={logIn}>
                <Stack spacing={1}>
                    <InputField labelName="Vorname" placeholderText="John" type="text" name="firstname"/>
                    <InputField labelName="Nachname" placeholderText="Doe" type="text" name="lastname"/>
                    <InputField labelName="E-Mail" placeholderText="john.doe@gmail.com" type="email" name="email"/>
                    <InputField labelName="Passwort" placeholderText="Passwort" type="password" name="password"/>
                    <InputField labelName="Geburtstag" placeholderText="Geburtstag" type="date" name="birthday"/>
                    <br/>
                    <SubmitButton text="Registrieren"></SubmitButton>
                    <br/>
                </Stack>
            </form>
        </>
    );
}

export default Registration;
