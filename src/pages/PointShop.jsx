import Header from '../components/Header';
import Grid from '@mui/joy/Grid';
import PointScore from '../components/PointScore';

import ShopItems from '../json/shopItems.json';

function PointShop() {
    return (
        <>
            <Header title="Punkte einlösen"/>
            <Grid container sx={{
                maxWidth: 700,
                margin: "auto",
            }}>
                {ShopItems.map((item, index) => {
                    return (
                        <Grid item="true" xs={12} md={6} key={index} marginTop={3}>
                            <PointScore pointScore={item.price} firstText={item.name}/>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    );
}

export default PointShop;
