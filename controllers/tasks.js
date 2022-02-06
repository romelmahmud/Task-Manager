const Task = require("../models/Tasks");

const getAllTasks = (req, res) => {
  res.status(200).send("Get all Tasks");
};

const creatTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
const getTask = (req, res) => {
  res.status(200).send("Get Task");
};
const updateTask = (req, res) => {
  res.status(200).send("Update Task");
};
const deleteTask = (req, res) => {
  res.status(200).send("Delete Task");
};

module.exports = {
  getAllTasks,
  creatTasks,
  getTask,
  updateTask,
  deleteTask,
};
