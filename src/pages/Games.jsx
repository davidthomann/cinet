import Header from '../components/Header'
import Grid from '@mui/material/Grid';
import GamePreview from '../components/GamePreview'

const games = [
    {
        imageURL: "https://static.spiels.ch/2/113722/96298/1200x630/flappybird-og.webp",
        linkURL: "",
    },
    {
        imageURL: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg",
        linkURL: "",
    },
]

function Games() {
    return (
        <>
            <Header title="Games"/>
            <Grid container sx={{
                maxWidth: 700,
                margin: "auto",
            }}>
                {games.map((item, index) => {
                    return(
                        <Grid item xs={12} md={6} key={index} marginTop={3}>
                            <GamePreview imageURL={item.imageURL} linkURL={item.linkURL} />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default Games;