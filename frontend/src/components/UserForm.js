import React from "react";

const UserForm = () => {
  return (
    <div className="user-form">
      <form>
        <h1> User Registration</h1>
        <label>
          Username :
          <input type="text" />
        </label>
        <label>
          Password :
          <input type="password" />
        </label>
        <label>
          Image :
          <input type="file" />
        </label>
        <label>
          Address :
          <textarea
            style={{
              height: "100px",
              fontSize: "14pt",
            }}
          ></textarea>
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};

export default UserForm;
