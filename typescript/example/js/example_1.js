import { user } from './example_1_data';

const showFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

showFullName(user.firstName, user.lastName);