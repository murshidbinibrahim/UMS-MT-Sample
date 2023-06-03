import React from "react";

const UsersCard = ({ user }) => {
  return (
    <div className="user-card">
      <h1>Username : {user?.username}</h1>
      <h2>Address : {user?.address}</h2>
      <img
        alt="Image"
        src={`http://localhost:9000/uploads/${user?.image}`}
        width="500px"
      />
      <h3>CreatedAt : {user?.createdAt}</h3>
    </div>
  );
};

export default UsersCard;
