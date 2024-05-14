import AuthHeader from '../../components/AuthHeader';
import {Stack} from "@mui/joy";
import InputField from "../../components/InputField.jsx";
import SubmitButton from "../../components/SubmitButton.jsx";
import {useContext} from "react";
import Context from "../../Context.js";
import {Link} from "react-router-dom";

function Login() {
    const setUser = useContext(Context)
    return (
        <>
            <AuthHeader title="Login" text="Melde dich an, um fortzufahren."/>

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(Array.from(formData.entries()));

                    const {email, password} = formJson;
                    setUser({
                        email,
                        password,
                    })

                }}>
                <Stack spacing={1}>
                    <InputField labelName="E-Mail" placeholderText="john.doe@gmail.com" type=""/>
                    <InputField labelName="Passwort" placeholderText="Passwort" type="password"/>
                    <SubmitButton text="Einloggen"></SubmitButton>
                    <br/>
                    <Link to="/"><SubmitButton text="zurück..."></SubmitButton></Link>
                </Stack>
            </form>
        </>
    );
}

export default Login;
