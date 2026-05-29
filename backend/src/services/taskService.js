async function getAllTasks(userId) {
  const tasks = await Task.find({ userId });
  return tasks;
}