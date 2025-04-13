const Project = require("../models/Project");
const projectController = {
    async addProject(req, res) {
        try {
            console.log("Add project request")
            const {title, description, technologies, githubUrl, image} = req.body;

            // Basic validation
            if (!title || !description || !githubUrl || !technologies.length) {
                return res.status(400).json({error: "Missing required fields"});
            }

            const project = new Project({
                title,
                description,
                technologies,
                githubUrl,
                image, // Save image URL
            });

            await project.save();
            res.status(201).json(project);
        } catch (err) {
            res.status(400).json({error: err.message});
        }
    },

    async getAllProjects(req, res) {
        try {
            const projects = await Project.find();
            res.json(projects);
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    }
}

module.exports = projectController;