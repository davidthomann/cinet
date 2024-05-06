import React from 'react'
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
                marginTop: 4,
                marginBottom: 4,
                maxWidth: 325
            }}>
                <Typography level="h3">{props.first_text}</Typography>
                <Typography level="h1">{props.pointscore}</Typography>
                <Typography level="h3">{props.second_text}</Typography>
            </Box>
        </>
    )
}

export default PointScore



