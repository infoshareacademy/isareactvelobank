import { useMutation, useQueryClient } from 'react-query';
import { Form, Field } from 'react-final-form'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BurgerData } from '../../../common/types';
import { addBurger } from '../../../services/burgers'

type Props = {
    handleClose: () => void,
    isOpen: boolean
}

const fields = ['name', 'ingredients', 'price', 'url'];

export const AddModal = ({ handleClose, isOpen }: Props) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation(async (burgerData: BurgerData) => {
        return addBurger(burgerData)
    }, {
        onSuccess: () => queryClient.invalidateQueries('burgers')
    })

    const onSubmit = async (data: BurgerData) => {
        await mutate(data);
        handleClose();
    }

    return (
        <Dialog onClose={handleClose} open={isOpen} fullWidth>
            <DialogTitle>Add new burger</DialogTitle>
            <Form onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', padding: 3}}
                    >
                        {fields.map((field) => (
                            <Field key={field} name={field}>
                                {({ input: { name, value, onChange}}) => (
                                    <TextField
                                        label={field}
                                        name={name}
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            </Field>
                        ))}
                        <Button type="submit">Add</Button>
                    </Box>
                )
                }
            </Form>
        </Dialog>
    )
}