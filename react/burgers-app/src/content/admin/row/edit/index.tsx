import { useMutation, useQueryClient } from 'react-query';
import { Form, Field } from 'react-final-form'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
import { Burger, BurgerData } from '../../../../common/types';
import { editBurger } from '../../../../services/burgers';

type Props = {
    burger: Burger, 
    cancelEditMode: () => void
}

const cellFields = ['name', 'ingredients', 'price'];

export const EditRow = ({ burger, cancelEditMode }: Props) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation((burgerData: BurgerData) => {
        return editBurger(burger.id, burgerData);
    }, {
        onSuccess: () => queryClient.invalidateQueries('burgers')
    })
    const { id, ...restBurger } = burger;

    const onSubmit = async (formData: BurgerData) => {
        await mutate(formData);
        cancelEditMode();
    }

    return (
        <Form onSubmit={onSubmit} initialValues={restBurger}>
            {({ handleSubmit }) => (
                <TableRow>
                    {cellFields.map((field) => (
                        <TableCell key={field}>
                            <Field name={field}>
                                {({ input: { name, value, onChange}}) => (
                                    <TextField
                                        size="small"
                                        label={field}
                                        name={name}
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            </Field>
                        </TableCell>
                    ))}
                    <TableCell>
                        <Button size='small' variant="contained" color="success" onClick={handleSubmit}>
                            <Icon>save</Icon>
                        </Button>
                    </TableCell>
                    <TableCell>
                        <Button size='small' variant="contained" color="secondary" onClick={cancelEditMode}>
                            <Icon>cancel</Icon>
                        </Button>
                    </TableCell>
                </TableRow>
            )}
        </Form>
    )
}
    