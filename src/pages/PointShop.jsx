import Header from '../components/Header';
import Grid from '@mui/material/Grid';
import PointScore from '../components/PointScore';

const ShopItems = [
    {
        name: "Popcorn Gutschein",
        price: 100,
    },
    {
        name: "Kino Gutschein",
        price: 500,
    },
    {
        name: "Getränk",
        price: 70,
    },
    {
        name: "Snack",
        price: 150,
    },
]

function PointShop() {
    
    return (
        <>
            <Header title="Punkte einlösen"/>
            <Grid container sx={{
                maxWidth: 700,
                margin: "auto",
            }}>
                {ShopItems.map((item, index) => {
                    return(
                        <Grid item xs={12} md={6} key={index} marginTop={3}>
                            <PointScore pointscore={item.price} firstText={item.name} />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    );
}

export default PointShop;
