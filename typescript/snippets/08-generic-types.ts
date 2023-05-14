interface Get<T> {
  status: number,
  data: T,
}

interface User {
  name: string,
  surname: string,
};



function fetchUsers(): Get<User[]> {
  const users: User[] = [
    {
      name: 'Jan',
      surname: 'Nowak',
    },
  ];
  return {
    status: 200,
    data: users,
  };
}

const fetchedUsers = fetchUsers();
// fetchedUsers.status
// fetchedUsers.data