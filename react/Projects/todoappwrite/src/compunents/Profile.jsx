import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoCard from "./Todos";
import { getTodos } from "../appwrite/fileAppwrite";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const loadProfile = async () => {
      try {
        setLoading(true);

        // Safely get user (this is the line causing 401)
        const currentUser = await account.get();
        
        if (!isMounted) return;

        setUser(currentUser);

        // Only fetch todos if user is logged in
        const response = await getTodos();
        if (isMounted) {
          setTodos(response.documents || []);
        }

      } catch (error) {
        console.error("Profile error:", error.message);
        
        // Only redirect on real auth error, don't spam console
        if (error.code === 401 || error.message?.includes("missing scopes")) {
          if (isMounted) {
            navigate("/");
          }
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProfile();

    // Cleanup to prevent memory leak / double calls
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error)
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center w-full max-w-md">
          <div className="animate-spin w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-500">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      {/* Profile Info Card */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-indigo-600 text-white text-5xl font-bold flex items-center justify-center rounded-full mb-4">
            {user?.name ? user.name[0].toUpperCase() : "U"}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {user?.name || "User"}
          </h2>
          <p className="text-gray-500 mt-1">{user?.email}</p>
        </div>

        {/* Dynamic Stats */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">{todos.length}</div>
            <div className="text-sm text-gray-500 mt-1">Total Todos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">
              {todos.filter(t => t.completed === true).length}
            </div>
            <div className="text-sm text-gray-500 mt-1">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">
              {todos.filter(t => t.completed !== true).length}
            </div>
            <div className="text-sm text-gray-500 mt-1">Pending</div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl transition-all"
        >
          Logout
        </button>
      </div>

      {/* Todos Section */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h3 className="text-xl font-semibold mb-6">My Todos</h3>

        <TodoForm />

        <div className="mt-8 space-y-4 min-h-50">
          {todos && 
            todos.map((todo) => (
              <TodoCard
                key={todo.$id}
                id={todo.$id}
                contant={todo.contant}
                completed={!!todo.completed}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Profile;