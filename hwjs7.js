var arr = [
    {userName: "Test", lastName: "Test", email: "test.test@gmail.com"},
    {userName: "Dmitro", lastName: "Porohov", email: "dmitro.porohov@yahoo.com"},
    {userName: "Andrii", lastName: "", email: "andrii@mail.ru"}
];

var trustedEmails = arr
    .map(obj => obj.email)
    .filter(email => /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z]+\.(gmail|yahoo)\.com$/.test(email)); // Фільтруємо

console.log(trustedEmails);
