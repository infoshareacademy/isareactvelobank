const baseUrl = 'http://localhost:3004';

export const getClients = () => {
  fetch(`${baseUrl}/clients`).then((res) => res.json());
};
