import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PageWrapper } from "../../common/page-wrapper";
import { Burger, BurgerResponse } from '../../common/types';

export const Menu = () => {
    const [burgers, setBurgers] = useState<Burger[]>([]);

    useEffect(() => {
        fetch('https://rest-api-b6410.firebaseio.com/burgers.json')
            .then(r => r.json())
            .then((data: BurgerResponse) => {
                const formattedData = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                setBurgers(formattedData);
            })
    }, []);

    return (
        <PageWrapper title="Menu">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Ingredients</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {burgers.map((burger) => (
                            <TableRow key={burger.id}>
                                <TableCell>{burger.name}</TableCell>
                                <TableCell align="right">{burger.ingredients}</TableCell>
                                <TableCell align="right">{burger.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </PageWrapper>
    )
}