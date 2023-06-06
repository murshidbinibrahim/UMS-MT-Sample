import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h4>{user?.username}</h4>
      <p>{user?.address}</p>
      <img
        alt="Image"
        src={`http://localhost:9000/uploads/${user?.image}`}
        width="150px"
      />
      <p>{user?.createdAt}</p>
      <span></span>
    </div>
  );
};

export default UserCard;
