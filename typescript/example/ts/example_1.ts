import { user } from './example_1_data';

const showFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

showFullName(user.firstName, user.lastName);
