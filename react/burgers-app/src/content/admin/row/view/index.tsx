import { useMutation, useQueryClient } from 'react-query';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { Burger } from '../../../../common/types';
import { deleteBurger } from '../../../../services/burgers';

type Props = { 
    burger: Burger,
    enterEditMode: () => void
}

export const ViewRow = ({ burger, enterEditMode }: Props) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation(async () => {
        return deleteBurger(burger.id);
    }, {
        onSuccess: () => {
            queryClient.setQueryData<Burger[] | undefined>('burgers', (oldData) => {
                return oldData?.filter((oldBurger) => oldBurger.id !== burger.id)
            })
        }
    });

    const handleDeleteClick = () => {
        mutate()
    }

    return (
        <TableRow>
            <TableCell>{burger.name}</TableCell>
            <TableCell align="right">{burger.ingredients}</TableCell>
            <TableCell align="right">{burger.price}</TableCell>
            <TableCell>
                <Button size='small' variant="contained" onClick={enterEditMode}>
                    <Icon>edit</Icon>
                </Button>
            </TableCell>
            <TableCell>
                <Button size='small' variant="contained" color="error" onClick={handleDeleteClick}>
                    <Icon>delete</Icon>
                </Button>
            </TableCell>
        </TableRow>
    )
}