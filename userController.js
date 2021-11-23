const User = require('./schemas/userSchema.js');

exports.getAll = async (req, res) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getOne = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({
                message: 'ID not specified',
            })
        }
        const user = await User.findById(id);//findOne
        console.log(id)
        return res.json(user)
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updateOne = async (req, res) => {
    try {
        const user = req.body.data;
        if (!user.id) {
            res.status(400).json({
                message: 'ID not specified',
            })
        }
        const updatedUser = await User.findOneAndUpdate(user.id, user.data, { new: true });
        return res.json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
};
