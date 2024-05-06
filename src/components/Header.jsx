import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Drawer from '@mui/joy/Drawer';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/icons-material/Menu';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';

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
                <DialogTitle>Title</DialogTitle>
            </Drawer>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;