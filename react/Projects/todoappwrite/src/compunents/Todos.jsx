import { databases } from "../appwrite/appwriteConfig";

function TodoCard({contant,id}) {
  return (
    <div className="bg-white mt-5 border border-gray-200 rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition-all group">
      {/* Checkbox */}
      <input
        type="checkbox"
        className="w-6 h-6 accent-indigo-600 cursor-pointer"
      />

      {/* Todo Text */}
      <div className="flex-1">
        <p className="text-lg text-gray-800">
          {contant}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          ✏️
        </button>
        <button onClick={async ()=>{
            const fuckyou =  await databases.deleteDocument('69ac0b050008d1438a14', 'todos', id);
            if(fuckyou){
              window.location.reload();
            }
        }} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoCard;