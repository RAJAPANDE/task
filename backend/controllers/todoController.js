const firebase = require('firebase-admin');
const db = firebase.firestore();

exports.createTodoList = async (req, res) => {
  const { userId, name } = req.body;
  try {
    const docRef = await db.collection('todoLists').add({
      userId,
      name,
      createdAt: new Date(),
    });
    res.status(201).send({ id: docRef.id });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.addTask = async (req, res) => {
  const { listId, title, description, dueDate, priority } = req.body;
  try {
    const docRef = await db.collection('todoLists').doc(listId).collection('tasks').add({
      title,
      description,
      dueDate,
      priority,
      createdAt: new Date(),
    });
    res.status(201).send({ id: docRef.id });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.editTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, priority } = req.body;
  try {
    await db.collectionGroup('tasks').doc(id).update({
      title,
      description,
      dueDate,
      priority,
      updatedAt: new Date(),
    });
    res.status(200).send('Task updated');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await db.collectionGroup('tasks').doc(id).delete();
    res.status(200).send('Task deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
