"use client";
import React, { useEffect, useState } from "react";

const Learn = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("Hi");

  useEffect(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/users").then(
      async (data) => {
        const body = await data.json();
        setLoading(false)
        setUsers(body);
        console.log(body);
      },
    );
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {loading && (
        <div className="">
          <h2>Loading ...</h2>
        </div>
      )}
      {users.map((user, index) => (
        <div className="flex flex-col border-amber-300 border w-full p-4 roudned-xl">
          <span >{user.name}</span>
          <span className="text-sm opacity-60">
            {user.website} - {user.phone}
          </span>
        </div>
      ))}

    </div>
  );
};

export default Learn;
