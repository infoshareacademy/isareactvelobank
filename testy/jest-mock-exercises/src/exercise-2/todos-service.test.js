// Zrób mock funckji postTask byś móc sprawdzić czy została ona wywołana i napisz testy.

import { addTodo } from './todos-service';
import { postTask } from './server';

jest.mock('./server', () => ({
    postTask: jest.fn()
}))

describe('Todo service', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

    test('should return success for valid task', () => {
        expect(addTodo('zrob obiad')).toEqual({ success: true })
    });

    test('should post task for valid task', () => {
        addTodo('posprzataj pokoj');
        expect(postTask).toHaveBeenCalledWith('posprzataj pokoj');
    });

    test('should return error for invalid task', () => {
        expect(addTodo(null)).toEqual({ error: 'Given task is not valid' })
    });
})
