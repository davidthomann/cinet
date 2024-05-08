import PropTypes from 'prop-types';
import { useState } from 'react';
import Drawer from '@mui/joy/Drawer';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/icons-material/Menu';
import Home from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import { Link } from 'react-router-dom';

import Box from '@mui/joy/Box';

function Header(props){
    const [open, setOpen] = useState(false);

    return(
        <>
            <Box display="flex" alignItems="center" justifyContent="space-between" padding="1rem">
                <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
                    <Menu />
                </IconButton>
                <Typography level="h1">{props.title}</Typography>
                <IconButton disabled></IconButton>
            </Box>

            <Drawer open={open} onClose={() => setOpen(false)}>
                <ModalClose />
                <DialogTitle>Navigation</DialogTitle>

                <List>
                    {/* Home Button */}
                    <ListItem>
                        <ListItemButton component={Link} to="/">
                            <ListItemDecorator>
                                <Home />
                            </ListItemDecorator>
                            <ListItemContent>Home</ListItemContent>
                            <KeyboardArrowRight />
                        </ListItemButton>
                    </ListItem>
                    {/* Map Button */}
                    <ListItem>
                        <ListItemButton component={Link} to="/map">
                            <ListItemDecorator>
                                <LocationOnIcon />
                            </ListItemDecorator>
                            <ListItemContent>Map</ListItemContent>
                            <KeyboardArrowRight />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;