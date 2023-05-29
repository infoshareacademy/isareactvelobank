// Uzupełnij testy

import getStudentNames, { validateStudent } from './getStudentNames';
import { students } from '../fixtures/selectors-data';

describe('getStudentNames', () => {
  test('should map students names', () => {
    const studentsName = getStudentNames(students);
    expect(studentsName).toEqual(['Jacek', 'Ewa', 'Zygmunt'])
  });
});

describe('validateStudent', () => {
    test('should be valid, when name contains only letters and start with uppercase', () => {
        expect(validateStudent({ name: 'Onlyletters' })).toBe(true);
    });

    test('should be valid, when name is Marcin', () => {
        expect(validateStudent({ name: 'Marcin' })).toBeTruthy();
    });

    test('should be invalid, when name contains spaces', () => {
        expect(validateStudent({ name: 'M a r c i n' })).toBeFalsy();
    });

    test('should be invalid, when name contains numbers', () => {
        expect(validateStudent({ name: 'Marcin88' })).toBe(false);
    });

    test('should invalid, when name is written with big letters', () => {
        expect(validateStudent({ name: 'MARCIN' })).toBe(false);
    });
});
