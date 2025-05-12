import User from './user.model.js';

export const currentUser = async (req, res) => {
    try {
        const userID = "68211c812215f1510b6e6ca4";
        const user = await User.findById(userID);

        if (!user) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({
            message: "Error retrieving user.",
            error: err.message
        });
    }
};
