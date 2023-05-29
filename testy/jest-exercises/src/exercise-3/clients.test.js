// Napisz testy dla filterClients i getLatestRegisteredClient

import { filterClients, getLatestRegisteredClient } from './clients';
import { clients } from '../fixtures/clients-data';

describe('filterClients', () => {
    test('should filter INTERNAL clients', () => {
        const internalClients = filterClients(clients, { type: 'INTERNAL' });
        expect(internalClients).toHaveLength(3);
        expect(internalClients).toMatchSnapshot();
    });

    test('should filter EXTERNAL clients', () => {
        const externalClients = filterClients(clients, { type: 'EXTERNAL' });
        expect(externalClients).toHaveLength(2);
        expect(externalClients).toMatchSnapshot();
    });

    test('should not filter when filter type is unknown', () => {
        const filteredClients = filterClients(clients, {});
        expect(filteredClients).toBe(clients);
    });
});

describe('getLatestRegisteredClient', () => {
    test('should return client with latest registered date', () => {
        expect(getLatestRegisteredClient(clients).name).toEqual('Andrzej')
    });

    test('should return first client when there are two clients with the same date', () => {
        expect(getLatestRegisteredClient([
            { id: 5, name: 'Pierwszy Andrzej', type: 'EXTERNAL', registered: new Date(2020, 10, 9) },
            ...clients
        ]).name).toBe('Pierwszy Andrzej')
    });
});