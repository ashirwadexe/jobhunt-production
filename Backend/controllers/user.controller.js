//controllers are used to write the business logics
import { User} from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//REGISTRATION LOGIC
export const register = async (req, res) => {
    try {
        const {fullname, email, password, phoneNumber, role} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing !",
                success: false
            });
        }

        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({
                message: "User already exist !!!",
                status: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role
        });

        return res.status(200).json({
            message: " Account created successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

//USER LOGIN LOGIC
export const login = async (req, res) => {
    try {
        const {email, password, role} = req.body;
        if(!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({
                message: "Incorrect email",
                success: false
            });
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if(!isPasswordMatched) {
            return res.status(400).json({
                message: "Incorrect password",
                success: false
            })
        }

        if(role !== user.role) {
            return res.status(400).json({
                message: "Incorrect role",
                success: false
            });
        }

        //generating tokens
        const tokenData = {
            userId: user._id
        }

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn: '1d'});

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpsOnly: true, sameSite: 'strict'}).json({
            message: `Welcome back ${user.fullname}`,
            success: true,
            user
        })
    } catch (error) {
        console.log(error);
    }
}

//USER LOGOUT LOGIC
export const logout = async (req, res) => {
    try {
        return res.status(201).cookie("token", "", {maxAge: 0}).json({
            message: "Logged out Successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}

//USER PROFILE UPDATE LOGIC
export const profileUpdate = async (req, res) => {
    try {
        const {fullname, email, phoneNumber, bio, skills} = req.body;

        let skillsArray;
        if(skills) {
            skillsArray = skills.split(",");
        }
        const userId = req.id; //middleware authentication
        let user = await User.findById(userId);

        if(!user) {
            return res.status(400).json({
                message: "User already exist !!!",
                status: false
            });
        }

        //updating data
        if(fullname) user.fullname = fullname;
        if(email) user.email = email;
        if(phoneNumber) user.phoneNumber = phoneNumber;
        if(bio) user.profile.bio = bio;
        if(skillsArray) user.profile.skills = skillsArray;

        //resume comes later here

        await user.save();

        //updated user data
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message: "Profile Updates Successfully",
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}