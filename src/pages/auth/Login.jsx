import AuthHeader from '../../components/AuthHeader';
import {Button, Stack} from "@mui/joy";
import Input from "@mui/joy/Input";
import {useContext} from "react";
import Context from "../../Context.js";
import { useNavigate } from 'react-router-dom';

function Index() {
    const { setUser } = useContext(Context);
    const navigate = useNavigate();

    return (
        <>
            <AuthHeader title="Login" text="Melde dich an, um fortzufahren."/>

            {/* Test Code */}
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(Array.from(formData.entries()));
                    setUser(formJson.name)

                    navigate('/')
                }}>
                <Stack spacing={1}>
                    <Input name="name" placeholder="Name" required/>
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </>
    );
}

export default Index;
