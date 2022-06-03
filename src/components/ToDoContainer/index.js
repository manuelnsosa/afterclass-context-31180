import { useState } from "react";

const ToDoContainer = () => {
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("");
  const [todos, setTodos] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { title, status, user }]);
    setTitle("");
    setStatus("");
  };

  return (
    <div className="flex items-start justify-center flex-row">
      <div className="flex justify-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12"
          onSubmit={onSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Do the dishes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user"
            >
              User
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user"
              type="text"
              placeholder="manuelnsosa"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select status</option>
              <option value="pending">Pending</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
      {todos.length > 0 && (
        <div className="flex items-center justify-center">
          <ul>
            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
              <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                          >
                            User
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                          >
                            Created at
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                          >
                            status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {todos.map((todo) => (
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <a href="#" className="block relative">
                                    <img
                                      alt="profil"
                                      src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png"
                                      className="mx-auto object-cover rounded-full h-10 w-10 "
                                    />
                                  </a>
                                </div>
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {todo.user}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {todo.title}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {todo.date}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">{todo.status}</span>
                              </span>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 rounded-full"
                                ></span>
                                <button
                                  class="px-4 py-2  text-base rounded-full text-red-600 border border-red-600 bg-red-200 "
                                  onClick={() => alert("remove button clicked")}
                                >
                                  Remove
                                </button>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToDoContainer;
