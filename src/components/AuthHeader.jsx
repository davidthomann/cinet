import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function AuthHeader(props) {
    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center" padding="3rem">
                <Link to="/">
                    <img src="/svg/logo.svg" style={{width: '12rem'}} alt="Logo picture"></img>
                </Link>
                <Typography sx={{
                    fontSize: "2rem",
                    fontWeight: 600,
                    marginTop: "2rem",
                    marginBottom: "1rem"
                }} level="h1">{props.title}</Typography>
                <Typography sx={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                    marginTop: "0",

                }} level="h2">{props.text}</Typography>
            </Box>
        </>
    );
}

AuthHeader.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default AuthHeader;