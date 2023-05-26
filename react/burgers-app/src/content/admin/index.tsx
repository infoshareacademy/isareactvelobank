import { useQuery } from 'react-query';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { PageWrapper } from "../../common/page-wrapper";
import { Burger } from '../../common/types';
import { getBurgers } from '../../services/burgers';
import { AddModalButton } from './add-modal-button';
import { Row } from './row';
import { Auth } from '../../common/auth';

const AdminView = () => {
    const { data: burgers, error, isLoading } = useQuery<Burger[], Error>('burgers', getBurgers);

    if (error) {
        return <PageWrapper title="An error occurred"> 
            {error.message}
        </PageWrapper>
    }

    return (
        <PageWrapper title="Admin">
            {isLoading 
                ? <CircularProgress />
                : (
                    <>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Ingredients</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell sx={{ width: '64px' }} />
                                    <TableCell sx={{ width: '64px' }} />
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    {burgers?.map((burger) => <Row key={burger.id} burger={burger} />)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box sx={{ alignSelf: 'flex-end', marginTop: 1 }}>
                            <AddModalButton />
                        </Box>
                    </>
                )
            }
        </PageWrapper>
    )
}


export const Admin = () => {
    return <Auth>
        <AdminView />
    </Auth>
}