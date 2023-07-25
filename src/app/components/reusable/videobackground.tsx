import { Box } from '@mui/material'

export default function VideoBackground() {
    return (
        <Box className={'overflow-hidden h-screen w-full fixed top-0 left-0 -z-[1]'}>
            <video autoPlay muted loop className={'w-full h-full object-cover'}>
                <source src="/videoBG.mp4" type="video/mp4" />
            </video>
        </Box>
    );
}