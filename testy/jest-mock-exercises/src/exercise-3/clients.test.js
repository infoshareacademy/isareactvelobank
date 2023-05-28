// Zammockuj getClients i napisz testy!

import { filterClients, getLatestRegisteredClient } from './clients';
import { getClients } from './clients-data';
import { logger } from './logger';
import data from '../../data/db.json'

describe('filterClients', () => {
  test('should filter only INTERNAL clients for INTERNAL type', async () => {

  });

  test('should return empty clients when empty list fetched', async () => {

  });

  test('should return empty list when fetching clients failed', async () => {

  });

  test('should log error when fetching clients failed', async () => {

  });

  test('should not log error when fetching clients successful', async () => {

  });
});
