import User from "./schemas/userSchema.js";

class UserController {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            return res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getUser(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({
                    message: 'ID not specified',
                })
            }
            const user = await User.findById(id);
            return res.json(user)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateUser(req, res) {
        try {
            const user = req.body
            if (!user.id) {
                res.status(400).json({
                    message: 'ID not specified',
                })
            }
            const updatedUser = await User.findByIdAndUpdate(user, { new: true })
            return res.json(updatedUser)
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default UserController;