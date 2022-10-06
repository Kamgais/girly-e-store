const jwt = require("jsonwebtoken");


const verifyToken = (req,res,next) => {
 const cookies = req.cookies["access_token"];
 const token = cookies;
 console.log(token);
 //verify the token
 if(!token) {
 return res.status(404).json({message: 'No token found'})
 }

 jwt.verify(String(token),process.env.JWT, (err,decoded) => {
 if(err) {
    console.log(err)
  return res.status(400).json({message: ' invalid token'})
 }
  console.log(decoded);
  req.id = decoded.id;
  req.isAdmin = decoded.isAdmin;
 })
 next();
}





exports.verifyToken = verifyToken;
