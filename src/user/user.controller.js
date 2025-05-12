import User from './user.model.js';

export const currentUser = async (req, res) => {
    try {
        const userID = "68214c4c4f20f152c62ebe0b";
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
