import PropTypes from 'prop-types';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

function PointScore(props) {

    return (
        <>
            <Box component="section" sx={{
                p: 2,
                border: '2px solid grey',
                textAlign: 'center',
                marginX: 'auto',
                maxWidth: 325
            }}>
                <Typography level="h3">{props.firstText}</Typography>
                <Typography level="h1">{props.pointscore}</Typography>
                <Typography level="h3">Punkte</Typography>
            </Box>
        </>
    )
}

PointScore.propTypes = {
    firstText: PropTypes.string.isRequired,
    pointscore: PropTypes.number.isRequired,
};

export default PointScore



