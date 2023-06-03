import React from "react";
import { useState, useEffect } from "react";
import UsersCard from "../components/UsersCard";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch("http://localhost:9000/api/users/");
      const json = await data.json();

      console.log("useEffect");

      if (data.ok) {
        setUsers(json);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="home">
      {console.log(users)}
      {users.map((user) => (
        <UsersCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Home;
