import TaskCard from "./TaskCard";

const TaskList = ({ tasks, loading, fetchTasks }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          fetchTasks={fetchTasks}
        />
      ))}
    </div>
  );
};

export default TaskList;