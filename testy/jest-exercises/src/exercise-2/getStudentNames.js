const getStudentNames = (students) => {
    return students.map(student => student.name);
};

export const validateStudent = (student) => {
    if (student.name.match(/^[A-Z][a-z]+$/)) {
        return true;
    } else {
        return false;
    }
}

export default getStudentNames;
