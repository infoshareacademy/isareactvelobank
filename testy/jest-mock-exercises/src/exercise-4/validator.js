export const validateStudent = (student) => {
  return fetch('/students/validate', {
    method: 'POST',
    body: JSON.stringify(student),
  })
    .then((res) => res.json())
    .then((obj) => obj.isValid);
};
