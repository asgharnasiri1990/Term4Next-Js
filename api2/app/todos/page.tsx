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
      completed: true
    };

    // fetching api for POSTing a new data
    fetch("https://practice.amirm.me/todos", {
      method: "POST",
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

  // fetching api for Deleteing a new data
  const handleDelete = () => {
    fetch("https://practice.amirm.me/todos/34", {
      method: "DELETE",
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
    });
  };

  //   UseEffect Part
  useEffect(() => {
    fetch("https://practice.amirm.me/todos").then(
      async (data) => {
        const body = await data.json();

        setLoading(false);
        setTodos(body.data);

      }
    );
  }, []);

  // Body
  return (
    <div className="flex flex-col justify-center items-center gap-4 p10">

      <div className="flex gap-2 p-10">

        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Enter your data"
          className="border w-100 h-10 rounded p-2"
        />

        <button className="rounded font-semibold text-white/90 bg-green-400 hover:bg-green-500 transition-colors duration-300 h-10 w-20 cursor-pointer"
          onClick={handleClick}
        >
          POST
        </button>

        <button className="rounded font-semibold bg-red-300 hover:bg-red-700 transition-colors hover:rotate-180 duration-300 h-10 w-20 cursor-pointer"
          onClick={handleDelete}
        >
          DELETE
        </button>

      </div>

      {loading && (
        <div className="flex flex-col  gap-5 justify-center items-center p-10">
          <div className="w-15 h-15 border-4 border-gray-300 border-t-blue-500  rounded-full animate-spin"></div>
          <span>  LOADING ...</span>
        </div>
      )}

      <div className="grid  grid-cols-5 gap-2 bg-gray-400 p-2 rounded-2xl">
        {todos.map((todo, index) => (
          <div
            key={todo.id}
            className="flex flex-col items-center bg-gray-100 gap-2 w-60 justify-center p-2 border-amber-300 border  rounded-xl"
          >
            <span>Id:{todo.id}</span>
            <span>{todo.title}</span>

            <span>{todo.completed}</span>

            <span className="text-sm opacity-60">
              created: {index} {todo.created_at}
            </span>
            <span
              className="text-sm opacity-60">
              Updated: {todo.updated_at}

            </span>
          </div>

        ))}
      </div>
    </div>
  );
};

export default page;