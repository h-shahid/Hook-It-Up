import React, { Fragment, useState, useEffect } from "react";

const UserID = (props) => {
  const { match } = props;
  let { id } = match.params;
  const [user, setUser] = useState({});
  const getUser = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let user = await res.json();
    setUser(user);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <h3>{user.name}</h3>
          <h6>{user.username}</h6>
          <h6>
            {user.address && (
              <p>
                {user.address.street}, {user.address.suite}, {user.address.city}
                ,{user.address.zipcode}{" "}
              </p>
            )}
          </h6>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default UserID;
