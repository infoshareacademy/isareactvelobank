import { useState } from "react";
import Fab from "@mui/material/Fab"
import Icon from "@mui/material/Icon"
import { AddModal } from './main';

export const AddModalButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleOpen = () => {
        setIsOpen(true);
    }

    return (
        <>
            <Fab color="primary" onClick={handleOpen}>
                <Icon>add</Icon>
            </Fab>
            <AddModal isOpen={isOpen} handleClose={handleClose} />
        </>

    )
}