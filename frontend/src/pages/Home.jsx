import { useEffect, useState } from "react";
import API from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const fetchTasks = async (searchText = activeSearch, showInitialLoading = false) => {
    try {
      if (showInitialLoading) {
        setLoading(true);
      }

      const { data } = await API.get(
        `/tasks?search=${encodeURIComponent(searchText)}`
      );

      setTasks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSearch(search);
    }, 350);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    fetchTasks(activeSearch, !tasks.length);
  }, [activeSearch]);

  return (
    <main className="min-h-screen bg-[#f6f5f2] px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              Task Workspace
            </p>
            <h1 className="text-3xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              To-Do List
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                Total
              </p>
              <p className="mt-1 text-2xl font-semibold tabular-nums text-slate-950">
                {tasks.length}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                Done
              </p>
              <p className="mt-1 text-2xl font-semibold tabular-nums text-emerald-700">
                {tasks.filter((task) => task.status === "completed").length}
              </p>
            </div>
            <div className="col-span-2 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm sm:col-span-1">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                Open
              </p>
              <p className="mt-1 text-2xl font-semibold tabular-nums text-amber-700">
                {tasks.filter((task) => task.status === "pending").length}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-6">
          <SearchBar search={search} setSearch={setSearch} />

          <TaskForm fetchTasks={fetchTasks} />

          <TaskList
            tasks={tasks}
            loading={loading}
            fetchTasks={fetchTasks}
          />
        </section>
      </div>
    </main>
  );
};

export default Home;
