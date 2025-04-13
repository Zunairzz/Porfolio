const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const {Constants} = require("../util/Constants");

router.post(Constants.ADD_PROJECT_URL, projectController.addProject);
router.get(Constants.GET_PROJECTS_URL, projectController.getAllProjects);

module.exports = router;