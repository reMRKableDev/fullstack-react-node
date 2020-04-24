import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((resultsFromServer) => {
        setUsers(resultsFromServer.data);
      })
      .catch((error) =>
        console.error(
          `Something went wrong when component mounted: ${error.stack} `
        )
      );
  }, []);

  const showUsers = users.map((user) => (
    <article key={user.id}>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </article>
  ));

  return (
    <div className="container">
      <h1>Users</h1>
      {users && users.length ? showUsers : <span>Loading data...</span>}
    </div>
  );
};

export default User;
