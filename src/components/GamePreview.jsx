import PropTypes from 'prop-types';
import Box from '@mui/joy/Box';
import {Link} from "react-router-dom";

function GamePreview(props) {
    return (
        <>
            <Link to={props.linkURL}>
                <Box component="section" sx={{
                    p: 2,
                    textAlign: 'center',
                    marginX: 'auto',
                    maxWidth: 325,
                    backgroundImage: `url(${props.imageURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 132
                }}>
                </Box>
            </Link>
        </>
    );
}

GamePreview.propTypes = {
    imageURL: PropTypes.string.isRequired,
    linkURL: PropTypes.string.isRequired,
};

export default GamePreview;




