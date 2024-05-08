import PropTypes from 'prop-types';
import Box from '@mui/joy/Box';

function GamePreview(props) {
    return (
        <>

            <Box component="section" sx={{
                p: 2,
                border: '2px solid grey',
                textAlign: 'center',
                marginX: 'auto',
                maxWidth: 325,
                backgroundImage: `url(${props.imageURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 132
            }}>
            </Box>
        </>
    )
}

GamePreview.propTypes = {
    imageURL: PropTypes.string.isRequired,
    linkURL: PropTypes.string.isRequired,
};

export default GamePreview




