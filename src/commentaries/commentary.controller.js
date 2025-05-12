import Comment from './commentary.model.js';

export const createCommentary = async (req, res) => {
    const data = req.body;
    try {
        const commentary = await Comment.create(data);
        return res.status(201).json({
            message: "Commentary created successfully",
            commentary,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error creating commentary",
            error: err.message,
        });
    }
}

export const getCommentaries = async (req, res) => {
    try {
        const commentaries = await Comment.find()
            .populate("author", "username")
            .sort({ dateOfComment: -1 });

        return res.status(200).json({
            message: "Commentaries retrieved successfully",
            commentaries,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error retrieving commentaries",
            error: err.message,
        });
    }
};

export const updateCommentary = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const commentary = await Comment.findByIdAndUpdate(id, data, { new: true });
        if (!commentary) {
            return res.status(404).json({
                message: 'Commentary not found',
            });
        }
        return res.status(200).json({
            message: 'Commentary updated successfully',
            commentary,
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'Error updating commentary',
            error: err.message,
        });
    }
}

export const deleteCommentary = async (req, res) => {
    const { id } = req.params;
    try {
        const commentary = await Comment.findByIdAndDelete(id);
        if (!commentary) {
            return res.status(404).json({
                message: 'Commentary not found',
            });
        }
        return res.status(200).json({
            message: 'Commentary deleted successfully',
            commentary,
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error deleting commentary',
            error: err.message,
        });
    }
}