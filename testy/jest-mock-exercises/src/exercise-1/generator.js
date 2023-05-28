import { v4 } from 'uuid';
import { getRandomNumber } from './math'; 

/**
 * 
 * @param {string} seed 
 */
export const generateId = seed => {
    return `id_${seed}-${getRandomNumber()}`;
};

export const generateUuid = () => {
    return 'id_' + v4();
};