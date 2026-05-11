import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import API from "../services/api";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", {
        title,
        description,
      });

      setTitle("");
      setDescription("");

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mb-6 grid gap-3 border-b border-slate-200 pb-6 lg:grid-cols-[1fr_1.5fr_auto]"
    >
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
      />

      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
      />

      <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100">
        <FaPlus className="text-xs" />
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
