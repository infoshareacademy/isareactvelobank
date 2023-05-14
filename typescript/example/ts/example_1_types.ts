enum AccountType {
  STUDENT = 'student',
  PARENT = 'parent',
}
interface User {
  firstName: string,
  lastName: string,
  accountType: AccountType,
}

export {
  AccountType,
  User,
};
