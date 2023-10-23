const bcrypt = require('bcrypt');

// Your hashing function
function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
}

// Log the hashed password
const hashedPassword = hashPassword('test');
console.log('Hashed Password:', hashedPassword);