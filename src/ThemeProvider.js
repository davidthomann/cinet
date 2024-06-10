import {extendTheme} from "@mui/joy";

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    solidColor: '#fff',
                    solidBg: '#5b8c8c',
                    solidHoverBg: '#6ba3a3',
                    solidActiveBg: '#7bb6b6',
                    outlinedColor: '#5b8c8c',
                    outlinedBorder: '#5b8c8c',
                    outlinedHoverBg: 'rgba(91,140,140,0.1)',
                    outlinedActiveBg: 'rgba(91,140,140,0.21)'
                },
            },
        },
    },
});

export default theme;