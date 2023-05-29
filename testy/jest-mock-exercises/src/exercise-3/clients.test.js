// Zammockuj getClients i napisz testy!

import { filterClients, getLatestRegisteredClient } from './clients';
import { getClients } from './clients-data';
import { logger } from './logger';
import data from '../../data/db.json'

jest.mock('./clients-data',() => ({
    getClients: jest.fn()
}));

jest.mock('./logger', () => ({
    logger: {
        error: jest.fn()
    }
}))

describe('filterClients', () => {
    afterEach(() => {
        jest.resetAllMocks()
    })

  test('should filter only INTERNAL clients for INTERNAL type', async () => {
    getClients.mockReturnValue(data.clients);
    
    const filteredClients = await filterClients({ type: 'INTERNAL'});
    
    expect(filteredClients).toMatchSnapshot();
  });

  test('should return empty clients when empty list fetched', async () => {
    getClients.mockReturnValue(Promise.resolve([]));
    
    const filteredClients = await filterClients({ type: 'INTERNAL'});
    
    expect(filteredClients).toHaveLength(0);
  });

  test('should return empty list when fetching clients failed', async () => {
    getClients.mockReturnValue(Promise.reject(Error('Failed to fetch')));
    
    const filteredClients = await filterClients({ type: 'INTERNAL'});
   
    expect(filteredClients).toHaveLength(0);
  });

  test('should log error when fetching clients failed', async () => {
    const error = Error('Failed to fetch');
    getClients.mockReturnValue(Promise.reject(error));
    
    await filterClients({ type: 'INTERNAL'});
    
    expect(logger.error).toHaveBeenCalledWith('fetching clients failed!', error);
  });

  test('should not log error when fetching clients successful', async () => {
    getClients.mockReturnValue(Promise.resolve([]));
    
    await filterClients({ type: 'INTERNAL'});
    
    expect(logger.error).not.toHaveBeenCalled();
  });
});
