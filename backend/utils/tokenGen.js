import jwt from 'jsonwebtoken';

const tokenGen = (id, res) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('token', token, {
    maxAge: 30*24*60*60*1000, // 30 days
    httpOnly: true, // cookie cannot be accessed by client side js
    sameSite: 'strict' // cookie can only be sent in same site
  });
}

export default tokenGen;