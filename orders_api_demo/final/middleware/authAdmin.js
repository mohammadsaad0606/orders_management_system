const User = require('../models/User')
// const jwt = require('jsonwebtoken')

const isAdmin = (req, res, next) => {
    // console.log('User:', req.user);
    
    if (req.user && req.user.role ==='admin'){
        return next();
    }

    return res.status(403).json({message: 'Access Denied'});
};

module.exports = isAdmin