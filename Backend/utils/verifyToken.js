const jwt = require("jsonwebtoken");


const verifyToken = (req,res,next) => {
 const cookies = req.headers.cookie;
 const token = cookies.split('=')[1];
 console.log(token);
 //verify the token
 if(!token) {
 return res.status(404).json({message: 'No token found'})
 }

 jwt.verify(String(token),process.env.JWT, (err,decoded) => {
 if(err) {
  return res.status(400).json({message: ' invalid token'})
 }
  console.log(decoded);
  req.id = decoded.id;
  req.isAdmin = decoded.isAdmin;
 })
 next();
}


const refreshToken = (req, res,next) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split('=')[1];
    if(!prevToken) {
      return res.status(200).json({message: "coudldn't find token"})
    }
    jwt.verify(String(prevToken), process.env.JWT, (err,decoded) => {
        if(err) {
            console.log(err);
            return res.status(403).json({message : ' Authentification failed'})
        }
        res.clearCookie('access_token');
        req.cookies['access_token'] = '';
        const token = jwt.sign({id: decoded.id, isAdmin: decoded.isAdmin}, process.env.JWT, {
            expiresIn: '30s'
        })

        res.cookie('access_token', token, {
            path: '/',
            expires: new Date(Date.now() + 1000 * 3),
        httpOnly: true,
        sameSite: 'lax'        
    });

     req.id = decoded.id;
     req.isAdmin = decoded.isAdmin;
     
    })
    next()
}


exports.verifyToken = verifyToken;
exports.refreshToken = refreshToken;