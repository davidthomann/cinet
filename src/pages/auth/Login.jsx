import AuthHeader from '../../components/AuthHeader';
import { Snackbar, Stack } from "@mui/joy";
import InputField from "../../components/InputField.jsx";
import SubmitButton from "../../components/SubmitButton.jsx";
import { useContext, useState } from "react";
import Context from "../../Context.js";
import { useNavigate } from "react-router-dom";

function Login() {
    const { setUser, setDialog } = useContext(Context);
    const navigate = useNavigate();

    const logIn = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(Array.from(formData.entries()));

        const { email, password } = formJson;
        setUser({
            firstname: "Max",
            lastname: "Muster",
            email,
            password,
            birthday: "11-11-1111",
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
            <AuthHeader title="Login" text="Melde dich an, um fortzufahren." />

            <form onSubmit={logIn}>
                <Stack spacing={1}>
                    <InputField labelName="E-Mail" placeholderText="john.doe@gmail.com" type="email" name="email" />
                    <InputField labelName="Passwort" placeholderText="Passwort" type="password" name="password" />
                    <SubmitButton text="Login"></SubmitButton>
                </Stack>
            </form>
        </>
    );
}

export default Login;
