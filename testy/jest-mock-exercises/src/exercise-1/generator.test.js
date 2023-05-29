// Zrób mock funckji getRandomNumber by zawsze zwracał taka wartość jaką potrzebuijesz i napisz testy.
import { generateId } from './generator';

jest.mock('./math', () => ({
    getRandomNumber: jest.fn(() => 15)
}))

describe('generateId', () => {
    beforeEach(() => expect.hasAssertions())

    test('should generate id with given seed', () => {
        expect(generateId('velobank')).toBe('id_velobank-15')
    });

    test('should generate id with given empty seed', () => {
        expect(generateId('')).toBe('id_-15')
    });
});