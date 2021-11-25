const User = require('./schemas/userSchema.js');
const LIMIT_SHOW_USERS = 6;
const DEFAULT_ACTIVE_PAGE = 1;
const DEFAULT_LIMIT_SHOW_USERS = 1;

exports.getAll = async (req, res) => {
    try {
        const options = {
            page: +(req.query.page) || DEFAULT_ACTIVE_PAGE,
            limit: LIMIT_SHOW_USERS || DEFAULT_LIMIT_SHOW_USERS,
            customLabels:{
                "docs": "data",
                "totalPages": "total_pages",
            }
        };
        const users = await User.paginate({},options);
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
        const user = await User.findOne({_id:id});
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
        const updatedUser = await User.findOneAndUpdate({_id:user.id}, user.data, { new: true });
        return res.json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
};
