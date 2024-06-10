import Typography from "@mui/joy/Typography";
import Header from "../../components/Header.jsx";
import {Button, extendTheme, ThemeProvider} from "@mui/joy";
import Box from "@mui/joy/Box";
import {Link} from "react-router-dom";

function NotAuthScreen(){
    return(
        <>
            <Header title="Nicht angemeldet"/>
            <img src="/undraw/notAuth.svg" style={{
                width: "20rem",
                maxWidth: "80%",
                marginLeft: "50vw",
                marginTop: "3rem",
                transform: "translateX(-50%)",
            }}></img>
            <Typography level="p" sx={{
                textAlign: "center",
                marginTop: "2rem"
            }}>Melden Sie sich für diese Funktion an.</Typography>

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
                gap: "1rem"
            }} component="section">
                <Link to="/auth/login">
                    <Button color="primary">Anmelden</Button>
                </Link>
                <Link to="/auth/registration">
                    <Button color="primary" variant="outlined">Registrieren</Button>
                </Link>
            </Box>
        </>
    )
}

export default NotAuthScreen;