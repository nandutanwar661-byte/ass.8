import { useState } from "react";
import {
  FaCheckCircle,
  FaEdit,
  FaRegClock,
  FaSave,
  FaTrash,
} from "react-icons/fa";
import API from "../services/api";

const TaskCard = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  // Delete Task
  const deleteHandler = async () => {
    try {
      await API.delete(`/tasks/${task._id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // Update Status
  const statusHandler = async () => {
    try {
      await API.patch(`/tasks/${task._id}/status`, {
        status: task.status === "pending" ? "completed" : "pending",
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // Update Task
  const updateHandler = async () => {
    try {
      await API.put(`/tasks/${task._id}`, {
        title,
        description,
      });

      setIsEditing(false);

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const isCompleted = task.status === "completed";

  return (
    <article className="group flex min-h-64 flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-200 hover:border-slate-300">
      <div className="mb-4 flex min-h-32 items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {isEditing ? (
            <div className="space-y-3">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm font-semibold text-slate-950 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              />

              <textarea
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="h-20 w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              />
            </div>
          ) : (
            <>
              <h2 className="mb-2 break-words text-lg font-semibold leading-snug text-slate-950">
                {task.title}
              </h2>

              <p className="break-words text-sm leading-6 text-slate-600">
                {task.description || "No description"}
              </p>
            </>
          )}
        </div>

        <span
          className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
            isCompleted
              ? "bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
              : "bg-amber-500 shadow-[0_0_0_4px_rgba(245,158,11,0.14)]"
          }`}
        />
      </div>

      <div className="mb-5 flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${
            isCompleted
              ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
              : "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
          }`}
        >
          {task.status}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
          <FaRegClock className="text-[11px]" />
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-4">
        <button
          onClick={statusHandler}
          className={`inline-flex h-10 min-w-36 items-center justify-center gap-2 rounded-lg px-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-4 ${
            isCompleted
              ? "bg-amber-50 text-amber-700 hover:bg-amber-100 focus:ring-amber-100"
              : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 focus:ring-emerald-100"
          }`}
        >
          <FaCheckCircle className="text-xs" />

          {isCompleted
            ? "Mark Pending"
            : "Mark Complete"}
        </button>

        {isEditing ? (
          <button
            onClick={updateHandler}
            className="inline-flex h-10 min-w-24 items-center justify-center gap-2 rounded-lg bg-teal-700 px-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-100"
          >
            <FaSave className="text-xs" />
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex h-10 min-w-24 items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-100"
          >
            <FaEdit className="text-xs" />
            Edit
          </button>
        )}

        <button
          onClick={deleteHandler}
          className="inline-flex h-10 min-w-24 items-center justify-center gap-2 rounded-lg bg-rose-50 px-3 text-sm font-semibold text-rose-700 transition-colors hover:bg-rose-100 focus:outline-none focus:ring-4 focus:ring-rose-100"
        >
          <FaTrash className="text-xs" />
          Delete
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
