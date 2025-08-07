const jwt = require('jsonwebtoken'); 
const secreatKey = "Anubhav@123$"

function setUser(user){

   
return jwt.sign({
    _id : user._id,
    email : user.email,
    role: user.role,
},secreatKey);


}

function getUser(token){
    if (!token) return null;
    return jwt.verify(token, secreatKey);
}


module.exports = {
    setUser,
    getUser,
}