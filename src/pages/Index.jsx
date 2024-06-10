import { Typography } from '@mui/joy';
import Header from '../components/Header';
import Box from "@mui/joy/Box";
import { Link } from "react-router-dom";
import { Button, extendTheme, ThemeProvider } from "@mui/joy";
import {useContext} from "react";
import Context from "../Context.js";

function Index() {
    const { user } = useContext(Context);

    return (
        <>
            <Header/>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "3rem",
                gap: "1rem"
            }} component="section">
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "2rem"
                }}>
                    <img src="/images/logo.png" alt="Logo" style={{ width: '10rem', height: 'auto' }} />
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "2rem"
                }}>
                    <img src="/images/home_screen_title.png" alt="Descriptive Alt Text" style={{ width: '20rem', height: 'auto' }} />
                </Box>
            </Box>
            <Box sx={{
                width: '100%',
                marginTop: '2rem'
            }}>
                <img src="/images/home_image_banner.png" alt="Home Image Banner" style={{ width: '100%', height: 'auto' }} />
                {!user &&(
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "1rem",
                        padding: "1rem",
                    }}>
                        <Link to="/auth/login">
                            <Button color="primary">Anmelden</Button>
                        </Link>
                        <Link to="/auth/registration">
                            <Button color="primary" variant="outlined">Registrieren</Button>
                        </Link>
                    </Box>
                )};
            </Box>
        </>
    );
}

export default Index;
