const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

// Apply the auth middleware to all task routes
router.use(authMiddleware);

// GET /api/tasks
router.get('/', getTasks);

// POST /api/tasks
router.post('/', createTask);

// PUT /api/tasks/:id
router.put('/:id', updateTask);

// DELETE /api/tasks/:id
router.delete('/:id', deleteTask);

module.exports = router;
