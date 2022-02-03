import * as React from 'react';
import { Box, Typography } from '@mui/material';

export function NameHeader() {
    return (
        <Box flexGrow={1}>
            <Typography variant="h1" color='#F2D2BD' fontWeight={700}> COURTNEY BOHRER</Typography>
            <Typography variant="h4" color='#F2D2BD'> SOFTWARE ENGINEER</Typography>
        </Box>
    );
}