import Header from '../components/Header';
import Grid from '@mui/joy/Grid';
import GamePreview from '../components/GamePreview';

import games from '../json/games.json';

function Games() {
    return (
        <>
            <Header title="Games"/>
            <Grid container sx={{
                maxWidth: 700,
                margin: "auto",
            }}>
                {games.map((item, index) => {
                    return (
                        <Grid item="true" xs={12} md={6} key={index} marginTop={3}>
                            <GamePreview imageURL={item.imageURL} linkURL={item.linkURL}/>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    );
}

export default Games;