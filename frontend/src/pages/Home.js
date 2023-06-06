import React from "react";
import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";

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
      <div className="main-card">
        {console.log(users)}
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
      <UserForm />
    </div>
  );
};

export default Home;
