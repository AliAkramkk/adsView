const jwt = require('jsonwebtoken');

const generateToken = (userId,role) =>{
    return jwt.sign({userId,role},process.env.JWT_SECRET,{expiresIn:"1d"});
};

const verifyToken = (req,res,next) =>{
    const token = req.headers.autherisation?.split(" ")[1];
    if(!token) return res.status(401).json({message: "Unauthorized"});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
      } catch (err) {
        res.status(403).json({ message: "Invalid or expired token" });
      }
    };

    module.exports = {generateToken,}