"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [todos, setTodos] = useState<todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [inputData, setInputData] = useState("")

  type todo = {
    id: number;
    title: string;
    completed: string;
    created_at: string;
    updated_at: string;
  };

  const handleClick = () => {
    const data = {
      title: inputData,
    };

    fetch("https://practice.amirm.me/todos/27", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      const data = await res.json();

      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === 1
            ? { ...todo, title: inputData }
            : todo
        )
      );
    });
  };

  const handleDelete = () => {
    fetch("https://practice.amirm.me/todos/16", {
      method: "DELETE",
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
    });
  };

  useEffect(() => {
    fetch("https://practice.amirm.me/todos").then(
      async (data) => {
        const body = await data.json();

        setLoading(false);
        setTodos(body.data);

      }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 p10">

      <div className="flex gap-2 p-10">

        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="enter your name"
          className="border w-100 h-10 rounded p-2"
        />

        <button className="rounded font-semibold text-white/90 bg-green-400 h-10 w-20 cursor-pointer"
          onClick={handleClick}
        >
          Send
        </button>

        <button className="rounded font-semibold bg-red-500 h-10 w-20 cursor-pointer"
          onClick={handleDelete}
        >
          DELETE
        </button>

      </div>

      {loading && (
        <div className="flex flex-col  gap-5 justify-center items-center p-10">
          <div className="w-15 h-15 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <span>  LOADING ...</span>
        </div>
      )}

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex flex-col items-center gap-2 w-150 justify-center p-5 border-amber-300 border text-2xl rounded-xl"
        >
          <span>{todo.title}</span>
          <span>{todo.completed}</span>

          <span className="text-sm opacity-60">
            {todo.created_at}
          </span>
          <span
            className="text-sm opacity-60">
            {todo.updated_at}

          </span>
        </div>
      ))}
    </div>
  );
};

export default page;