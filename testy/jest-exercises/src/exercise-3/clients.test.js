// Napisz testy dla filterClients i getLatestRegisteredClient

import { filterClients, getLatestRegisteredClient } from './clients';
import { clients } from '../fixtures/clients-data';

describe('filterClients', () => {
    test('should filter INTERNAL clients', () => {

    });

    test('should filter EXTERNAL clients', () => {

    });

    test('should not filter when filter type is unknown', () => {

    });
});

describe('getLatestRegisteredClient', () => {
    test('should return client with latest registered date', () => {

    });

    test('should return first client when there are two clients with the same date', () => {

    });
});