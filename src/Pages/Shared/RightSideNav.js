import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Online from "./Online";

const RightSideNav = () => {
  const { user } = useContext(AuthContext);
  const [dbUser, setDbUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setDbUser(data);
      });
  }, []);
  // console.log(dbUser);
  const userMatch = [...dbUser]?.find((x) => x.email === user?.email);
  // console.log(userMatch);

  return (
    <div>
      <h1 className="text-xl font-bold pb-2">People You may know</h1>
      <div className="block ">
        {dbUser?.map((user) => (
          <Online user={user} key={user._id}></Online>
        ))}
      </div>
    </div>
  );
};

export default RightSideNav;
