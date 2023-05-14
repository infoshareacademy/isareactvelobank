/**

Ćwiczenie 3

Ćwiczenie:
  Uzupełnij treść poniższych funkcji wraz z ich typowaniem.
*/
var peoples = [
    {
        name: 'Jan',
        type: 'user',
        languages: ['php', 'js']
    },
    {
        name: 'Marek',
        type: 'admin',
        role: 'security'
    },
];
function isUser(person) {
    return person.type === 'user';
}
function isAdmin(person) {
    return person.type === 'admin';
}
function showIntro(person) {
    var additionalInformation = '';
    if (isUser(person)) {
        additionalInformation = person.languages.join(',');
    }
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    console.log("".concat(person.name, " - ").concat(additionalInformation));
}
