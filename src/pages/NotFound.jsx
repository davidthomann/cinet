import Header from '../components/Header';
import Typography from "@mui/joy/Typography";

function NotFound() {
    return (
        <>
            <Header title="Not Found"/>
            <img src="/undraw/error.svg" style={{
                width: "20rem",
                maxWidth: "80%",
                marginLeft: "50vw",
                marginTop: "3rem",
                transform: "translateX(-50%)",
            }}></img>
            <Typography level="p" sx={{
                textAlign: "center",
                marginTop: "2rem"
            }}>Diese Seite wurde nicht gefunden.</Typography>
        </>
    );
}

export default NotFound;
