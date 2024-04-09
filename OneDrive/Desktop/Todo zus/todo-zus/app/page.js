"use client";
import { Trash2, Plus, FilePenLine, Check } from "lucide-react";
import { useState } from "react";
export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodoList([...todoList, newTask]);
      setInputValue("");
    }
  };
  const deleteTask = (id) => {
    const updateList = todoList.filter((task) => task.id !== id);
    setTodoList(updateList);
  };

  const toggleCompletion = (id) => {
    const updatedList = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTodoList(updatedList);
  };
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="border p-8 rounded-3xl w-[50%] ">
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Add task"
            className="bg-transparent py-3 px-4 border border-gray-600 rounded-full w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-blue-500 px-3 rounded-full py-1 hover:bg-blue-700"
            onClick={addTask}
          >
            <Plus />
          </button>
        </div>
        {todoList.map((task) => (
          <div className="mt-5" key={task.id}>
            <div className="bg-gray-600 pt-3 pb-2 px-4 rounded-full flex justify-between gap-3">
              <div className="flex gap-3">
                <Check
                  onClick={() => toggleCompletion(task.id)}
                  className={`border border-gray-200 p-1 rounded-full  ${
                    task.completed ? "bg-blue-500 border-blue-700" : ""
                  }`}
                />
                <p
                  className={`text-gray-200 ${
                    task.completed ? "line-through" : ""
                  }`}
                >
                  {task.text}
                </p>
              </div>

              <div className="flex gap-3  justify-center items-center border-l pl-3 border-gray-00">
                <button
                  className="bg-green-500 rounded-full p-1"
                  onClick={() => editTask(task.id)}
                >
                  <FilePenLine size={17} color="white" />
                </button>
                <button
                  className="bg-red-500 rounded-full p-1"
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash2 size={17} color="white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
