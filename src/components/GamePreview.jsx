import React from 'react'
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

function GamePreview(props) {

    return (
        <>

            <Box component="section" sx={{
                p: 2,
                border: '2px solid grey',
                textAlign: 'center',
                marginX: 'auto',
                marginTop: 4,
                marginBottom: 4,
                maxWidth: 325,
                backgroundImage: `url(${props.imageURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                height: 132
            }}>
            </Box>
        </>
    )
}

export default GamePreview




