const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.post('/create', todoController.createTodoList);
router.post('/add-task', todoController.addTask);
router.put('/edit-task/:id', todoController.editTask);
router.delete('/delete-task/:id', todoController.deleteTask);

module.exports = router;
