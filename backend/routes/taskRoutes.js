const express = require("express");

const {
  getTasks,
  createTask,
  updateTask,
  updateStatus,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.patch("/:id/status", updateStatus);
router.delete("/:id", deleteTask);

module.exports = router;