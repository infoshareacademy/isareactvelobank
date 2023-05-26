import { useState } from 'react';
import { Burger } from '../../../common/types';
import { EditRow } from './edit';
import { ViewRow } from './view';

type Props = { 
    burger: Burger 
}

export const Row = ({ burger }: Props) => {
    const [isEditing, setIsEditing] = useState(false);

    const enterEditMode = () => {
        setIsEditing(true);
    }

    const cancelEditMode = () => {
        setIsEditing(false);
    }

    if (isEditing) {
        return <EditRow burger={burger} cancelEditMode={cancelEditMode} />
    }

    return <ViewRow burger={burger} enterEditMode={enterEditMode} />
}