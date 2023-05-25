import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = { 
    title?: string, 
    children: ReactNode 
}

export const PageWrapper = ({ title, children }: Props) => {
    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '30px 30px 0'
            }
        }> 
            <Typography variant='h4'>{title}</Typography>
            {children}
        </Box>
    )
}