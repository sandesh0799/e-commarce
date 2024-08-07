
const express = require('express');
const AsyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../utility/tokenGenerate');
const protect = require('../middleware/Auth');

const userRoute = express.Router();

userRoute.post('/login', AsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists and if the password matches
    if (user && await user.matchPassword(password)) {
        res.json({
            _id: user.id,
            name: user.name,
            isAdmin: user.isAdmin,
            token: generateToken(user._id), // Generate and include the token
            createdAt: user.createdAt
        });
    } else {
        res.status(401); // Unauthorized status code
        throw new Error("Invalid Email or Password");
    }
}));

// register user

userRoute.post('/register', AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // Find the user by email
    const existsuser = await User.findOne({ email });
    // Check if the user exists
    if (existsuser) {
        res.status(400);
        throw new Error("User Already exist");
    } else {
        const user = await User.create({ name, email, password });
        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt
            })
        } else {
            res.status(400);
            throw new Error("Invalid User Data")
        }
    }
}));

//get auth profile data
userRoute.get("/profile", protect, AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,
        });
    } else {
        res.status(404);
        throw new Error("USER NOT FOUND");
    }
})
);

//user profile update
userRoute.put(
    "/profile",
    protect,
    AsyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id);
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password
            }
            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
                createdAt: updatedUser.createdAt,
                token: generateToekn(updatedUser._id)
            });

        } else {
            res.status(404);
            throw new Error("USER NOT FOUND");
        }
    })
);


module.exports = userRoute;
