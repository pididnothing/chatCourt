import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const genTokenandCookie = (id, res) => {
  const token = jwt.sign({id}, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });

  res.cookie('token', token, {
      maxAge: 30*24*60*60*1000, // 30 days
      httpOnly: true, // cookie cannot be accessed by client side js
      sameSite: 'strict', // cookie can only be sent in same site
      secure: process.env.NODE_ENV === 'production' // cookie can only be sent in https
    });
  
}

export default genTokenandCookie;