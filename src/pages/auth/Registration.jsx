import AuthHeader from '../../components/AuthHeader';
import {Stack} from "@mui/joy";
import SubmitButton from "../../components/SubmitButton.jsx"
import InputField from "../../components/InputField.jsx";
import {useContext} from "react";
import Context from "../../Context.js";
import {Link} from "react-router-dom";

function Registration() {
    const {setUser} = useContext(Context);

    return (
        <>
            <AuthHeader title="Account erstellen" text="Hast du schon einen Account? Hier anmelden."/>

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(Array.from(formData.entries()));

                    const {firstname, lastname, email, password, birthday} = formJson;
                    setUser({
                        firstname,
                        lastname,
                        email,
                        password,
                        birthday
                    })
                }}>
                <Stack spacing={1}>
                    <InputField labelName="Vorname" placeholderText="John" type=""/>
                    <InputField labelName="Nachname" placeholderText="Doe" type=""/>
                    <InputField labelName="E-Mail" placeholderText="john.doe@gmail.com" type=""/>
                    <InputField labelName="Passwort" placeholderText="Passwort" type="password"/>
                    <InputField labelName="Geburtstag" placeholderText="Geburtstag" type="date"/>
                    <br/>
                    <SubmitButton text="Registrieren"></SubmitButton>
                    <br/>
                    <Link to="/"><SubmitButton text="zurück..."></SubmitButton></Link>
                </Stack>
            </form>
            <br/>
        </>
    );
}

export default Registration;
