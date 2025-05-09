import Publication from './publication.model.js';

export const createPublication = async (req, res) => {
    const data = req.body;
    try {
        const publication = await Publication.create(data);
        return res.status(201).json({
            message: 'Publication created successfully',
            publication,
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error creating publication',
            error: err.message,
        });
    }
}

export const getPublications = async (req, res) => {
    try {
        const publications = await Publication.find();
        return res.status(200).json({
            message: 'Publications retrieved successfully',
            publications,
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error retrieving publications',
            error: err.message,
        });
    }
}

export const getPublicationById = async (req, res) => {
    const { id } = req.params;
    try {
        const publication = await Publication.findById(id);
        if (!publication) {
            return res.status(404).json({
                message: 'Publication not found',
            });
        }
        return res.status(200).json({
            message: 'Publication retrieved successfully',
            publication,
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error retrieving publication',
            error: err.message,
        });
    }
}
export const updatePublication = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const publication = await Publication.findByIdAndUpdate(id, data, { new: true });
        if (!publication) {
            return res.status(404).json({
                message: 'Publication not found',
            });
        }
        return res.status(200).json({
            message: 'Publication updated successfully',
            publication,
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error updating publication',
            error: err.message,
        });
    }
}

export const deletePublication = async (req, res) => {
    const { id } = req.params;
    try {
        const publication = await Publication.findByIdAndDelete(id);
        if (!publication) {
            return res.status(404).json({
                message: 'Publication not found',
            });
        }
        return res.status(200).json({
            message: 'Publication deleted successfully',
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error deleting publication',
            error: err.message,
        });
    }
}