const user = [
    {
        "email": "node@gmail.com",
        "password": "123456",
    },
    {
        "email": "react@gmail.com",
        "password": "12345678",
    },
];

function Auth(req, res, next) {
    const { email, password } = req.body;
        for(let i=0; i<user.length; i++) {
            if(user[i].email == email && user[i].password == password) {
                return next();
            }
        }
        res.send('Invalid credentials');
}

module.exports = Auth;
