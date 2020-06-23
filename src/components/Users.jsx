import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return users.map((user, id) => {
    return (
      <Fragment key={id}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card my-3">
                <div className="card-body">
                  <h2>{user.name}</h2>
                  <Link to={`/${user.id}/details`} className="btn btn-primary ">
                    Click for more info!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  });
};

export default Users;
