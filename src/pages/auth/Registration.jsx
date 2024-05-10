import AuthHeader from '../../components/AuthHeader';
import {Button, Stack} from "@mui/joy";
import Input from "@mui/joy/Input";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import Context from "../../Context.js";

function Registration() {
    const {setUser} = useContext(Context);
    const navigate = useNavigate();

    return (
        <>
            <AuthHeader title="Account erstellen" text="Hast du schon einen Account? Hier anmelden!"/>

            {/* Test Code */}
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(Array.from(formData.entries()));

                    const { firstname, lastname } = formJson;
                    setUser({
                        firstname,
                        lastname,
                    })

                    navigate('/')
                }}>
                <Stack spacing={1}>
                    <Input name="firstname" placeholder="Vorname" required/>
                    <Input name="lastname" placeholder="Nachname" required/>
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </>
    );
}

export default Registration;
