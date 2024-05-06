import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import PropTypes from 'prop-types';

function AuthHeader(props){
    return(
        <>
            <Box display="flex" flexDirection="column" alignItems="center" padding="3rem">
                <img src="/svg/logo.svg" style={{ width: '12rem' }}></img>
                <Typography sx={{
                    fontSize: "4rem",
                    fontWeight: 500,
                }} level="h1">{props.title}</Typography>
                <Typography sx={{
                    textAlign: "center", 
                    fontSize: "1.2rem", 
                    marginTop: "0",
                }} level="h2">{props.text}</Typography>
            </Box>
        </>
    )
}

AuthHeader.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default AuthHeader;