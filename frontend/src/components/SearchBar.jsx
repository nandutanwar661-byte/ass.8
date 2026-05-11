import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative mb-5">
      <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-slate-400">
        <FaSearch />
      </span>
      <input
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-100"
      />
    </div>
  );
};

export default SearchBar;
