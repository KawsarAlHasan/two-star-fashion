import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../contex/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  };

  return (
    <div>
      <p className="text-red-600">Something went wrong!!!</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4 className="text-3xl">
        {" "}
        Please <button onClick={handleLogOut}>Sign out</button> and log back in
      </h4>
    </div>
  );
};

export default DisplayError;
